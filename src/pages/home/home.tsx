/**
 * @description home page
 */

import {
  FavoriteCities,
  LargestCities,
  SearchCities,
  UserLocation,
} from "../../components";

export const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <FavoriteCities />
      <SearchCities />
      <LargestCities />
      <UserLocation />
    </main>
  );
};
