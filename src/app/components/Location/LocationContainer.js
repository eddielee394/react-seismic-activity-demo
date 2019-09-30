import React, { useEffect, useState } from "react";
import { Api } from "../../../utils";
import _ from "lodash";
import LocationTable from "./LocationTable";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { Tab, Tabs } from "@material-ui/core";
import LocationChart from "./LocationChart";
import { BeatLoader } from "react-spinners";

const LocationContainer = () => {
  const [locations, setLocations] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /**
     * Fetches location data
     * @type {Promise<void>}
     */
    Api.getLocations()
      .then(response => {
        return setLocations(response.data);
      })
      .then(res => setIsLoading(false));
  }, []);

  /**
   * Tab change handler
   * @param event
   * @param value
   */
  const handleTabChange = (event, value) => {
    setSelectedTab(value);
  };

  /**
   * Filters unique locations based on key value
   * @type {function(Array): Array}
   */
  const filterUniqueLocations = key => _.uniqBy(locations, key);

  const showContent = isLoading ? (
    <div className="container flex flex-col flex-grow mx-auto px-8 sm:px-16 py-24">
      <div className="flex justify-center align-middle my-128">
        <BeatLoader color={"#123abc"} loading={isLoading} />
      </div>
    </div>
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
