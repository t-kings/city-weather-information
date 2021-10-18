export interface ReduxActionType<T> {
  type: ActionTypes;
  data: Partial<T>;
}

export enum ActionTypes {
  UPDATE_LARGEST_CITIES = "UPDATE_LARGEST_CITIES",
  UPDATE_FAVORITE_CITIES = "UPDATE_FAVORITE_CITIES",
  UPDATE_NOTE = "UPDATE_NOTE",
}

export interface LargestCityReducer {
  cities: any[];
  isLoading: boolean;
}

export interface FavoriteCityReducer {
  cities: string[];
  isLoading: boolean;
}

export interface NoteReducer {
  notes: NoteType[];
  isLoading: boolean;
}

export interface NoteType {
  id: number;
  city: string;
  note: string;
  createdAt: string;
  updatedAt: string;
}
export interface RootStoreType {
  largestCities: LargestCityReducer;
  favoriteCities: FavoriteCityReducer;
  notes: NoteReducer;
}
