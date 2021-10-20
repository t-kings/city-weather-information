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
import { Link } from "react-router-dom";
import { COMPONENT_IDS } from "../../constants";

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
          <div className={Styles.userLocation}>
            <p>
              This is how your city is today <br />
              <br />
              Not your city?{" "}
              <Link to={`#${COMPONENT_IDS.SEARCH_CITIES}`}>
                Search for your city
              </Link>
            </p>
            <UserLocation />
          </div>
          <div className={Styles.favorite}>
            <h1>Your favorite cities</h1>
            <div>
              <FavoriteCities />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
