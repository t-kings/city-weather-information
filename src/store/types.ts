export interface ReduxActionType<T> {
  type: ActionTypes;
  data: Partial<T>;
}

export enum ActionTypes {
  UPDATE_LARGEST_CITIES = "UPDATE_LARGEST_CITIES",
}

export interface LargestCityReducer {
  cities: any[];
  isLoading: boolean;
}

export interface RootStoreType {
  largestCities: LargestCityReducer;
}
