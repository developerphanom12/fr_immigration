import React from "react";
import styled from "styled-components";
import Page2 from "./Page2";
import Page1 from "./Page1";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Footer from "../Footer";

export default function FrontPages() {
  return (
    <Root>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Footer />
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
  margin: 73px 0px 0px 0px;
 
`;
