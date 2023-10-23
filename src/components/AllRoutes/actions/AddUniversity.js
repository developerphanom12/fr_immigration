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
        navigate("/dashboard");
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
      <h4><u>Add University</u></h4>
      <div className="courses"> University Name* :-</div>
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
      <div className="courses"> Course Type* :-</div>
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
      <div className="courses"> Founded Year* :-</div>
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
      <div className="courses"> Contact Number* :-</div>
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
      <div className="courses"> Person Name* :-</div>
      <div className="courses">
        <input
          type="name"
          value={newUniversity.person_name}
          onChange={(e) => {
            setnewUniversity({ ...newUniversity, person_name: e.target.value });
          }}
          placeholder="Person Name"
        />
      </div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Submit
      </button>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  min-height: 100vh;
  height: 100%;
  padding: 5px;
  align-items: center;
  flex-direction: column;
  button {
    border-radius: 20px;
    background-color: rgb(251, 134, 44);
    border: transparent;
    padding: 5px;
    margin: 10px;
    cursor: pointer;
  }
  .courses {
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    align-items: center;
    color: orangered;
    /* justify-content: space-evenly; */
    input {
      border-radius: 15px;
      padding: 7px;
     @media(max-width:782px){
      width:150px;
     }
    }
  }
`;
