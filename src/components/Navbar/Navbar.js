import React from "react";
import logo from "../../assets/shared/logo.svg"
import openMenuButton from "../../assets/shared/icon-hamburger.svg"
import { toggleMenu } from "../../features/navbar/navbarSlice";
import { useDispatch } from "react-redux";
export default function Navbar() {
  const dispatch = useDispatch()
  return <div className="absolute flex items-center justify-between left-0 right-0 mx-6 mt-4">
    <div className="cursor-pointer">
      <img className="w-[40px]" src={logo} alt="logo" />
    </div>
    <div
      onClick={()=>dispatch(toggleMenu())}
      className="cursor-pointer">
      <img className="w-[24px] h-[21px]" src={openMenuButton} alt="" />
    </div>
  </div>;
}
