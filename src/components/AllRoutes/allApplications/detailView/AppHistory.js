import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AppHistory() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div>Date</div>
          </div>
          <div className="col-lg-6">
            <div>Comment</div>
          </div>
          <div className="col-lg-4">
            <div>Comment Type</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div>Date</div>
          </div>
          <div className="col-lg-6">
            <div>Comment</div>
          </div>
          <div className="col-lg-4">
            <div>Comment Type</div>
          </div>
        </div>
      </div>


      
      
       
    
       
    </Root>
  );
}
const Root = styled.section`
  /* display: flex; */
  font-family: "Cairo", sans-serif;
  
`;
