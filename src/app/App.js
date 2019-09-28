import React from "react";
import logo from "../assets/images/logo.svg";
import "../assets/styles/App.css";
import LocationList from "./components/Location/LocationList";
import "../data";

const App = () => {
  return (
    <div className="App">
      <LocationList />
    </div>
  );
};

export default App;
