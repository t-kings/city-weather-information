import { combineReducers } from "redux";
import { favoriteCities } from "./favorite-cities.reducer";
import { largestCities } from "./largest-cities.reducer";

const reducers = {
  largestCities,
  favoriteCities,
};

export const rootReducer = combineReducers(reducers);
