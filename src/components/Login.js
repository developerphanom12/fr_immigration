import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import cogoToast from "cogo-toast";
import { useDispatch } from "react-redux";
import { userCheckAction, userDataAction } from "../redux/users/action";
import { EXCHANGE_URLS } from "./URLS";
// import login from './imageLogo/login.jpg';

export default function Login() {
  const [logindata, setlogindata] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginApi = async () => {
    try {
      const res = await axios.post(`${EXCHANGE_URLS}/login1`, logindata);
      console.log("resres123", res);
      if (res?.status === 200) {
        localStorage.setItem("token", res?.data?.token);
        // dispatch(userDataAction(res?.data));
        dispatch(userCheckAction(true));
        cogoToast.success("Login SuccessFully");
        navigate("/dashboard");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleClick = () => {
    if (logindata.username.length > 3 && logindata.password.length > 8) {
      loginApi();
    } else {
      cogoToast.error(
        "Username & password Length should be greater than 3 & 8 character"
      );
    }
  };

  const testClick = ()=>{
    localStorage.setItem("token","ankittoken")
    dispatch(userCheckAction(true));
  }

  console.log("logindata", logindata);
  return (
    <Root>
        {/* <img src={login} alt="img"/> */}
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
              // handleClick();
              testClick();
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
  /* background-color: pink; */
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  /* background-image: url('/home/abc/Desktop/ frontend/fr_immigration/public/logo192.png'); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .box_div {
    width: 500px;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: large;
    background-color: #ffffff;
    padding: 10px 20px 10px 20px;
    flex-wrap: wrap;
  }

  .user_btn {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 40px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 8px 0px 8px 0px;
  }

  .user_name {
    display: flex;
    gap: 8px;
    flex-direction: column;
    width: 300px;
    height: 70px;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 95%;
    padding: 8px;
    cursor: pointer;
  }

  .user_btn:hover {
    background-color: green;
  }
  img {
    width: 800px;
    height: 800px;
  }
`;
