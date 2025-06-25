import { createContext, useState, useEffect } from "react";

// Create context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [entries, setEntries] = useState(() => {
    const stored = localStorage.getItem("entries");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (newEntry) => {
    setEntries([newEntry, ...entries]);
  };

  const deleteEntry = (id) => {
  setEntries(entries.filter(entry => entry.id !== id));
};


  return (
    <AppContext.Provider value={{ entries, addEntry, deleteEntry }}>
      {children}
    </AppContext.Provider>
  );
};
