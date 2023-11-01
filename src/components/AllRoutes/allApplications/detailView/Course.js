import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Course() {
  return (
    <Root>
      <div className="course_table">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>Institution Name :- </p>
            </div>
            <div className="col-lg-6">
              <p>Course Details :- </p>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "Mulish", sans-serif;
  margin: 20px;
  background-color: #f8f8f8;
  .course_table {
    margin: 10px;
    padding: 10px;
    background-color: #fff3ee;
    .container{
      margin: 0;
      padding: 0;
      background-color: #fff3ee;

    }
    p {
      background-color: #fff3ee;
    }
  }
`;
