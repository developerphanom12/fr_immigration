import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import cogoToast from "cogo-toast";
import { useDispatch } from "react-redux";
import { userCheckAction, userDataAction } from "../../redux/users/action";
import { EXCHANGE_URLS } from "../URLS";
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
      console.log("resres123", res?.data?.data?.user);
      if (res?.status === 200) {
        localStorage.setItem("token", res?.data?.data?.user?.token);
        dispatch(userDataAction(res?.data?.data?.user));
        dispatch(userCheckAction(true));
        cogoToast.success("Login SuccessFully");
        navigate("/dashboardAgent");
      }
    } catch (err) {
      console.log("err", err);
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
  return (
    <Root>
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
/* background-image: url('D:\Office Work\fr_immigration\public\login.jpg'); */
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(#e66465, #9198e5);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
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
    border-radius: 20px;
  }

  .user_btn {
    display: flex;
    flex-direction: column;
    width: 290px;
    height: 45px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 8px 0px 8px 0px;
    border-radius: 10px;
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
    border-radius: 10px;
  }

  .user_btn:hover {
    background-color: green;
    color: white;
  }
  /* img {
    width: 800px;
    height: 800px;
  } */
`;
