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
       <form className='create-note' onSubmit={handleSubmit}>
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateArea;

// import React, { useState } from 'react';

// const CreateArea = ({ onAdd }) => {
//   const [note, setNote] = useState({ title: '', content: '' });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setNote((prevNote) => ({ ...prevNote, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onAdd(note);
//     setNote({ title: '', content: '' });
//   };

//   return (
//     <div className="create-note">
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       name="title"
    //       value={note.title}
    //       onChange={handleChange}
    //       placeholder="Title"
    //       required
    //     />
    //     <textarea
    //       name="content"
    //       value={note.content}
    //       onChange={handleChange}
    //       placeholder="Take a note..."
    //       rows="3"
    //       required
    //     />
    //     <button type="submit">Add</button>
    //   </form>
//     </div>
//   );
// };

// export default CreateArea;
