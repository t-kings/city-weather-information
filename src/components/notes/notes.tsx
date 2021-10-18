/**
 *
 * @description  Manage  notes for a particular  city
 */

import { CityPageParams } from "../../types";
import { useEffect, useState, useCallback } from "react";
import { NoteType } from "../../store/types";
import { addToNote, getNotes, removeNote, updateNote } from "../../services";
import { Modal } from "../../containers";

export const Notes = ({ city }: CityPageParams) => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [seeMoreId, setSeeMoreId] = useState("");
  const [toAdd, setToAdd] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [toDelete, setToDelete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [toEdit, setToEdit] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editNote, setEditNote] = useState("");

  const fetchNotes = useCallback(async () => {
    const _notes = await getNotes(city);
    setNotes(_notes);
  }, [city]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const handleSeeMore = (id: string | number) => {};

  const handleAdd = () => {
    setToAdd(true);
  };

  const handleAddNote = async () => {
    try {
      if (isSaving) {
        return "";
      }
      setIsSaving(true);
      await addToNote(city, noteText);
    } catch (error) {
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteNote = async () => {
    try {
      if (isDeleting) {
        return "";
      }
      setIsDeleting(true);
      await removeNote(seeMoreId);
    } catch (error) {
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEdit = async () => {
    try {
      if (isEditing) {
        return "";
      }
      setIsEditing(true);
      await updateNote(seeMoreId, editNote);
    } catch (error) {
    } finally {
      setIsEditing(false);
    }
  };

  const seeMoreComponent = () => {
    const _note = notes.find((_note) => _note.id.toString() === seeMoreId);
    if (_note) {
      return (
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setToEdit(true);
            }}
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setToDelete(true);
            }}
          >
            Delete
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit();
            }}
          >
            <textarea
              defaultValue={_note.note}
              disabled={!toEdit}
              onChange={(e) => {
                setEditNote(e.target.value);
              }}
            />

            {toEdit && <button>Save</button>}
          </form>
        </div>
      );
    }
    return null;
  };

  const addNoteComponent = () => {
    return (
      <div>
        <form onSubmit={handleAddNote}>
          <textarea
            onChange={(e) => {
              setNoteText(e.target.value);
            }}
          />
          <button>Save</button>
        </form>
      </div>
    );
  };

  const deleteComponent = () => {
    return (
      <div>
        <p>Are you sure you want to delete this note? This is irreversible</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDeleteNote();
          }}
        >
          Delete
        </button>
      </div>
    );
  };

  return (
    <section>
      <div>
        <h1>Notes for {city}</h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleAdd();
          }}
        >
          Add
        </button>
        {notes.map((_note) => (
          <div key={_note.id}>
            <p>{_note.note.substr(0, 15)}</p>
            <p>{_note.createdAt}</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSeeMore(_note.id);
              }}
            >
              See More
            </button>
          </div>
        ))}
        <form>
          <textarea />
        </form>
      </div>
      <Modal
        showModal={!!seeMoreId}
        closeModal={() => {
          setSeeMoreId("");
        }}
      >
        {seeMoreComponent()}
      </Modal>

      <Modal
        showModal={toAdd}
        closeModal={() => {
          setToAdd(false);
        }}
      >
        {addNoteComponent()}
      </Modal>

      <Modal
        showModal={toDelete}
        closeModal={() => {
          setToDelete(false);
        }}
      >
        {deleteComponent()}
      </Modal>
    </section>
  );
};
