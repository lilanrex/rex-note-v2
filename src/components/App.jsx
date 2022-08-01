import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const[notes,setNotes] = useState([]);
 
  function addNote(note) {
    setNotes(function(prevNote){
       return[
        ...prevNote,
        note
       ];
    });
  }


  return (
 <div>   
  <Header />
  <CreateArea onAdd={addNote} />
  {notes.map(function(noteItem){
    return <Note 
      title={noteItem.title}
      content={noteItem.content}
    />
  })}

  <Footer />
 </div>
  );
}

export default App;