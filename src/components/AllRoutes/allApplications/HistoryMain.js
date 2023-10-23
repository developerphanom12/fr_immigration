import React, { useState } from "react";
import styled from "styled-components";
import History from "./History";
import UserDetail from "./UserDetail";

export default function HistoryMain() {
  const [popUser, setPopUser] = useState(false)
  const [details, setDetails] = useState({});


console.log('details',details)

  return (
   <Root>
    <h1>history of user</h1>
    {popUser?
    <UserDetail popUser = {(e,i)=>{setPopUser(e)}}/>:
    <History popUser = {(e)=>{setPopUser(e)}}/>
  }
   </Root>
  )
}

const Root = styled.section`

`;
