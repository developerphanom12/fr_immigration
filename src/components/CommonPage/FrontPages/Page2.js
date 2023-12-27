import React from "react";
import styled from "styled-components";
import girlimg from "../../CommonPage/imageLogo/Untitled design.png";

export default function Page2() {
  return (
    <Root>
      <div className="img_div">
        <img src={girlimg} alt="img" />
      </div>
      <div className="main_text_div">
        <div className="text_div1">
          <h1>Who We Are?</h1>
          <h4>Things you need</h4>
          <h4>to know</h4>
        </div>
        <div className="text_div">
          <p>
            The Access You Need. We provide you with the access you need to
            drive your key strategic targets. Get connected with us today to
            leverage the rich collaboration between university, education
            consultant and student.
          </p>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  font-family: "Roboto", "sans-serif";
  justify-content: space-around;
  padding: 20px;
  /* flex-wrap: wrap; */
  .img_div {
    width: 35%;
    /* img{
    width: 340px;
    height: 340px;

} */
  }
  .main_text_div {
    width: 35%;
    .text_div1 {
      border-bottom: 7px solid #c6a5ff;
      margin-bottom: 20px;
      h1 {
        font-weight: 600;
        color: #330101;
      }
      h4 {
        font-weight: 300;
        color: #330101;
        margin: 0;
      }
    }
    .text_div {
      p {
        margin: 0;
        font-size: 17px;
        font-weight: 400;
        color: #695a5a;
      }
    }
  }
`;
