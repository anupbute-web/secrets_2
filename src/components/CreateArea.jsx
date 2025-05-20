import React, { useState } from 'react';

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: '', content: '' });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleClick = () => {
    setIsExpanded(true);
  };

  const handleSubmit = (event) => {
    onAdd(note);
    setNote({ title: '', content: '' });
    setIsExpanded(false);
    event.preventDefault();
  };

  return (
    <div>
      <form className="create-note">
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? '3' : '1'}
          onClick={handleClick}
        />
        <button onClick={handleSubmit}>
            Add Note
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
