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
              <div className="hlo4544554">

              Institution Name
              </div>
              <p className="p111">
                 {detail?.university_id?.university_name}{" "}
              </p>
            </div>
            <div className="col-lg-3 col-sm-3">
              <div className="hlo45445514">
              Course Details 
              </div>
              <p className="p111"> {detail?.course_id?.course_level} </p>
            </div>
            <div className="col-lg-3 col-sm-3">
            <div className="hlo4544554">
              Course Name
              </div>
              <p className="p111">{detail?.course_id?.course_name}</p>
              </div>
            <div className="col-lg-3 col-sm-3">
              <div className="hlo4544554">
              Date  
              </div>
              <p className="p111">{formatDate(detail?.course_id?.update_date)}</p>
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
  padding-left: 80px;
    @media (max-width:788px){
      padding-left: 60px;
    }
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
      font-size: 13px;
    }
  }
  @media (max-width:999px){
    padding: 0;
    margin: 0;
    .course_table{
      padding: 0;
    }
  }
  .p111{
    color: #202020;
    margin-top:23px;
    text-align:left;
  }
  .hlo4544554{
    color: black;
    font-size: 21px;
    font-weight: 800;
  }
  .hlo45445514{
    color: black;
    font-size: 21px;
    font-weight: 800;
  }
`;
