import React from "react";
import "./hero.css";
import useStore from "../../store/useStore";

function Hero() {
  const {
    setTemp,
    setWindSpeed,
    setHumidity,
    setCity,
    setWeatherState,
    setWeatherId,
  } = useStore();
  const apiKey = "4f3a6a0b7723f03cf73ed4e52c8682b0";

  async function getWeatherData(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiURL);
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Could not fetch weather data");
    }
    return data;
  }

  const handleSearchChange = async (e) => {
    const city = e.target.value;
    if (city) {
      try {
        const weatherdata = await getWeatherData(city);
        console.log(weatherdata);
        setTemp(weatherdata.main.temp);
        setWeatherState(weatherdata.weather[0].description);
        setHumidity(weatherdata.main.humidity);
        setWindSpeed(weatherdata.wind.speed);
        setCity(weatherdata.name);
        setWeatherId(weatherdata.weather[0].id);
      } catch {
        console.error(error);
      }
    }
  };
  getWeatherData("egypt");

  return (
    <div className=" hero text-center p-5">
      <input
        className="my-5 w-4/5"
        type="text"
        placeholder="Search For Your Country........"
        onChange={handleSearchChange}
      />
      <div className="mb-3 text-white ">
        <h1 className="mb-2">Check The Weather Now</h1>
        <p>HAVE A NICE DAY</p>
      </div>
    </div>
  );
}

export default Hero;
