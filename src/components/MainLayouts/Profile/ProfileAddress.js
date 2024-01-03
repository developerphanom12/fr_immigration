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
      <div className="main_1">
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
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "Avenir";
  background-color: #ffffff;
  width: 100%;
  .main_1 {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .child1 {
      display: flex;
      flex-direction: column;
      width: 50%;
      padding: 10px;
      p {
        margin: 3px;
        padding: 4px;
        background-color: #edf2f6;
      }
      h6 {
        padding: 4px;
        font-weight: 600;
        margin: 3px;
        color: gray;
      }
    }
  }
`;
