import cogoToast from "cogo-toast";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_APPLICATION } from "../../URLS";
import { useSelector } from "react-redux";

export default function Documents({ appId }) {
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [passFront,setPassFront] = useState("");
  const [passBack,setPassBack] = useState("");
  const [pass10th,setPass10th] = useState("");
  const [pass12th,setPass12th] = useState("");


  const submitDoc = async () => {
    const data = new FormData();
    data.append("aadhar", aadhar);
    data.append("pan", pan);
    data.append("pass_front",passFront);
    data.append("pass_back",passBack);
    data.append("10th",pass10th);
    data.append("12th",pass12th);
    console.log("dataaaa", aadhar, pan)
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.put(
        `${EXCHANGE_URLS_APPLICATION}/upload/documents/${appId}`,data,axiosConfig
  
      );
      console.log("resssssssss",res)
      cogoToast.success("Documents Submitted Successfully");
    } 
    catch (error) {
      cogoToast.error("There is some error");
      console.log("error", error);
    }
  };

  const handleSubmit = ()=>{
    if(aadhar && pan){
      submitDoc()
    }else{
      cogoToast.error("Upload Both Documents")
    }
  }

  console.log("aadhar", aadhar, pan ,passFront,passBack)

  return (
    <Root>
      <div className="all_details">
        <p>Application : {appId}</p>
        <div>
          <p>Aadhar Card *</p>
          <input
            type="file"
            onChange={(e) => {
              setAadhar(e.target.files[0]);
            }}
          />
        </div>
        <div>
          <p>Pan Card *</p>
          <input
            type="file"
            onChange={(e) => {
              setPan(e.target.files[0]);
            }}
          />
        </div>
        <div>
          <p>Passport Front *</p>
          <input
            type="file"
            onChange={(e) => {
              setPassFront(e.target.files[0]);
            }}
          />
        </div>
        <div>
          <p>Passport Back *</p>
          <input
            type="file"
            onChange={(e) => {
              setPassBack(e.target.files[0]);
            }}
          />
        </div>
        <div>
          <p>Matric *</p>
          <input
            type="file"
            onChange={(e) => {
              setPass10th(e.target.files[0]);
            }}
          />
        </div>
        <div>
          <p>Intermediate *</p>
          <input
            type="file"
            onChange={(e) => {
              setPass12th(e.target.files[0]);
            }}
          />
        </div>
          <button
            className="submit_btn"
            onClick={() => {
              handleSubmit()
            }}
          >
            {" "}
            Submit Details
          </button>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 823px) {
    gap: 10px;
    justify-content: center;
  }
  .all_details {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    .err_msg {
      font-size: 14px;
      color: red;
    }
    > div {
      display: flex;
      gap: 7px;
      background-color: #d48ea0;
      padding: 10px 10px 4px 10px;
      border-radius: 20px;
      flex-wrap: wrap;
      color: white;
      font-weight: 520;

      p {
        min-width: 100px;
        align-items: center;
        padding: 0;
      }
    }
    .submit_btn {
      width: fit-content;
      background-color: #d48ea0;
      border: none;
      color: white;
      padding: 8px;
      font-weight: 540;
      border-radius: 15px;
    }
    .submit_btn:hover {
      background-color: #039c33;
      color: black;
      cursor: pointer;
    }
  }
`;
