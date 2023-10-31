import React from "react";
import styled from "styled-components";
import logo from "../components/CommonPage/imageLogo/phanom.jpg";

const Loader = () => {
  return (
    <Root>
      <div className="logo">
        <img src={logo} alt="img" />
      </div>
    </Root>
  );
};

export default Loader;
const Root = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  .logo {
    width: 200px;
    height: 50px;
    img {
      width: 200px;
    height: 50px;
      animation: vibrate 0.4s linear infinite;
    }
  }

  @keyframes vibrate {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(5px);
    }
  }
`;
