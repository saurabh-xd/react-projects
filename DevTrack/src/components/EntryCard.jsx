import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'

const EntryCard = ({entry}) => {
  const { deleteEntry} =useContext(AppContext);
  return (
        <div style={{ border: "1px solid #ccc", padding: "12px", marginBottom: "12px" }}>
      <h3>{entry.title}</h3>
      {entry.description && <p>{entry.description}</p>}
      <small>{entry.date}</small>
      <br/>
      <button onClick={()=> deleteEntry(entry.id)}>Delete</button>
    </div>
  )
}

export default EntryCard