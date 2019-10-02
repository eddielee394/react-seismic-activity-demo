import React from "react";
import "../data";
import "../assets/styles/index.css";
import { LocationContainer } from "./components/Location";
import { toast } from "react-toastify";

toast.configure();

const App = () => {
  return (
    <div className="main-wrapper">
      <main>
        <LocationContainer />
      </main>
    </div>
  );
};

export default App;
