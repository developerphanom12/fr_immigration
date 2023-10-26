import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { EXCHANGE_URLS_ADMIN, IMG_URL } from "../../URLS";
import axios from "axios";
import { UserDetails, setUserCheck } from "../../../redux/users/action";
import cogoToast from "cogo-toast";

export default function UserDetail({ popUser }) {
  const [select, setSelect] = useState({
    newStatus: "",
    applicationId: "",
    comment: "",
  });
  const getDetails = useSelector((state) => state?.users?.appDetails);
  const dispatch = useDispatch();
  console.log("getDetails", getDetails);
  dispatch(setUserCheck(true));

  const userCheck = useSelector((state) => state?.users?.user);
  // const token = localStorage.getItem("token");

  const approveApi = async () => {
    if (select.newStatus === "blank" || select.newStatus === "") {
      cogoToast.warn("Please select status");
    } else {
      try {
        const axiosConfig = {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
        const res = await axios.post(
          `${EXCHANGE_URLS_ADMIN}/statusupdate`,
          select,
          axiosConfig
        );
        console.log("res", res?.data?.data?.appDetails);
        if (res?.status === 200) {
          dispatch(UserDetails(res?.data?.data?.appDetails));
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  console.log("select", select);

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
          <p>Application Status :- {getDetails?.application_status}</p>
        </div>
      )}
      <div className="status">
        <a
          href={`${IMG_URL}/${getDetails?.documents[0]?.file_path}`}
          target="_blank"
          rel="noreferrer"
        >
          <button> View Aadhar</button>
        </a>
        <a
          href={`${IMG_URL}/${getDetails?.documents[1]?.file_path}`}
          target="_blank"
          rel="noreferrer"
        >
          <button> View Pancard</button>
        </a>
        <a
          href={`${IMG_URL}/${getDetails?.documents[5]?.file_path}`}
          target="_blank"
          rel="noreferrer"
        >
          <button> View Intermediate</button>
        </a>
      </div>
      <div className="status">
        <a
          href={`${IMG_URL}/${getDetails?.documents[2]?.file_path}`}
          target="_blank"
          rel="noreferrer"
        >
          <button> View Passport Front</button>
        </a>
        <a
          href={`${IMG_URL}/${getDetails?.documents[3]?.file_path}`}
          target="_blank"
          rel="noreferrer"
        >
          <button> View Passport back</button>
        </a>
        <a
          href={`${IMG_URL}/${getDetails?.documents[4]?.file_path}`}
          target="_blank"
          rel="noreferrer"
        >
          <button> View Matric</button>
        </a>
      </div>

      {userCheck.role === "admin" ? (
        <>
          <select
            onChange={(e) => {
              setSelect({
                ...select,
                newStatus: e.target.value,
                applicationId: getDetails.application_id,
              });
            }}
          >
            <option value="blank">Select Status</option>
            <option value="approved">Approve</option>
            <option value="rejected">Reject</option>
          </select>
          <input
            type="comment"
            value={select.comment}
            onChange={(e) => {
              setSelect({ ...select, comment: e.target.value });
            }}
            placeholder="Comment here"
          />

          <button
            className="btn"
            onClick={() => {
              approveApi();
            }}
          >
            Submit
          </button>
        </>
      ) : (
        ""
      )}
      <div>
        <button
          onClick={() => {
            popUser(false);
          }}
        >
          Back
        </button>
      </div>
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
    background-color: red;
    border: transparent;
    border-radius: 10px;
    width: 120px;
    margin: 5px;
  }
  .status {
    display: flex;
    button {
      width: 180px;
      background-color: blue;
      padding: 5px;
      border-radius: 2px;
      &:hover {
        background-color: green;
      }
    }
    @media (max-width: 777px) {
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
  select {
    background-color: yellow;
    padding: 5px;
  }
  .btn {
    border-radius: 2px;
    background-color: green;
  }
  input {
    margin: 5px;
  }
`;
