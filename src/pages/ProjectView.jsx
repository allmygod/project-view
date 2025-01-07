import React, { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext.jsx";
import ProjectTable from "../components/ProjectTable.jsx";
import ProjectDetail from "../components/ProjectDetail.jsx";

export default function ProjectView() {
  const { selected } = useContext(ProjectContext);
  return selected ? <ProjectDetail /> : <ProjectTable />;
}
