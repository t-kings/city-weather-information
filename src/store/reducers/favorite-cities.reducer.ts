import { ActionTypes, FavoriteCityReducer, ReduxActionType } from "../types";

const initialState: FavoriteCityReducer = {
  cities: [],
  isLoading: false,
};

export const favoriteCities = (
  state = initialState,
  { type, data }: ReduxActionType<FavoriteCityReducer>
) => {
  switch (type) {
    case ActionTypes.UPDATE_FAVORITE_CITIES:
      return { ...state, ...data };
    default:
      return state;
  }
};
