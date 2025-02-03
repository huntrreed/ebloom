import { plantsData } from "../data";
// import arrow from "../assets/icons/arrowBlack.png";
import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

interface PlantData {
  id: string;
  img: string;
  title: string;
  price: string;
}

interface SliderProps {
  plants: PlantData[];
}

const PlantSlider: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  if (!isVisible) return null; // Hide if isVisible is false

  return (
    <section className="h-full w-full justify-evenly flex flex-col my-4">
      <div className="px-8 font-Lora_Reg text-sm py-4 ">
        <h3 className="md:px-6  font-Quicksand_L text-base px-2">OUR SHOP</h3>
        <p className="text-left font-Belleza text-xl font-extrabold mt-4 lg:w-4/5 lg:text-2xl lg:p-4  px-2">
          Here are the best sellers from our varieties
        </p>
        <div className="w-1/2 ml-4  mt-6 lg:mt-2  ">
          <a
            className="xs:text-xs sm:text-sm bg-black w-[180px] text-white py-2 px-4 md:my-4 lg:px-8 rounded-3xl font-Quicksand_L"
            href="/shop"
          >
            See all
          </a>
        </div>
      </div>

      <div className="">
        <Slider plants={plantsData} />
      </div>
    </section>
  );
};
export default PlantSlider;
