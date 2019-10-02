import React from "react";
import { BeatLoader } from "react-spinners";

const Loader = props => {
  const { isLoading } = props;
  return (
    <div className="container flex flex-col flex-grow mx-auto px-8 sm:px-16 py-24">
      <div
        className="flex justify-center align-middle my-128 loader-container"
        data-testid="loader-container"
      >
        <BeatLoader color={"#123abc"} loading={isLoading} />
      </div>
    </div>
  );
};

export default Loader;
