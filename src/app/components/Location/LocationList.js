import React, { useEffect, useState } from "react";
import Location from "./Location";
import { Api } from "../../../utils";

const LocationList = () => {
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    const response = Api.getLocations().then(response => {
      return setLocationData(response.data);
    });
  }, []);

  return (
    <div className="locationList-container">
      <div className="location-container">
        {locationData.map(location => (
          <Location key={location.id} data={location} />
        ))}
      </div>
    </div>
  );
};

export default LocationList;
