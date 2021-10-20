/**
 *
 * @description manage actions on favorite cities
 */

import { useEffect, useState } from "react";
import { checkPermission, getLocation } from "../helpers";
import { weatherStack } from "../services";

/**
 *
 * @returns location, null if permission is not granted
 */
export const useUserLocation = () => {
  const [location, setLocation] = useState<Record<string, any> | null>(null);
  useEffect(() => {
    getLocation(handleLocation);
  }, []);

  const handleLocation = async (position: any) => {
    const permission = await checkPermission();
    if (permission) {
      const { latitude, longitude } = position.coords;
      const cityInformation = await weatherStack.getWeatherInformation(
        `${latitude},${longitude}`
      );
      setLocation(cityInformation);
    } else {
      setLocation(null);
    }
  };

  return { location };
};
