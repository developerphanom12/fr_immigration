import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components'
import { EXCHANGE_URLS_UNIVERSITY } from '../URLS';
import cogoToast from 'cogo-toast';
import { useNavigate } from 'react-router-dom';

export default function UniAddCourses() {
  const navigate = useNavigate();
  const [newCourse, setNewCourse] = useState({
    course_name: "",
    department: "",
    subject: "",
    duration_years:"",
    tuition_fee: "",
    course_type: "",

  });
  const courseApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        `${EXCHANGE_URLS_UNIVERSITY}/newcoursesadd`,
        newCourse,
        axiosConfig
      );
      console.log("resr", res);
      if (res.status === 201) {
        setNewCourse(res?.data);
        cogoToast.success("Submit SuccessFully");
        navigate("/unidash");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleClick = () => {
    if (newCourse.course_name.length > 1) {
      courseApi();
    } else {
      cogoToast.error("Fill All Details");
    }
  };

  return (
    <Root>
      <h3>Add University Courses</h3>
      <div className='div1'>

      <div className="courses">
        <p>Course Name</p>
        <input
          type="name"
          value={newCourse.course_name}
          onChange={(e) => {
            setNewCourse({ ...newCourse, course_name: e.target.value });
          }}
          placeholder="Course Name"
        />
      </div>
      <div className="courses"><p>Department</p>
        <input
          type="name"
          value={newCourse.department}
          onChange={(e) => {
            setNewCourse({ ...newCourse, department: e.target.value });
          }}
          placeholder="Department Name"
        />
      </div>
      <div className="courses">
        <p>Subject</p>
        <input
          type="name"
          value={newCourse.subject}
          onChange={(e) => {
            setNewCourse({ ...newCourse, subject: e.target.value });
          }}
          placeholder="Subject"
        />
      </div>
      <div className="courses">
        <p>Duration</p> 
        <input
          type="number"
          value={newCourse.duration_years}
          onChange={(e) => {
            setNewCourse({ ...newCourse, duration_years: e.target.value });
          }}
          placeholder="Example: 4 Years"
        />
      </div>
      <div className="courses">
        <p>Tuition Fees</p>
        <input
          type="number"
          value={newCourse.tuition_fee}
          onChange={(e) => {
            setNewCourse({ ...newCourse, tuition_fee: e.target.value });
          }}
          placeholder="Course Name"
        />
      </div>

      <div className="courses"><p>Course Type</p>
      <select
  value={newCourse.course_type}
  onChange={(e) => {
    setNewCourse({ ...newCourse, course_type: e.target.value });
  }}
>
  <option value="">SELECT</option>
  <option value="Graduation">Graduation</option>
  <option value="Postgraduation">Postgraduation</option>
  <option value="PhD">PhD</option>
  <option value="Diploma">Diploma</option>
</select>
      </div>

      </div>


      <div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Submit
      </button>

      </div>
    </Root>
  )
}
const Root = styled.section`
padding-left: 80px;
    @media (max-width:788px){
      padding-left: 60px;
    }
    h3{
      margin: 5px;
      text-shadow: 5px 6px 6px gray;
    }
p{
  margin: 0px;
}
.div1{

  .courses {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 10px;
      width: 100%;
      /* align-items: center; */
      /* justify-content: center; */
      select {
        background-color: white;
        color: black;
        text-decoration: none;
        border: 2px solid gray;
        line-height: 1.5em;
        padding: 10px;
        width: 50%;
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
      input {
        border-radius: 10px;
        padding: 10px;
        color: #202020;
        width: 50%;
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
}
  >div{
  width: 80%;
  padding: 10px;
    button {
      background: #000080;
      color: #ffffff;
      padding: 5px;
      border-color: transparent;
      font-size: medium;
      text-align: center;
      width: 30%;
      cursor: pointer;
      border-radius: 10px;
      background-size: 300% 100%;
      transition: all 0.3s ease-in-out 0s;
      text-transform: uppercase;
      &:hover {
       box-shadow: 5px 6px 6px gray;
      }
      @media (max-width:787px){
        width: 100%;
      }
    }
  }
`
