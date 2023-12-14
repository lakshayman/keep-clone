import React, { useState } from "react";
import "./index.css";
import Note from "./note";
import Form from "../Form";

export default function Notes({
  notes,
  setNotes,
  openEditDialog,
  setOpenCreateDialog,
  setOpenEditDialog,
  optionsVisibleArray,
  setOptionsVisibleArray,
  searchValue,
  resetSearch
}) {
  const [editColor, setEditColor] = useState("#ffffff");
  const [editId, setEditId] = useState(undefined);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const handleClose = () => {
    setEditId(undefined);
    setEditTitle("");
    setEditContent("");
    setOpenEditDialog(false);
  };

  const handleClickOpen = (note) => {
    setEditColor(note.color);
    setEditId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
    setOpenEditDialog(true);
    setOpenCreateDialog(false);
  };

  const handleSave = () => {
    if(editTitle && editContent) {
        const modifiedNotes = notes.map((note) => {
            if (note.id === editId) {
              return { ...note, title: editTitle, content: editContent };
            }
            return note;
          });
          setNotes(modifiedNotes);
          handleClose();
    } else {
        window.alert("You cannot save a note without title and content.")
    }
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    if(searchValue !== ""){
        alert("You can not delete while searching...");
    } else {
        if (window.confirm("Are you sure you want to delete the note")) {
            const modifiedNotes = notes.filter((note) => note.id !== id);
            setNotes(modifiedNotes);
        }
    }
  };

  const openColorPallete = (e, index) => {
    e.stopPropagation();
    const modifiedOptions = optionsVisibleArray.map((item, i) => {
        if(i === index) {
            if(item === 1)
                return 0;
            return 1;
        }
        return 0;
    })
    setOptionsVisibleArray(modifiedOptions);
  };

  const handleColorChange = (e, id, color) => {
    e.stopPropagation();
    const modifiedNotes = notes.map((note) => {
        if (note.id === id) {
          return { ...note, color };
        }
        return note;
      });
      setNotes(modifiedNotes);
      setOptionsVisibleArray(Array(notes.length).fill(0))
  }

  return (
    <React.Fragment>
      <div className="notes">
        {notes.map((note, index) => {
          return (
            <Note
              key={note.id}
              note={note}
              index={index}
              handleClickOpen={handleClickOpen}
              handleDelete={handleDelete}
              openColorPallete={openColorPallete}
              optionsVisibleArray={optionsVisibleArray}
              setOptionsVisibleArray={setOptionsVisibleArray}
              handleColorChange={handleColorChange}
              resetSearch={resetSearch}
            />
          );
        })}
      </div>
      <Form
        edit={true}
        open={openEditDialog}
        handleClose={handleClose}
        title={editTitle}
        content={editContent}
        setTitle={setEditTitle}
        setContent={setEditContent}
        handleSave={handleSave}
        color={editColor}
      />
    </React.Fragment>
  );
}
