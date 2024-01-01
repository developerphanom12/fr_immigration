import cogoToast from "cogo-toast";
import React, { useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_UNIVERSITY } from "../../URLS";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function GetPg() {
  const [require, setRequire] = useState({
    english_requirement: "",
    academic_requirement: "",
    offer_timeline: "",
    Credibility: "",
    Finance: "",
    Discount: "",
  });

  const navigate = useNavigate();

  const pgrequireApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        `${EXCHANGE_URLS_UNIVERSITY}/pgrequirement`,
        require,
        axiosConfig
      );

      cogoToast.success("PG requirement add Successfully");
      setRequire({
        english_requirement: "",
        academic_requirement: "",
        offer_timeline: "",
        Credibility: "",
        Finance: "",
        Discount: "",
      });
      navigate("/unidash");
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleClick = () => {
    pgrequireApi();
  };

  console.log("require", require);
  return (
    <Root>
      <h3>PG Entry Requirement</h3>
      <div className="child1">
        <div className="child2">
          <p>English Requirement</p>
          <input
            type="name"
            value={require?.english_requirement}
            onChange={(e) => {
              setRequire({ ...require, english_requirement: e.target.value });
            }}
            placeholder="English Requirement"
          />
        </div>
        <div className="child2">
          <p>Academic Requirement</p>
          <input
            type="name"
            value={require?.academic_requirement}
            onChange={(e) => {
              setRequire({ ...require, academic_requirement: e.target.value });
            }}
            placeholder="Academic Requirement"
          />
        </div>
        <div className="child2">
          <p>Offer Timeline</p>
          <input
            type="name"
            value={require?.offer_timeline}
            onChange={(e) => {
              setRequire({ ...require, offer_timeline: e.target.value });
            }}
            placeholder="Offer Timeline"
          />
        </div>
        <div className="child2">
          <p> Credibility</p>
          <select
            value={require.Credibility}
            onChange={(e) => {
              setRequire({ ...require, Credibility: e.target.value });
            }}
          >
            <option value="">SELECT OPTION</option>
            <option value={require.Credibility.Yes}>Yes</option>
            <option value={require.Credibility.No}>No</option>
          </select>
        </div>
        <div className="child2">
          {" "}
          <p>Finance</p>
          <select
            value={require.Finance}
            onChange={(e) => {
              setRequire({ ...require, Finance: e.target.value });
            }}
          >
            <option value="">SELECT OPTION</option>
            <option value={require.Finance.Yes}>Yes</option>
            <option value={require.Finance.No}>No</option>
          </select>
        </div>
        <div className="child2">
          <p>Discount</p>
          <input
            type="name"
            value={require?.Discount}
            onChange={(e) => {
              setRequire({ ...require, Discount: e.target.value });
            }}
            placeholder="Discount"
          />
        </div>
        <div className="child2">
          <button
            onClick={() => {
              handleClick();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "Roboto", "sans-serif";
  padding-left: 90px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  h3 {
    margin: 5px;
  }
  .child1 {
    width: 90%;
    .child2 {
      width: 70%;
      padding: 10px;
      p {
        margin: 5px;
      }
      input {
        border-radius: 10px;
        padding: 10px;
        color: #202020;
        width: 60%;
        text-decoration: none;
        border: 2px solid lightgray;
        @media (max-width: 600px) {
          width: 100%;
        }
      }

      input:focus,
      input:active {
        border-color: #ff6525;
      }
      select {
        background-color: white;
        color: black;
        text-decoration: none;
        border: 2px solid gray;
        line-height: 1.5em;
        width: 60%;
        padding: 10px;
        border-radius: 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, black 50%),
          linear-gradient(135deg, black 50%, transparent 50%),
          linear-gradient(to right, dodgerblue, skyblue);
        background-position: calc(100% - 20px) calc(1em + 2px),
          calc(100% - 15px) calc(1em + 2px), 100% 0;
        background-size: 5px 5px, 5px 5px, 40px 45px;
        background-repeat: no-repeat;
        &:hover {
          box-shadow: 4px 4px 5px darkgray;
          transition: all 0.1s ease-in-out 0s;
        }
        @media (max-width: 555px) {
          padding: 8px;
          width: 100%;
          background-size: 5px 5px, 5px 5px, 30px 45px;
          align-items: center;
        }

        select:focus {
          background-image: linear-gradient(45deg, white 50%, transparent 50%),
            linear-gradient(135deg, transparent 50%, white 50%),
            linear-gradient(to right, gray, gray);
          background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
            100% 0;
          background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
          background-repeat: no-repeat;
          border-color: grey;
          outline: 0;
        }
      }
      button {
        display: flex;
        flex-direction: column;
        width: 28%;
        height: 50px;
        margin: 5px;
        padding: 10px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-top: 20px;
        border-radius: 10px;
        border: transparent;
        background: #8656EC;
        color: #fff;
        background-size: 300% 100%;
        transition: all 0.3s ease-in-out 0s;
        text-transform: uppercase;
        @media (max-width:767px){
          width: 50%;
        }
        &:hover {
          background: #000080;
          transition: all 0.1s ease-in-out 0s;
          box-shadow: 4px 5px 5px gray;
        }
      }
    }
  }
`;
