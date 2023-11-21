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
  }, []);

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
  font-family: "Roboto", "sans-serif";
  align-items: center;
  flex-direction: column;
  h4{
    text-shadow: 4px 5px 5px gray;
  }
  button {
    display: flex;
    flex-direction: column;
    width: 38%;
    height: 45px;
    margin: 5px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 10px;
    border: transparent;
    background: #000080;
    color: #fff;
    background-size: 300% 100%;
    transition: all 0.3s ease-in-out 0s;
    text-transform: uppercase;
    &:hover {
      background: #000080;
      transition: all 0.1s ease-in-out 0s;
      box-shadow: 4px 5px 5px gray;
    }
  }
  .courses {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    align-items: center;
    /* justify-content: center; */
    select {
        background-color: white;
        color: black;
        text-decoration: none;
        border: 2px solid gray;
        line-height: 1.5em;
        padding: 5px;
        width: 100%;
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
          /* width: 120px; */
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
    input {
        border-radius: 10px;
        padding: 5px;
        color: #202020;
        text-decoration: none;
        border: 2px solid gray;
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
