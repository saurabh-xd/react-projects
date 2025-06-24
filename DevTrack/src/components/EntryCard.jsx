import React from 'react'

const EntryCard = ({entry}) => {
  return (
        <div style={{ border: "1px solid #ccc", padding: "12px", marginBottom: "12px" }}>
      <h3>{entry.title}</h3>
      {entry.description && <p>{entry.description}</p>}
      <small>{entry.date}</small>
    </div>
  )
}

export default EntryCard