import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import EntryCard from "../components/EntryCard";

function Entries() {
  const { entries } = useContext(AppContext);

  return (
    <div style={{ padding: "16px" }}>
      <h2>All Entries</h2>

      {entries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))
      )}
    </div>
  );
}

export default Entries;
