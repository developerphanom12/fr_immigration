import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PiArrowFatLinesDownLight } from "react-icons/pi";
import { EXCHANGE_URLS_UNIVERSITY } from "../URLS";
import axios from "axios";

export default function UniDashboard() {
  const [showArrow, setShowArrow] = useState(true);
  const [showDescriptionBox, setShowDescriptionBox] = useState(false);
  const [latest, setLatest] = useState({
    heading: "",
    descpription: "",
  });

  const latestUpdateApi = async () => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.post(
        `${EXCHANGE_URLS_UNIVERSITY}/latestupdate`,
        latest,
        axiosConfig
      );
      console.log("resres123", res?.data?.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowArrow((prev) => !prev);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    setShowDescriptionBox(true);
  };

  const handleSubmit = () => {
    latestUpdateApi();
  };
  return (
    <Root>
      <h3>WELCOME TO DASHBOARD</h3>
      <div className="new_updates">
        <button onClick={handleClick}>
          {showArrow && <PiArrowFatLinesDownLight />}
          New Updates
        </button>
        {showDescriptionBox && (
          <div className="description-box">
            <div className="head">
              Heading
              <input
                value={latest.heading}
                onChange={(e) => {
                  setLatest({ ...latest, heading: e.target.value });
                }}
              />
            </div>
            <div className="head">
              Description
              <input
                value={latest.descpription}
                onChange={(e) => {
                  setLatest({ ...latest, descpription: e.target.value });
                }}
              />
            </div>
            {latest.heading.length && latest.descpription.length > 0 ? (
              <div>
                <button onClick={handleSubmit}>Submit</button>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding-left: 80px;
  margin: 10px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  .new_updates {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px;
    button {
      border: none;
      width: 200px;
      border-radius: 4px;
      background-color: #000080;
      color: #ffffff;
      padding: 5px 25px 5px 5px;
      position: relative;
      svg {
        position: absolute;
        top: 50%;
        left: 89%;
        transform: translate(-50%, -50%);
        animation: blink 1s infinite;
        width: 20px;
        height: 20px;

        @keyframes blink {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      }
    }
    .description-box {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      align-items: flex-end;

      .head {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        input {
          padding: 10px;
        }
      }
      > div {
        display: flex;
        margin-top: 10px;
        justify-content: flex-end;
        button {
        }
      }
    }
  }
`;
