import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDestination } from "../../features/destination/destinationSlice";
import data from "../../data.json"

export default function Destination() {
  const { destinationData, currentDestination } = useSelector((state) => state.destination)
  const dispatch = useDispatch()
  console.log(destinationData[currentDestination]);
  const destinationImg = destinationData[currentDestination].images.png
  console.log(destinationImg);

  return <div className="bg-bgDestinationMobile md:bg-bgDestinationTablet lg:bg-bgDestinationDesktop h-screen bg-cover overflow-hidden">
    <div className="mt-20 text-white w-full">
      <h1 className="text-center font-barlow uppercase text-[16px]"><span className="text-[rgba(255,255,255,0.4)] mr-4">01</span>Pick your destination</h1>

      <div>
        <img src={destinationImg} alt="" />
        <div className="flex justify-between items-center w-full uppercase px-8 h">
          {
            destinationData.map((destination, index) => (
              <div key={index} className="relative w-full cursor-pointer text-center" onClick={() => {
                dispatch(setDestination(index))
              }}>
                <span className={`${currentDestination === index && "active"} text-[14px] barlow`} key={index}>{destination.name}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </div>;
}
