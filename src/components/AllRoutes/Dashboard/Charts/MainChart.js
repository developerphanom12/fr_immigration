import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DonutChart from "./DonutChart";
import axios from "axios";
import { EXCHANGE_URLS_APPLICATION } from "../../../URLS";
import ApexCharts from "./ApexCharts";
import BarCharts from "./BarCharts";

export default function MainChart() {
  const [dashboardVal, setDashboardVal] = useState();

  const dashboardApi = async () => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_APPLICATION}/count`,
        axiosConfig
      );
      console.log("resss", res?.data?.data);
      setDashboardVal(res?.data?.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    dashboardApi();
  }, []);

  return (
    <Root>
      <ApexCharts />
      <DonutChart key={JSON.stringify(dashboardVal)} data={dashboardVal} />
      <BarCharts />
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
