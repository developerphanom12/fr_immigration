import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_APPLICATION } from "../../URLS";
import { useDispatch } from "react-redux";
import { appDetailsAction } from "../../../redux/users/action";

export default function History({ popUser = () => {} }) {
  const [applications, setApplications] = useState([]);
  // const [filteredApplications, setFilteredApplications] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [courses, setCourses] = useState([]);
  // const [getDetails,setGetDetails] = useState({})

  const dispatch = useDispatch();

 console.log("courses",courses);

  const getHistory = async (searchKey) => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_APPLICATION}/fetchallapplications?searchKey=${searchKey}`,
        axiosConfig
      );
      setApplications(res?.data?.data[0].applications);
    } catch (e) {
      console.log(e);
    }
  };

  const getCourses = async () => {
    // const axiosConfig = {
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    // };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_APPLICATION}/fetchallapplications`,
        // axiosConfig
      );
      setCourses(res?.data?.data[0].applications);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getHistory();
    getCourses();
  }, []);

  const handleSearch = () => {
    getHistory()
  };

  useEffect(()=>{
    if(searchKey != null){
      const debounce = setTimeout(() => {
        getHistory(searchKey)
      }, 1000);

      return ()=>{
        clearTimeout(debounce)
      }
    }
  },[searchKey])

  const handlePassData =(i)=>{  
    console.log("getDetails1", i) ;
      dispatch(appDetailsAction(i))
      popUser(true)
  }

  return (
    <Root>
      {" "}
      <h1>Application History</h1>
      <div className="search_box">
        <input
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
          placeholder="Search Courses By Name Or Number..."
        ></input>
        <button onClick={()=>{handleSearch()}}>Search</button>
      </div>
      <div className="app_table">
        <div className="app_header">
          <div>Cams Id</div> 
          <div>Student Name</div>
          <div>University Name</div>
          <div>Course Name</div>
          <div>Status</div>
        </div>
        {applications &&
          applications.map((i) => {
            return (
              <div className="app_body" onClick={()=>{handlePassData(i)}}>
                <div>{i?.application_id}</div>
                <div>
                  <p>
                    <span>{i?.student_firstname}</span>
                  </p>
                  <p>
                    Passport No: <span>{i?.student_passport_no}</span>
                  </p>
                  <p>
                    Counsellor : <span>{i?.user_id.username}</span>
                  </p>
                </div>
                <div>
                  <p>{i?.university_id.university_name}</p>
                  <p>{i?.university_id.person_name}</p>
                  <p>{i?.university_id.contact_number}</p>
                </div>
                <div>{i?.course_id?.course_name}</div>
                <div>{i?.application_status}</div>
              </div>
            );
          })}
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .search_box {
    display: flex;
    /* padding: 5px; */
    justify-content: space-between;
    border: 1px solid gray;
    /* border-radius: 12px; */
    input {
      border: none;
      /* border-radius: 12px; */
      width: 100%;
      /* padding: 5px; */
    }
    button {
      width: 80px;
      border-radius: 12px;
      background-color: blue;
      color: white;
    }
  }

  p {
    padding: 0;
    margin: 0;
    text-transform: capitalize;
  }

  .app_table {
    display: flex;
    flex-direction: column;

    .app_header {
      display: flex;
      background-color: lightblue;
      > div {
        flex: 1;
        padding: 10px;
        border: 1px solid gray;
        /* text-align: center; */
      }
    }
    .app_body {
      display: flex;
      > div {
        flex: 1;
        border: 1px solid gray;
        padding: 5px;
        text-transform: capitalize;

        span {
          font-weight: 500;
        }
      }
      &:hover {
        background-color: lightgray;
        cursor: pointer;
      }
    }
  }
`;
