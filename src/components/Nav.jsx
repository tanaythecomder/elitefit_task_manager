import React from "react";
import { FcManager } from "react-icons/fc";

const Nav = () => {
  return (
    <div className="h-[60px] bg-white my-4 rounded-lg flex items-center justify-center gap-2 text-xl font-medium  ">
      <FcManager className="h-10"/>
      <h1 >Task Manager </h1>
    </div>
  );
};

export default Nav;
