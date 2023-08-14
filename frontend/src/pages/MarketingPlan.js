import React, { useContext, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Chart from "react-apexcharts";
import { DataCxt } from "../context/dataCxt";
import { statusCxt } from "../context/statusCxt";

const MarketingPlan = () => {
  const { data } = useContext(DataCxt);
  const { status } = useContext(statusCxt);
  const categories = status.map((obj) => obj.title);
  const data_y = data.map((obj) => obj.tasks.length);

  const [state, setState] = useState({
    options: {
      colors: ["#645ec6"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: categories,
      },
    },
    series: [
      {
        name: "Task",
        data: data_y,
      },
    ],
  });
  return (
    <>
      <Navbar title={"Marketing Plan"} />
      <div className="mt-5">
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="800"
        />
      </div>
    </>
  );
};

export default MarketingPlan;
