import { useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router";
import { Dropdown, Layout, Menu } from "antd";
import { FaBox, FaUsers, FaCog, FaUsersCog, FaUser } from "react-icons/fa";
import { PiWashingMachine } from "react-icons/pi";
import { BiSolidCategory } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import DashboardHeader from "./AdminHeader";
import {
  TbLayoutSidebarLeftCollapseFilled,
  TbLayoutSidebarRightCollapseFilled,
} from "react-icons/tb";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import useAuthStore from "@/stores/authStore";
import useUiStore from "@/stores/uiStore";
import Logo from "@/components/Logo";
import { image } from "@/constants/image";
import AdminTopbar from "./AdminTopbar";

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, role, logout } = useAuthStore();
  const { collapsed, setCollapsed } = useUiStore();

  // Helper to determine if an item should be selected based on the current path
  const getSelectedKeys = (pathname: string) => {
    const parts = pathname.split("/");
    if (parts.length >= 3) {
      return [parts.slice(0, 3).join("/")]; // e.g., ["/employee/transactions"]
    }
    return [pathname]; // For top-level items like "/admin"
  };

  const items: any[] = [
    {
      label: "Course Management",
      key: `/1`,
      icon: <FaUsersCog />,
      allowedRoles: ["admin", ""],
      children: [
        {
          label: "Course",
          key: `/courses`,
          icon: <FaUsersCog />,
          allowedRoles: ["admin", ""],
        },
        {
          label: "Section",
          key: `/users`,
          icon: <FaUsersCog />,
          allowedRoles: ["admin", ""],
        },
        {
          label: "Certificate",
          key: `/users`,
          icon: <FaUsersCog />,
          allowedRoles: ["admin", ""],
        },
      ],
    },

    {
      label: "System Management",
      key: `/2`,
      icon: <FaUsersCog />,
      allowedRoles: ["admin", ""],
      children: [
        {
          label: "User",
          key: `/users`,
          icon: <FaUsers />,
          allowedRoles: ["admin", ""],
        },
        {
          label: "Module Group",
          key: `/module-groups`,
          icon: <FaUsers />,
          allowedRoles: ["admin", ""],
        },
        {
          label: "Module",
          key: `/modules`,
          icon: <AiOutlineCodeSandbox strokeWidth={4} />,
          allowedRoles: ["admin", ""],
        },
      ],
    },
    {
      label: "Forum Management",
      key: `/3`,
      icon: <FaUsersCog />,
      allowedRoles: ["admin", ""],
      children: [
        {
          label: "Forum",
          key: `/users`,
          icon: <FaUsersCog />,
          allowedRoles: ["admin", ""],
        },
        {
          label: "Comment",
          key: `/module-groups`,
          icon: <FaUsers />,
          allowedRoles: ["admin", ""],
        },
        {
          label: "Reaction",
          key: `/modules`,
          icon: <AiOutlineCodeSandbox strokeWidth={4} />,
          allowedRoles: ["admin", ""],
        },
      ],
    },
    {
      label: "Category Management",
      key: `/4`,
      icon: <FaUsersCog />,
      allowedRoles: ["admin", ""],
      children: [
        {
          label: "Syllabus",
          key: `/users`,
          icon: <FaUsersCog />,
          allowedRoles: ["admin", ""],
        },
        {
          label: "Topic",
          key: `/users`,
          icon: <FaUsersCog />,
          allowedRoles: ["admin", ""],
        },
        {
          label: "Tag",
          key: `/users`,
          icon: <FaUsersCog />,
          allowedRoles: ["admin", ""],
        },
      ],
    },
    {
      label: "Assessment Management",
      key: `/5`,
      icon: <FaUsersCog />,
      allowedRoles: ["admin", ""],
      children: [
        {
          label: "Quiz",
          key: `/users`,
          icon: <FaUsersCog />,
          allowedRoles: ["admin", ""],
        },
        {
          label: "Question",
          key: `/users`,
          icon: <FaUsersCog />,
          allowedRoles: ["admin", ""],
        },
        {
          label: "Location",
          key: `/users`,
          icon: <FaUsersCog />,
          allowedRoles: ["admin", ""],
        },
      ],
    },
  ];

  const menuItems: any[] = [
    {
      label: "Profile",
      key: "/profile/",
      icon: <FaUser />,
    },
    {
      label: (
        <div
          onClick={() => {
            logout();
            navigate("/auth/login");
          }}
        >
          Logout
        </div>
      ),
      key: "/logout",
      icon: <MdLogout size={12} />,
    },
  ];

  return (
    <>
      <Layout className="h-screen w-screen bai-jamjuree flex flex-col">
        <AdminTopbar />
        <Layout className="grow">
          <Layout.Sider
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            theme={"light"}
            className="flex flex-col justify-between"
            width={250}
          >
            <div className="pt-2 flex flex-col">
              <Menu
                className="font-semibold h-[84vh] !grow overflow-y-scroll sm-scroll"
                theme={"light"}
                selectedKeys={getSelectedKeys(location.pathname)}
                mode="inline"
                // items={items.filter((item) => item.allowedRoles.includes(role))}
                items={items.filter((item) =>
                  item?.allowedRoles?.includes(role)
                )}
                onClick={({ key }) => {
                  navigate(key);
                }}
              />
              <div className="my-4 flex items-center justify-between gap-2 mx-6 text-violet-600">
                <button
                  className="text-black hover:bg-zinc-200 p-2 rounded-2xl cursor-pointer"
                  onClick={() => setCollapsed(!collapsed)}
                >
                  {collapsed ? (
                    <TbLayoutSidebarRightCollapseFilled size={20} />
                  ) : (
                    <TbLayoutSidebarLeftCollapseFilled size={20} />
                  )}
                </button>
              </div>
            </div>
          </Layout.Sider>
          <Layout className="overflow-y-scroll small-scrollbar border-l border-zinc-300 ">
            {/* <DashboardHeader /> */}
            <div className="pl-6 pr-4 !mb-0 py-4">
              <Outlet />
            </div>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
