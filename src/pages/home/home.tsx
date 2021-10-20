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
import { useEffect } from "react";
import { config } from "../../config";

export const Home = () => {
  /**
   * Set page title
   */
  useEffect(() => {
    document.title = config.appName;
  }, []);
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
      <section className={Styles.section}>
        <div>
          <div className={Styles.favorite}>
            <h1>Your favorite cities</h1>
            <div>
              <FavoriteCities />
            </div>
          </div>

          <div className={Styles.userLocation}>
            <UserLocation />
          </div>
        </div>
      </section>
    </>
  );
};
