/**
 * @description Displays weather information for a city
 */

import { CityPageParams } from "../../types";
import { useEffect, useState } from "react";
import { weatherStack } from "../../services";
import Styles from "./style.module.css";

export const CityWeatherInformation = ({ city }: CityPageParams) => {
  const [weatherInformation, setWeatherInformation] = useState<
    Record<string, any>
  >({});
  useEffect(() => {
    const _getWeather = async () => {
      const _weatherInformation = await weatherStack.getWeatherForecast(city);
      setWeatherInformation(_weatherInformation);
    };
    _getWeather();
  }, [city]);

  const item = (title: string, body: string) => (
    <li className={Styles.item}>
      <h5>{title}</h5>
      <p>{body}</p>
    </li>
  );
  const { location, current } = weatherInformation;
  return (
    <section className={Styles.section}>
      <h3 className={Styles.title}>
        {city}, {location?.country}
      </h3>

      <div className={Styles.img}>
        {current?.weather_icons.map((weatherIcon: string) => (
          <img key={weatherIcon} src={weatherIcon} alt={`${city} weather`} />
        ))}
      </div>

      <div className={Styles.description}>
        {current?.weather_descriptions.map((weatherDescription: string) => (
          <p key={weatherDescription}>{weatherDescription}</p>
        ))}
      </div>

      <ul className={Styles.ul}>
        {item("Cloud Cover", current?.cloudcover)}
        {item("Humidity", `${current?.humidity} g.kg-1`)}
        {item("Temperature", `${current?.temperature} °C `)}
        {item("Pressure", `${current?.pressure} Hg`)}
        {item("Wind Direction", current?.wind_dir)}
        {item("Wind Speed", current?.wind_speed)}
        {item("Wind Degree", `${current?.wind_degree} deg`)}
      </ul>
    </section>
  );
};
