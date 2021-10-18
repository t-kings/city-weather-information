import { ActionTypes, LargestCityReducer, ReduxActionType } from "../types";

const initialState: LargestCityReducer = {
  cities: [],
  isLoading: false,
};

export const largestCities = (
  state = initialState,
  { type, data }: ReduxActionType<LargestCityReducer>
) => {
  switch (type) {
    case ActionTypes.UPDATE_LARGEST_CITIES:
      return { ...state, ...data };
    default:
      return state;
  }
};
