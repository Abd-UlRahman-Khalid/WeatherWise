import { create } from "zustand";

const useStore = create((set) => ({
  city: null,
  weatherId: null,
  setWeatherId: (data) => set({ weatherId: data }),
  temp: null,
  windSpeed: null,
  humidity: null,
  weatherState: null,
  setCity: (data) => set({ city: data }),
  setTemp: (data) => set({ temp: data }),
  setWindSpeed: (data) => set({ windSpeed: data }),
  setHumidity: (data) => set({ humidity: data }),
  setWeatherState: (data) => set({ weatherState: data }),
}));

export default useStore;
