/**
 *
 * @description manage user granted location
 */

import { COMPONENT_IDS } from "../../constants";
import { useUserLocation } from "../../hooks";
import Styles from "./style.module.css";

export const UserLocation = () => {
  const { location: weatherInformation } = useUserLocation();
  const { location, current } = weatherInformation || {};
  const city = location?.region;

  const item = (title: string, body: string) => (
    <li className={Styles.item}>
      <h5>{title}</h5>
      <p>{body}</p>
    </li>
  );
  return (
    <section id={COMPONENT_IDS.USER_LOCATION} className={Styles.section}>
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
