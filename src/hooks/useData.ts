import { useEffect, useState } from "react";
import clientApi from "../services/client-api";
import { CanceledError } from "axios";
interface FetchData<T> {
    count: number,
    results: T[]
  }
const useData = <T> (endpoint:string)=> {
    const controller = new AbortController();
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      setIsLoading(true)
      clientApi.get<FetchData<T>>(endpoint)
        .then((res) => {
            setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message); setIsLoading(false);
        });
      return () => controller.abort();
    }, [])
  
    return { data, error ,isLoading};
  }
  
  export default useData