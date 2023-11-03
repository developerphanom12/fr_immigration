import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Course({ detail }) {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <Root>
      <div className="course_table">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-sm-5">Institution Name :-
              <p>
                 {detail?.university_id?.university_name}{" "}
              </p>
            </div>
            <div className="col-lg-5 col-sm-5">Course Details :-
              <p> {detail?.course_id?.course_level} </p>Course Name :- 
              <p>{detail?.course_id?.course_name}</p>
            </div>
            <div className="col-lg-2 col-sm-2">Date :- 
              <p>{formatDate(detail?.course_id?.update_date)}</p>
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
    /* margin: 10px; */
    padding: 20px;
    background-color: #fff3ee;
    .container {
      margin: 0;
      padding: 0;
      background-color: #fff3ee;
    }
    p {
      background-color: #fff3ee;
     
    }
  }
  @media (max-width:999px){
    padding: 0;
    margin: 0;
    .course_table{
      padding: 0;
    }
  }
`;
