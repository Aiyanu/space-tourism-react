import React from "react";
import { NavLink } from "react-router-dom";
import closeMenuButton from "../../assets/shared/icon-close.svg"
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../features/navbar/navbarSlice";
export default function Menu() {
  const { isMenuOpen } = useSelector((state) => state.navbar)
  const dispatch = useDispatch()
  return <div className={`${!isMenuOpen && "translate-x-full"} md:hidden overflow-hidden transition-transform absolute px-4 pt-8 right-0 z-20 w-[254px]  max-w-[254px] h-screen bg-[rgba(255,255,255,0.3)] filter backdrop-blur-lg`}>
    <div
      onClick={()=>dispatch(toggleMenu())}
      className="w-full mb-16 cursor-pointer">
      <img className="ml-auto" src={closeMenuButton} alt="" />
    </div>
    <div className="flex flex-col gap-4 justify-center items-start text-white uppercase text-[16px]">
      <NavLink to={"/"}><span className="font-[700] mr-2">00</span> Home</NavLink>
      <NavLink to={"/destinations"}><span className="font-[700] mr-2">01</span> Destination</NavLink>
      <NavLink to={"/crew"}><span className="font-[700] mr-2">02</span> Crew</NavLink>
      <NavLink to={"/technology"}><span className="font-[700] mr-2">03</span> Technology</NavLink>
    </div>
  </div>;
}
