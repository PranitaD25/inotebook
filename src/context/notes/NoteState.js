import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);


  //Get all notes
  const getNotes = async () => {
    //Api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      }
    });
    const json=await response.json()
    console.log(json)
    setNotes(json)
  };



  //Add a note
  const addNote = async (title, description, tag) => {
    
    //Api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note=await response.json()
    setNotes(notes.concat(note));
  };




  //Delete a note
  const deleteNote =async (id) => {

     //Api call
     const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",  
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      }
    });
      const json = await response.json();
      console.log(json);
    
    //Logic to delete in client side
    //console.log("Deleting note with Id:" + id);
    const newnotes = notes.filter((note) => {
      return (note._id !== id);
    });
    setNotes(newnotes);
  };




  //Edit a note
  const editNote = async (id, title, description, tag) => {

    //Api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json)


    let newNotes=JSON.parse(JSON.stringify(notes))
    //Logic to edit in client side
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if ((element._id === id)) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    //console.log(id,newNotes)
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote,getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};




export default NoteState;
