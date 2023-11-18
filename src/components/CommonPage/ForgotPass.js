import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS } from "../URLS";
import cogoToast from "cogo-toast";

export default function ForgotPass() {
  // const [storeEmail,setStoreEmail] = useState();
  const [newPass, setNewPass] = useState({
    newPassword: "",
  });
  const [confirmNewPass, setConfirmNewPass] = useState();
  const [otp, setOtp] = useState({
    otp: "",
  });
  const [email, setEmail] = useState({
    email: "",
  });
  const [otpVerified, setOtpVerified] = useState(false);

  const forgotApi = async () => {
    // const axiosConfig = {
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    // };
    try {
      const response = await axios.post(
        `${EXCHANGE_URLS}/reset`,
        email
        // axiosConfig
      );
console.log("response",response)

    } catch (error) {
      console.log("error", error);
    }
  };
  const otpApi = async () => {
    // const axiosConfig = {
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    // };
    try {
      const res = await axios.post(
        `${EXCHANGE_URLS}/verify-otp`,
        otp
        // axiosConfig
      );
      setOtpVerified(true);

      cogoToast.success("OTP Sent.");
    } catch (error) {
      console.log("error", error);
    }
  };

  const newPassApi = async (email, pass) => {
    try {
      const data = {
        email: email,
        newPassword: pass,
      };
      const res = await axios.post(`${EXCHANGE_URLS}/set-new-password`, data);
      if(res.status === 200){
        cogoToast.success("password changed")
        setEmail({
          email: "",
        })
        setOtp({
          otp:"",
        })
        setNewPass({
          newPassword:"",
        })
      }
    } catch (err) {
      console.log("err", err);
    }
  };
 
  const handleForgotPassword = () => {
    forgotApi();
  };

  const handleChange = ()=>{
    if(newPass.newPassword === confirmNewPass && email.email){
      newPassApi(confirmNewPass, email.email);
    }else{
      cogoToast.error(`email ${email.email}, pass ${confirmNewPass}`)
    }
  }
  return (
    <Root>
      <h2>Forgot Password</h2>
      <p>Enter your email to receive a password reset link.</p>
      <div className="box1">
        <input
          type="email"
          placeholder="-----Email-----"
          value={email.email}
          onChange={(e) => setEmail({ ...email, email: e.target.value })}
        />
        <button onClick={handleForgotPassword}>Send Reset Link</button>
      </div>
      {!otpVerified ? (
        <div className="box1">
          <input
            type="text"
            placeholder="-----OTP-----"
            value={otp.otp}
            onChange={(e) => setOtp({ ...otp, otp: e.target.value })}
          />
          <button onClick={otpApi}>Verify OTP</button>
        </div>
      ) : (
        <div className="box1">
          <input
            type="password"
            placeholder="---New Password---"
            value={newPass.newPassword}
            onChange={(e) =>
              setNewPass({ ...newPass, newPassword: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="---Confirm New Password---"
            value={confirmNewPass}
            onChange={(e) => setConfirmNewPass(e.target.value)}
          />
          <div className="box1">
            <button
              onClick={()=>{handleChange()}}
            >
              Set New Password
            </button>
          </div>
        </div>
      )}
    </Root>
  );
}
const Root = styled.section`
  font-family: "Roboto", "sans-serif";
  margin-top: 80px;
  margin-bottom: 20px;
  padding: 20px;
  .box1 {
    padding: 10px;
    display: flex;
    gap: 20px;
  }
  input {
    width: 350px;
    height: 40px;
    border-radius: 40px;
    padding: 10px;
    text-align: center;
  }
  button {
    border-radius: 40px;
    border: transparent;
    width: 350px;
    height: 40px;
    &:hover {
      background-color: blue;
      color: white;
    }
  }
`;
