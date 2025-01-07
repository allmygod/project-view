import React, { useContext } from "react";
import { Row, Col } from "antd";
import styled from "@emotion/styled";
import { ProjectContext } from "../contexts/ProjectContext.jsx";
import List from "../components/List.jsx";
import Detail from "../components/Detail.jsx";
import Favorites from "../components/Favorites.jsx";

const CustomCol = styled(Col)`
  margin-top: 4rem;
  justify-content: center;
`;

export default function View() {
  const { selected } = useContext(ProjectContext);
  return (
    <Row>
      <CustomCol span={4}>
        <Favorites />
      </CustomCol>
      <CustomCol span={20}>{selected ? <Detail /> : <List />}</CustomCol>
    </Row>
  );
}
