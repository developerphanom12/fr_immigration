import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS } from "../../URLS";

export default function ProfileAddress() {
  const [profile, setProfile] = useState({});
  const getProfile = async () => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(`${EXCHANGE_URLS}/get/detail`, axiosConfig);
      setProfile(res?.data?.data);
      console.log("resp", res?.data?.data);
    } catch (e) {
      console.log(e);
    }
  };
  console.log("profileeee", profile?.address);
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <Root>
      <h3>Address Details</h3>
      <p>Street Address: {profile?.address?.street_address}</p>
      <p>City: {profile?.address?.city}</p>
      <p>State: {profile?.address?.state}</p>
      <p>Postal Code: {profile?.address?.postal_code}</p>
    </Root>
  );
}
const Root = styled.section`
  font-family: "Mulish", "sans-serif";
border: 0.5px solid lightblue;
  padding: 10px;
  border-radius: 30px;
  box-shadow: 5px 5px lightgray;
  h3 {
    font-weight: 600;
    font-family: "Mulish", "sans-serif";
  }
  p {
    font-size: 16px;
  }
`;
