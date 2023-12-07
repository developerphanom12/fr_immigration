import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
// import cogoToast from "cogo-toast";
import { useDispatch } from "react-redux";
// import { userCheckAction, userDataAction } from "../../redux/users/action";
// import {  EXCHANGE_URLS_ADMIN } from "../URLS";
import loginbanner from "../CommonPage/imageLogo/login_banner.png";
import { userLoginAction } from "../../redux/users/action";

export default function AdminLogin() {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelLogin = (e) => {
    const data = {
      username: adminEmail,
      password: adminPass,
    };
    console.log("console1", data);
    const userCallback = (e) => {
      console.log(e);
    };
  
      dispatch(userLoginAction(data, userCallback));
      navigate("/dashboardd")
   
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handelLogin();

    }
  };

  // const testClick = ()=>{
  //   localStorage.setItem("token","ankittoken")
  //   dispatch(userCheckAction(true));
  // }

  return (
    <Root>
      <div className="logimg">
        <h4>Sign-in to join the Phanom Online Portal</h4>
        <img src={loginbanner} alt="img" />
      </div>
      <div className="box_div">
        <h2>LOG-IN</h2>
        <div className="user_name">
          Admin Name
          <input
            value={adminEmail.username}
            onChange={(e) => {
              setAdminEmail(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            placeholder="User Name"
          />
        </div>
        <div className="user_name">
          Password
          <input
            type="Password"
            value={adminPass.password}
            onChange={(e) => {
              setAdminPass(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Password"
          />
        </div>
        <div className="button_div">
          <button
            className="user_btn"
            onClick={
              handelLogin
              // testClick();
            }
          >
            Log-in
          </button>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 20px;
  position: relative;
  top: -16px;
  font: 22px "Roboto", sans-serif;
  @media (max-width: 1019px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;
    top: 72px;
  }

  .logimg {
    h4 {
      color: #010f2e;
      text-align: center;
      font: 20px "Roboto", sans-serif;
    }
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #d8e6f4;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px 0px 0px 0px;
    margin: 0px 30px 10px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    align-items: center;
    width: 42%;
    position: bottom;
    img {
      max-width: 90%;
      max-height: 90%;
      display: flex;
      justify-content: flex-end;
      @media (max-width: 809px) {
        justify-content: center;
      }
    }
    @media (max-width: 809px) {
      padding: 10px;
      width: 100%;
      margin: 20px 20px;
    }
  }

  .box_div {
    height: 86%;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    flex-wrap: wrap;
    padding: 10px;
    font: 16px "Roboto", sans-serif;
    color: #353535;
    @media (max-width: 800px) {
      padding: 10px;
      width: 100%;
      flex-direction: column;
      margin: 20px 20px;
    }
    .user_name {
      display: flex;
      flex-direction: column;
      width: 90%;
      justify-content: center;
      gap: 5px;
      padding: 10px;
      font: 14px "Roboto", sans-serif;
      @media (max-width: 799px) {
        align-items: center;
        padding: 0px;
        gap: 0px;
        height: 80px;
      }
      input {
        width: 100%;
        padding: 15px;
        cursor: pointer;
        border: transparent;
        border-radius: 10px;
        background-color: #e8f0fe;
        @media (max-width: 809px) {
          height: 35px;
          padding: 10px;
        }
      }
    }
    .button_div {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        display: flex;
        flex-direction: column;
        width: 97%;
        height: 50px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 10px;
        border: transparent;
        margin: 5px;
        background: #000080;
        color: #fff;
        background-size: 300% 100%;
        transition: all 0.2s ease-in-out 0s;
        text-transform: uppercase;
        @media (max-width: 899px) {
          height: 30px;
        }
        &:hover {
          transition: all 0.2s ease-in-out 0s;
          box-shadow: 10px 5px 5px gray;
        }
      }
    }
    /* .forget {
      text-align: right;
      width: 85%;
      @media (max-width: 800px) {
        height: 30px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      button {
        color: dodgerblue;
        font-family: "Roboto", sans-serif;
        text-decoration: underline;
        font-weight: 700;
        font-size: 18px;
        cursor: pointer;
        border: none;
        padding: 10px;
        text-align: right;
        background-color: transparent;
        @media (max-width: 899px) {
          height: 35px;
          text-align: center;
        }
      }
    } */

    .register {
      display: flex;
      font: 16px;
      width: 90%;
      align-items: center;
      justify-content: center;
      gap: 20px;
      @media (max-width: 889px) {
        flex-direction: column;
      }
      button {
        border: none;

        @media (max-width: 809px) {
          width: 100%;
          height: 30px;
        }
        background: #000080;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
        color: #fff;
        padding: 15px;
        background-size: 300% 100%;
        transition: all 0.2s ease-in-out 0s;
        text-transform: uppercase;
        &:hover {
          box-shadow: 10px 5px 5px gray;
          transition: all 0.2s ease-in-out 0s;
        }
      }
    }
  }
`;
