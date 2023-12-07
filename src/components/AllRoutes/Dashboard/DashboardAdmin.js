import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { EXCHANGE_URLS_APPLICATION } from "../../URLS";
import { FaCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function DashboardAdmin() {
  const [dashboardVal, setDashboardVal] = useState();
  const [count, setCount] = useState([]);
  const [staffCount, setStaffCount] = useState([]);
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state?.users?.user);

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
      // setLoader(false);
    } catch (err) {
      console.log("err", err);
    }
  };

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
        // setLoader(false);
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
        // setLoader(false);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    countApi();
    dashboardApi();
    allStaffApi();
  }, []);

  console.log("count====", staffCount);

  return (
    <Root>
      <h3>
        <FaCircle />
        Welcome To Dashboard
      </h3>
      <div className="dashboard_details">
        <div className="details">
          <div>
            <h6>
              Approve Documents <p>{dashboardVal?.approved ?? 0}</p>
            </h6>
          </div>
          <div>
            <h6>
              Application Pending<p>{dashboardVal?.pending ?? 0}</p>
            </h6>
          </div>
          <div>
            <h6>
              Rejected Documents<p>{dashboardVal?.rejected ?? 0}</p>
            </h6>
          </div>
          <div>
            <h6>
              Total Applications<p>{dashboardVal?.totalApplications ?? 0}</p>
            </h6>
          </div>
        </div>
      </div>

      <div className="button_box">
        <div className="button_box_child">
          <h6> All Agents Login Requests</h6>
          <button
            onClick={() => {
              navigate("/getagent");
            }}
          >
            View Here
          </button>
        </div>
        <div className="button_box_child">
          <h6> All Universities Login Requests</h6>
          <button
            onClick={() => {
              navigate("/getuniv");
            }}
          >
            View Here
          </button>
        </div>
        <div className="button_box_child">
          <h6> All Students Login Requests</h6>
          <button
            onClick={() => {
              navigate("/getstudent");
            }}
          >
            View Here
          </button>
        </div>
      </div>

      <div className="app_table">
        <div className="heading">Agent Sheet . . .</div>
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
                <div>{i?.username}</div>
                <div>{i?.rejectedCount}</div>
                <div>{i?.pendingCount}</div>
                <div>{i?.approvedCount}</div>
                <div>{i?.userTotalApplications}</div>
              </div>
            );
          })}
      </div>
      {userDetails.role === "admin" ? (
        <div className="app_table">
          <div className="heading">Staff Sheet . . .</div>
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
                  <div>{i?.username}</div>
                  <div>{i?.rejectedCount}</div>
                  <div>{i?.pendingCount}</div>
                  <div>{i?.approvedCount}</div>
                  <div>{i?.userTotalApplications}</div>
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
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  background-color: #f1f1f2;
  padding-bottom: 20px;
  padding-left: 80px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  h3 {
    margin: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }
  }
  .dashboard_details {
    flex-wrap: wrap;
    background-color: #f1f1f2;
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
      font-size: 15px;

      @media (max-width: 709px) {
        flex-direction: column;
      }
      > div {
        display: flex;
        margin: 5px;
        max-width: 250px;
        width: 100%;
        min-width: 50px;
        border-radius: 10px;
        background-color: white;
        align-items: center;
        justify-content: center;
        &:hover {
          background-color: #000080;
          cursor: pointer;
          color: white;
          box-shadow: 5px 5px 6px #67686a;
          p {
            background-color: #ffffff;
            color: #000080;
          }
        }
        h6 {
          display: flex;
          font-weight: 600;
          margin: 0;
          text-align: center;
          align-items: center;
          display: flex;
          gap: 10px;
          p {
            margin: 0;
            align-items: center;
            justify-content: center;
            display: flex;
            border-radius: 100px;
            color: #ffffff;
            background-color: #000080;
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }

  .button_box {
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    .button_box_child {
      padding: 15px;
      background-color: #ffffff;
      text-align: center;
      border-radius: 4px;
      button {
        border: none;
        background-color: #000080;
        color: #ffffff;
        border-radius: 4px;
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
    flex-direction: column;
    margin: 20px 0px;
    width: 100%;
    .heading {
      width: 94%;
      font-size: 20px;
      padding: 10px;
      font-weight: 700;
    }
    .app_header {
      display: flex;
      width: 94%;
      background-color: dodgerblue;
      color: white;
      > div {
        flex: 1;
        font-family: "Roboto";
        border: 1px solid #dee2e6;
        padding: 10px;
        @media (max-width: 700px) {
          font-size: 10px;
          min-width: 50px;
          padding: 5px;
        }
      }
    }
    .app_body {
      display: flex;
      width: 94%;
      font-family: "Roboto", sans-serif;

      > div {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        border: 0.3px solid lightgray;
        padding: 7px;
        font-size: 12px;
        text-transform: capitalize;

        @media (max-width: 700px) {
          font-size: 10px;
          min-width: 50px;
          padding: 5px;
        }
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
