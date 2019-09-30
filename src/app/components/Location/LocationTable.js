import React from "react";
import MUIDataTable from "mui-datatables";

const LocationTable = props => {
  const { data } = props;
  const columns = [
    {
      name: "id",
      label: "Id"
    },
    {
      name: "name",
      label: "Name"
    },
    {
      name: "x",
      label: "X Coord"
    },
    {
      name: "y",
      label: "Y Coord"
    },
    {
      name: "magnitude",
      label: "Magnitude"
    }
  ];

  return (
    <div className="pb-24 sm:p-16">
      <MUIDataTable data={data} columns={columns} />
    </div>
  );
};

export default LocationTable;
