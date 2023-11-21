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
  padding-left: 80px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  h2 {
    margin: 5px;
    text-shadow: 5px 6px 6px gray;
  }
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
        width: 50%;
        border-radius: 5px;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        border: 1px solid gray;
        box-shadow: 5px 6px 6px gray;

        .courses_child2 {
          display: flex;
          align-items: center;
          width: 100%;
          img {
            width: 150px;
            height: 130px;
            object-fit: cover;
            min-width: 50px;
            min-height: 50px;
            border-radius: 10px;
          }

          .courses_child3 {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 5px;
            > div {
              p {
                margin: 0;
              }
              @media (max-width: 787px) {
                width: 100%;
                flex-direction: column;
              }
            }
            h5 {
              color: #6495ed;
              text-align: center;
              text-transform: capitalize;
            }
            button {
              background: #000080;
              color: #ffffff;
              padding: 5px;
              border-color: transparent;
              font-size: 12px;
              text-align: center;
              width: 40%;
              cursor: pointer;
              border-radius: 10px;
              background-size: 300% 100%;
              transition: all 0.3s ease-in-out 0s;
              text-transform: uppercase;
              &:hover {
                box-shadow: 5px 6px 6px gray;
              }
              @media (max-width: 787px) {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
`;
