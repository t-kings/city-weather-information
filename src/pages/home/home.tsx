/**
 * @description home page
 */

import {
  FavoriteCities,
  LargestCities,
  SearchCities,
  UserLocation,
} from "../../components";
import Styles from "./style.module.css";

export const Home = () => {
  return (
    <>
      <header className={Styles.header}>
        <div>
          <div className={Styles.search}>
            <h1>
              Get weather update of your favorite cities with a simple search
            </h1>
            <SearchCities />
          </div>
          <div className={Styles.largest}>
            {/* <h1>Weather update of the top largest cities</h1> */}
            <div>
              <LargestCities />
            </div>
          </div>
        </div>
      </header>
      <FavoriteCities />
      <UserLocation />
    </>
  );
};
