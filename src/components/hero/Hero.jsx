import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div className=" hero text-center p-5">
      <input
        className="my-5 w-4/5"
        type="text"
        placeholder="Search For Your Country........"
      />
      <div className="mb-3 text-white ">
        <h1 className="mb-2">Check The Weather Now</h1>
        <p>HAVE A NICE DAY</p>
      </div>
    </div>
  );
}

export default Hero;
