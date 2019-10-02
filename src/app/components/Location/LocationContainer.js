import React, { useEffect, useState } from "react";
import { Api } from "../../../utils";
import _ from "lodash";
import { AppBar } from "@material-ui/core";
import { Tab, Tabs } from "@material-ui/core";
import { LocationChart, LocationTable } from "../Location";
import { Loader } from "../UI";
import { toast } from "react-toastify";

const LocationContainer = () => {
  const [state, setState] = useState({
    isLoading: false,
    locations: null,
    error: null,
    selectedTab: 0
  });

  const { isLoading, locations, selectedTab } = state;

  useEffect(() => {
    //set loading
    setState({ ...state, isLoading: true });

    //fetch location data
    Api.getLocations()
      .then(response =>
        //update the container state & disable loading
        setState({ ...state, isLoading: false, locations: response.data })
      )
      .catch(e => {
        //update the container state & trigger the error notification UI
        setState({
          ...state,
          isLoading: true,
          locations: null,
          error: e.message
        });
        return toast.error(e.message, { autoClose: false });
      });
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
    <div className="location-container">
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
