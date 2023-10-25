import React, { useState } from "react";
import styled from "styled-components";
import History from "./History";
import UserDetail from "./UserDetail";

export default function HistoryMain() {
  const [popUser, setPopUser] = useState(false)
  const [details, setDetails] = useState({});


console.log('popUser',popUser)

  return (
   <Root>
    {popUser?
    <UserDetail popUser = {(e)=>{setPopUser(e)}}/>:
    <History popUser = {(e)=>{setPopUser(e)}}/>
  }
   </Root>
  )
}

const Root = styled.section`

`;
