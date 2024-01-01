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
      <div className="testimonial">
      <img src={twitter} alt="img" />
       
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  @media (max-width:899px){
    flex-wrap: wrap;
      }
  .ellipse{
    img{
        width: 80%;
        @media (max-width:999px){
        width: 50%;
      }
    }
  }
  .testimonial{
    padding: 20px;
    text-align: right;
    img{
      width: 75%;
      @media (max-width:999px){
        width: 100%;
      }
    }
  }
`;
