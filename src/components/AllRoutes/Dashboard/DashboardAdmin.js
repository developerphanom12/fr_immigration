import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { EXCHANGE_URLS_APPLICATION } from "../../URLS";
// import Loader from "../../Loader";


export default function DashboardAdmin() {
  // const [loader, setLoader] = useState(true);
  const [count, setCount] = useState([]);
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
      if (res?.status == 201) {
        setCount(res?.data?.data);
        // setLoader(false);
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    countApi();
    dashboardApi();
    // setLoader(false);
  }, []);

  // const handlePassData = (i) => {
  //   dispatch(appDetailsAction(i));
  // };
  console.log("dashboarddd", dashboardVal);
  console.log("count====", count);
  return (
    <Root>
      <h3>Welcome To Dashboard</h3>
      {/* {loader ? (
        <Loader />
      ) : (
        <> */}
          <div className="dashboard_details">
            <div className="details">
              <div>
                <p>
                  Approve Documents <p>{dashboardVal?.approved ?? 0}</p>
                </p>
              </div>
              <div>
                <p>
                  Application Pending<p>{dashboardVal?.pending ?? 0}</p>
                </p>
              </div>
              <div>
                <p>
                  Rejected Documents<p>{dashboardVal?.rejected ?? 0}</p>
                </p>
              </div>
              <div>
                <p>
                  Total Applications<p>{dashboardVal?.totalApplications ?? 0}</p>
                </p>
              </div>
            </div>
          </div>
          <div className="app_table">
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
        {/* </>
      )} */}
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

      @media (max-width: 709px) {
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

  
  .app_table {
    display: flex;
    flex-direction: column;
    margin: 20px;
    .app_header {
      display: flex;
      background-color: #B5E4FB;
      > div {
        flex: 1;
        border: 1px solid #dee2e6;
        padding: 20px;
        @media (max-width:700px){
          font-size: smaller;
          min-width: 70px;
          padding: 10px;
        }
      }
    }
    .app_body {
      display: flex;
      font-family: "Cairo", sans-serif;

      > div {
        flex: 1;
        border: 0.3px solid lightgray;
        padding: 20px;
        text-transform: capitalize;
        /* background-color:aliceblue; */
        @media (max-width:700px){
          font-size: smaller;
          min-width: 70px;
          padding: 10px;
        }
      }
    }
  }
`;
