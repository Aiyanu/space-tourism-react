import React from "react";
import { NavLink } from "react-router-dom";
import closeMenuButton from "../../assets/shared/icon-close.svg"
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../features/navbar/navbarSlice";
export default function Menu() {
  const { isMenuOpen } = useSelector((state) => state.navbar)
  const dispatch = useDispatch()
  return <div className={`${!isMenuOpen && "translate-x-full"} font-barlow text-[16px] uppercase text-center tracking-widest origin-left md:hidden overflow-hidden transition-transform absolute  top-0 bottom-0 right-0 px-4 pt-8  z-50 w-[254px]  max-w-[254px] bg-[rgba(255,255,255,0.3)] filter backdrop-blur-lg`}>
    <div
      className="w-full mb-16">
      <img
        onClick={() => dispatch(toggleMenu())}
        className="ml-auto w-5 h-5 cursor-pointer" src={closeMenuButton} alt="" />
    </div>
    <div className="flex flex-col gap-4 justify-center items-start text-white uppercase text-[16px]">
      <NavLink to={"/"}><span className="font-[700] mr-2">00</span> Home</NavLink>
      <NavLink to={"/destination"}><span className="font-[700] mr-2">01</span> Destination</NavLink>
      <NavLink to={"/crew"}><span className="font-[700] mr-2">02</span> Crew</NavLink>
      <NavLink to={"/technology"}><span className="font-[700] mr-2">03</span> Technology</NavLink>
    </div>
  </div>;
}
