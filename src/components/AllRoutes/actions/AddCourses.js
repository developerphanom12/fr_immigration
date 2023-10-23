import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_UNIVERSITY } from "../../URLS";
import cogoToast from "cogo-toast";
import { useNavigate } from "react-router-dom";

export default function AddCourses() {
  const navigate = useNavigate();
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
        cogoToast.success("Submit SuccessFully");
        navigate("/dashboard");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleClick = () => {
    if (
      newCourse.university_id.length &&
      newCourse.course_name.length &&
      newCourse.course_level.length > 1
    ) {
      courseApi();
    } else {
      cogoToast.error("Fill All Details");
    }
  };

  console.log("newCourse", newCourse);
  return (
    <Root>
     <h4> <u>Add Courses</u></h4>
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
        <input
          type="name"
          value={newCourse.university_id}
          onChange={(e) => {
            setNewCourse({ ...newCourse, university_id: e.target.value });
          }}
          placeholder="University Name"
        />
      </div>
      <div className="courses"> Course Level* :-</div>
      <div className="courses">
        <input
          type="name"
          value={newCourse.course_level}
          onChange={(e) => {
            setNewCourse({ ...newCourse, course_level: e.target.value });
          }}
          placeholder="Course Level"
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
    border-radius: 17px;
    background-color: rgb(251, 134, 44);
    border: transparent;
    padding: 5px;
    cursor: pointer;
    margin: 10px;
  }
  .courses {
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    color: orangered;
    /* justify-content: center; */
    input {
      border-radius: 15px;
      padding: 7px;
     @media(max-width:782px){
      min-width:150px;
     }
    }
  }
`;
