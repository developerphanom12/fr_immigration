import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Root className="loader-container">
      <div className="loader"></div>
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
}

.logo {
  width: 100px;  
  height: 100px;  
}

`
