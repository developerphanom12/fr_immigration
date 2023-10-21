import axios from "axios";
import React, {useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_UNIVERSITY } from "../../URLS";

export default function AddCourses() {
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
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  

  console.log("newCourse", newCourse);
  return (
    <Root>
      AddCourses
      <div className="courses">
        {" "}
        Course Name* :-
        <input
          type="name"
          value={newCourse.course_name}
          onChange={(e) => {
            setNewCourse({ ...newCourse, course_name: e.target.value });
          }}
          placeholder="Course Name"
        />
      </div>
      <div className="courses">
        {" "}
        University ID* :-
        <input
          type="name"
          value={newCourse.university_id}
          onChange={(e) => {
            setNewCourse({ ...newCourse, university_id: e.target.value });
          }}
          placeholder="University Name"
        />
      </div>
      <div className="courses">
        {" "}
        Course Level* :-
        <input
          type="name"
          value={newCourse.course_level}
          onChange={(e) => {
            setNewCourse({ ...newCourse, course_level: e.target.value });
          }}
          placeholder="Course Level"
        />
      </div>
      <button onClick={()=>{courseApi()}}>button</button>
    </Root>
  );
}
const Root = styled.section`


`;
