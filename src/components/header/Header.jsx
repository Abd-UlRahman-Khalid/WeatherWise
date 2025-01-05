import React from "react";
import "./header.css";
import useStore from "../../store/useStore";

function Header() {
  const { city, temp, windSpeed, humidity, weatherState, weatherId } =
    useStore();
  console.log(city);

  const weatherEmoji = (id) => {
    switch (true) {
      case weatherId >= 200 && weatherId < 300:
        return "🌦️";
      case weatherId >= 300 && weatherId < 400:
        return "🌧️";
      case weatherId >= 500 && weatherId < 600:
        return "🌧️";
      case weatherId >= 600 && weatherId < 700:
        return "❄️";
      case weatherId >= 700 && weatherId < 800:
        return "🌫️";
      case weatherId === 800:
        return "☀️";
      case weatherId >= 801 && weatherId < 810:
        return "☁️";
      default:
        return "❓";
    }
  };
  const icon = weatherEmoji(weatherId);

  return (
    <div className="header py-10">
      <div className="flex justify-center  pb-5 ">
        <div className=" w-4/5 text-center md:text-left text-white grid-none md:grid grid-cols-12 gap-4 container">
          <div className="card temp-card col-span-12 mb-5  ">
            <p className="px-10 pt-5">{city || "City"}</p>
            <div
              className=" flex-none md:flex flex-row-reverse
         justify-between  px-10 pb-5"
            >
              <div
                className="temp-icon
              text-5xl
              "
              >
                {icon}
              </div>
              <div className="temp">
                <h2>
                  {(temp - 273.15).toFixed(1)}
                  <sup> o</sup>C
                </h2>
                <span>{weatherState || "Sunny"}</span>
              </div>
            </div>
          </div>
          <div className="card col-span-6 col-humidity text-center ">
            <h2>
              {humidity || 0}
              <span>%</span>
            </h2>
            <p className="pb-5">Humidity</p>
          </div>
          <div className="card col-span-6 text-black text-center">
            <h2 className="font-bold">{windSpeed || 0}</h2>
            <p className="">Km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
      <div className="text-center py-5">
        <h3 className="text-2xl md:text-5xl">Check The Weather Now</h3>
        <p>HAVE A NICE DAY</p>
      </div>
    </div>
  );
}

export default Header;
