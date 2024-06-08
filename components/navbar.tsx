"use client";
import { useState } from "react";


import NavbarButton from "./navbarButton";


const Navbar = () => {
  return (
    <div className="flex  h-20">
      <nav className=" flex  w-full justify-between  right-0 p-3 items-center text-center shadow-xl ring-1 ring-white">
        <NavbarButton />
      </nav>
    </div>
  );
};

export default Navbar;