import axios, { AxiosRequestConfig } from "axios";

export interface FetchData<T> {
  count: number;
  // we put next as rawg return in response next for using in pagination or infinite query
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "c542e67aec3a4340908f9de9e86038af" },
});

class APIClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }
  // it must be arrow function
  //  get take url and config
  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchData<T>>(this.endPoint, config)
      .then((res) => res.data);
}
export default APIClient;
