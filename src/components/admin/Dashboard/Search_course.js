import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_UNIVERSITY } from "../../URLS";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Search_course() {
  const [searchVal, setSearchVal] = useState("");
  const [courseData,setCourseData] = useState();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const universityApi = async () => {
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_UNIVERSITY}/get/allcourse`,
        courseData
      );
      console.log("resres123", res);
      if (res.status === 200) {
        setCourseData(res?.data?.data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };
 
  const clickSearch = async () => {
    try {
      const res = await axios.post(`${EXCHANGE_URLS_UNIVERSITY}`);
      if (res.status === 200) {
        console.log("searched Data", res);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Root>
      <h2>Search Cources Here</h2>
      <div className="search_box">
        <input
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
          placeholder="Search Courses Here"
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
        <h2>Total Courses: 25456</h2>
        <div className="courses_box">
          <div className="courses_child1">
            <img src="imageLogo/1112.png" alt="img" />
            <div className="courses_child2">
              <h5>BSc (Hons.) Adult Nursing</h5>
              <p>Leeds Beckett University</p>
              <div className="courses_child3">
                <button>Undergraduate</button>
                <button>3 Years</button>
                <button>Leeds</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}

const Root = styled.section`
  .search_box {
    display: flex;
    width: 100%;
    padding: 5px;
    justify-content: space-between;
    border: 1px solid gray;
    border-radius: 12px;
    flex-wrap: wrap;
    input {
      border: none;
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
    /* align-items: center; */
    flex-direction: column;
    flex-wrap: wrap;
    .courses_box {
      display: flex;
      .courses_child1 {
        display: flex;
        flex: 1;
        gap: 10px;
        flex-wrap: wrap;
        .courses_child2 {
          h5 {
            color: DodgerBlue;
          }
          .courses_child3 {
            display: flex;
            button {
              width: 150px;
              color: white;
              background-color: orangered;
              border-radius: 14px;
              cursor: pointer;
              margin: 10px;
            }
          }
        }
      }
    }
  }

`;
