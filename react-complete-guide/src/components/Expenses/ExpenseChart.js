import React from "react";

import Chart from "../Chart/Chart";

const ExpenseChart = ({ expenses }) => {
  const chartDataPoint = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  let maxValue = 0;

  for (const expense of expenses) {
    chartDataPoint[expense.date.getMonth()].value += expense.amount;

    if (chartDataPoint[expense.date.getMonth()].value > maxValue)
      maxValue = chartDataPoint[expense.date.getMonth()].value;
  }

  return <Chart dataPoints={chartDataPoint} maxValue={maxValue} />;
};

export default ExpenseChart;
