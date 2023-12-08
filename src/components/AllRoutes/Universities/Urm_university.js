import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { EXCHANGE_URLS_IMAGE, EXCHANGE_URLS_UNIVERSITY } from "../../URLS";
import { Link } from "react-router-dom";
// import Loader from "../../Loader";

export default function Urm_university() {
  const [universityData, setUniversityData] = useState([]);

  const universityApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.get(
        `${EXCHANGE_URLS_UNIVERSITY}/getall/university`,

        axiosConfig
      );
      console.log("resres123", res);
      if (res.status === 200) {
        setUniversityData(res?.data?.data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    universityApi();
  }, []);

  return (
    <Root>
      <h2>URM University</h2>
      <div className="first_child">
        <select
          onChange={(e) => {
            setUniversityData({
              ...universityData,
              university_id: e.target.value,
            });
          }}
        >
          {universityData &&
            universityData.map((i) => {
              return (
                <option value={i?.university_id}>{i.university_name}</option>
              );
            })}
        </select>

        <button>
          <AiOutlineSearch /> Filter
        </button>
      </div>

      <div className="second_child" >
        {universityData &&
          universityData?.map((i) => {
            return (
              <div className="card">
                <div className="card_top">
                  <h5>{i?.university_name}</h5>
                 
                  <img
                    src={`${EXCHANGE_URLS_IMAGE}/${i.university_image}`}
                    alt="img"
                  />
                </div>
                view more
                <div>
                  <p>Ambassador Name</p>
                  <p>{i?.ambassador_name}</p>
                </div>
                <div>
                  <p>contact</p>
                  <p>{i?.phone_number}</p>
                </div>
                <div>
                  <p>Year Of Established</p>
                  <p>{i?.year_established}</p>
                </div>
                <div className="linkk">
                  <button>
                    <Link to={`/urmdetails/${i.id}`}>View More details</Link>
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
  padding-left: 90px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  h2 {
    text-shadow: 4px 5px 5px gray;
  }
  h5,
  p {
    margin: 0;
    padding: 0;
    text-transform: capitalize;
  }
  .first_child {
    display: flex;
    background-color: #ffff;
    width: 50%;
    margin: 5px;
    box-shadow: 4px 5px 5px gray;
    padding: 10px;
    border-radius: 10px;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 666px) {
      padding: 5px;
      margin: 5px;
      gap: 5px;
      width: 95%;
      text-align: center;
      align-items: center;
    }
    select {
      background-color: white;
      color: black;
      text-decoration: none;
      border: 2px solid gray;
      line-height: 1.5em;
      padding: 5px;
      width: 70%;
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
        width: 60%;
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
      border: none;
      width: 100px;
      padding: 5px;
      border-radius: 10px;
      background-color: #000080;
      color: white;
      &:hover {
        box-shadow: 4px 5px 5px gray;
      }
      @media (max-width: 566px) {
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .second_child {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    cursor: pointer;
    padding: 10px;
    @media (max-width: 657px) {
      display: flex;
      flex-direction: column;
    }
    .card {
      width: 30%;
      height: auto;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 6px 7px 7px gray;
      @media (max-width: 657px) {
        width: 100%;
      }

      .card_top {
        display: flex;
        gap: 10px;
        h5{
          font-weight: 600;
          color: #000080;
        }
        img {
          width: 80px;
          height: 80px;
          object-fit: cover;
        }
        button {
          height: 150px;
        }
      }
      > div {
        display: flex;
        p {
          flex: 1;
        }
      }
      .linkk{
        button{
          border: none;
          border-radius: 4px;
          background-color: white;

          a{
            color: #000080;
            background-color: none;
            font-weight: 600;
          }
        }
      }
    }
  }
`;
