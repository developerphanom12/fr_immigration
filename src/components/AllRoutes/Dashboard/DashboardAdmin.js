import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { EXCHANGE_URLS_APPLICATION } from "../../URLS";
import Loader from "../../Loader";
export default function DashboardAdmin() {
  const [loader, setLoader] = useState(true);
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
      setLoader(false);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    dashboardApi();
    setLoader(true);
  }, []);
  console.log("dashboarddd", dashboard);
  return (
    <Root>
      <h3> Dashboard</h3>
      {loader ? (
        <Loader />
      ) : (
        <div className="dashboard_details">
          
          <div className="details">
            <div>
              <p>
             
                Approve Documents <p>{dashboard?.approved ?? 0}</p>
              </p>
            </div>
            <div>
              <p>
                
                Application Pending<p>{dashboard?.pending ?? 0}</p>
              </p>
            </div>
            <div>
              <p>
                Rejected Documents<p>{dashboard?.rejected ?? 0}</p>
              </p>
            </div>
            <div>
              <p>
                Total Applications<p>{dashboard?.totalApplications ?? 0}</p>
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="notice">
        <h2>Notice Board</h2>
        <ul>
          <li>
            Glasgow Caledonian University application
            deadline-----------------26-11-2023
          </li>
          <li>
            Swansea University application
            deadline-----------------------------6-12-2023
          </li>
          <li>
            Himachal Pradesh University application
            deadline-------------------20-11-2023
          </li>
          <li>
            Amity University application
            deadline------------------------------29-10-2023
          </li>
          <li>
            Sardar Patel University application
            deadline-----------------------26-11-2023
          </li>
        </ul>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: 32px "Cairo", sans-serif;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  background-color: #f8f8f8;
  h3 {
    margin: 20px;
  }
  .dashboard_details {
    flex-wrap: wrap;
    background-color: #f8f8f8;
    border-radius: 10px;
    display: flex;
    margin: 4px;
    min-height: 100px;
    padding: 5px;
    margin-bottom: 20px;
    .details {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      height: 100%;
      font-size: 17px;

      @media (max-width: 789px) {
        flex-direction: column;
      }
      > div {
        display: flex;
        margin: 5px;
        max-width: 250px;
        width: 100%;
        min-width: 50px;
        border-radius: 20px;
        background-color: white;
        align-items: center;
        justify-content: center;
        gap: 10px;
        &:hover {
          background-color: #1e33f2;
          cursor: pointer;
          color: #f8f8f8;
        }
        p {
          /* font-style: oblique; */
          font-weight: 600;
          margin: 0;
          text-align: center;
          display: flex;
          gap: 10px;
          p {
            align-items: center;
            justify-content: center;
            display: flex;
            border-radius: 100px;
            color: #f8f8f8;
            background-color: #1e33f2;
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }

  .notice {
    display: flex;
    font-family: Courier, monospace;
    flex-wrap: wrap;
    flex-direction: column;
    border: 1px solid black;
    margin: 10px;
    h2 {
      color: rgb(20, 99, 178);
      margin: 10px;
    }
  }
`;
