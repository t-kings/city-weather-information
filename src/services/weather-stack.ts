/**
 * Manage Weather Stack API
 */

import axios from "axios";

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
 * @returns weather information of city
 */
const getWeatherInformation = async (city: string) => {
  try {
    const { data, status }: { data: any; status: number } = await axios.get(
      `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_STACK_KEY}&query=${city}`
    );

    if (data.error) {
      throw new Error(data.error.info);
    }
    if (status === 200) {
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

export const getWeatherForecast = async (city: string) => {
  try {
    const { data, status }: { data: any; status: number } = await axios.get(
      `http://api.weatherstack.com/forecast?access_key=${process.env.REACT_APP_WEATHER_STACK_KEY}&query=${city}`
    );

    if (data.error) {
      throw new Error(data.error.info);
    }
    if (status === 200) {
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

export const weatherStack = {
  getWeatherInformation,
  getWeatherInformationBulk,
  getWeatherForecast,
};
