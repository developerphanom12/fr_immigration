import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS } from "../URLS";
import cogoToast from "cogo-toast";

export default function ForgotPass() {
  const [email, setEmail] = useState({
    email:'',
  });
  const forgotApi = async () => {
    const axiosConfig = {
        headers :{
            authorization : `Bearer ${localStorage.getItem('token')}`
        },
    };
    try {
      const response = await axios.post(`${EXCHANGE_URLS}/reset`,email,axiosConfig);
      if (response.status === 200) {
        setEmail(response?.data);
        cogoToast.success("Password reset link sent to your email.");
      } else {
        cogoToast.error("Failed to send password reset link.");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log("email", email);

  const handleForgotPassword = () => {
    forgotApi();
  };
  return (
    <Root>
      ForgotPass
      <h2>Forgot Password</h2>
      <p>Enter your email to receive a password reset link.</p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Send Reset Link</button>
    </Root>
  );
}
const Root = styled.section`

`;
