import Logo from "@/components/Logo";
import { image } from "@/constants/image";
import useAuthStore from "@/stores/authStore";
import { Badge, Dropdown, Input } from "antd";
import React from "react";
import { FaUser, FaBell, FaEnvelope } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import {
  IoSearchOutline,
  IoSettings,
  IoSettingsOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router";

export default function AdminTopbar() {
  const { email, role, logout } = useAuthStore();

  const navigate = useNavigate();
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
    <div className="w-full flex top-0 left-0 z-10 justify-between items-center px-4 border-b border-gray-300 gap-4">
      {/* Search Bar */}
      <div className="flex max-w-2xl gap-4 grow">
        <Logo />
        <Input
          placeholder="Search..."
          prefix={<IoSearchOutline className="text-gray-400" size={18} />}
          className="rounded-lg grow"
          size="small"
        />
      </div>

      {/* Action Icons and User Menu */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <Badge dot={true}>
          <div className="">
            <FaBell className="text-zinc-700" size={14} />
          </div>
        </Badge>

        {/* Messages */}
        <Badge dot={true}>
          <div className="">
            <FaEnvelope className="text-zinc-700" size={14} />
          </div>
        </Badge>

        {/* Settings */}
        <div className="">
          <IoSettings className="text-zinc-700" size={14} />
        </div>

        {/* User Profile Dropdown */}
        <div className="flex flex-col justify-end">
          <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
            <div className="flex gap-2 px-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="text-black truncate">
                <div className="font-semibold truncate w-full text-end">
                  {email || "Tran Van A"}
                </div>
                <div className="text-[10px] text-end">{role || "Admin"}</div>
              </div>
              <img
                src={image.defaultAvatar}
                className="h-[32px] aspect-square rounded-full border border-gray-400"
                alt="User avatar"
              />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
