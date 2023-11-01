import React from "react";
import styled from "styled-components";

export default function Student() {
  return (
    <Root>
      <div className="divRow">
      <p>Cams Id :- {}</p> 
      <p>Date :- {}</p>
      </div>
      <div className="divRow1">
      <p>Student Name :- {}</p>
      <p> Passport No :- {}</p>
      </div>
      <div className="divRow">
      <p>Contact Number :- {}</p>
      <p> Student E-Mail:- {}</p>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "Mulish", sans-serif;
  margin: 20px;
  background-color: #f8f8f8;
  .divRow{
    padding: 10px;
    background: #e6f5ff;
    p{
      color: gray;
      background: #e6f5ff; 
    }
  }
  .divRow1{
    background-color: white;
    padding: 10px;
   p{
    background-color: white;
    color: gray;
   
   }
  }
`;
