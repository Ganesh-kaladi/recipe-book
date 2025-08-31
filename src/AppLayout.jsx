import React from "react";
import Navbar from "./component/Navbar";
import Aside from "./component/Aside";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-teal-50">
      <Navbar />
      <div className="md:w-[90%] md:mx-auto md:grid md:grid-cols-12 md:py-5 md:h-[90vh]">
        <aside className="md:col-span-3 lg:col-span-2 md:h-full">
          <Aside />
        </aside>
        <main className="px-5 col-span-9 lg:col-span-10 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
