import React, { useContext } from "react";
import { Row, Col } from "antd";
import styled from "@emotion/styled";
import { ProjectContext } from "../contexts/ProjectContext.jsx";
import ProjectTable from "../components/ProjectTable.jsx";
import ProjectDetail from "../components/ProjectDetail.jsx";
import FavoriteProjects from "../components/FavoriteProjects.jsx";

const CustomCol = styled(Col)`
  margin-top: 4rem;
  justify-content: center;
`;

export default function ProjectView() {
  const { selected } = useContext(ProjectContext);
  return (
    <Row>
      <CustomCol span={4}>
        <FavoriteProjects />
      </CustomCol>
      <CustomCol span={20}>
        {selected ? <ProjectDetail /> : <ProjectTable />}
      </CustomCol>
    </Row>
  );
}
