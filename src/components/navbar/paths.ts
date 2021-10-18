/**
 * Paths for navigation bar
 */
import { COMPONENT_IDS } from "../../constants";

export const paths = [
  {
    title: "Favorite Cities",
    path: `/#${COMPONENT_IDS.FAVORITE_CITIES}`,
  },
  { title: "Largest Cities", path: `/#${COMPONENT_IDS.LARGEST_CITIES}` },
  {
    title: "Search Cities",
    path: `/#${COMPONENT_IDS.SEARCH_CITIES}`,
  },
  { title: "User Location", path: "/user-location" },
];
