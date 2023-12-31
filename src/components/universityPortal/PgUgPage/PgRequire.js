import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_UNIVERSITY } from "../../URLS";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PgRequire() {
  const [require, setRequire] = useState([]);
  const userDetails = useSelector((state) => state?.users.user);

  const navigate = useNavigate();
  const pgrequireApi = async () => {

    try {
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.get(
        `${EXCHANGE_URLS_UNIVERSITY}/getallpg
        `,
        axiosConfig
      );

      if (res.status === 201) {
        const uniqueRequirements = res?.data?.data
        setRequire(uniqueRequirements);
        console.log("res", uniqueRequirements);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    pgrequireApi();
  }, []);

  console.log("require", require);
  return (
    <Root>
      <h3>PG Entry Requirement</h3>
      {userDetails.role === "university" || "admin" ? (
        <div className="child1">
          <button
            onClick={() => {
              navigate("/getpg");
            }}
          >
            Add PG Requirements
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
              <div>
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
  vertical-align: middle;
  height: 100%;
  padding-left: 90px;
    @media (max-width:788px){
      padding-left: 60px;
    }
    h3{
      margin: 5px;
      font-size: 20px;
      font-weight: 600;
  }
  .child1{
    button {
      width: 200px;
      height: 40px;
      margin: 5px;
      border-radius: 50px;
      border: none;
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
    margin: 10px;
    width: 85%;
    padding: 5px 5px 5px 10px;
    font-family: "Roboto", "sana-serif";
    .app_header {
      /* width: 100%; */
      display: flex;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      background: #f7f6fe;
      border-bottom: 4px solid #884dff;

      > div {
        flex: 1;
        border: 1px solid #dee2e6;
        padding: 15px;
      }
    }
    .app_body {
      display: flex;
      font-family: "Roboto", sans-serif;

      > div {
        flex: 1;
        border: 0.3px solid #fbfbfd;
        text-transform: capitalize;
        background-color: #e7e7e8;
        text-align: center;
        padding: 15px 5px;
        p{
          color: black;
          font-size: 14px;
          @media (max-width:789px){
            font-size: 10px;
          }
        }

        h6 {
          font-weight: 600;
          text-align: left;
          font-size: 12px;
          @media (max-width:789px){
            font-size: 10px;
          }
        }

        &:nth-child(odd) {
          background-color: #f7f6fe;
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
  @media (max-width: 568px) {
    .app_table {
      font-size: smaller;
      margin: 0px;
      width: 100%;
      overflow-x: scroll;
      .app_header {
        min-width: 135px;
        > div {
          padding: 3px;
          font-size: 8px;
          min-width:50px;

        }
      }
      .app_body {
        min-width: 125px;
        width: 100%;
        > div {
          /* flex: 1; */
          font-size: 12px;
        min-width:50px;

        }
      }
    }
  }
`;
