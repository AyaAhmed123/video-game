import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort?: string;
  search?: string;
}

interface StoreGameQuery {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSort: (sort: string) => void;
  setSearch: (search: string) => void;
}
const useGameQueryStore = create<StoreGameQuery>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSort: (sort) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sort } })),
  setSearch: (search) => set(() => ({ gameQuery: { search } })),
}));
export default useGameQueryStore;
