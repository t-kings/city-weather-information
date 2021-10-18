/**
 * Mock database of cities
 */

export const cities = [
  { city: "Tokyo", country: "Japan", population: 37339804 },
  { city: "Delhi", country: "India", population: 31181376 },
  { city: "Shanghai", country: "China", population: 27795702 },
  { city: "Sao Paulo", country: "Brazil", population: 22237472 },
  { city: "Mexico City", country: "Mexico", population: 21918936 },
  { city: "Dhaka", country: "Bangladesh", population: 21741090 },
  { city: "Cairo", country: "Egypt", population: 21322750 },
  { city: "Beijing", country: "China", population: 20896820 },
  { city: "Mumbai", country: "India", population: 20667656 },
  { city: "Osaka", country: "Japan", population: 19110616 },
  { city: "Karachi", country: "Pakistan", population: 16459472 },
  { city: "Chongqing", country: "China", population: 16382376 },
  { city: "Istanbul", country: "Turkey", population: 15415197 },
  { city: "Buenos Aires", country: "Argentina", population: 15257673 },
  { city: "Kolkata", country: "India", population: 14974073 },
  { city: "Kinshasa", country: "Dr Congo", population: 14970460 },
  { city: "Lagos", country: "Nigeria", population: 14862111 },
  { city: "Manila", country: "Philippines", population: 14158573 },
  { city: "Tianjin", country: "China", population: 13794450 },
  { city: "Guangzhou", country: "China", population: 13635397 },
];

const key = "weather:information:cities";

/**
 *
 * @param payload
 * @returns boolean | true if its saved successfully
 */
export const storeCities = async (payload: any[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(payload));
    return true;
  } catch (error) {
    return false;
  }
};

/**
 *
 * @returns stored cities or null
 */
export const getCities = async () => {
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      return JSON.parse(raw);
    }

    return null;
  } catch (error) {
    throw error;
  }
};
