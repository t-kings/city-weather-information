/**
 *
 * @description manage Notes Actions
 */

import { NoteType } from "../store/types";

export const getNotes = async (city: string): Promise<NoteType[]> => {
  try {
    // const favoriteCitiesFromStore = await findFavoriteCities();
    // if (favoriteCitiesFromStore) {
    //   dispatch({
    //     type: ActionTypes.UPDATE_FAVORITE_CITIES,
    //     data: { cities: favoriteCitiesFromStore },
    //   });
    //   return "";
    // }
    // return [];
  } catch (error: any) {
    console.log(error.message);
  } finally {
    return [];
  }
};

export const addToNote = (city: string, note: string) => {
  try {
    // // Concatenate city to city in state
    // const cities = Array.from(
    //   new Set([...getState().favoriteCities.cities, city])
    // );
    // await storeFavoriteCities(cities);
    // dispatch({
    //   type: ActionTypes.UPDATE_FAVORITE_CITIES,
    //   data: { cities },
    // });
  } catch (error: any) {
    console.log(error.message);
  } finally {
  }
};

export const removeNote = (noteId: string) => {
  try {
    // const cities = getState().favoriteCities.cities.filter(
    //   (_city) => _city !== city
    // );
    // await storeFavoriteCities(cities);
    // dispatch({
    //   type: ActionTypes.UPDATE_FAVORITE_CITIES,
    //   data: { cities },
    // });
  } catch (error: any) {
    console.log(error.message);
  } finally {
  }
};

export const updateNote = (noteId: string, note: string) => {
  try {
    // const cities = getState().favoriteCities.cities.filter(
    //   (_city) => _city !== city
    // );
    // await storeFavoriteCities(cities);
    // dispatch({
    //   type: ActionTypes.UPDATE_FAVORITE_CITIES,
    //   data: { cities },
    // });
  } catch (error: any) {
    console.log(error.message);
  } finally {
  }
};
