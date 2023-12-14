import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import "./index.css";
import Form from "../Form";

export default function Create({ setNotes, openCreateDialog, setOpenCreateDialog, setOpenEditDialog, notesCount, setNotesCount, resetSearch }) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleClickOpen = () => {
    resetSearch();
    setOpenCreateDialog(true);
    setOpenEditDialog(false);
  };

  const handleClose = () => {
    setTitle("");
    setContent("");
    setOpenCreateDialog(false);
  };

  const handleSave = () => {
    if (title && content) {
        setNotes(prev=>([{ id: notesCount, title, content, color: "#ffffff" }, ...prev]));
        setNotesCount(prev=>prev+1)
        handleClose();
    } else {
        window.alert("You cannot save a note without title and content.")
    }
  };

  return (
    <React.Fragment>
      <Fab
        className="fab-button"
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Form
        open={openCreateDialog}
        handleClose={handleClose}
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        handleSave={handleSave}
      />
    </React.Fragment>
  );
}
