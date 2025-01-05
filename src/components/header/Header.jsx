import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header py-10">
      <div className="flex justify-center  pb-5 ">
        <div className=" w-4/5 text-center md:text-left text-white grid-none md:grid grid-cols-12 gap-4 container">
          <div className="card temp-card col-span-12 mb-5  ">
            <p className="px-10 pt-5">Egypt</p>
            <div
              className=" flex-none md:flex flex-row-reverse
         justify-between  px-10 pb-5"
            >
              <div className="temp-icon">
                <img
                  src="../../assets/weather-clear-symbolic-icon-2048x2048-v4afvu7m.png"
                  alt="Sunny"
                />
              </div>
              <div className="temp">
                <h2>
                  25<sup>o</sup>C
                </h2>
                <span>SUNNY</span>
              </div>
            </div>
          </div>
          <div className="card col-span-6 col-humidity text-center ">
            <h2>
              25<span>%</span>
            </h2>
            <p className="pb-5">Humidity</p>
          </div>
          <div className="card col-span-6 text-black text-center">
            <h2 className="font-bold">25</h2>
            <p className="">Km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
      <div className="text-center py-5">
        <h3>Check The Weather Now</h3>
        <p>HAVE A NICE DAY</p>
      </div>
    </div>
  );
}

export default Header;
