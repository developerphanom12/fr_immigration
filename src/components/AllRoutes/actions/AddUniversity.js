import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_UNIVERSITY } from "../../URLS";
import cogoToast from "cogo-toast";
import { useNavigate } from "react-router-dom";

export default function AddUniversity() {
  const navigate = useNavigate();
  const [newUniversity, setnewUniversity] = useState({
    university_name: "",
    course_type: "",
    founded_year: "",
    contact_number: "",
    person_name: "",
  });
  const uniApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        `${EXCHANGE_URLS_UNIVERSITY}/universitys`,
        newUniversity,
        axiosConfig
      );
      console.log("resr", res);
      if (res.status === 201) {
        setnewUniversity(res?.data);
        cogoToast.success("Submit SuccessFully");
        navigate("/dashboardd");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleClick = () => {
    if (
      newUniversity.university_name.length &&
      newUniversity.course_type.length &&
      newUniversity.founded_year.length &&
      newUniversity.contact_number.length >= 10 &&
      newUniversity.person_name.length > 1
    ) {
      uniApi();
    } else {
      cogoToast.error("Fill All Details");
    }
  };

  console.log("newuniii", newUniversity);
  return (
    <Root>
      <div className="courses"> University Name </div>
      <div className="courses">
        <input
          type="name"
          value={newUniversity.university_name}
          onChange={(e) => {
            setnewUniversity({
              ...newUniversity,
              university_name: e.target.value,
            });
          }}
          placeholder="University Name"
        />
      </div>
      <div className="courses"> Course Type </div>
      <div className="courses">
        <input
          type="name"
          value={newUniversity.course_type}
          onChange={(e) => {
            setnewUniversity({ ...newUniversity, course_type: e.target.value });
          }}
          placeholder="Course Type"
        />
      </div>
      <div className="courses"> Founded Year </div>
      <div className="courses">
        <input
          type="name"
          value={newUniversity.founded_year}
          onChange={(e) => {
            setnewUniversity({
              ...newUniversity,
              founded_year: e.target.value,
            });
          }}
          placeholder="Founded Year"
        />
      </div>
      <div className="courses"> Contact Number </div>
      <div className="courses">
        <input
          type="name"
          value={newUniversity.contact_number}
          onChange={(e) => {
            setnewUniversity({
              ...newUniversity,
              contact_number: e.target.value,
            });
          }}
          placeholder=" Contact_Number"
        />
      </div>
      <div className="courses"> Person Name </div>
      <div className="courses">
        <input
          type="name"
          value={newUniversity.person_name}
          onChange={(e) => {
            setnewUniversity({ ...newUniversity, person_name: e.target.value });
          }}
          placeholder="Person Name"
        />
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Submit
        </button>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  flex-wrap: wrap;
  width: 80%;
  box-shadow: 1px 1px 4px 1px gray;
  font-family: "Roboto", "sans-serif";

  button {
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50px;
    width: 200px;
    border: transparent;
    background: #8656ec;
    color: #fff;
    background-size: 300% 100%;
    transition: all 0.3s ease-in-out 0s;
    text-transform: uppercase;
    &:hover {
      background: #8656ec;
      transition: all 0.1s ease-in-out 0s;
      box-shadow: 4px 5px 5px gray;
    }
  }

  .courses {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    select {
      background-color: white;
      color: black;
      text-decoration: none;
      border: 1px solid gray;
      padding: 10px;
      width: 100%;
      border-radius: 50px;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-image: linear-gradient(45deg, transparent 50%, black 50%),
        linear-gradient(135deg, black 50%, transparent 50%),
        linear-gradient(to right, #8656ec, #c6abff);
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
        /* width: 120px; */
        background-size: 5px 5px, 5px 5px, 30px 45px;
        align-items: center;
      }
    }
    input {
      border-radius: 50px;
      padding: 10px;
      width: 100%;
      color: #202020;
      text-decoration: none;
      border: 1px solid gray;
      &:hover {
        box-shadow: 4px 4px 5px darkgray;
        transition: all 0.1s ease-in-out 0s;
      }
      @media (max-width: 600px) {
        min-width: 100px;
        width: 100%;
      }
    }
  }
`;
