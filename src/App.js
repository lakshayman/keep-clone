import { useEffect, useState } from 'react';
import './App.css';
import Create from './Components/Create';
import SearchBar from './Components/Search';
import Header from './Components/Header';
import Notes from './Components/Notes';

function App() {
  const notesArray = localStorage.getItem("notes");
  const [notes, setNotes] = useState(JSON.parse(notesArray) || []);
  const [notesCount, setNotesCount] = useState(Number(localStorage.getItem("notesCount")) || 0)

  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const [optionsVisibleArray, setOptionsVisibleArray] = useState(
    Array(notes.length).fill(0)
  );

  useEffect(()=>{
    localStorage.setItem("notesCount", notesCount.toString())
  }, [notesCount]);

  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Create notes={notes} setNotes={setNotes} openCreateDialog={openCreateDialog} setOpenCreateDialog={setOpenCreateDialog} setOpenEditDialog={setOpenEditDialog} notesCount={notesCount} setNotesCount={setNotesCount} />
      <Notes notes={notes} setNotes={setNotes} openEditDialog={openEditDialog} setOpenCreateDialog={setOpenCreateDialog} setOpenEditDialog={setOpenEditDialog} optionsVisibleArray={optionsVisibleArray} setOptionsVisibleArray={setOptionsVisibleArray} />
    </div>
  );
}

export default App;
