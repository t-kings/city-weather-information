/**
 * Manage Weather Stack API
 */

import axios from "axios";

const key = "weatherStack-cities";

/**
 *
 * @param cities array of cities
 * @returns array of cities and weather information
 */
const getWeatherInformationBulk = async (cities: string[]) => {
  try {
    //! Free API Key Does'nt allow for bulk query
    const citiesString = cities.join(";");
    const { data, status }: { data: any; status: number } = await axios.get(
      `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_STACK_KEY}&query=${citiesString}`
    );

    if (status === 200 && data.data) {
      return data;
    }
    if (data.error) {
      throw new Error(data.error.info);
    }

    throw new Error("An error occurred");
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        error.response?.message ||
        error.message ||
        "An error occurred"
    );
  }
};

/**
 *
 * @param city
 * @param force boolean to determine if to try stored data or force an update
 * @returns weather information of city
 */
const getWeatherInformation = async (city: string, force = false) => {
  try {
    if (!force) {
      const cachedDate = getStored(city);
      if (cachedDate) {
        return cachedDate;
      }
    }
    const { data, status }: { data: any; status: number } = await axios.get(
      `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_STACK_KEY}&query=${city}`
    );

    if (data.error) {
      throw new Error(data.error.info);
    }
    if (status === 200) {
      /**
       * cache to manage api limit
       */
      storeData(city, data);
      return data;
    }

    throw new Error("An error occurred");
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        error.response?.message ||
        error.message ||
        "An error occurred"
    );
  }
};

/**
 *
 * @param city
 * @param force boolean to determine if to try stored data or force an update
 * @returns
 */
export const getWeatherForecast = async (city: string, force = false) => {
  try {
    if (!force) {
      const cachedDate = getStored(city);
      if (cachedDate) {
        return cachedDate;
      }
    }
    const { data, status }: { data: any; status: number } = await axios.get(
      `http://api.weatherstack.com/forecast?access_key=${process.env.REACT_APP_WEATHER_STACK_KEY}&query=${city}`
    );

    if (data.error) {
      throw new Error(data.error.info);
    }
    if (status === 200) {
      /**
       * cache to manage api limit
       */
      storeData(city, data);
      return data;
    }

    throw new Error("An error occurred");
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        error.response?.message ||
        error.message ||
        "An error occurred"
    );
  }
};

/**
 *
 * @param city
 * @returns
 */
const getStored = (city: string) => {
  const raw = localStorage.getItem(key);
  if (!raw) {
    return null;
  }

  const cities = JSON.parse(raw);
  if (cities[city]) {
    return cities[city];
  }

  return null;
};

/**
 *
 * @param city city to pair data with
 * @param data data to store
 * * this can be expanded by adding time of caching
 */
const storeData = (city: string, data: any) => {
  const raw = localStorage.getItem(key);
  const cities = JSON.parse(raw ? raw : "{}");

  cities[city] = data;

  localStorage.setItem(key, JSON.stringify(cities));
};
export const weatherStack = {
  getWeatherInformation,
  getWeatherInformationBulk,
  getWeatherForecast,
};
