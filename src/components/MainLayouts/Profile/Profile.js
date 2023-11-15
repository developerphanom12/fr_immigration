import React, { useState } from "react";
import styled from "styled-components";
import ProfileUser from "./ProfileUser";
import ProfileAddress from "./ProfileAddress";

export default function Profile() {
  const [active, setActive] = useState("profileUser");

  return (
    <Root>
      <div className="nav_tab">
        <button
          className={active === "profileUser" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("profileUser");
          }}
        >
         User Details
        </button>
        <button
          className={active === "profileAddress" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("profileAddress");
          }}
        >
          User Address
        </button>
      </div>
      <div>
        {active === "profileUser" ? (
          <ProfileUser />
        ) : active === "profileAddress" ? (
          <ProfileAddress />
        ) : (
          <ProfileUser />
        )}
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "Mulish", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  height: 100%;

  .nav_tab {
    display: flex;
    gap: 5px;
    margin: 10px;
    background-color: #e6f5ff;
    padding: 10px;
    border-radius: 40px;
    .btn_1 {
      background-color: transparent;
      border: none;
      width: fit-content;
      padding: 5px;
      border-radius: 40px;
      &:hover {
        background-color: blue;
        color: #ffffff;
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
`;
