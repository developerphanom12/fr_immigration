import React from "react";
import group from "../../CommonPage/imageLogo/Group 1000002973.png";
import twitter from "../../CommonPage/imageLogo/Twitter post - 6.png";
import styled from "styled-components";

export default function Page7() {
  return (
    <Root>
      <div className="ellipse">
        <img src={group} alt="img" />
      </div>
      <div>
      <img src={twitter} alt="img" />
       
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  .ellipse{
    img{
        width: 300px;
    }
  }
`;
