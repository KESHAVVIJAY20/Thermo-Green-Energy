import React from "react";
import {
  FaLeaf,
  FaRocket, 
} from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

export default function VisionCard() {
  return (
    // <div>
    //   <div className="flex-1 md:flex items-center justify-center gap-5 p-10 space-y-5">
    //     {/* vision */}
    //     <div data-aos="fade-right" className="flex flex-col text-center items-center justify-center bg-teal-700 p-5 rounded-xl shadow-lg space-y-5">
    //       <span className="text-3xl">
    //         <FaRocket color="white"/>
    //       </span>
    //       <span className="text-2xl text-white">Vision</span>
    //       <i className="text-white">GTPPL’s vision is to become a pioneer in power, infra & process industries with global standard and play important role towards the all-round growth of the country.</i>
    //     </div>
    //     {/* Mission */}
    //     <div data-aos="fade-up" className="flex flex-col text-center items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg space-y-5">
    //       <span className="text-3xl">
    //         <FiTarget color="white"/>
    //       </span>
    //       <span className="text-2xl text-white">Mission</span>
    //       <i className="text-white">GTPPL’s Mission is to satisfy the customers by providing prompt services & cost-effective projects with completely customized solutions by applying intelligence and the latest technology.</i>
    //     </div>
    //     {/* Strength */}
    //     <div data-aos="fade-left" className="flex flex-col text-center items-center justify-center bg-teal-700 p-5 rounded-xl shadow-lg space-y-5">
    //       <span className="text-3xl">
    //         <FaLeaf color="white" />
    //       </span>
    //       <span className="text-2xl text-white">Strength</span>
    //       <i className="text-white">GTPPL’s strength is a vast chain of efficient, experienced & dedicated team, healthy working environment & strong techno commercial background.</i>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full md:flex flex-1 p-5 md:space-y-0 space-y-5 gap-5">
      {/* vision */}
        <div data-aos="fade-right" className="flex flex-col text-center justify-center items-center bg-teal-600 w-full p-4 rounded-xl text-white space-y-5">
          <FaRocket color="white" size={40} />
          <p className="text-3xl">Vision</p>
          <span>GTPPL’s vision is to become a pioneer in power, infra & process industries with global standard and play important role towards the all-round growth of the country.</span>
        </div>
      {/* mission */}
      <div data-aos="fade-up" className="flex flex-col text-center justify-center items-center bg-teal-600 w-full p-4 rounded-xl text-white space-y-5">
        <FiTarget color="white" size={40} />
        <p className="text-3xl">Mission</p>
        <span>GTPPL’s Mission is to satisfy the customers by providing prompt services & cost-effective projects with completely customized solutions by applying intelligence and the latest technology.</span>
      </div>
      {/* strength */}
      <div data-aos="fade-left" className="flex flex-col text-center justify-center items-center bg-teal-600 w-full p-4 rounded-xl text-white space-y-5">
        <FaLeaf color="white" size={40} />
        <p className="text-3xl">Strength</p>
        <span>GTPPL’s strength is a vast chain of efficient, experienced & dedicated team, healthy working environment & strong techno commercial background.</span>
      </div>
    </div>
  );
}
