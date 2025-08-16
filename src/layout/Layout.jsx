import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Newest from "../components/Newest";

export default function Layout() {
  return (
    <div className="wrapper">
      <Sidebar />
      <Newest />
      <Outlet />
    </div>
  );
}
