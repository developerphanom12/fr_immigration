import React, { useState } from "react";
import styled from "styled-components";
import ProfileUser from "./ProfileUser";
import ProfileAddress from "./ProfileAddress";

export default function Profile() {
  const [active, setActive] = useState("profileUser");

  return (
    <Root>
      <div className="main_div">
        <div className="nav_tabb">
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
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;

  @media (max-width: 767px) {
    padding-left: 60px;
    width: 100%;
  }

  .main_div {
    width: 80%;
    height: 60%;
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0px 6.161px 12.321px 0px rgba(194, 194, 194, 0.16),
      0px 0px 18.482px 0px rgba(170, 170, 170, 0.16);
    .nav_tabb {
      display: flex;
      width: 70%;
      gap: 10px;
      margin: 10px;
      padding: 10px;
      button {
        background-color: transparent;
        color: #80808096;
        padding: 5px;
        border: none;
        border-bottom: 3px solid #80808096;

        cursor: pointer;
      }
      .active {
        border-bottom: 3px solid #d74632;
        color: #d74632;
        @media (max-width: 400px) {
          .active {
            background-color: transparent;
            color: black;
          }
        }
      }
    }
  }
`;
