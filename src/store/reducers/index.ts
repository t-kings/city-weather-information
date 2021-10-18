import { combineReducers } from "redux";
import { largestCities } from "./largest-cities.reducer";
import { favoriteCities } from "./favorite-cities.reducer";

const reducers = {
  largestCities,
  favoriteCities,
};

export const rootReducer = combineReducers(reducers);
