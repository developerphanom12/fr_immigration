import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { EXCHANGE_URLS_APPLICATION } from "../../URLS";

export default function UserDetail({ popUser }) {
  const getDetails = useSelector((state) => state?.users?.appDetails);
  const [userImg, setUserImg] = useState();

  console.log("getDetails", getDetails);

  return (
    <Root>
      {getDetails && (
        <div className="detail">
          <h2>Student Details</h2>
          <p>Cams Id :- {getDetails.application_id}</p>
          <p>Student Name :- {getDetails.student_firstname}</p>
          <p> Passport No :- {getDetails.student_passport_no}</p>
          <p>Counsellor :- {getDetails.user_id.username}</p>
          <p>University Name :- {getDetails?.university_id.university_name}</p>
          <p>Person Name :- {getDetails?.university_id.person_name}</p>
          <p>Contact Number :- {getDetails?.university_id.contact_number}</p>
        </div>
      )}
      <button
        onClick={() => {
          popUser(false);
        }}
      >
        Back
      </button>

      <a
        href={`${EXCHANGE_URLS_APPLICATION}/upload/documents/${getDetails?.documents[0]?.file_path}`}
        target="_blank"
      >
        <button> View Documents</button>
      </a>
    </Root>
  );
}
const Root = styled.section`
  h2 {
    color: darksalmon;
  }
  .detail {
    p {
      font-family: "Times New Roman", Times, serif;
      border: 1px solid gray;
      width: 60%;
      padding: 5px;
      box-shadow: 4px 5px lightgray;
      margin: 10px;
    }
  }
  button {
    color: white;
    background-color: green;
    border: transparent;
    border-radius: 10px;
    width: 150px;
    margin: 5px;
  }
`;
