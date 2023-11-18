import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS } from "../../URLS";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

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
      <div className="child">
        <FaUserCircle />
      </div>
      <h3>Profile Details</h3>
      {userDetails.role === "university" ? (
        <>
          <div className="child1">
            <h6>University Name : </h6> <p>{profile?.university_name}</p>
          </div>
          <div className="child1">
            <h6>Ambassador Name : </h6> <p>{profile?.username}</p>
          </div>
          <div className="child1">
            <h6>E-mail : </h6> <p>{profile?.email}</p>
          </div>
          <div className="child1">
            <h6>Phone Number : </h6> <p>{profile?.phone_number}</p>
          </div>
        </>
      ) : (
        <>
          <div className="child1">
            <h6>User Name : </h6> <p>{profile?.username}</p>
          </div>
          <div className="child1">
            <h6>First Name : </h6> <p>{profile?.firstname}</p>
          </div>
          <div className="child1">
            <h6>Last Name : </h6> <p>{profile?.lastname}</p>
          </div>
          <div>
            <h6>E-mail : </h6> <p>{profile?.email}</p>
          </div>
          <div className="child1">
            <h6>Phone Number : </h6> <p>{profile?.phone_number}</p>
          </div>
        </>
      )}
    </Root>
  );
}
const Root = styled.section`
  font-family: "Roboto", "sans-serif";
  border: 2px solid lightblue;
  padding: 40px;
  /* border-radius: 10px; */
  /* background-color: #28a5f91c; */
  box-shadow: 5px 5px lightgray;
  .child {
    svg {
      padding: 10px;
      width: 35%;
      height: 35%;
      box-shadow: 2px 2px 2px 2px lightgray;
      border-radius: 50%;
    }
  }

  h3 {
    font-weight: 600;
    font-family: "Roboto", "sans-serif";
    text-shadow: 2px 2px #cbcbcb;
    padding: 10px;
    margin: 0;
  }
  .child1 {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 3px solid #28a5f97a;
    p {
      /* font-size: 16px; */
      text-transform: capitalize;
      margin: 0;
    }
    h6 {
      font-weight: 600;
      margin: 0;
    }
  }
`;
