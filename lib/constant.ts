import { AnimeTitle } from "./types";

export const ANIMATION_CONFIG = {
  initial: {
    scaleY: 1.15,
  },
  hover: {
    scaleY: 1.3,
  },
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
    mass: 0.8,
  },
} as const;

export const ANIME_TITLES: AnimeTitle[] = [
  { id: "Electronics", displayName: "Electronics" },
  { id: "Furniture", displayName: "Furniture" },
  { id: "Vehicles", displayName: "Vehicles" },
  { id: "Accessories", displayName: "Accessories" },
  { id: "Fashion", displayName: "Fashion" },
  { id: "booksAndArticles", displayName: "Books and Articles" },
  { id: "Services", displayName: "Services" },
  { id: "Art", displayName: "Art" },
  { id: "Music", displayName: "Music" },
  { id: "Utensils", displayName: "Utensils" },
  { id: "Others", displayName: "Others" },
];