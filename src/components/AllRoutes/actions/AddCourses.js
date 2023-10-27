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
    university_id:0,})
  const [newCourse, setNewCourse] = useState({
    university_id:"",
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
        navigate("/dashboard");
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
        axiosConfig,university,data
      );
      if (res?.status === 200) {
        setUniversity(res?.data?.data); 
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleClick = () => {
    // if (
    //   newCourse.course_name.length &&
    //   newCourse.university_id.length > 1
    // ) {
      courseApi();
      // getUniversity();
    // } else {
    //   cogoToast.error("Fill All Details");
    // }
  };
  useEffect(() => {
    getUniversity();
  }, []);

  console.log("newCourse", newCourse);
  console.log("setData",setData)
  return (
    <Root>
      <h4>
        {" "}
        <u>Add Courses</u>
      </h4>
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

      <div className="courses"> {" "} University ID* :-</div>
      <div className="courses">
        <select
          onChange={(e) => {
            setNewCourse({ ...newCourse, university_id: e.target.value });
          }}
        >
          {university &&
            university.map((i) => {
              return (
                <option value={i?.university_id}key={i?.university_id}>
                  {i.university_name}</option>
              );
            })}
        </select>
        {/* <input
          type="name"
          value={newCourse.university_id}
          onChange={(e) => {
            setNewCourse({ ...newCourse,university_id: e.target.value });
          }}
          placeholder="university_id"
        /> */}
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
    select {
      width: 250px;
      border-radius: 15px;
      padding: 7px;
    }
    input {
      border-radius: 15px;
      padding: 7px;
      @media (max-width: 782px) {
        min-width: 150px;
      }
    }
  }
`;
