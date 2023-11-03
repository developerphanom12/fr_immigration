import React from "react";
import styled from "styled-components";

export default function Student({detail}) {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <Root>
      <div className="divRow">
      <p>Cams Id :- {detail?.application_id}</p> 
      <p>Date :- {formatDate(detail?.created_at)}</p>
      </div>
      <div className="divRow1">
      <p>Student Name :- {detail?.student_firstname}</p>
      <p> Passport No :- {detail?.student_passport_no}</p>
      </div>
      <div className="divRow">
      <p>Student Number :- {detail?.student_whatsapp_number}</p>
      <p> Student E-Mail:- {detail?.student_email}</p>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "Mulish", sans-serif;
  margin: 20px;
  background-color: #f8f8f8;
  @media (max-width:766px){
    margin: 0;
  }
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
