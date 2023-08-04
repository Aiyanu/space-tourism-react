import React from "react";
import {Navbar,Menu} from "../../components"
export default function GlobalLayout({ children }) {
  return <div className="overflow-hidden">
    <Navbar />
    <Menu/>
    {children}
  </div>;
}
