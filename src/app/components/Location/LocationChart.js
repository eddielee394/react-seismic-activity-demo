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
import { renameProp } from "../../../utils";
import Paper from "@material-ui/core/Paper";

const LocationChart = props => {
  const [state, setState] = useState({ hoverValue: null });

  const { data } = props;
  const { hoverValue } = state;
  const hintLabels = { label: "magnitude", keyName: "size" };

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

  /**
   * Formats the custom chart hint
   * @unstable
   * @param value
   * @param newValue
   * @return {*}
   */
  function customHintFormat(value, newValue) {
    return renameProp(newValue.keyName, newValue.label, value);
  }

  return (
    <div className="pb-24 sm:p-16 h-256">
      <Paper>
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
          {hoverValue ? (
            <Hint value={customHintFormat(hoverValue, hintLabels)} />
          ) : null}
        </FlexibleXYPlot>
      </Paper>
    </div>
  );
};

export default LocationChart;
