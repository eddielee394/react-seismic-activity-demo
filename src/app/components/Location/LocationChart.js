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
  const { data } = props;
  const [hoverValue1, setHoverValue1] = useState(null);

  /**
   * Resets hint value
   * @private
   */
  const _handleForgetValue = () => {
    setHoverValue1(null);
  };

  /**
   * Sets hint value
   * @param value
   * @private
   */
  const _handleRememberValue = value => {
    setHoverValue1(value);
  };

  return (
    <div className="pb-24 sm:p-16 h-256">
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
        {hoverValue1 ? <Hint value={hoverValue1} /> : null}
      </FlexibleXYPlot>
    </div>
  );
};

export default LocationChart;
