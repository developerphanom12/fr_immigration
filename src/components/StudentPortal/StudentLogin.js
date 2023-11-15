import React, { useState } from 'react'
import styled from 'styled-components'
import loginbanner from "../CommonPage/imageLogo/login_banner.png"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EXCHANGE_URLS_STUDENT } from '../URLS';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import { userCheckAction, userDataAction } from '../../redux/users/action';


export default function StudentLogin() {
  const navigate = useNavigate();

  const [logindata, setlogindata] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const loginApi = async () => {
    try {
      const res = await axios.post(`${EXCHANGE_URLS_STUDENT}/studentlogin`, logindata);
      console.log("resres123", res?.data?.data?.user);

      if (res?.status === 200) {
        localStorage.setItem("token", res?.data?.data?.user?.token);
        dispatch(userDataAction(res?.data?.data?.user));
        dispatch(userCheckAction(true));
        cogoToast.success("Login SuccessFully");
        navigate("/dashboardd");
      } else {
        cogoToast.error("Username Or Password Incorrect")
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {

    if (logindata.username.length > 3 && logindata.password.length > 3) {
      loginApi();
    } else {
      cogoToast.error(
        "Username & password Length should be greater than 3 & 3 character"
      );
    }
  };

  console.log("logindata", logindata);
  //   const navigate = useNavigate();
  return (
    <Root>
      <div className="logimg">
        <h4>Sign-in to join the Phanom Online Portal</h4>
        <img src={loginbanner} alt="img" />
      </div>
      <div className="box_div">
        <div className="user_name">
          Student User Name*
          <input
            value={logindata.username}
            onChange={(e) => {
              setlogindata({ ...logindata, username: e.target.value });
            }}
            placeholder="User Name"
          />
        </div>
        <div className="user_name">
          Password*
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
            onClick={() => {
              handleClick();
            }}
          >
            Log-in
          </button>
        </div>
        <div className="register">
          <h5>Don't Have An Account ?</h5>
          <button
            onClick={() => {
              navigate("/register");
            }}
          >
            Get Started</button>
        </div>
      </div>

    </Root>
  )
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
      top: 25px;
  font: 22px "Mulish", sans-serif;
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
      font: 22px "Mulish", sans-serif;
    }
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    background-color: #d8e6f4;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px 0px 0px 0px;
    margin: 0px 30px 10px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
    width: 45%;
    position: bottom;
    img {
      max-width: 100%;
      max-height: 100%;
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
    padding: 20px;
    font: 16px "Mulish", sans-serif;
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
      width: 100%;
      justify-content: center;
      gap: 5px;
      padding: 10px;
      font: 16px "Mulish", sans-serif;
      @media (max-width: 799px) {
        align-items: center;
        padding: 0px;
        gap: 0px; 
      height: 80px; 
      }
      input {
        width: 100%;
        padding: 20px;
        cursor: pointer;
        border: transparent;
        border-radius: 30px;
        background-color: #e8f0fe;
        @media (max-width: 809px) {
         
          height: 35px;
          padding: 10px;
        }
      }
    }
    >div {
      width:100%;

      button {
        display: flex;
        flex-direction: column;
        width:100%;
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
        @media (max-width: 899px) {
          height: 35px;
        }
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
    }
    .forget {
      padding: 10px;
      text-align: right;
      width: 100%;
      @media (max-width: 800px) {
          height: 35px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      button {
        color: #ff6525;
        font-family: "Mulish", sans-serif;
        text-decoration: underline;
        font-weight: 700;
        font-size: 16px;
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
    }

    .register {
      display: flex;
      font: 20px;
      width:100%;
      align-items: center;
      justify-content: center;
      gap: 5px;
      @media (max-width: 889px) {
        flex-direction: column;
      }
      button {
        border: none;
        @media (max-width: 809px) {
          width: 100%;
          height: 35px;
        }
        background: linear-gradient(
          45deg,
          #ff6525 19%,
          #ffffffe6 51%,
          #ff6525 100%
        );
        border-radius: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
        color: #fff;
        padding: 20px 15px;
        background-size: 300% 100%;
        transition: all 0.3s ease-in-out 0s;
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(
            -25deg,
            #ff6525 49%,
            #ffffffe6 91%,
            #ff6525 100%
          );
        }
      }
    }
  }

`
