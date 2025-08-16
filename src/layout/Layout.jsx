import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="post-container" id="lws-postContainer"><Outlet /></div>
      
    </div>
  );
}
