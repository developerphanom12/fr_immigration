import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { EXCHANGE_URLS } from '../../URLS';
import axios from 'axios';

export default function ProfileUser() {
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

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <Root>
    <h3>Profile Details</h3>
    <p>Username: {profile?.username}</p>
    <p>First Name: {profile?.firstname}</p>
    <p>Last Name: {profile?.lastname}</p>
    <p>E-Mail: {profile?.email}</p>
    <p>Phone Number: {profile?.phone_number}</p>


  </Root>
  )
}
const Root = styled.section`
font-family: 'Mulish','sans-serif';
border: 0.5px solid lightblue;
padding: 10px;
border-radius: 30px;
box-shadow: 5px 5px lightgray;
h3{
  font-weight: 600;
  font-family: 'Mulish','sans-serif';
  }
  p{
  font-size: 16px;

  }
`
