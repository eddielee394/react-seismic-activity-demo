import React from "react";
import { Api } from "../../utils";
import "../../data";

describe("Api", () => {
  describe("getLocation", () => {
    it("should fetch a list of locations", () => {
      const data = { response: true };

      Api.getLocations().then(response => {
        expect(response.status).toEqual(200);
      });
    });
  });
});
