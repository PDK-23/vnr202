import { Tag } from "antd";

export const mapCourseStatus = (status: number) => {
  switch (status) {
    case 0:
      return <Tag color="success">Published</Tag>;
    case 1:
      return <Tag color="error">Unpublish</Tag>;
    default:
      return <Tag color="warning">{status}</Tag>;
  }
};

export const mapAccountStatus = (status: number) => {
  switch (status) {
    case 0:
      return <Tag color="success">Active</Tag>;
    case 1:
      return <Tag color="error">Banned</Tag>;
    default:
      return <Tag color="warning">{status}</Tag>;
  }
};
