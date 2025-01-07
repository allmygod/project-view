import React, { useContext } from "react";
import { Row, Col } from "antd";
import styled from "@emotion/styled";
import { ProjectContext } from "../contexts/ProjectContext.jsx";
import List from "../components/List.jsx";
import Detail from "../components/Detail.jsx";
import Favorites from "../components/Favorites.jsx";

const ErrorMsg = styled.h2`
  text-align: center;
`;

const CustomCol = styled(Col)`
  margin-top: 4rem;
  justify-content: center;
`;

export default function View() {
  const { selected, error } = useContext(ProjectContext);
  return (
    <>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <Row>
        <CustomCol span={4}>
          <Favorites />
        </CustomCol>
        <CustomCol span={20}>{selected ? <Detail /> : <List />}</CustomCol>
      </Row>
    </>
  );
}
