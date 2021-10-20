/**
 *
 * @description  Displays weather information of a city
 */

import { useParams } from "react-router";
import { CityWeatherInformation, Notes, SearchCities } from "../../components";
import { CityPageParams } from "../../types";
import { useEffect } from "react";
import Styles from "./style.module.css";
import { config } from "../../config";

export const WeatherInformation = () => {
  const { city } = useParams<CityPageParams>();
  /**
   * Set page title
   */
  useEffect(() => {
    document.title = `${city} | ${config.appName}`;
  }, [city]);

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
            <h1>{city}</h1>
          </div>
        </div>
      </header>

      <section className={Styles.section}>
        <div>
          <div className={Styles.favorite}>
            <div>
              <CityWeatherInformation city={city} />
            </div>
          </div>

          <div className={Styles.userLocation}>
            <Notes city={city} />
          </div>
        </div>
      </section>
    </>
  );
};
