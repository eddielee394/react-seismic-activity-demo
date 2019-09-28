import React from "react";
import LocationList from "../../app/components/Location/LocationList";
import { shallow } from "";

describe("LocationList component", () => {
  describe("when rendered", () => {
    it("should display a list", () => {
      const locationList = shallow(<LocationList />);
    });
  });
});
