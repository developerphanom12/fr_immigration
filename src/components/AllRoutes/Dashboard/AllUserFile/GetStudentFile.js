import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_ADMIN } from "../../../URLS";
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import cogoToast from "cogo-toast";

export default function GetStudentFile() {
  const [getStudent, setGetStudent] = useState();
  const navigate = useNavigate();

  const [status, setStatus] = useState({
    userId: "",
    email: "",
    is_aprooved: "",
  });

  const getStudentApi = async () => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_ADMIN}/getallstudent`,
        axiosConfig
      );
      console.log("ressss", res?.data?.data);
      if (res?.status === 201) {
        setGetStudent(res?.data?.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const statusApi = async () => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const response = await axios.post(
        `${EXCHANGE_URLS_ADMIN}/updat11e`,
        status,
        axiosConfig
      );
      console.log("response", response?.data);
      if (response?.status === 201) {
        cogoToast.success(`Email: ${status.email}`);
        navigate("/dashboardd");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleClick = (userId, isApproved) => {
    const currentUser = getStudent.find((student) => student.id === userId);
    if (currentUser) {
      setStatus({
        userId,
        email: currentUser.email,
        is_aprooved: isApproved ? 1 : 0,
      });
      if (status.is_aprooved === 1) {
        cogoToast.success("Student Approved");
      } else {
        cogoToast.error("Student Reject");
      }
      statusApi();
    } else {
      cogoToast.error("User not found");
    }
  };

  useEffect(() => {
    getStudentApi();
  }, []);
  return (
    <Root>
      <div className="app_table">
        <div className="heading">Students List For Approve/Reject</div>
        <div className="app_header">
          <div>Student ID</div>
          <div>First Name</div>
          <div>Last Name</div>
          <div>Email </div>
          <div>Phone Number</div>
          <div>Approve/Reject</div>
        </div>
        {getStudent &&
          getStudent.map((i) => {
            return (
              <div className="app_body">
                <div>{i.id}</div>
                <div>{i.first_name}</div>
                <div>{i.last_name}</div>
                <div>{i.email}</div>
                <div>{i.phone_number}</div>
                <div className="iconn">
                  <button
                    className="right"
                    onClick={() => handleClick(i.id, 1)}
                  >
                    <IoCheckmarkSharp />
                  </button>
                  <button
                    className="wrong"
                    onClick={() => handleClick(i.id, 0)}
                  >
                    <IoCloseSharp />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color: #f1f1f2;
  padding-bottom: 20px;
  padding-left: 80px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  .app_table {
    font-family: "Roboto";
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    .heading {
      width: 94%;
      font-size: 20px;
      padding: 10px;
      font-weight: 700;
    }
    .app_header {
      display: flex;
      width: 94%;
      background-color: dodgerblue;
      color: white;
      > div {
        flex: 1;
        font-family: "Roboto";
        border: 1px solid #dee2e6;
        padding: 10px;
        @media (max-width: 700px) {
          font-size: 10px;
          min-width: 50px;
          padding: 5px;
        }
      }
    }
    .app_body {
      display: flex;
      width: 94%;
      font-family: "Roboto", sans-serif;

      > div {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        border: 0.3px solid lightgray;
        padding: 7px;
        font-size: 12px;
        text-transform: capitalize;

        @media (max-width: 700px) {
          font-size: 10px;
          min-width: 50px;
          padding: 5px;
        }
      }
      .iconn {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;
        svg {
          width: 20px;
          height: 20px;
          font-weight: 700;
        }
        .right {
          border: none;
          border-radius: 5px;
          padding: 5px 7px;
          background-color: green;
          color: #ffffff;
          &:hover {
            cursor: pointer;
            background-color: #ffffff;
            color: green;
          }
        }
        .wrong {
          border: none;
          border-radius: 5px;
          padding: 5px 7px;
          background-color: red;
          color: #ffffff;
          &:hover {
            cursor: pointer;
            background-color: #ffffff;
            color: red;
          }
        }
      }
    }
  }
`;
