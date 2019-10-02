import React from "react";
import {
  getByTestId,
  queryByTestId,
  render,
  wait
} from "@testing-library/react";
import { LocationContainer } from "../../app/components/Location";
import { Api } from "../../utils";
import "../../data";
import { toast } from "react-toastify";

jest.mock("../../utils");
jest.mock("react-toastify");

afterEach(() => {
  jest.resetAllMocks();
});

/**
 * Loads a mockable location
 * @param overrides
 * @return {{name: string, x: number, y: number, magnitude: string, id: number}}
 */
function loadLocation(overrides) {
  return {
    id: 1,
    name: "TEST_LOCATION_NAME",
    x: 2,
    y: 3,
    magnitude: "TEST_LOCATION_MAGNITUDE"
  };
}

describe("LocationContainer", () => {
  test("calls getLocations when mounted", async () => {
    Api.getLocations.mockResolvedValueOnce(loadLocation());

    //it should render the component
    render(<LocationContainer />);

    //it should display the loader
    const loader = getByTestId(document.body, "loader-container");
    expect(loader).toBeInTheDocument();

    //it should fire the getlocations api request
    expect(Api.getLocations).toHaveBeenCalledTimes(1);
    await wait();

    //it should hide the loader
    const isLoaderRendered = await queryByTestId(
      document.body,
      "loader-container"
    );
    expect(isLoaderRendered).toBeNull();
  });

  test("an error is returned when getLocations request fails", async () => {
    const message = "TEST_ERROR_MESSAGE";
    Api.getLocations.mockRejectedValueOnce({ message });

    //it should render the component
    render(<LocationContainer />);
    await wait();

    //it should display the loader
    const loader = getByTestId(document.body, "loader-container");
    expect(loader).toBeInTheDocument();

    //it should call the toast notification
    expect(toast.error).toHaveBeenCalled();
  });
});
