import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_APPLICATION } from "../../URLS";
import { useDispatch } from "react-redux";
import { BsFillEyeFill } from "react-icons/bs";
import Download from "./Download";
// import Loader from "../../Loader";
import { appDetailsAction } from "../../../redux/users/action";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader";

export default function History({ popUser = () => {} }) {
  const [applications, setApplications] = useState([]);
  const [loader, setLoader] = useState(true);
  // const [filteredApplications, setFilteredApplications] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [courses, setCourses] = useState([]);
  // const [getDetails,setGetDetails] = useState({})

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("courses", courses);

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
      setLoader(false);
    } catch (e) {
      console.log(e);
    }
  };

  const getCourses = async () => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_APPLICATION}/fetchallapplications`,
        axiosConfig
      );
      setCourses(res?.data?.data[0].applications);
      setLoader(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setLoader(false);
    getHistory();
    getCourses();
  }, []);

  const handleSearch = () => {
    getHistory();
  };

  useEffect(() => {
    if (searchKey != null) {
      const debounce = setTimeout(() => {
        getHistory(searchKey);
      }, 1000);

      return () => {
        clearTimeout(debounce);
      };
    }
  }, [searchKey]);

  const handlePassData = (i) => {
    console.log("getDetails1", i);
    dispatch(appDetailsAction(i));
    popUser(true);
  };

  const uniqueApplications = applications.reduce((uniqueArray, currentItem) => {
    // Check if the uniqueArray already contains an item with the same application_id
    const isUnique = uniqueArray.some(item => item?.application_id === currentItem?.application_id);
  
    // If the application_id is not present in uniqueArray, add the currentItem to the uniqueArray
    if (!isUnique) {
      uniqueArray.push(currentItem);
    }
  
    return uniqueArray;
  }, []);

  return (
    <Root>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="header">
            <h1>Application History</h1>
            <Download />
          </div>
          <div className="search_box">
            <input
              value={searchKey}
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
              placeholder="Search Courses By Name Or Number..."
            ></input>
            <button
              onClick={() => {
                handleSearch();
              }}
            >
              Search
            </button>
          </div>
          <div className="app_table">
            <div className="app_header">
              <div>CAMS Id</div>
              <div>Student Name</div>
              <div>University Name</div>
              <div>Course Name</div>
              <div>Status</div>
              <div>View</div>
            </div>
            {uniqueApplications &&
             uniqueApplications.map(i => {
                return (
                  <div
                    className="app_body"
                    onClick={() => {
                      handlePassData(i);
                    }}
                  >
                    <div className="cams">#{i?.application_id}</div>
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
                      <h6>{i?.university_id.university_name}</h6>
                      <p className="person">{i?.university_id.person_name}</p>
                      <p className="person">
                        {i?.university_id.contact_number}
                      </p>
                    </div>
                    <div>{i?.course_id?.course_name}</div>
                    <div>{i?.application_status}</div>
                    <div
                      className="iconn"
                      onClick={() => {
                        navigate(`/detailview/${i?.application_id}`);
                      }}
                    >
                      <BsFillEyeFill />
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f8f8f8;
  color: #202020;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: normal;
  vertical-align: middle;
  height: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    @media (max-width: 566px) {
      padding: 10px;
      flex-direction: column;
      h1 {
        font-size: small;
      }
    }
    h1 {
      color: #202020;
      font-family: "Cairo", sans-serif;
      font-size: 32px;
      font-weight: 700;
    }
    button {
      width: 200px;
      height: 40px;
      margin: 5px;
      border-radius: 20px;
      border: none;
      /* padding: 10px; */
      background: #57be1f;
      color: #ffffff;
      @media (max-width: 566px) {
        width: 120px;
        height: 20px;
      }
    }
  }
  .search_box {
    display: flex;
    margin: 20px;
    background: #e6f5ff;
    border-radius: 40px;
    justify-content: space-between;
    input {
      border: 1px solid gray;
      width: 60%;
      border-radius: 30px;
      padding: 7px;
      margin: 15px;
    }
    button {
      width: 80px;
      background: #1e33f2;
      padding: 10px;
      border: none;
      border-radius: 35px;
      float: none;
      font-family: "Cairo", sans-serif;
      font-size: 18px;
      font-weight: 700;
      margin: 15px;
      color: #ffffff;
    }
  }

  p {
    padding: 0;
    margin: 0;
    text-transform: capitalize;
    text-align: left;
    font-family: "open-sans", "sana-serif";
  }

  .app_table {
    display: flex;
    flex-direction: column;
    margin: 20px;
    font-family: "Mulish", "sana-serif";
    .app_header {
      display: flex;
      background-color: #fff3ee;
      text-align: center;

      > div {
        flex: 1;
        border: 1px solid #dee2e6;
        padding: 20px;
        /* text-align: center; */
      }
    }
    .app_body {
      display: flex;
      font-family: "Cairo", sans-serif;

      .cams {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .iconn {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      > div {
        flex: 1;
        border: 0.3px solid #fbfbfd;
        padding: 5px;
        text-transform: capitalize;
        background-color: #e7e7e8;
        text-align: center;
        padding: 20px 5px;
        .person {
          color: #8995ad;
          font-size: 15px;
        }
        h6 {
          font-weight: 600;
          text-align: left;
          font-size: small;
        }

        span {
          font-weight: 600;
        }
        &:nth-child(odd) {
          background-color: #e7e7e8;
        }

        &:nth-child(even) {
          background-color: white;
        }
      }
      &:hover {
        background-color: lightgray;
        cursor: pointer;
      }
    }
  }
  svg {
    height: 25px;
    width: 25px;
    color: blue;
    &:hover {
      color: green;
    }
  }
  @media (max-width: 568px) {
    .app_table {
      font-size: smaller;
      margin: 0px;
      overflow-x: scroll;
      .app_header {
        min-width: 135px;
        /* width: 100%; */
        > div {
          padding: 5px;
          font-size: smaller;
        }
      }
      .app_body {
        min-width: 105px;
        width: 100%;
        > div {
          /* flex: 1; */
          font-size: smaller;
        }
      }
    }
  }
`;
