import React from "react";
import styled from "styled-components";
import Page2 from "./Page2";
import Page1 from "./Page1";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";

export default function FrontPages() {
  return (
    <Root>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
  margin: 74px 0px 0px 0px;
  @media (max-width: 899px) {
    margin: 40px 0px 0px 10px;
  }
`;
