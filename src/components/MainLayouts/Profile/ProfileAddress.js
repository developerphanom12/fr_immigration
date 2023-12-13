import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS } from "../../URLS";
import {FaHome} from "react-icons/fa"

export default function ProfileAddress() {
  const [profile, setProfile] = useState({});


  
  const getProfile = async () => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS}/get/detail/by`,
        axiosConfig
      );
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
      <div className="child">
      <FaHome />
      </div>
      <h3>Address Details</h3>
      <div className="child1">
        <h6>Street Address : </h6> <p> {profile?.address?.street_address}</p>
      </div>
      <div className="child1">
        <h6>City : </h6> <p>{profile?.address?.city}</p>
      </div>
      <div className="child1">
        <h6>State : </h6> <p>{profile?.address?.state}</p>
      </div>
      <div className="child1">
        <h6>Postal Code : </h6> <p>{profile?.address?.postal_code}</p>
      </div>
    </Root>
  );
}
const Root = styled.section`
   font-family:"Avenir";
  border: 2px solid dodgerblue;
  padding: 40px;
  /* border-radius: 10px; */
  background-color: #ffffff;
  box-shadow:6px 7px 7px gray;
  .child {
    svg {
      padding: 10px;
      width: 35%;
      height: 35%;
      box-shadow: 3px 2px 2px gray;
      border-radius: 50%;
    }
  }
  h3 {
    font-weight: 600;
    font-family: "Roboto", "sans-serif";
    text-shadow:3px 2px 2px #cbcbcb;
    padding: 10px;
    margin: 0;

  }
  .child1 {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 3px solid dodgerblue;
    p {
      /* font-size: 16px; */
   font-family:"Avenir";

      text-transform: capitalize;
      margin: 0;
    }
    h6 {
      font-weight: 600;
      margin: 0;
    }
  }
`;
