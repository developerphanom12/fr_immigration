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
    try {
      const res = await axios.get(`${EXCHANGE_URLS_UNIVERSITY}/get/allcourse`);
      console.log("resres123", res);
      // if (res.status === 201) {
        setCourseData(res?.data?.data);
        // setLoader(false)
      // }
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
  
  useEffect(()=>{
    if(searchKey != null){
      const debounce = setTimeout(()=>{
        courseApi(searchKey)
      },1000);
      return(
        clearTimeout(debounce)
      )
    }
  })
 console.log("setSearchQuery",setSearchQuery)
  return (
    <Root>
      <h4>Search Courses Here</h4>
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
        <h2>Total Courses: {courseData?.length}</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt-5">
              <div className="courses_box">
                {courseData && courseData.length > 0 && (
                  courseData.map((course, index) => {
                    // Render a new row for every 3 courses
                    if (index % 2 === 0) {
                      return (
                        <div key={index} className="courses_row">
                          {courseData.slice(index, index + 2).map((course, i) => (
                            <div key={i} className="courses_child1">
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
                      );
                    }
                    return null;
                  })
                )}
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
  h2{
    margin-top: 10px;
  }

  .search_box {
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
    input {
      border: transparent;
      padding: 5px;
      width: 100%;

    }
    button {
      width: 80px;
      border: transparent;
      border-radius: 5px;
      background-color:#1E90FF;
      color: white;
      &:hover{
        cursor: pointer;
        background-color: green;
      }
    }
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
       flex: 1;
      @media (max-width:876px){
        flex-direction: column;
      }
      .courses_child1 {
        display: flex;
        gap: 10px;
        margin:10px 0px;
        padding: 10px;
        border-radius: 15px;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        border: 1px solid gray;
        border-bottom: 5px solid #87CEFA;
        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          min-width:50px;
          min-height: 50px;
          border-radius: 10px;
        }
        .courses_child2 {
          align-items: center;
          h5 {
            color: #6495ED;
            text-transform: capitalize;
          }
          .courses_child3 {
            display: flex;
            button {
              width: 150px;
              color: white;
              background-color:	#FF7F50;
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
