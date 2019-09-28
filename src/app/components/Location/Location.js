import React from "react";

const Location = props => {
  const { data } = props;
  return (
    <div>
      <div className="location-container">
        <div>Id: {data.id}</div>
        <div>Location: {data.location}</div>
        <div>X coord: {data.x}</div>
        <div>Y coord: {data.y}</div>
        <div>Magnitude: {data.magnitude}</div>
        <div>Depth: {data.depth}</div>
      </div>
    </div>
  );
};

export default Location;
