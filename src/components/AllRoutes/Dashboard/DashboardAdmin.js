import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { EXCHANGE_URLS_APPLICATION } from "../../URLS";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainChart from "./Charts/MainChart";
import { loaderAction } from "../../../redux/users/action";

export default function DashboardAdmin() {
  const [count, setCount] = useState([]);
  const [staffCount, setStaffCount] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state?.users?.user);

  const countApi = async () => {
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
      console.log("getby", res.status);
      if (res?.status === 201) {
        setCount(res?.data?.data);
        dispatch(loaderAction(false));
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const allStaffApi = async () => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_APPLICATION}/staffcount`,
        axiosConfig
      );
      console.log("resssss", res?.data?.data);
      if (res?.status === 201) {
        setStaffCount(res?.data?.data);
        dispatch(loaderAction(false));
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    countApi();
    allStaffApi();
  }, []);

  console.log("count====", staffCount);

  return (
    <Root>
      
      {userDetails.role === "admin" ? (
        <>
      <div className="graphs">
        <MainChart />
      </div>
        <div className="button_box">
          <div className="button_box_child">
            <button
              onClick={() => {
                navigate("/getagentfile");
              }}
            >
              All Agents Login Requests
            </button>
          </div>
          <div className="button_box_child">
            <button
              onClick={() => {
                navigate("/getuniv");
              }}
            >
              All Universities Login Requests
            </button>
          </div>
          <div className="button_box_child">
            <button
              onClick={() => {
                navigate("/getstudent");
              }}
            >
              All Students Login Requests
            </button>
          </div>
        </div>
        </>
      ) : (
        ""
      )}

      <div className="app_table">
        <div className="heading">AGENT SHEET</div>
        <div className="app_header">
          <div>Agent Name</div>
          <div>Rejected Application</div>
          <div>Pending Application</div>
          <div>Approved Application </div>
          <div>Total Application</div>
        </div>

        {count &&
          count?.map((i) => {
            return (
              <div className="app_body">
                <div className="colorr">{i?.username}</div>
                <div>{i?.rejectedCount}</div>
                <div className="colorr">{i?.pendingCount}</div>
                <div>{i?.approvedCount}</div>
                <div className="colorr">{i?.userTotalApplications}</div>
              </div>
            );
          })}
      </div>
      {userDetails.role === "admin" ? (
        <div className="app_table">
          <div className="heading2">STAFF SHEET</div>
          <div className="app_header">
            <div>Staff Name</div>
            <div>Rejected Application</div>
            <div>Pending Application</div>
            <div>Approved Application </div>
            <div>Total Application</div>
          </div>
          {staffCount &&
            staffCount?.map((i) => {
              return (
                <div className="app_body">
                  <div className="colorr2">{i?.username}</div>
                  <div>{i?.rejectedCount}</div>
                  <div className="colorr2">{i?.pendingCount}</div>
                  <div>{i?.approvedCount}</div>
                  <div className="colorr2">{i?.userTotalApplications}</div>
                </div>
              );
            })}
        </div>
      ) : (
        ""
      )}
    </Root>
  );
}
const Root = styled.section`
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  padding-bottom: 20px;
  padding-left: 80px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }

  .button_box {
    display: flex;
    width: 80%;
    border-radius: 10px;
    justify-content: space-evenly;
    box-shadow: 0px 6px 15.6px 0px rgba(0, 0, 0, 0.25);

    .button_box_child {
      padding: 15px;
      background-color: #ffffff;
      text-align: center;
      border-radius: 4px;
      button {
        border: none;
        padding: 6px;
        font-size: 12px;
        background-color: #884dff;
        color: #ffffff;
        border-radius: 50px;
        transition: transform 250ms;
        &:hover {
          cursor: pointer;
          transform: translateY(-5px);
        }
      }
    }
  }
  .app_table {
    font-family: "Roboto";
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px 0px;
    width: 80%;
    box-shadow: 0px 6px 15.6px 0px rgba(0, 0, 0, 0.25);
    .heading {
      width: 100%;
      font-size: 18px;
      padding: 10px;
      font-weight: 700;
      text-align: center;
      background: #f7f6fe;
      border-bottom: 4px solid #884dff;
    }
    .heading2 {
      width: 100%;
      font-size: 18px;
      padding: 10px;
      font-weight: 700;
      text-align: center;
      background: #f0f9ff;
      border-bottom: 4px solid #0095ff;
    }
    .app_header {
      display: flex;
      width: 100%;
      font-weight: 600;
      color: black;
      > div {
        flex: 1;
        font-family: "Roboto";
        border: 1px solid #dee2e6;
        padding: 10px;
        font-size: 12px;
        @media (max-width: 700px) {
          font-size: 10px;
          min-width: 50px;
          padding: 5px;
        }
      }
    }
    .app_body {
      display: flex;
      width: 100%;
      font-family: "Roboto", sans-serif;

      > div {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        border: 0.3px solid lightgray;
        padding: 7px;
        font-size: 11px;
        text-transform: capitalize;

        @media (max-width: 700px) {
          font-size: 10px;
          min-width: 50px;
          padding: 5px;
        }
      }
      .colorr2 {
        /* background-color: #CDE7FF; */
      }
      .iconn {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;
        svg {
          color: #000080;
          width: 20px;
          height: 20px;
          &:hover {
            color: green;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
