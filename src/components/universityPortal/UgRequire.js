import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_UNIVERSITY } from "../URLS";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UgRequire() {
  const [require, setRequire] = useState([]);
  const userDetails = useSelector((state) => state?.users.user);

  const navigate = useNavigate();
  const ugrequireApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Changed 'authorization' to 'Authorization'
        },
      };

      const res = await axios.get(
        `${EXCHANGE_URLS_UNIVERSITY}/getallug`,
        axiosConfig
      );
      if (res.status === 201) {
        const uniqueRequirements = res?.data?.data;
        setRequire(uniqueRequirements);
        console.log("res", res?.data?.data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    ugrequireApi();
  }, []);
  return (
    <Root>
      <h3>UG Entry Requirement</h3>
      {userDetails.role === "university" ? (
        <div className="child1">
          <button
            onClick={() => {
              navigate("/getug");
            }}
          >
            Add UG Requirements
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="app_table">
        <div className="app_header">
          <div>English Requirement</div>
          <div>Academic Requirement</div>
          <div>Offer Timeline</div>
          <div>Credibility</div>
          <div>Finance</div>
          <div>Discount</div>
        </div>
        {require &&
          require.map((requirement, index) => (
            <div key={index} className="app_body">
              <div>
                <p>{requirement?.english_requirement}</p>
              </div>
              <div className="child">
                <p>{requirement?.academic_requirement}</p>
              </div>
              <div>
                <p>{requirement?.offer_timeline}</p>
              </div>
              <div>
                <h6>{requirement?.Credibility}</h6>
              </div>
              <div>
                <p>{requirement?.Finance}</p>
              </div>
              <div>
                <p>{requirement?.Discount}</p>
              </div>
            </div>
          ))}
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f8f8f8;
  color: #202020;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: normal;
  padding-left: 90px;
    @media (max-width:788px){
      padding-left: 60px;
    }
  vertical-align: middle;
  height: 100%;
  .child1 {
    button {
      width: 200px;
      height: 40px;
      margin: 5px;
      border-radius: 20px;
      border: none;
      /* padding: 10px; */
      background: #57be1f;
      color: #ffffff;
      @media (max-width: 566px) {
        width: 120px;
        height: 20px;
      }
    }
  }
  p {
    padding: 0;
    margin: 0;
    text-transform: capitalize;
    text-align: left;
    font-family: "Roboto", "sana-serif";
  }

  .app_table {
    display: flex;
    flex-direction: column;
    margin: 20px;
    font-family: "Roboto", "sana-serif";
    .app_header {
      display: flex;
      background-color: #fff3ee;
      text-align: center;

      > div {
        flex: 1;
        border: 1px solid #dee2e6;
        padding: 20px;
        /* text-align: center; */
      }
    }
    .app_body {
      display: flex;
      font-family: "Roboto", sans-serif;
      height: 100%;
      .child {
        font-size: 13px;
      }
      > div {
        flex: 1;
        border: 0.3px solid #fbfbfd;
        text-transform: capitalize;
        background-color: #e7e7e8;
        text-align: center;
        padding: 15px 5px;

        h6 {
          font-weight: 600;
          text-align: left;
          font-size: small;
        }

        &:nth-child(odd) {
          background-color: #e7e7e8;
        }

        &:nth-child(even) {
          background-color: white;
        }
      }
      &:hover {
        background-color: lightgray;
        cursor: pointer;
      }
    }
  }
`;
