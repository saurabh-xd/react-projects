import React, { useContext, useState } from 'react'
import { AppContext } from '../context/appContext';

const EntryForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const {addEntry} = useContext(AppContext);

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!title.trim()) return;

    const newEntry = {
      id: Date.now(),
      title,
      description: desc,
      date: new Date().toLocaleString
    }

    addEntry(newEntry);
    setTitle("");
      setDesc("");
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
      type='text'
      placeholder='what did you learn today'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      
      />

      <textarea
      placeholder='Write more details... '
      value={desc}
      onChange={(e) => setDesc(e.target.value)}
      />
      <button type='submit'>Add Entry</button>


    </form>
  )
}

export default EntryForm