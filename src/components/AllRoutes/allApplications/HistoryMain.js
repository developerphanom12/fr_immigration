import React, { useState } from "react";
import styled from "styled-components";
import History from "./History";

export default function HistoryMain() {
  const [popUser, setPopUser] = useState(false);

  console.log("popUser", popUser);

  return (
    <Root>
      <History
        popUser={(e) => {
          setPopUser(e);
        }}
      /> 
    </Root>
  );
}

const Root = styled.section`
height: 100%;
`;
