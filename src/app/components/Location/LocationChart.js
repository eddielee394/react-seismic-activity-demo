import React, { useState } from "react";
import {
  FlexibleXYPlot,
  Hint,
  HorizontalGridLines,
  MarkSeries,
  VerticalGridLines,
  XAxis,
  YAxis
} from "react-vis";

const LocationChart = props => {
  const [state, setState] = useState({ hoverValue: null });

  const { data } = props;
  const { hoverValue } = state;

  /**
   * Resets hint value
   * @private
   */
  const _handleForgetValue = () => {
    setState({ hoverValue: null });
  };

  /**
   * Sets hint value
   * @param value
   * @private
   */
  const _handleRememberValue = value => {
    setState({ hoverValue: value });
  };

  return (
    <div className="pb-24 sm:p-16 h-256">
      {console.log(data)}
      <FlexibleXYPlot>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries
          onValueMouseOver={_handleRememberValue}
          onValueMouseOut={_handleForgetValue}
          data={data}
        />
        {hoverValue ? <Hint value={hoverValue} /> : null}
      </FlexibleXYPlot>
    </div>
  );
};

export default LocationChart;
