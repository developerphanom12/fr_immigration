import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_IMAGE, EXCHANGE_URLS_UNIVERSITY } from "../URLS";
// import {useNavigate } from 'react-router-dom';

export default function ListCourses() {
  const [courseData, setCourseData] = useState([]);
  //   const navigate = useNavigate();

  const courseApi = async () => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_UNIVERSITY}/getdatabyid`,
        axiosConfig
      );
      console.log("resres123", res?.data?.data);
      if (res.status === 201) {
        setCourseData(res?.data?.data);
        // setLoader(false)
        //   navigate('unidash')
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    courseApi();
  }, []);

  console.log("courseData", courseData);
  return (
    <Root>
      <h3>List Of All Courses</h3>

      <div className="courses_div">
        <h2>Total Courses: {courseData?.length}</h2>
        <div className="container">
          <div className=" ">
            <div>
              <div className="courses_box">
                {courseData &&
                  courseData.length > 0 &&
                  courseData.map((course, index) => (
                    <div key={index} className="courses_child1">
                      <div className="courses_child2">
                        <img
                          src={`${EXCHANGE_URLS_IMAGE}/${course?.university?.image}`}
                          alt="img"
                        />
                        <div className="courses_child3">
                          <div>
                            <h5>Course : {course?.course_name}</h5>
                            <p>Department : {course?.department}</p>
                            <p>Subject : {course?.subject}</p>
                            <p>Tuition Fee : {course?.tuition_fee}</p>
                          </div>

                          <div>
                            {" "}
                            <button> {course?.duration_years} Years</button>
                            <button>{course.course_type}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  .courses_div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100vw;
    .courses_box {
      display: flex;
      gap: 10px;
      height: 100%;
      flex-wrap: wrap;
      @media (max-width: 876px) {
        flex-direction: column;
      }
      .courses_child1 {
        display: flex;
        gap: 10px;
        margin: 10px 0px;
        padding: 10px;
        border-radius: 15px;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        border: 1px solid gray;
        border-bottom: 5px solid #87cefa;

        .courses_child2 {
          display: flex;
          align-items: center;
          img {
            width: 120px;
            height: 130px;
            object-fit: cover;
            min-width: 50px;
            min-height: 50px;
            border-radius: 10px;
          }

          .courses_child3 {
            display: flex;
            flex-direction: column;
            > div {
              p {
                margin: 0;
              }
            }
            h5 {
              color: #6495ed;
              text-align: center;
              text-transform: capitalize;
            }
            button {
              color: #ffffff;
              padding: 3px;
              margin: 5px;
              border-color: transparent;
              cursor: pointer;
              background: linear-gradient(
                45deg,
                #ff6525 19%,
                #ffffffe6 51%,
                #ff6525 100%
              );
              border-radius: 40px;
              background-size: 300% 100%;
              transition: all 0.3s ease-in-out 0s;
              &:hover {
                background: linear-gradient(
                  -25deg,
                  #ff6525 49%,
                  #ffffffe6 91%,
                  #ff6525 100%
                );
              }
            }
          }
        }
      }
    }
  }
`;
