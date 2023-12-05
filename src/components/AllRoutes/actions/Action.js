import React, { useState } from "react";
import styled from "styled-components";
import AddCourses from "./AddCourses";
import AddUniversity from "./AddUniversity";

export default function Action() {
  const [active, setActive] = useState("courses");

  return (
    <Root>
      <div className="nav_tab">
        <button
          className={active === "courses" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("courses");
          }}
        >
          Create Courses
        </button>
        <button
          className={active === "university" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("university");
          }}
        >
          Create University
        </button>
      </div>
      <div>
        {active === "courses" ? (
          <AddCourses />
        ) : active === "university" ? (
          <AddUniversity />
        ) : (
          <AddCourses />
        )}
      </div>
    </Root>
  );
}

const Root = styled.section`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  padding-left: 80px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  .nav_tab {
    display: flex;
    gap: 5px;
    margin: 10px;
    background-color: white;
    box-shadow: 6px 7px 7px gray;
    border-radius: 10px;
    .btn_1 {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 45px;
      margin: 5px;
      padding: 10px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-top: 20px;
      border-radius: 10px;
      border: transparent;
      background: #000080;
      color: #fff;
      background-size: 300% 100%;
      transition: all 0.3s ease-in-out 0s;
      text-transform: uppercase;
      &:hover {
        background: #000080;
        transition: all 0.1s ease-in-out 0s;
        box-shadow: 4px 5px 5px gray;
      }
    }
    .active {
      background-color: #57be1f;
      color: #ffffff;
      @media (max-width: 400px) {
        .active {
          background-color: transparent;
          color: black;
        }
      }
    }
  }
`;
