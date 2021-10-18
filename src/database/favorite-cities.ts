/**
 * Mock database of favorite cities
 */

const key = "weather:information:favorite-cities";

/**
 *
 * @param payload
 * @returns boolean | true if its saved successfully
 */
export const storeFavoriteCities = async (payload: any[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(payload));
    return true;
  } catch (error) {
    return false;
  }
};

/**
 *
 * @returns stored favorite cities or null
 */
export const findFavoriteCities = async () => {
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
