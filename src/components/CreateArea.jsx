import React, { useState } from "react";
import "./header.css";


function CreateArea (props) {

  
  const[note,setNote] = useState({
    title:"",
    content:""
 });
  
 function handleChange(event) {

   const{name,value} = event.target;
   
   setNote(function(prevNote){
      return {
      ...prevNote,
      [name]:value
      }
   });
 }
  

 function submitNote(event) {
  props.onAdd(note);

  setNote({
   title:"",
   content:""
  });
  
  event.preventDefault();
 } 
  
  
  
  
    return(
    <div>
        <form >
            <input 
              name="title"
              value={note.title}
              placeholder="Title"
              onChange={handleChange}
              
            />

            <textarea 
             name="content"
             value={note.content}
             placeholder="Take a note..."
             onChange={handleChange}
             



            />
            
            <button
             
             onClick={submitNote} >
                ADD
            </button>

        </form>
    </div>
  );

    
} 

export default CreateArea;