/**
 *
 * @description manage Notes Actions
 */

import { findNotes, storeNotes } from "../database";
import { NoteType } from "../store/types";

export const getNotes = async (city: string): Promise<NoteType[]> => {
  try {
    const notes = await findNotes({ city });
    return notes;
  } catch (error: any) {
    console.log(error.message);
    return [];
  } finally {
  }
};

export const addToNote = async (city: string, note: string) => {
  try {
    const notes = await findNotes();
    const dateObj = new Date();
    const updatedNotes: NoteType[] = [
      ...notes,
      {
        note,
        city,
        id: notes.length + 1,
        createdAt: dateObj.toISOString(),
        updatedAt: dateObj.toISOString(),
      },
    ];

    await storeNotes(updatedNotes);
  } catch (error: any) {
    console.log(error.message);
  } finally {
    return "";
  }
};

export const removeNote = async (noteId: number) => {
  try {
    const notes = await findNotes();

    const updatedNotes: NoteType[] = notes.filter(
      (note: NoteType) => note.id !== noteId
    );

    await storeNotes(updatedNotes);
    return true;
  } catch (error: any) {
    console.log(error.message);
  } finally {
  }
};

export const updateNote = async (noteId: number, _note: string) => {
  try {
    const notes = await findNotes();

    const dateObj = new Date();

    const updatedNotes: NoteType[] = notes.map((note: NoteType) => {
      if (note.id !== noteId) {
        return note;
      }

      return {
        ...note,
        note: _note,
        updatedAt: dateObj.toISOString(),
      };
    });

    await storeNotes(updatedNotes);
    return true;
  } catch (error: any) {
    console.log(error.message);
    return false;
  } finally {
  }
};
