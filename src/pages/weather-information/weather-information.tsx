/**
 *
 * @description  Displays weather information of a city
 * TODO: display weather information of a city
 */

import { useParams } from "react-router";
import { Notes, SearchCities } from "../../components";
import { CityPageParams } from "../../types";

export const WeatherInformation = () => {
  const { city } = useParams<CityPageParams>();
  return (
    <>
      <h1>{city} Weather Information</h1>
      <Notes />
      <SearchCities />
    </>
  );
};
