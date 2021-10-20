/**
 * Paths for navigation bar
 */
import { COMPONENT_IDS } from "../../constants";

export const paths = [
  {
    title: "Home",
    path: `/`,
  },
  {
    title: "Favorites",
    path: `/#${COMPONENT_IDS.FAVORITE_CITIES}`,
  },
  // { title: "Largest Cities", path: `/#${COMPONENT_IDS.LARGEST_CITIES}` },
  {
    title: "Search",
    path: `/#${COMPONENT_IDS.SEARCH_CITIES}`,
  },
  { title: "Location", path: `/#${COMPONENT_IDS.USER_LOCATION}` },
];
