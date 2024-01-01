import cogoToast from "cogo-toast";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_APPLICATION } from "../../URLS";
import { useNavigate } from "react-router-dom";

export default function Documents({ appId }) {
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [passFront, setPassFront] = useState("");
  const [passBack, setPassBack] = useState("");
  const [pass10th, setPass10th] = useState("");
  const [pass12th, setPass12th] = useState("");
  const navigate = useNavigate();

  const submitDoc = async () => {
    const data = new FormData();
    data.append("aadhar", aadhar);
    data.append("pan", pan);
    data.append("pass_front", passFront);
    data.append("pass_back", passBack);
    data.append("10th", pass10th);
    data.append("12th", pass12th);
    console.log("dataaaa", aadhar, pan);
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.put(
        `${EXCHANGE_URLS_APPLICATION}/upload/documents/${appId}`,
        data,
        axiosConfig
      );
      console.log("resssssssss", res);
      navigate('/history')
      cogoToast.success("Documents Submitted Successfully");
    } catch (error) {
      cogoToast.error("Error");
      console.log("error", error);
    }
  };

  const handleSubmit = () => {
    if (aadhar && pan && passFront && passBack) {
      submitDoc();
    } else {
      cogoToast.error("Upload Both Documents");
    }
  };

  console.log("aadhar", aadhar, pan, passFront, passBack);


  return (
    <Root>
      <h4>Application : {appId}</h4>
      <div className="all_details">
        <div className="box">
          <div className="box_child">
            <p>Aadhar Card *</p>
            <input
              type="file"
              onChange={(e) => {
                setAadhar(e.target.files[0]);
              }}
            />
          </div>
          <div className="box_child">
            <p>Pan Card *</p>
            <input
              type="file"
              onChange={(e) => {
                setPan(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <div className="box">
          <div className="box_child">
            <p>Passport Front *</p>
            <input
              type="file"
              onChange={(e) => {
                setPassFront(e.target.files[0]);
              }}
            />
          </div>
          <div className="box_child">
            <p>Passport Back *</p>
            <input
              type="file"
              onChange={(e) => {
                setPassBack(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <div className="box">
          <div className="box_child">
            <p>Matric *</p>
            <input
              type="file"
              onChange={(e) => {
                setPass10th(e.target.files[0]);
              }}
            />
          </div>
          <div className="box_child">
            <p>Intermediate *</p>

            <input
              type="file"
              onChange={(e) => {
                setPass12th(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <button
          className="submit_btn"
          onClick={() => {
            handleSubmit();
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
  font: "Roboto", sans-serif;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  flex-direction: column;
  padding-left: 90px;
    @media (max-width:788px){
      padding-left: 60px;
    }

  @media (max-width: 823px) {
    gap: 10px;
    justify-content: center;
  }

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
  }
  .all_details {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 25px;
    .err_msg {
      font-size: 14px;
      color: red;
    }
    .box {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 3px;
      @media (max-width:788px){
        flex-direction: column;
        .box_child{
          width: 200px;
        }
        input{
          width: 150px;
          margin:0;
        }
        h4{
          display: none;
        }
      }
      .box_child {

        text-align: center;
        border: 3px dashed #8080803d;
        padding: 1.5rem;
        position: relative;
        cursor: pointer;
        p {
          min-width: 100px;
          align-items: center;
          padding: 0;
        }
        .box_child input {
          margin-left: 40px;
          display: block;
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          opacity: 0;
          cursor: pointer;
             
        }
      }
    }
    .submit_btn {
      width: fit-content;
      background-color:#8656EC;
      border: none;
      color: white;
      padding: 8px;
      font-weight: 540;
      border-radius: 50px;
     
    }
    .submit_btn:hover {
      cursor: pointer;
    }
  }
  input[type="file"]::file-selector-button {
  border: 1px solid #119AF6 ;
  padding: 0.2em 0.4em;
  border-radius: 0.4em;
  background-color: #62BDFA;
  transition: 1s;
  color: #fff;
  cursor: pointer;
  margin-left:20px;

}

input[type="file"]::file-selector-button:hover {
  background-color: #81ecec;
  border: 1px solid #00cec9;
}
   
`;
