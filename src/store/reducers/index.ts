import { combineReducers } from "redux";
import { largestCities } from "./largest-cities.reducer";

const reducers = {
  largestCities,
};

export const rootReducer = combineReducers(reducers);
