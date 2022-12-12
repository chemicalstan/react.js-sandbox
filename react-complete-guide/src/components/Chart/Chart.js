import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({ dataPoints, maxValue }) {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar key={dataPoint.label} {...dataPoint} maxValue={maxValue} />
        );
      })}
    </div>
  );
}

export default Chart;
