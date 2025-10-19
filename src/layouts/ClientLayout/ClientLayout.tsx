import React from "react";
import ClientFooter from "./ClientFooter";
import ClientHeader from "./ClientHeader";
import { Outlet } from "react-router";

export default function ClientLayout() {
  return (
    <>
      <ClientHeader />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <ClientFooter />
    </>
  );
}
