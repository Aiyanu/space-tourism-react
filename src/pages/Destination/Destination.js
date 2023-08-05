import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDestination } from "../../features/destination/destinationSlice";

export default function Destination() {
  const { destinationData, currentDestination } = useSelector((state) => state.destination)
  const dispatch = useDispatch()
  const destination = destinationData[currentDestination]

  return <div className="bg-bgDestinationMobile md:bg-bgDestinationTablet lg:bg-bgDestinationDesktop h-screen bg-cover overflow-auto lg:overflow-hidden">
    <div className="mt-20 mb-16 md:mt-28 md:mb-0 text-white w-full lg:p-16">
      <h1 className="text-center md:text-left md:ml-8 font-barlow uppercase text-[16px] lg:text-3xl lg:mb-16"><span className="text-[rgba(255,255,255,0.4)] mr-4">01</span>Pick your destination</h1>
      <div className="flex gap-16 flex-col lg:flex-row w-full h-full mt-4">
        <img src={destination.images.png} className="max-w-[259px] md:max-w-sm lg:max-w-lg object-contain m-auto" alt={destination.name} />
        <div className="text-center flex flex-col justify-between items-center lg:text-left gap-4">
          <div className="w-full flex items-center justify-center">
            <div className="flex justify-between gap-4 items-center max-w-[286px] uppercase text-sm">
              {
                destinationData.map((destination, index) => (
                  <div key={index} className="relative w-full cursor-pointer text-center" onClick={() => {
                    dispatch(setDestination(index))
                  }}>
                    <span className={`${currentDestination === index && "active-tab"} text-sm md:text-base barlow`} key={index}>{destination.name}</span>
                  </div>
                ))
              }
            </div>
          </div>
          <h1 className="font-bellefair text-6xl md:text-7xl lg:text-8xl uppercase w-full ">{destination.name}</h1>
          <p className="max-w-md px-2 text-secondary font-barlow text-base lg:text-lg">{destination.description}</p>
          <div className="w-full max-w-md bg-white h-0.5 bg-opacity-10" />
          <div className="flex flex-col gap-32 md:flex-row md:justify-between">
            <div>
              <span className="text-secondary font-barlow text-sm">AVG. DISTANCE</span>
              <p className="font-bellefair text-3xl">{destination.distance}</p>
            </div>
            <div>
              <span className="text-secondary font-barlow text-sm">Est. travel time</span>
              <p className="font-bellefair text-3xl">{destination.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
