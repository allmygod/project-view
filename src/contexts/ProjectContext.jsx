import React, { createContext, useState } from "react";
import dayjs from "dayjs";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      key: "1",
      projectId: "project_a",
      projectName: "Project A",
      startDate: dayjs("2025-01-01"),
      endDate: dayjs("2025-12-31"),
      projectManager: "John Doe",
    },
    {
      key: "2",
      projectId: "project_b",
      projectName: "Project B",
      startDate: dayjs("2025-01-01"),
      endDate: dayjs("2025-12-31"),
      projectManager: "John Doe",
    },
    {
      key: "3",
      projectId: "project_c",
      projectName: "Project C",
      startDate: dayjs("2025-01-01"),
      endDate: dayjs("2025-12-31"),
      projectManager: "John Doe",
    },
  ]);
  const [selected, setSelected] = useState(false);
  const [favorites, setFavorites] = useState(["project_a", "project_c"]);

  return (
    <ProjectContext.Provider
      value={{ data, setData, selected, setSelected, favorites, setFavorites }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
