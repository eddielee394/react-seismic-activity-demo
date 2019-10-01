import React, { useEffect, useState } from "react";
import { Api } from "../../../utils";
import _ from "lodash";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { Tab, Tabs } from "@material-ui/core";
import { LocationChart, LocationTable } from "../Location";
import { Loader } from "../UI";

const LocationContainer = () => {
  const [state, setState] = useState({
    isLoading: false,
    locations: null,
    error: null,
    selectedTab: 0
  });

  const { isLoading, locations, error, selectedTab } = state;

  useEffect(() => {
    //set loading
    setState({ ...state, isLoading: true });

    //fetch location data
    Api.getLocations().then(
      response =>
        setState({ ...state, isLoading: false, locations: response.data }),
      e => setState({ ...state, isLoading: false, locations: null, error: e })
    );
  }, []);

  /**
   * Tab change handler
   * @param event
   * @param value
   */
  const handleTabChange = (event, value) => {
    setState({ ...state, selectedTab: value });
  };

  /**
   * Filters unique locations based on key value
   * @type {function(Array): Array}
   */
  const filterUniqueLocations = key => _.uniqBy(locations, key);

  const showContent = isLoading ? (
    <Loader isLoading={isLoading} />
  ) : (
    <div className="container flex flex-col mx-auto px-8 sm:px-16 py-24">
      {selectedTab === 0 && (
        <LocationTable data={filterUniqueLocations("name")} />
      )}
      {selectedTab === 1 && (
        <LocationChart data={filterUniqueLocations("name")} />
      )}
    </div>
  );

  return (
    <div>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <Tab label="Table" />
          <Tab label="Chart" />
        </Tabs>
      </AppBar>
      {showContent}
    </div>
  );
};

export default LocationContainer;
