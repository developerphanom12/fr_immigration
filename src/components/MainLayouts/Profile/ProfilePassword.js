import React, { useState } from "react";
import { EXCHANGE_URLS } from "../../URLS";
import axios from "axios";
import cogoToast from "cogo-toast";
import styled from "styled-components";

export default function ProfilePassword() {
  const [changePass, setChangePass] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const ChangePassApi = async (old, newP) => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const data = {
        currentPassword: old,
        newPassword: newP,
      };
      const res = await axios.post(
        `${EXCHANGE_URLS}/change-password`,
        data,
        axiosConfig
      );

      cogoToast.success("Password Changed Successfully");
      setChangePass({ currentPassword: "", newPassword: "" });
      console.log("res222", res);
    } catch (err) {
      console.log("err", err);
    }
  };
  const handleChangePassword = () => {
    ChangePassApi(changePass?.currentPassword, changePass?.newPassword);
  };
  console.log("changePass", changePass);
  return (
    <Root>
      {" "}
      <h3>Change Your Password...</h3>
      <div className="pass1">
        <input
          type="password"
          placeholder="---Current Password---"
          value={changePass?.currentPassword}
          onChange={(e) =>
            setChangePass({ ...changePass, currentPassword: e.target.value })
          }
        />
      </div>
      <div className="pass1">
        <input
          type="Password"
          placeholder="---New Password---"
          value={changePass?.newPassword}
          onChange={(e) =>
            setChangePass({ ...changePass, newPassword: e.target.value })
          }
        />
      </div>
      <div className="box1">
        <button
          onClick={() => {
            handleChangePassword();
          }}
        >
          Set New Password
        </button>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color: #f8f8f8;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  align-items: center;
  font-family: "Mulish", "sans-serif";
  h3 {
    font-weight: 600;
    font-family: "Mulish", "sans-serif";
  }
  .pass1 {
    input {
      text-align: center;
      border-radius: 40px;
      padding: 10px;
      color: #202020;
      width: 240px;
      text-decoration: none;
      border: 2px solid #a5d8fa;
      @media (max-width: 600px) {
        min-width: 100px;
        width: 100%;
      }
    }
  }
  .box1 {
    button {
      background: #ff6525;
      color: #ffffff;
      padding: 10px 10px 10px 10px;
      border-color: transparent;
      font-size: medium;
      text-align: center;
      width: 230px;
      margin: 5px;
      cursor: pointer;
      background: linear-gradient(
        45deg,
        #ff6525 19%,
        #ffffffe6 51%,
        #ff6525 100%
      );
      border-radius: 50px;
      color: #fff;
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
`;
