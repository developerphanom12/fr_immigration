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
  /* font-family: "Roboto", sans-serif; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f2;
  height: 100%;
  width: 100%;
  @media (max-width:767px){
  padding-left: 60px;
  }

  .nav_tab {
    display: flex;
    gap: 5px;
    margin: 10px;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 6px 5px 5px gray;
    button {
      background-color: transparent;
      border: none;
      width: fit-content;
      padding: 5px;
      border-radius: 10px;
      &:hover {
        background-color: green;
        color: #ffffff;
      }
    }
    .active {
      background-color: #000080;
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
