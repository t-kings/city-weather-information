import { StoreDispatch, StoreState } from "..";
import { findFavoriteCities, storeFavoriteCities } from "../../database";
import { ActionTypes } from "../types";

export const getFavoriteCities = () => {
  return async (dispatch: StoreDispatch) => {
    try {
      const favoriteCitiesFromStore = await findFavoriteCities();
      if (favoriteCitiesFromStore) {
        dispatch({
          type: ActionTypes.UPDATE_FAVORITE_CITIES,
          data: { cities: favoriteCitiesFromStore },
        });
        return "";
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
    }
  };
};

export const addToFavoriteCity = (city: string) => {
  return async (dispatch: StoreDispatch, getState: StoreState) => {
    try {
      // Concatenate city to city in state

      const cities = Array.from(
        new Set([...getState().favoriteCities.cities, city])
      );

      await storeFavoriteCities(cities);
      dispatch({
        type: ActionTypes.UPDATE_FAVORITE_CITIES,
        data: { cities },
      });
    } catch (error: any) {
      console.log(error.message);
    } finally {
    }
  };
};

export const removeCityFromFavorite = (city: string) => {
  return async (dispatch: StoreDispatch, getState: StoreState) => {
    try {
      const cities = getState().favoriteCities.cities.filter(
        (_city) => _city !== city
      );
      await storeFavoriteCities(cities);
      dispatch({
        type: ActionTypes.UPDATE_FAVORITE_CITIES,
        data: { cities },
      });
    } catch (error: any) {
      console.log(error.message);
    } finally {
    }
  };
};
