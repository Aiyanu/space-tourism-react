import React from "react";
import logo from "../../assets/shared/logo.svg"
import openMenuButton from "../../assets/shared/icon-hamburger.svg"
import { toggleMenu } from "../../features/navbar/navbarSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const dispatch = useDispatch()
  return <div className="absolute flex items-center justify-between left-0 right-0 font-barlow text-[16px] uppercase text-center tracking-widest">
    <div className="cursor-pointer ml-8 mt-4">
      <img className="w-[40px]" src={logo} alt="logo" />
    </div>
    <div className="md:w-[450px] lg:[830px] hidden md:flex items-center justify-around gap-4 p-8 bg-white bg-opacity-5 backdrop-blur-lg text-white">
      <div className="relative flex-1">
        <NavLink className={({ isActive }) => (isActive && "active") + " text-[14px] whitespace-nowrap"} to={"/"}>
          <span className="font-[700] mr-1 max-md:hidden">00</span> Home
        </NavLink>
      </div>
      <div className="relative flex-1">
        <NavLink className={({ isActive }) => (isActive && "active") + " text-[14px] gap-2 whitespace-nowrap"} to={"/destination"}>
          <span className="font-[700] mr-1 max-md:hidden">01</span> Destination
        </NavLink>
      </div>
      <div className="relative flex-1">
        <NavLink className={({ isActive }) => (isActive && "active") + " text-[14px] gap-2 whitespace-nowrap"} to={"/crew"}>
          <span className="font-[700] mr-1 max-md:hidden">02</span> Crew
        </NavLink>
      </div>
      <div className="relative flex-1">
        <NavLink className={({ isActive }) => (isActive && "active") + " text-[14px] gap-2 whitespace-nowrap"} to={"/technology"}>
          <span className="font-[700] mr-1 max-md:hidden">03</span> Technology
        </NavLink>
      </div>
    </div>
    <div
      onClick={() => dispatch(toggleMenu())}
      className="cursor-pointer md:hidden mr-8 mt-4">
      <img className="w-[24px] h-[21px]" src={openMenuButton} alt="" />
    </div>
  </div>;
}
