import React from "react";
import styled from "styled-components";
import logo from "../components/CommonPage/imageLogo/phanom.jpg";
import { useSelector } from "react-redux";

const Loader = () => {
const isLoading = useSelector((state) => state?.users?.isLoading)
 
  console.log("dataLoaded", isLoading);

  return isLoading && (
    <Root >
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
  height: 120%;
  backdrop-filter: blur(4px);
  transform: translateY(${(props) => (props.dataLoaded ? "-100%" : "0")});
  transition: transform 0.5s;
  background-color: transparent;

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
