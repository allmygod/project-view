import React, { useContext } from "react";
import { Form, Button, DatePicker, Input, Typography } from "antd";
import { ProjectContext } from "../contexts/ProjectContext.jsx";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

export default function ProjectDetail() {
  const { selected, setSelected, setData } = useContext(ProjectContext);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setData((prevItems) =>
      prevItems.map((item) =>
        item.projectId === selected.projectId ? { ...item, ...values } : item
      )
    );
    setSelected(null);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      initialValues={selected}
      onFinish={onFinish}
    >
      <Form.Item label="Project ID">
        <Typography>{selected.projectId}</Typography>
      </Form.Item>
      <Form.Item
        label="Project Name"
        name="projectName"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input.TextArea rows={5} />
      </Form.Item>
      <Form.Item
        label="Start Date"
        name="startDate"
        rules={[{ required: true }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item label="End Date" name="endDate" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Project Manager"
        name="projectManager"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
}
