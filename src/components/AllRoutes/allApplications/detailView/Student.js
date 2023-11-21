import React from "react";
import styled from "styled-components";

export default function Student({ detail }) {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <Root>
      <section className="box">
        <div className="container  studentdata">
          <div className="row">
            <div className="col-lg-6">
              <div className="divRow">
                <p>Cams Id :- </p>
                <div className="section">{detail?.application_id}</div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="divRow">
                <p>Date :- </p>
                <div className="section">{formatDate(detail?.created_at)}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="divRow1">
                <p>Student Name :-</p>
                <div className="section mt-2">{detail?.student_firstname}</div>
              </div>
            </div>
            <div className="col-lg-6 divRow1">
              <p> Passport No :-</p>
              <div className="section mt-2">{detail?.student_passport_no}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="divRow">
                <p>Student Number :-</p>
                <div className="section">{detail?.student_whatsapp_number}</div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="divRow">
                <p> Student E-Mail:-</p>
                <div className="section">{detail?.student_email}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Root>
  );
}
const Root = styled.section`
  font-family: "Roboto", sans-serif;
  background-color: white;
  border: 2px solid lightgray;
  background-color: #f8f8f8;
  @media (max-width: 766px) {
    margin: 0;
  }

  .studentdata {
    border-radius: 10px;
    background-color: white;
    margin-top: 18px;
    width: 90%;
    padding: 20px;
    .divRow {
      padding: 10px;
      background: #e6f5ff;
      border-radius: 10px;
      p {
        color: gray;
        background: #e6f5ff;
        margin: 0;
      }
    }
    .divRow1 {
      border-radius: 10px;
      padding: 10px;
      p {
        background-color: white;
        color: gray;
        margin: 0px;
      }
    }
  }
`;
