import useAuthStore from "@/stores/authStore";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router";

export default function DashboardHeader() {
  const location = useLocation();
  const { role } = useAuthStore();

  // Set base path based on user role
  const basePath = role == "guest" ? "/client" : "/staff";

  const [path, id] = location.pathname.split("/").slice(2);
  const items = [
    {
      title: <Link to={`${basePath}/${path}`}>{path}</Link>,
    },
    // only return id breadcrumb if currently in the detail page
    ...(id
      ? [{ title: <Link to={`${basePath}/${path}/${id}`}>{id}</Link> }]
      : []),
  ];

  return (
    <div className="flex flex-wrap justify-between items-center w-full mt-4 ml-6 mr-4">
      <Breadcrumb
        className="my-2 capitalize font-bold text-base"
        items={items}
      />
    </div>
  );
}
