/**
 *
 * @description  Displays weather information of a city
 */

import { useParams } from "react-router";
import { CityWeatherInformation, Notes, SearchCities } from "../../components";
import { CityPageParams } from "../../types";

export const WeatherInformation = () => {
  const { city } = useParams<CityPageParams>();
  return (
    <>
      <h1>{city} Weather Information</h1>
      <CityWeatherInformation city={city} />
      <Notes city={city} />
      <SearchCities />
    </>
  );
};
