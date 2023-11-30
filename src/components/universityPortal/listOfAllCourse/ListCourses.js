import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_IMAGE, EXCHANGE_URLS_UNIVERSITY } from "../../URLS";
import { Link } from "react-router-dom";

export default function ListCourses() {
  const [courseData, setCourseData] = useState([]);

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
          <div className="courses_box">
            {courseData &&
              courseData.length > 0 &&
              courseData.map((course, index) => (
                <div key={index} className="courses_child1">
                  <img
                    src={`${EXCHANGE_URLS_IMAGE}/${course?.university?.image}`}
                    alt="img"
                  />
                  <div className="courses_child3">
                    <h5>Course : </h5> <h5>{course?.course_name}</h5>
                    <div className="childdd">
                      <div className="mini">
                        {" "}
                        <p>Department : </p> <p>{course?.department}</p>
                      </div>
                      <div className="mini">
                        {" "}
                        <p>Subject : </p> <p>{course?.subject}</p>
                      </div>
                      <div className="mini">
                        <p>Tuition Fee : </p> <p>{course?.tuition_fee}</p>
                      </div>
                      <div className="mini">
                        <p>Duration : </p> <p>{course?.duration_years} Years</p>
                      </div>
                      <div className="mini">
                        {" "}
                        <p>Course Type : </p> <p>{course.course_type}</p>
                      </div>
                    </div>
                    <div>
                    <Link to={`/showlist/${course.course_id}`}>View More</Link>

                  </div>
                  </div>
                </div>
              ))}
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
    margin: 15px;
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
        img {
          width: 200px;
          height: 170px;
          object-fit: cover;
          min-width: 50px;
          min-height: 50px;
          border-radius: 10px;
        }
        @media (max-width: 787px) {
          width: 100%;
          flex-direction: column;
        }

        .courses_child3 {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 5px;
          .childdd {
            width: 100%;
            display: flex;
            flex-direction: column;
            .mini {
              width: 80%;
              display: flex;
              justify-content: space-between;
              p {
                display: flex;
                /* justify-content: space-between; */
                margin: 0;
              }
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
            margin: 3px;
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
          }
        }
      }
    }
  }
`;
