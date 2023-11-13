import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../components/CommonPage/imageLogo/phanom.jpg";
const Loader = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDataLoaded(true);
    }, 3000);
  }, []);

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
  height: 100%;
  backdrop-filter: blur(10px);
  transform: translateY(${(props) => (props.dataLoaded ? "-100%" : "0")});
  transition: transform 0.5s;
  background-color: white;
  .logo {
    width: 200px;
    height: 50px;

    img {
      width: 200px;
      height: 50px;
      animation: ${(props) =>
        props.dataLoaded ? "none" : "vibrate 0.4s linear infinite"};
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
