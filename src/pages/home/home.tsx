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
    <>
      <SearchCities />
      <FavoriteCities />
      <LargestCities />
      <UserLocation />
    </>
  );
};
