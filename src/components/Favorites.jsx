import React, { useContext, useMemo } from "react";
import styled from "@emotion/styled";
import { ProjectContext } from "../contexts/ProjectContext.jsx";

const HeaderText = styled.h3`
  margin-left: 0.5rem;
`;

export default function Favorites() {
  const { data, favorites } = useContext(ProjectContext);
  const projects = useMemo(
    () =>
      data
        .filter(({ projectId }) => favorites.includes(projectId))
        .map(({ projectName }) => projectName),
    [data]
  );

  return (
    <>
      <HeaderText>Favorite Projects</HeaderText>
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    </>
  );
}
