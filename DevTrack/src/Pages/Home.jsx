import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import EntryForm from '../components/EntryForm';
import EntryCard from '../components/EntryCard';

const Home = () => {
  const {entries} = useContext(AppContext);
  return (
    <div>
       <h2>What did you learn today?</h2>
      <EntryForm/>

      <h3 style={{ marginTop: "32px" }}>Recent Entries:</h3>
      {entries.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
          
        ))
      )}

    </div>
  )
}

export default Home