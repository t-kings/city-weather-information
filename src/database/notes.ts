/**
 * Mock database of notes
 */

import { NoteType } from "../store/types";

const key = "weather:information:notes";

/**
 *
 * @param payload
 * @returns boolean | true if its saved successfully
 */
export const storeNotes = async (payload: any[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(payload));
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * @param params query parameters
 * @returns stored notes or null
 */
export const findNotes = async (params?: Partial<NoteType>) => {
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      return params
        ? JSON.parse(raw).filter((item: Record<string, any>) =>
            Object.entries(params).some(([key, value]) => item[key] === value)
          )
        : JSON.parse(raw);
    }
    // No note, store empty
    await storeNotes([]);
    return [];
  } catch (error) {
    throw error;
  }
};
