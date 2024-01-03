import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS } from "../../URLS";
import axios from "axios";
import { useSelector } from "react-redux";

export default function ProfileUser() {
  const [profile, setProfile] = useState({});
  const userDetails = useSelector((state) => state?.users.user);

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

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <Root>
      {userDetails.role === "university" ? (
        <div className="main_1">
          <div className="child1">
            <h6>University Name </h6> <p>{profile?.university_name}</p>
          </div>
          <div className="child1">
            <h6>Ambassador Name </h6> <p>{profile?.username}</p>
          </div>
          <div className="child1">
            <h6>E-mail </h6> <p>{profile?.email}</p>
          </div>
          <div className="child1">
            <h6>Phone Number </h6> <p>{profile?.phone_number}</p>
          </div>
        </div>
      ) : (
        <div className="main_1">
          <div className="child1">
            <h6>User Name </h6> <p>{profile?.username}</p>
          </div>
          <div className="child1">
            <h6>First Name </h6> <p>{profile?.firstname}</p>
          </div>
          <div className="child1">
            <h6>Last Name </h6> <p>{profile?.lastname}</p>
          </div>
          <div className="child1">
            <h6>E-mail </h6> <p>{profile?.email}</p>
          </div>
          <div className="child1">
            <h6>Phone Number </h6> <p>{profile?.phone_number}</p>
          </div>
        </div>
      )}
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
