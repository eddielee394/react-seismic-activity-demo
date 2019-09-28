import React from "react";
import axios from "axios";
import mock from "../data/mock";
import { Api } from "../utils";
import { shallow } from "enzyme";
import LocationList from "../app/components/Location/LocationList";

jest.mock("axios");

describe("LocationList Component", () => {
  describe("when rendered", () => {
    it("should fetch a list of locations", () => {
      const getSpy = jest.spyOn(axios, "get");
      const locationListInstance = shallow(<LocationList />);
      expect(getSpy).toBeCalled();
    });
  });
});
