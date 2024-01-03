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
  padding-left: 80px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  .nav_tab {
    display: flex;
    gap: 10px;
    align-items: center;
    background: #ffffff;
    width: 80%;
    justify-content: center;
    /* padding: 10px; */
    border-radius: 10px;
    margin: 5px;
    @media (max-width: 786px) {
      flex-direction: column;
    }

    .btn_1 {
      background-color: transparent;
      border: none;
      width: fit-content;
      padding: 10px;
      color:#C6ABFF;
      border-bottom: 3px solid #C6ABFF;
      /* border-radius: 0px; */
      &:hover {
        box-shadow: 4px 5px 5px #A1A2A5;
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
      color: #8656EC;
      border-bottom: 3px solid #8656EC;
      @media (max-width: 400px) {
        .active {
          background-color: transparent;
          color: black;
        }
      }
    }
  }
`;
