import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate()
  return <div className={`bg-bgHomeMobile md:bg-bgHomeTablet lg:bg-bgHomeDesktop h-screen bg-cover overflow-auto`}>
    <div className="text-white mt-40 md:mt-64  flex flex-col lg:flex-row lg:justify-around lg:items-end items-center gap-4 md:gap-28">
      <div className="text-center px-4">
        <p className="text-secondary lg:text-[28px] font-barlow text-[16px] md:text:[20px]">SO, YOU WANT TO TRAVEL TO</p>
        <h1 className="font-bellefair text-[80px] md:text-[150px]">SPACE</h1>
        <p className="font-barlow text-[15px] md:text-[16px] lg:text-[18px] max-w-md">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <span onClick={() => navigate("/destination")} className="font-bellefair md:text-[32px] cursor-pointer border-none hover:outline outline-offset-2 outline-[40px] outline-[rgba(255,255,255,0.1)] w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] text-[20px] uppercase bg-white text-primary grid rounded-full place-items-center">Explore</span>
    </div>
  </div>;
}
