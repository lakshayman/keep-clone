import { useEffect, useState } from "react";
import "./App.css";
import Create from "./Components/Create";
import SearchBar from "./Components/Search";
import Header from "./Components/Header";
import Notes from "./Components/Notes";

function App() {
  const notesArray = localStorage.getItem("notes");
  const [notes, setNotes] = useState(JSON.parse(notesArray) || []);
  const [notesCount, setNotesCount] = useState(
    Number(localStorage.getItem("notesCount")) || 0
  );
  const [filteredNotes, setFilteredNotes] = useState([]);

  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const [optionsVisibleArray, setOptionsVisibleArray] = useState(
    Array(notes.length).fill(0)
  );

  const [searchValue, setSearchValue] = useState("");

  const resetSearch = () => {
    setSearchValue("");
  }

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  }

  useEffect(()=>{
    if(searchValue) {
      var re = new RegExp(searchValue+'.+$', 'i');
      setFilteredNotes(notes.filter(function(e, i, a){
          return e["title"].search(re) !== -1;
      }));
    } else {
      setFilteredNotes([])
    }
    console.log(filteredNotes)
  }, [searchValue, notes, filteredNotes]);

  useEffect(() => {
    localStorage.setItem("notesCount", notesCount.toString());
  }, [notesCount]);

  useEffect(() => {
    setOptionsVisibleArray(Array(notes.length).fill(0));
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Header />
      <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
      <Create
        setNotes={setNotes}
        openCreateDialog={openCreateDialog}
        setOpenCreateDialog={setOpenCreateDialog}
        setOpenEditDialog={setOpenEditDialog}
        notesCount={notesCount}
        setNotesCount={setNotesCount}
        resetSearch={resetSearch}
      />
      <Notes
        notes={searchValue ? filteredNotes : notes}
        setNotes={setNotes}
        openEditDialog={openEditDialog}
        setOpenCreateDialog={setOpenCreateDialog}
        setOpenEditDialog={setOpenEditDialog}
        optionsVisibleArray={optionsVisibleArray}
        setOptionsVisibleArray={setOptionsVisibleArray}
        searchValue={searchValue}
        resetSearch={resetSearch}
      />
    </div>
  );
}

export default App;
