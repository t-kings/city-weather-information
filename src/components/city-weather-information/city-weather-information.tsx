/**
 * @description Displays weather information for a city
 */

import { CityPageParams } from "../../types";
import { useEffect, useState } from "react";
import { weatherStack } from "../../services";

export const CityWeatherInformation = ({ city }: CityPageParams) => {
  const [weatherInformation, setWeatherInformation] = useState<
    Record<string, any>
  >({});
  useEffect(() => {
    const _weatherInformation = weatherStack.getWeatherForecast(city);
    setWeatherInformation(_weatherInformation);
  }, [city]);
  return (
    <section>
      <h3>Temperature</h3>
      {weatherInformation?.current?.temperature}
    </section>
  );
};
