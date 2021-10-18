/**
 * Mock database of cities
 */
export * from "./cities-object";
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
