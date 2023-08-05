import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCrewMember } from "../../features/crew/crewSlice";

export default function Crew() {
  const { crewData, currentCrewMember } = useSelector((state) => state.crew);
  const dispatch = useDispatch();
  const crew = crewData[currentCrewMember];
  return (
    <div className="bg-bgCrewMobile md:bg-bgCrewTablet lg:bg-bgCrewDesktop h-screen bg-cover overflow-hidden transition-all">
      <div className="mt-20 lg:mt-16 mb-16 md:mt-28 md:mb-0 text-white w-full lg:p-16">
        <h1 className="text-center md:text-left md:ml-8 font-barlow uppercase text-[16px] lg:text-3xl  text-white">
          <span className="text-[rgba(255,255,255,0.4)] mr-4">02</span>Meet your
          Crew
        </h1>
        <div className="text-center flex gap-6 md:gap-28 flex-col md:flex-col-reverse lg:flex-row-reverse w-full h-full mt-4 p-4">
          <div className="h-[223px] md:h-[539.508px] lg:h-[712px] mx-auto w-full flex justify-center flex-col md:mt-4 lg:mt-0">
            <img
              className={`object-contain mx-auto mb-0 h-full`}
              src={crew.images.png}
              alt=""
            />
            <div className="max-sm:border-b border-solid border-white border-opacity-10"></div>
          </div>
          <div className="flex flex-col gap-8 lg:gap-20 justify-between lg:justify-center md:flex-col-reverse w-full">
            <div className="flex gap-3 justify-center items-center lg:justify-start">
              {crewData.map((crew, index) => (
                <div
                  key={index}
                  className={`  ${
                    currentCrewMember === index
                      ? "bg-white"
                      : "bg-white bg-opacity-10 hover:bg-opacity-30"
                  } w-3 h-3 lg:w-4 lg:h-4 rounded-full cursor-pointer text-center`}
                  onClick={() => {
                    dispatch(setCrewMember(index));
                  }}
                />
              ))}
            </div>
            <div className="flex flex-col gap-2 text-center lg:text-left w-full">
              <span className="text-base md:text-2xl lg:text-3xl font-bellefair uppercase text-white text-opacity-30">
                {crew.role}
              </span>
              <h1 className="font-bellefair text-2xl md:text-5xl lg:text-6xl uppercase w-full ">
                {crew.name}
              </h1>
              <p className="text-sm max-w-xs h-32 md:max-w-[458px] lg:max-w-[444px] mx-auto lg:ml-0 text-secondary font-barlow lg:text-lg">
                {crew.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
