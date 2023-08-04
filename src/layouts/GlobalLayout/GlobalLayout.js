import React from "react";
import {Navbar,Menu} from "../../components"
export default function GlobalLayout({ children }) {
  return <div className="">
    <Navbar />
    <Menu/>
    {children}
  </div>;
}
