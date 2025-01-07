import React, { useContext } from "react";
import { Button, Table } from "antd";
import dayjs from "dayjs";
import { ProjectContext } from "../contexts/ProjectContext.jsx";

export default function ProjectTable() {
  const { data, setSelected } = useContext(ProjectContext);
  const columns = [
    {
      title: "Project ID",
      dataIndex: "projectId",
      key: "projectId",
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      render: (date) => dayjs(date).format("YYYY-MM-DD"),
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      render: (date) => dayjs(date).format("YYYY-MM-DD"),
    },
    {
      title: "Project Manager",
      dataIndex: "projectManager",
      key: "projectManager",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Button type="primary" onClick={() => setSelected(record)}>
          Edit
        </Button>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={data} pagination={false} bordered />
  );
}
