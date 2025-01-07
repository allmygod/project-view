import React, { createContext, useEffect, useState } from "react";
import { fetchProjects } from "../lib/mockApi.js";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(false);
  const [favorites, setFavorites] = useState(["project_a", "project_c"]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects()
      .then((initialData) => setData(initialData))
      .catch((err) => setError(err));
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        data,
        setData,
        selected,
        setSelected,
        favorites,
        setFavorites,
        error,
        setError,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
