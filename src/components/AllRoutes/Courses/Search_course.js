import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { EXCHANGE_URLS_IMAGE, EXCHANGE_URLS_UNIVERSITY } from "../../URLS";

export default function Search_course() {
  const [searchQuery, setSearchQuery] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const courseApi = async (searchKey) => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(`${EXCHANGE_URLS_UNIVERSITY}/get/allcourse`,axiosConfig);
      console.log("resres123", res);
      if (res.status === 201) {
      setCourseData(res.data.data);
      // setLoader(false)
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    courseApi();
  }, []);

  console.log("courseData", courseData);
  const clickSearch = async () => {
    try {
      const res = await axios.post(
        `${EXCHANGE_URLS_UNIVERSITY}/search-courses?searchKey=${searchKey}`,
        {
          searchQuery: searchQuery,
        }
      );

      if (res.status === 200) {
        console.log("Searched Data:", res);
        setCourseData(res.data.data);
      }
    } catch (e) {
      console.error("Error searching:", e);
    }
  };

  useEffect(() => {
    if (searchKey != null) {
      const debounce = setTimeout(() => {
        courseApi(searchKey);
      }, 1000);
      return clearTimeout(debounce);
    }
  });
  console.log("setSearchQuery", setSearchQuery);
  return (
    <Root>
      <h2>Search Courses Here</h2>
      <div className="search_box">
        <input
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
          placeholder="Search Courses...."
        ></input>
        <button
          onClick={() => {
            clickSearch();
          }}
        >
          Search
        </button>
      </div>

      <div className="courses_div">
        <h4>Total Courses: {courseData?.length}</h4>
        <div className="container">
          <div className=" ">
            <div>
              <div className="courses_box">
                {courseData &&
                  courseData.length > 0 &&
                  courseData.map((course, index) => (
                    <div key={index} className="courses_child1">
                      <img
                        src={`${EXCHANGE_URLS_IMAGE}/${course.university_id.university_image}`}
                        alt="img"
                      />
                      <div className="courses_child2">
                        <h5>{course.course_name}</h5>
                        <p>{course.university_id.university_name}</p>
                        <div className="courses_child3">
                          <button>{course.course_level}</button>
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
  height: 100%;
  min-height: 100vh;
  padding-left: 90px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  h2 {
    margin: 10px;
    text-shadow: 4px 5px 5px gray;
  }

  .search_box {
    display: flex;
    width: 50%;
    border-radius: 10px;
    justify-content: space-between;
    box-shadow: 4px 5px 5px gray;
    padding: 5px;
    @media (max-width:787px){
      width: 95%;
    }
    input {
      border: 2px solid lightgray;
      padding: 5px;
      border-radius: 10px;
      width: 70%;
      @media (max-width:787px){
      width: 60%;
    }
    }
    button {
      border: none;
      width: 100px;
      padding: 5px;
      border-radius: 10px;
      background-color: #000080;
      color: white;
      &:hover {
        box-shadow: 4px 5px 5px gray;
      }
      @media (max-width: 566px) {
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .courses_div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100vw;
    h4 {
      margin: 10px;
      text-shadow: 4px 5px 5px gray;
    }
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
        box-shadow: 5px 7px 7px gray;
        margin: 10px 0px;
        padding: 10px;
        border-radius: 5px;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          min-width: 50px;
          min-height: 50px;
          border-radius: 10px;
        }
        .courses_child2 {
          align-items: center;
          h5 {
            color: #6495ed;
            text-transform: capitalize;
          }
          .courses_child3 {
            display: flex;
            button {
              width: 150px;
              color: white;
              background-color: dodgerblue;
              border-radius: 10px;
              margin: 10px;
              border: none;
            }
          }
        }
      }
    }
  }
`;
