/**
 * Manage API for Cities
 */

// import axios from "axios";
import { cities } from "../database";

/**
 *
 * @returns cities
 */
const getCitiesAndPopulation = async () => {
  try {
    //   TODO: get a proper API to get most populated cities
    // const { data, status }: { data: any; status: number } = await axios.get(
    //   "https://countriesnow.space/api/v0.1/countries/population/cities"
    // );
    const { data, status } = {
      data: {
        data: cities,
        message: "All cities",
      },
      status: 200,
    };

    if (status === 200) {
      return data.data;
    }

    throw new Error(data?.message || "An error occurred");
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        error.response?.message ||
        error.message ||
        "An error occurred"
    );
  }
};

export const citiesAPI = {
  getCitiesAndPopulation,
};
