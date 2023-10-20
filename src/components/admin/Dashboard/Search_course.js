import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_IMAGE, EXCHANGE_URLS_UNIVERSITY } from "../../URLS";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Search_course() {
  const [searchQuery, setSearchQuery] = useState("");
  const [courseData, setCourseData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const courseApi = async () => {
    try {
      const res = await axios.get(`${EXCHANGE_URLS_UNIVERSITY}/get/allcourse`);
      console.log("resres123", res);
      if (res.status === 201) {
        setCourseData(res?.data?.data);
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
      // Send a POST request to search for courses based on searchQuery
      const res = await axios.post(`${EXCHANGE_URLS_UNIVERSITY}/search-courses`, {
        searchQuery: searchQuery,
      });

      if (res.status === 200) {
        console.log("Searched Data:", res);
        setCourseData(res.data.data);
      }
    } catch (e) {
      console.error("Error searching:", e);
    }
  };

  return (
    <Root>
      <h2>Search Cources Here</h2>
      <div className="search_box">
        <input
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          placeholder="Search Courses Here"
        ></input>
        <button
          onClick={() => {
            searchQuery();
          }}
        >
          Search
        </button>
      </div>

      <div className="courses_div">
        <h2>Total Courses: {courseData?.length}</h2>
        <div className="courses_box">
          {courseData &&
            courseData.map((i) => {
              return (
                <div className="courses_child1">
                  <img
                    src={`${EXCHANGE_URLS_IMAGE}/${i?.university_image}`}
                    alt="img"
                  />

                  <div className="courses_child2">
                    <h5>{i?.course_level}</h5>
                    <p>{i.university_id.university_name}</p>
                    <div className="courses_child3">
                      <button> {i?.course_level}</button>
                      {/* <button>{i.location}</button> */}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Root>
  );
}

const Root = styled.section`
  height: 100%;
  min-height: 100vh;
  
  .search_box {
    display: flex;
    padding: 5px;
    justify-content: space-between;
    border: 1px solid gray;
    border-radius: 12px;
    input {
      border: none;
      border-color: white;
      border-radius: 12px;
    }
    button {
      width: 80px;
      border-radius: 12px;
      background-color: blue;
      color: white;
    }
  }
  .courses_div {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    .courses_box {
      display: flex;
      gap: 10px;
      height: 100%;
      flex-direction: column;
      .courses_child1 {
        display: flex;
        gap: 10px;
        width: 40%;
        padding: 10px;
        background-color: blanchedalmond;
        border-radius: 10px;
        /* flex-wrap: wrap; */
        .courses_child2 {
          h5 {
            color: DodgerBlue;
          }
          .courses_child3 {
            display: flex;
            button {
              width: 150px;
              color:black;
              background-color:rgb(20, 177, 244);
              border-radius: 14px;
              margin: 10px;
            }
          }
        }
      }
    }
  }
`;
