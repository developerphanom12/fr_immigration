import React, { useState } from "react";
import styled from "styled-components";
import Student from "./Student";
import Course from "./Course";
import Upload from "./Upload";
import AppHistory from "./AppHistory";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { EXCHANGE_URLS_APPLICATION } from "../../../URLS";

export default function DetailView() {
  const [val,setVal] = useState(false);
  const [user, setUser] = useState();
  const [active, setActive] = useState("student");
  let { id } = useParams();
  console.log("checkdata", id);

  const getDetail = async () => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_APPLICATION}/getbyid/${id}`,
        axiosConfig
      );
      if (res.status === 201) {
        setUser(res?.data?.data[0]);
      }
      console.log("resres", res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDetail();
  }, [id ,val]);

  console.log("userr", user);
  return (
    <Root>
      <div></div>
      <h2>Application History</h2>
      <div className="nav_tab">
        <button
          className={active === "student" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("student");
          }}
        >
          Student Detail
        </button>
        <button
          className={active === "course" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("course");
          }}
        >
          Course Detail
        </button>
        <button
          className={active === "upload" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("upload");
          }}
        >
          Upload / Download
        </button>
        <button
          className={active === "apphistory" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("apphistory");
          }}
        >
          Application History
        </button>
        <button
          className={active === "comment" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("comment");
          }}
        >
          Comment
        </button>
      </div>

      <div className="table">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {active === "student" ? (
                <Student detail={user} />
              ) : active === "course" ? (
                <Course detail={user} />
              ) : active === "upload" ? (
                <Upload detail={user} val = {((e)=>{setVal(e)})}/>
              ) : active === "apphistory" ? (
                <AppHistory detail={user} />
              ) : active === "comment" ? (
                <Comment />
              ) : (
                <Student />
              )}
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "Mulish", sans-serif;
  background-color: #f8f8f8;
  height: 100%;
  padding: 20px;
  @media (max-width: 800px) {
    padding: 0;
    h2 {
      margin: 4px;
    }
  }
  h2 {
    margin: 10px;
    font-size: 32px;
    font-weight: 600;
    @media (max-width: 786px) {
      margin: 0;
      font-size: small;
      align-items: center;
    } 
  }
  .nav_tab {
    display: flex;
    gap: 15px;
    align-items: center;
    background: #e6f5ff;
    justify-content: center;
    padding: 10px;
    border-radius: 40px;
    margin: 10px;
    border-bottom: 1px solid lightgray;
    @media (max-width: 786px) {
      flex-direction: column;
    }

    .btn_1 {
      background-color: transparent;
      border: none;
      width: fit-content;
      padding: 10px;
      border-radius: 40px;
      &:hover {
        background-color: blue;
        color: white;
      }
      @media (max-width: 566px) {
        min-width: 80px;
        width: 100%;
        padding: 5px;
        font-size: small;
        &:hover {
          background-color: transparent;
          color: black;
        }
      }
    }
    .active {
      background-color: blue;
      color: #ffffff;
      @media (max-width: 400px) {
        .active {
          background-color: transparent;
          color: black;
        }
      }
    }
  }
  .table {
    border-top: 1px solid lightgray;
    width: 100%;
    height: 100%;
    @media (max-width: 600px) {
      padding: 0;
    }
  }
`;
