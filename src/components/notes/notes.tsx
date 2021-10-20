/**
 *
 * @description  Manage  notes for a particular  city
 */

import { CityPageParams } from "../../types";
import { useEffect, useState, useCallback, FC } from "react";
import { NoteType } from "../../store/types";
import { addToNote, getNotes, removeNote, updateNote } from "../../services";
import { Modal } from "../../containers";
import Styles from "./style.module.css";
import { Button, Textarea } from "..";
import { formatDate } from "../../helpers";
import cogoToast from "cogo-toast";

export const Notes = ({ city }: CityPageParams) => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [modifyId, setModifyId] = useState("");
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

  /**
   * * cancel editing when modify modal closes
   */
  useEffect(() => {
    if (!modifyId) {
      setToEdit(false);
    }
  }, [modifyId]);

  const handleModifyId = (id: string | number) => {
    setModifyId(id as string);
  };

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
      fetchNotes();
      setToAdd(false);
      cogoToast.success("Note saved");
    } catch (error: any) {
      cogoToast.error(error.message);
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
      await removeNote(parseInt(modifyId));
      setModifyId("");
      setToDelete(false);
      fetchNotes();
      cogoToast.success("Note deleted");
    } catch (error: any) {
      cogoToast.error(error.message);
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
      await updateNote(parseInt(modifyId), editNote);
      fetchNotes();
      setModifyId("");
      cogoToast.success("Note edited");
    } catch (error: any) {
      cogoToast.error(error.message);
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <section className={Styles.section}>
      <div>
        {notes.length !== 0 && (
          <div className={Styles.add}>
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleAdd();
              }}
            >
              Add +
            </Button>
          </div>
        )}
        {notes.length === 0 ? (
          <div className={Styles.empty}>
            <p>You have no notes for {city}</p>

            <Button
              onClick={(e) => {
                e.preventDefault();
                handleAdd();
              }}
            >
              Add Note
            </Button>
          </div>
        ) : (
          <div className={Styles.resultList}>
            <ul>
              {notes.map((_note) => (
                <li key={_note.id}>
                  <p className={Styles.title}>{_note.note.substr(0, 15)}</p>
                  <div>
                    <p className={Styles.date}>
                      {formatDate(_note.createdAt, true)}
                    </p>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        handleModifyId(_note.id);
                      }}
                      style={{
                        background: "black",
                      }}
                    >
                      Modify
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Modify Note modal */}
      <Modal
        showModal={!!modifyId}
        closeModal={() => {
          setModifyId("");
        }}
      >
        <ModifyNoteComponent
          notes={notes}
          setToEdit={setToEdit}
          modifyId={modifyId}
          setToDelete={setToDelete}
          handleEdit={handleEdit}
          toEdit={toEdit}
          setEditNote={setEditNote}
        />
      </Modal>

      {/* Add note modal */}
      <Modal
        showModal={toAdd}
        closeModal={() => {
          setToAdd(false);
        }}
      >
        <AddNoteComponent setNote={setNoteText} onSubmit={handleAddNote} />
      </Modal>

      {/* Delete Note Modal */}
      <Modal
        showModal={toDelete}
        closeModal={() => {
          setToDelete(false);
        }}
      >
        <DeleteComponent handleDeleteNote={handleDeleteNote} />
      </Modal>
    </section>
  );
};

/**
 *
 * * Add note modal component
 */
const AddNoteComponent: FC<{ onSubmit: () => void; setNote: any }> = ({
  onSubmit,
  setNote,
}) => {
  return (
    <div className={Styles.addNote}>
      <form onSubmit={onSubmit}>
        <Textarea
          onChange={(e) => {
            setNote(e.target.value);
          }}
          placeholder="Write note..."
        />
        <div className={Styles.add}>
          <Button
            style={{
              marginTop: 20,
            }}
            onClick={onSubmit}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

/**
 * * Modify Note modal component
 */
const ModifyNoteComponent: FC<{
  notes: NoteType[];
  setToEdit: any;
  modifyId: string;
  setToDelete: any;
  handleEdit: () => void;
  toEdit: any;
  setEditNote: any;
}> = ({
  notes,
  setToEdit,
  modifyId,
  setToDelete,
  handleEdit,
  toEdit,
  setEditNote,
}) => {
  const _note = notes.find((_note) => _note.id === parseInt(modifyId));
  if (_note) {
    return (
      <div className={Styles.addNote}>
        <div className={Styles.add}>
          {!toEdit && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                setToEdit(true);
              }}
            >
              Edit
            </Button>
          )}
          <Button
            onClick={(e) => {
              e.preventDefault();
              setToDelete(true);
            }}
            style={{
              background: "red",
              marginLeft: 10,
            }}
          >
            Delete
          </Button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEdit();
          }}
        >
          <Textarea
            defaultValue={_note.note}
            disabled={!toEdit}
            onChange={(e) => {
              setEditNote(e.target.value);
            }}
            placeholder="Write note..."
            style={{
              marginTop: 20,
              marginBottom: 20,
              cursor: toEdit ? "text" : "not-allowed",
            }}
          />

          {toEdit && (
            <div
              className={Styles.add}
              onClick={(e) => {
                e.preventDefault();
                handleEdit();
              }}
            >
              <Button>Save</Button>
            </div>
          )}
        </form>
      </div>
    );
  }
  return null;
};

/**
 *
 * * Delete component modal
 */
const DeleteComponent: FC<{
  handleDeleteNote: any;
}> = ({ handleDeleteNote }) => {
  return (
    <div className={Styles.addNote}>
      <p
        style={{
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Are you sure you want to delete this note?
        <br /> This is irreversible
      </p>
      <div className={Styles.add}>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleDeleteNote();
          }}
          style={{
            background: "red",
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
