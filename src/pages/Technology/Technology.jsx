import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTech } from "../../features/technology/technologySlice";

const Technology = () => {
  const { techData, currentTech } = useSelector((state) => state.technology);
  const dispatch = useDispatch();
  const tech = techData[currentTech];
  return (
    <div className="bg-bgTechnologyMobile md:bg-bgTechnologyTablet lg:bg-bgTechnologyDesktop h-screen bg-cover overflow-auto lg:overflow-hidden">
      <div className="mt-20 mb-16 md:mt-28 md:mb-0 text-white w-full">
        <h1 className="text-center md:text-left md:ml-8 font-barlow uppercase text-[16px] lg:text-3xl lg:mb-16 text-white">
          <span className="text-[rgba(255,255,255,0.4)] mr-4">03</span>Space
          launch 101
        </h1>
      </div>
      <div className="mt-16 lg:flex justify-between lg:mt-2">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-center lg:items-center lg:gap-16 lg:mx-auto">
          <img
            className="w-full lg:hidden"
            src={tech.images.landscape}
            alt=""
          />
          <div className="flex justify-center w-full lg:w-min gap-4 lg:flex-col ">
            {techData.map((item, index) => (
              <span
                className={`w-[40px] h-[40px] md:w-[40px] md:h-[40px] lg:w-[80px] lg:h-[80px] rounded-full grid place-items-center cursor-pointer text-base lg:text-2xl ${
                  index === currentTech
                    ? "bg-white text-black"
                    : "text-white border border-solid border-white"
                }`}
                key={index}
                onClick={() => dispatch(setTech(index))}
              >
                {index + 1}
              </span>
            ))}
          </div>
          <div className="text-center lg:text-left w-full flex flex-col gap-4 lg:w-[470px]">
            <span className="text-sm md:text-base font-barlow text-secondary">
              THE TERMINOLOGY…
            </span>
            <h1 className="text-2xl md:text-[40px] lg:text-[56px] font-bellefair text-white uppercase">
              {tech.name}
            </h1>
            <p className="text-sm md:text-base lg:text-lg font-barlow text-secondary max-w-[327px] md:max-w-[458px] lg:max-w-[444px] mx-auto lg:mx-0">
              {tech.description}
            </p>
          </div>
        </div>
        <img className="hidden lg:block" src={tech.images.portrait} alt="" />
      </div>
    </div>
  );
};

export default Technology;
