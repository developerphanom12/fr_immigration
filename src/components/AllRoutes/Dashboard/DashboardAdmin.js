import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { EXCHANGE_URLS_APPLICATION } from "../../URLS";
import Loader from "../../Loader";
export default function DashboardAdmin() {
  const [loader,setLoader] = useState(true);
  const [dashboard, setDashboard] = useState({
    approved: "",
    pending: "",
    rejected: "",
    totalApplications: "",
  });
  const dashboardApi = async () => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_APPLICATION}/getbydata`,
        axiosConfig
      );
      console.log("resss", res?.data?.data);
      setDashboard(res?.data?.data);
      setLoader(false)
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    dashboardApi();
    setLoader(true)
  }, []);
  console.log("dashboarddd", dashboard);
  return (
    <Root>
      <h3>WELCOME TO DASHBOARD</h3>
      {loader?<Loader/>:
      
      <div className="dashboard_details">
        <div className="details">
          <div>
            <p> Approve Documents:- {dashboard?.approved}</p>
          </div>
          <div>
            <p> Application Pending:- {dashboard?.pending}</p>
          </div>
          <div>
            <p>Rejected Documents:- {dashboard?.rejected}</p>
          </div>
          <div>
            <p>Total Applications:- {dashboard?.totalApplications}</p>
          </div>
        </div>
        
      </div>
      }
      <div className="notice">
        <h2>Notice Board</h2>
        <ul>
        <li>Glasgow Caledonian University application deadline-----------------26-11-2023</li>
        <li>Swansea University application deadline-----------------------------6-12-2023</li>
        <li>Himachal Pradesh University application deadline-------------------20-11-2023</li>
        <li>Amity University application deadline------------------------------29-10-2023</li>
        <li>Sardar Patel University application deadline-----------------------26-11-2023</li>
        </ul>
        </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  .dashboard_details {
    flex-wrap: wrap;
    background-color:#87CEFA;
    border-radius: 10px;
    display: flex;
    margin: 4px;
    min-height: 80px;
    padding: 5px;
    margin-bottom: 20px;
    .details {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      height: 100%;
      font-size: 17px;
      font-family: "Times New Roman", serif;
      @media (max-width: 789px) {
        flex-direction: column;
      }
      > div {
        display: flex;
        margin: 5px;
        max-width: 230px;
        width: 100%;
        min-width: 50px;
        border-radius: 10px;
        background-color: white;
        align-items: center;
        justify-content: center;
        gap: 2px;
        border-left: 2px solid black;
        border-right: 2px solid black;
        &:hover {
          background-color:#FFDAB9;
          cursor: pointer;
        }
        p {
          font-style: oblique;
          font-weight: 600;
          margin: 0;
          text-align: center;
        }
      }
    }
  }

  .notice {
    display: flex;
    font-family: Courier, monospace;
    flex-wrap: wrap;
    flex-direction:column;
    border:1px solid black;
    margin: 10px;
    h2{
      color: rgb(20, 99, 178);
      margin:10px;
    }
  }

`;
