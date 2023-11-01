import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import cogoToast from "cogo-toast";
import { useDispatch } from "react-redux";
import { userCheckAction, userDataAction } from "../../redux/users/action";
import {  EXCHANGE_URLS_ADMIN } from "../URLS";
import loginbanner from "../CommonPage/imageLogo/login_banner.png"

export default function AdminLogin() {
  const [logindata, setlogindata] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginApi = async () => {
    try {
      const res = await axios.post(`${EXCHANGE_URLS_ADMIN}/login`, logindata);
      console.log("resres123", res?.data?.data);
      if (res?.status === 200) {
        localStorage.setItem("token", res?.data?.data?.user?.token);
        dispatch(userDataAction(res?.data?.data?.user));
        dispatch(userCheckAction(true));
        cogoToast.success("Login SuccessFully");
        navigate("/dashboard");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleClick = () => {
    if (logindata.username.length > 3 ) {
      loginApi();
    } else {
      cogoToast.error(
        "Username Length should be greater than 3 character"
      );
    }
  };

  // const testClick = ()=>{
  //   localStorage.setItem("token","ankittoken")
  //   dispatch(userCheckAction(true));
  // }

  console.log("logindata", logindata);
  return (
    <Root>
       <div className="logimg">
        <h4>Sign-in to join the Phanom Online Portal</h4>
        <img src={loginbanner} alt="img" />
      </div>
      <div className="box_div">
        <h2>
          <u>LOG-IN</u>
        </h2>
        <div className="user_name">
          <input
            value={logindata.username}
            onChange={(e) => {
              setlogindata({ ...logindata, username: e.target.value });
            }}
            placeholder="User Name"
          />
        </div>
        <div className="user_name">
          <input
            type="Password"
            value={logindata.password}
            onChange={(e) => {
              setlogindata({ ...logindata, password: e.target.value });
            }}
            placeholder="Password"
          />
        </div>
        <div>
          <button
            className="user_btn"
            onClick={() => {
              handleClick();
              // testClick();
            }}
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

  .logimg {
    h4 {
      color: #010f2e;
      text-align: center;
      font: 22px "Mulish", sans-serif;
    }
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    background-color: #d8e6f4;
    background-position: center bottom;
    background-repeat: no-repeat;
    padding: 20px 0px 0px 0px;
    margin: 0px 30px 10px 30px;
    /* background-size:100%; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 85%;
    position: bottom;
    img {
      max-width: 500px;
      max-height: 700px;
      display: flex;
      justify-content: flex-end;
      @media (max-width: 700px) {
        height: 300px;
        width: 220px;
      }
    }
  }

  .box_div {
    width: 580px;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    justify-content: center;
    background-color: #ffffff;
    flex-wrap: wrap;
    font: 16px "Mulish", sans-serif;
    color: #353535;

    button {
      display: flex;
      flex-direction: column;
      width: 390px;
      height: 55px;
      padding: 15px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 8px 0px 8px 0px;
      border-radius: 30px;
      border: transparent;
      background: linear-gradient(
        45deg,
        #0146ff 19%,
        #0146ff96 48%,
        #0146ff 100%
      );
      &:hover {
        background: linear-gradient(
          -25deg,
          #0146ff 19%,
          #0146ff96 88%,
          transparent 100%
        );
        transition: all 0.3s ease-in-out 0s;
      }
      border-radius: 50px;
      color: #fff;
      padding: 20px 30px;
      background-size: 300% 100%;
      transition: all 0.3s ease-in-out 0s;
      text-transform: uppercase;
    }

    .user_name {
      display: flex;
      flex-direction: column;
      width: 410px;
      height: 100px;
      justify-content: center;
      /* align-items: center; */
      gap: 5px;
      padding: 10px;
      font: 16px "Mulish", sans-serif;
    }
    input {
      width: 100%;
      padding: 20px;
      cursor: pointer;
      border: transparent;
      border-radius: 30px;
      background-color: #e8f0fe;
    }

    .user_btn:hover {
      background-color: green;
      color: white;
    }
  }
`;
