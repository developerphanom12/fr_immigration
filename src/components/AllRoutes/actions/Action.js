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
        {active === "courses"
          ? <AddCourses/>
          : active === "university"
          ? <AddUniversity/>
          : <AddCourses/>}
      </div>
    </Root>
  );
}

const Root = styled.section`
  .nav_tab {
    display: flex;
    gap: 5px;
    .btn_1 {
      background-color: transparent;
      border: none;
      width: fit-content;
      padding: 5px;
      border-radius: 10px;
      &:hover {
        background-color: lightpink;
      }
    }
    .active {
      border-bottom: 5px solid lightpink;
    }
  }
`;
