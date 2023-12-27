import React from "react";
import styled from "styled-components";
import Logo from "../../CommonPage/imageLogo/87442164-d536-47c8-9356-41efe4247610.png";
export default function Page1() {
  return (
    <Root>
      <div className="line1">
        <h1>
          The premier hub for universities and Strategic recruitment
          partnerships
        </h1>
        <p>
          Through our network, industry knowledge, and personalized business
          solutions, we enable Universities and Recruitment Partners to
          effortlessly navigate the recruitment process while achieving their
          targets.
        </p>
      </div>
      <div className="line2">
        <img src={Logo} alt="img" />
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(
    to bottom right,
    #c6a5ffc7,
    #c6a5ff63,
    #ffffff,
    #c6a5ff24
  );
  width: 100%;
  padding: 30px 0px;
  font-family: "Roboto", "sans-serif";
  .line1 {
    width: 45%;
    h1 {
      margin-bottom: 10px;
      color: #330101;
      font-weight: 600;
      padding-right: 30px;
      background: linear-gradient(to right, black 0%, purple 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
      /* color: linear-gradient(to right, #FDFBFB, #EBEDEE 70%); */
      /* background-image: linear-gradient(to right, black, purple); */
    }
    p {
      padding-left: 30px;
      margin: 0;
      font-size: 17px;
      font-weight: 400;
      color: #695a5a;
    }
  }
  .line2 {
    width: 30%;

    img {
      border-radius: 10px;
      width: 400px;
    }
  }
`;
