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
            <div className="col-lg-3 col-sm-3">
              <div className="hlo4544554">Institution Name</div>
              <p className="p111">{detail?.university_id?.university_name} </p>
            </div>
            <div className="col-lg-3 col-sm-3">
              <div className="hlo4544554">Course Details</div>
              <p className="p111"> {detail?.course_id?.course_type} </p>
            </div>
            <div className="col-lg-3 col-sm-3">
              <div className="hlo4544554">Course Name</div>
              <p className="p111">{detail?.course_id?.course_name}</p>
            </div>
            <div className="col-lg-3 col-sm-3">
              <div className="hlo4544554">Date</div>
              <p className="p111">
                {formatDate(detail?.course_id?.update_date)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "Roboto", sans-serif;
  margin: 20px;
  background-color: #f8f8f8;
  box-shadow: 1px 1px 5px 1px gray;
  border-radius: 10px;
  .course_table {
    padding: 10px;
    background-color: #E0E4EC;
    .container {
      margin: 0;
      padding: 0;
      background-color: #E0E4EC;
    }
    p {
      background-color: #E0E4EC;
      font-size: 13px;
    }
  }
  @media (max-width: 999px) {
    padding: 0;
    margin: 0;
    .course_table {
      padding: 0;
    }
  }
  .p111 {
    color: #202020;
    margin-top: 13px;
    text-align: left;
  }
  .hlo4544554 {
    color: black;
    font-size: 16px;
    font-weight: 700;
  }
  
`;
