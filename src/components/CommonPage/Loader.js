import React from 'react';
import styled from 'styled-components';
import logo from "../CommonPage/imageLogo/phanom.jpg";


const Loader = () => {
  return (
    <Root className="loader-container">
      <div className="logo"><img src={logo} alt="img"/></div>
    </Root>
  );
};

export default Loader;
const Root = styled.section`
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  animation: db4-1 1s linear infinite alternate, db4-2 0.5s cubic-bezier(0, 200, 0.8, 200) infinite;
}

.logo {
  width: 100px;  
  height: 100px;  
}

`
