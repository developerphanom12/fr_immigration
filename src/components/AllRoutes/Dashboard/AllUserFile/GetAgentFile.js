import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
import cogoToast from "cogo-toast";
import { useNavigate } from "react-router-dom";
import { EXCHANGE_URLS_ADMIN } from "../../../URLS";

export default function GetAgentFile() {
  const [getAgent, setGetAgent] = useState("");
  const navigate = useNavigate();

  const [status, setStatus] = useState({
    userId: "",
    email: "",
    is_aprooved: "",
  });

  const getAgentApi = async () => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_ADMIN}/getagent`,
        axiosConfig
      );
      console.log("responsee", res?.data?.data);
      if (res?.status === 201) {
        setGetAgent(res?.data?.data);
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  const statusApi = async () => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const response = await axios.post(
        `${EXCHANGE_URLS_ADMIN}/updat11e`,
        status,
        axiosConfig
      );
      console.log("response", response?.data);
      if (response?.status === 201) {
        cogoToast.success(`Email: ${status.email}`);
        navigate("/dashboardd");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleClick = (userId, isApproved) => {
    const currentUser = getAgent.find((agent) => agent.id === userId);
    if (currentUser) {
      setStatus({
        userId,
        email: currentUser.email,
        is_aprooved: isApproved ? 1 : 0,
      });
      if (status.is_aprooved === 1) {
        cogoToast.success("Agent Approved");
      } else {
        cogoToast.error("Agent Reject");
      }
      statusApi();
    } else {
      cogoToast.error("User not found");
    }
  };

  useEffect(() => {
    getAgentApi();
  }, []);

  return (
    <Root>
      <div className="app_table">
        <div className="heading">Agents List For Approve/Reject</div>
        <div className="app_header">
          <div>Agent ID</div>
          <div>First Name</div>
          <div>Last Name</div>
          <div>Email </div>
          <div>Phone Number</div>
          <div>Approve/Reject</div>
        </div>
        {getAgent &&
          getAgent.map((i) => {
            return (
              <div className="app_body" key={i.id}>
                <div>{i.id}</div>
                <div>{i.firstname}</div>
                <div>{i.lastname}</div>
                <div>{i.email}</div>
                <div>{i.phone_number}</div>
                <div className="iconn">
                  <button
                    className="right"
                    onClick={() => handleClick(i.id, 1)}
                  >
                    <IoCheckmarkSharp />
                  </button>
                  <button
                    className="wrong"
                    onClick={() => handleClick(i.id, 0)}
                  >
                    <IoCloseSharp />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  padding-left: 80px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }

  .app_table {
    font-family: "Roboto";
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px 0px;
    width: 85%;
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
      .iconn {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;
        svg {
          color: #fff;
          width: 20px;
          height: 20px;
         
        }
        .right {
          border: none;
          border-radius: 5px;
          padding: 5px 7px;
          background-color: #884DFF;
      
          &:hover {
            cursor: pointer;
            color: #ffffff;
            background-color: green;
          }
        }
        .wrong {
          border: none;
          border-radius: 5px;
          padding: 5px 7px;
          background: #C5A8FF;
          &:hover {
            cursor: pointer;
            color: #ffffff;
            background-color: red;
            
          }
        }
      }
    }
  }
`;
