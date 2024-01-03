import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_APPLICATION } from "../../URLS";
import { useDispatch } from "react-redux";
import { BsFillEyeFill } from "react-icons/bs";
import Download from "./Download";
import { appDetailsAction } from "../../../redux/users/action";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader";
import { Pagination } from "react-bootstrap";

export default function History({ popUser = () => {} }) {
  const [applications, setApplications] = useState([]);
  const [loader, setLoader] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  const [courses, setCourses] = useState([]);
  const [pagination, setPagination] = useState({
    page: "",
    pageSize: "",
    totalItems: "",
    totalPages: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("courses", courses);

  const getHistory = async (searchKey, page) => {
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
      setApplications(res?.data?.data.applications);
      setPagination({
        page: res?.data?.data.pagination.page,
        pageSize: res?.data?.data.pagination.pageSize,
        totalItems: res?.data?.data.pagination.totalItems,
        totalPages: res?.data?.data.pagination.totalPages,
      });
      setLoader(false);
    } catch (e) {
      console.log(e);
    }
  };
  const handlePageChange = (newPage) => {
    getHistory(searchKey, newPage);
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
      setCourses(res?.data?.data.applications);
      setPagination({
        page: res?.data?.data.page,
        pageSize: res?.data?.data.pageSize,
        totalItems: res?.data?.data.totalItems,
        totalPages: res?.data?.data.totalPages,
      });
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
    const isUnique = uniqueArray.some(
      (item) => item?.application_id === currentItem?.application_id
    );

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
              uniqueApplications.map((i) => {
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
          <Pagination pagination={pagination} onPageChange={handlePageChange} />
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
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: normal;
  vertical-align: middle;
  height: 100%;
  padding-left: 80px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    @media (max-width: 566px) {
      padding: 10px;
      flex-direction: column;
      h1 {
        font-size: small;
      }
    }
    h1 {
      color: #202020;
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      font-weight: 700;
    }
    button {
      width: 170px;
      height: 40px;
      margin: 5px;
      border-radius: 50px;
      border: none;
      background: #57be1f;
      color: #ffffff;
      &:hover {
        box-shadow: 5px 5px 7px gray;
      }
      @media (max-width: 566px) {
        width: 100%;
        height: 30px;
      }
    }
  }
  .search_box {
    display: flex;
    margin-left: 10px;
    width: 50%;
    height: 60px;
    background: #ffffff;
    border-radius: 50px;
    box-shadow: 4px 5px 6px gray;
    @media (max-width: 566px) {
      width: 90%;
    }
    input {
      border: 1px solid gray;
      width: 100%;
      padding-left: 10px;
      border-radius: 50px;
      margin: 10px;
    }
    button {
      width: 80px;
      background: #8656ec;
      padding: 5px;
      border: none;
      border-radius: 50px;
      float: none;
      font-family: "Roboto", sans-serif;
      font-size: 14px;
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
    margin: 10px;
    width: 80%;
    padding: 5px 5px 5px 10px;
    font-family: "Roboto", "sana-serif";
    .app_header {
      display: flex;
      background: #f7f6fe;
      text-align: center;
      color: gray;
      border-bottom: 4px solid #c6abff;

      > div {
        flex: 1;
        border: 1px solid #dee2e6;
        padding: 15px;
      }
    }
    .app_body {
      display: flex;
      font-family: "Roboto", sans-serif;

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
        text-transform: capitalize;
        background-color: #e7e7e8;
        text-align: center;
        padding: 15px 5px;
        .person {
          color: #8995ad;
          font-size: 14px;
          @media (max-width: 789px) {
            font-size: 10px;
          }
        }
        h6 {
          font-weight: 600;
          text-align: left;
          font-size: small;
          @media (max-width: 789px) {
            font-size: 12px;
          }
        }

        span {
          font-weight: 600;
        }
        &:nth-child(odd) {
          background-color: #c6abff42;
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
    color: #754cf2;
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
