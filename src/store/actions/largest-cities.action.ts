import { StoreDispatch } from "..";
import { getCities, storeCities } from "../../database";
import { citiesAPI, weatherStack } from "../../services";
import { ActionTypes } from "../types";

export const getLargestCities = () => {
  return async (dispatch: StoreDispatch) => {
    try {
      const citiesFromStore = await getCities();
      if (citiesFromStore) {
        dispatch({
          type: ActionTypes.UPDATE_LARGEST_CITIES,
          data: { cities: citiesFromStore },
        });
        return "";
      }
      const cities = await citiesAPI.getCitiesAndPopulation();

      const sortedCitiesByPopulation = cities.sort(
        (city, _city) => city.population - _city.population
      );

      const largestByPopulation = sortedCitiesByPopulation.slice(0, 15);

      /**
       * * We cannot make bulk queries with free account so we need to loop
       * * use weatherStack.getWeatherInformationBulk for bulk query
       */

      const weatherInformationToCity = [];

      for (let index = 0; index < largestByPopulation.length; index++) {
        const _city = largestByPopulation[index];
        const data = await weatherStack.getWeatherInformation(_city.city);

        weatherInformationToCity.push({
          ..._city,
          weatherInformation: {
            current: data.current,
            location: data.location,
          },
        });
      }
      storeCities(weatherInformationToCity);

      dispatch({
        type: ActionTypes.UPDATE_LARGEST_CITIES,
        data: { cities: weatherInformationToCity },
      });
    } catch (error: any) {
      console.log(error.message);
    } finally {
    }
  };
};
