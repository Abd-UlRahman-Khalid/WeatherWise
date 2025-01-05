# WeatherWise

WeatherWise is a sleek, user-friendly weather application that allows users to check real-time weather information by searching for a country. The app is built using React, Zustand for state management, and the OpenWeatherMap API for fetching weather data. The design closely follows the provided mockup, offering a visually appealing and responsive interface.

---

## **Features**

- **Search Weather by Country**: Enter the name of a country to get real-time weather data.
- **Live Weather Updates**: Displays temperature, humidity, wind speed, and weather conditions.
- **Responsive Design**: Optimized for both desktop and mobile screens.
- **Error Handling**: Displays error messages for invalid country names or network issues.
- **State Management with Zustand**: Simplifies global state handling for seamless updates.

---

## **Technologies Used**

- **React**: Frontend framework for building the user interface.
- **Zustand**: Lightweight state management library.
- **OpenWeatherMap API**: Provides real-time weather data.
- **CSS**: For styling and responsive design.

---

## **Usage**

1. Enter the name of a country in the search bar.
2. View real-time weather data, including:
   - Temperature
   - Humidity
   - Wind speed
   - General weather condition
3. Use the app on both desktop and mobile devices for a seamless experience.

---

## **Folder Structure**

```plaintext
WeatherWise/
├── public/
├── src/
│   ├── assets/      # Reusable UI components
│   ├── components/      # Reusable UI components
│   ├── store/           # Custom React hooks (e.g., Zustand store)
│   └── App.js           # Main app component
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

---

## **Challenges Faced**

- Handling API errors and invalid inputs gracefully.
- Translating the design mockup into a responsive UI.
- Managing state effectively with Zustand for seamless UI updates.

---

## **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## **Acknowledgments**

- [OpenWeatherMap API](https://openweathermap.org/) for providing weather data.
- Zustand for efficient state management.
