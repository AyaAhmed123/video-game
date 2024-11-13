import { Platform } from "./Platform";

export interface Game {
  id: number;
  background_image: string;
  name: string;
  slug: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
