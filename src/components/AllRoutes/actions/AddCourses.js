import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_UNIVERSITY } from "../../URLS";
import cogoToast from "cogo-toast";
import { useNavigate } from "react-router-dom";

export default function AddCourses() {
  const navigate = useNavigate();
  const [university, setUniversity] = useState([]);
  const [data, setData] = useState({
    university_id: 0,
  });
  const [newCourse, setNewCourse] = useState({
    university_id: "",
    course_name: "",
    course_level: "",
  });
  const courseApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        `${EXCHANGE_URLS_UNIVERSITY}/courses1`,
        newCourse,
        axiosConfig
      );
      console.log("resr", res);
      if (res.status === 201) {
        setNewCourse(res?.data);
        setUniversity(res?.data?.data);
        cogoToast.success("Submit SuccessFully");
        navigate("/dashboardd");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const getUniversity = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.get(
        `${EXCHANGE_URLS_UNIVERSITY}/getall/university`,
        axiosConfig,
        university,
        data
      );
      if (res?.status === 200) {
        setUniversity(res?.data?.data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleClick = () => {
    if (newCourse.course_name.length > 1) {
      courseApi();
      // getUniversity();
    } else {
      cogoToast.error("Fill All Details");
    }
  };
  useEffect(() => {
    getUniversity();
  }, [getUniversity]);

  console.log("newCourse", newCourse);
  console.log("setData", setData);
  return (
    <Root>
      <h4> Add Courses</h4>
      <div className="courses"> Course Name* :-</div>
      <div className="courses">
        <input
          type="name"
          value={newCourse.course_name}
          onChange={(e) => {
            setNewCourse({ ...newCourse, course_name: e.target.value });
          }}
          placeholder="Course Name"
        />
      </div>

      <div className="courses"> University ID* :-</div>
      <div className="courses">
        <select
          onChange={(e) => {
            setNewCourse({ ...newCourse, university_id: e.target.value });
          }}
        >
          {university &&
            university.map((i) => {
              return (
                <option value={i?.university_id} key={i?.university_name}>
                  {i.university_name}
                </option>
              );
            })}
        </select>
      </div>
      <div className="courses"> Course Level* :-</div>
      <div className="courses">
        <select
          value={newCourse.course_level}
          onChange={(e) => {
            setNewCourse({ ...newCourse, course_level: e.target.value });
          }}
        >
          <option> SELECT </option>
          <option value={newCourse.course_level.GRADUATION}>GRADUATION</option>
          <option value={newCourse.course_level.POSTGRADUATION}>
            POSTGRADUATION
          </option>
        </select>
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
  font-family: "cairo", "sans-serif";
  align-items: center;
  flex-direction: column;
  button {
    background: #ff6525;
    color: #ffffff;
    padding: 10px 10px 10px 10px;
    border-color: transparent;
    font-size: medium;
    text-align: center;
    width: 160px;
    margin: 5px;
    cursor: pointer;
    background: linear-gradient(
      45deg,
      #ff6525 19%,
      #ffffffe6 51%,
      #ff6525 100%
    );
    border-radius: 50px;
    color: #fff;
    background-size: 300% 100%;
    transition: all 0.3s ease-in-out 0s;
    text-transform: uppercase;
    &:hover {
      background: linear-gradient(
        -25deg,
        #ff6525 49%,
        #ffffffe6 91%,
        #ff6525 100%
      );
    }
  }
  .courses {
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    align-items: center;
    /* justify-content: center; */
    select {
      background-color: white;
      color: black;
      text-decoration: none;
      border: 2px solid #a5d8fa;
      line-height: 1.5em;
      padding: 8px;
      border-radius: 20px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 240px;
      background-image: linear-gradient(45deg, transparent 50%, blue 50%),
        linear-gradient(135deg, blue 50%, transparent 50%),
        linear-gradient(to right, skyblue, skyblue);
      background-position: calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px), 100% 0;
      background-size: 5px 5px, 5px 5px, 40px 45px;
      background-repeat: no-repeat;
      @media (max-width: 555px) {
        padding: 3px;
        width: 120px;
        background-size: 5px 5px, 5px 5px, 30px 35px;
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
    input {
      border-radius: 40px;
      padding: 10px;
      color: #202020;
      width: 240px;
      text-decoration: none;
      border: 2px solid #a5d8fa;
      @media (max-width: 600px) {
        min-width: 100px;
        width: 100%;
      }
    }
  }
`;
