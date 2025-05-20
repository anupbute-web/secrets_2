import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateArea from './components/CreateArea';
import Note from "./components/Note";
import './App.css';



const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
  };

  return (
    <div className='main_class'>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className='note_list'>
        {notes.map((note, index) => (
        <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
      ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
