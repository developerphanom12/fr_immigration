import cogoToast from "cogo-toast";
import axios from 'axios'
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { verifyDocs } from '../redux/users/action';
import { EXCHANGE_URLS } from './URLS'


export default function Documents() {
  const [aadhar, setAadhar] = useState();
  const [pan, setPan] = useState();
  const [matric, setMatric] = useState();
  const [intermediate, setIntermediate] = useState();
  const [qualification, setQualification] = useState();
  const dispatch = useDispatch();
  console.log("aadhar", aadhar);
  const readyToSubmit = [qualification, aadhar, matric, intermediate].every(
    (val) => val?.length > 0
  );
  const submitDoc = async () => {
    const data = new FormData();
    data.append("aadhar", aadhar[0]);
    data.append("pan", pan[0]);
    data.append("matric", matric[0]);
    data.append("intermediate", intermediate[0]);
    data.append("qualification", qualification);
    const headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      const res = await axios.post(`${EXCHANGE_URLS}/checkDoc`, data, {
        headers,
      });
      if (res && res?.status === 200) {
        dispatch(verifyDocs(true));
        cogoToast.success("Documents Submitted Successfully");
      }
    } catch (error) {
      cogoToast.error("There is some error");
      console.log("error", error);
    }
  };

  return (
    <Root>
      <div className="all_details">
        <div>
          <p>Aadhar Card *</p>
          <input
            type="file"
            onChange={(e) => {
              setAadhar(e.target.files);
            }}
          />
        </div>
        <div>
          <p>Pan Card *</p>
          <input
            type="file"
            onChange={(e) => {
              setPan(e.target.files);
            }}
          />
        </div>
        <div>
          <p>10th Class *</p>
          <input
            type="file"
            onChange={(e) => {
              setMatric(e.target.files);
            }}
          />
        </div>
        <div>
          <p>12th Class *</p>
          <input
            type="file"
            onChange={(e) => {
              setIntermediate(e.target.files);
            }}
          />
        </div>
        <div>
          <p>Qualification *</p>
          <select
            onChange={(e) => {
              setQualification(e.target.value);
            }}
          >
            <option value={""}>Select</option>
            <option value={"matric"}>10th/Matric</option>
            <option value={"intermediate"}>+2/Intermediate </option>
          </select>
        </div>
        {readyToSubmit ? (
          <button
            className="submit_btn"
            onClick={() => {
              submitDoc();
            }}
          >
            {" "}
            Submit Details
          </button>
        ) : (
          <button
            className="submit_btn"
            onClick={() => {
              cogoToast.error("Please fill all details");
            }}
          >
            Details Not Filled Yet
          </button>
        )}
      </div>
    </Root>
  );
}
const Root = styled.section`
display: flex;
flex-wrap: wrap;
@media(max-width: 823px){
    gap: 10px;
    justify-content: center;
}
.all_details{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    
    .err_msg{
        font-size: 14px;
        color: red;
    }
    >div{
        display: flex;
        gap: 7px;
        background-color: #d48ea0;
        padding: 10px 10px 4px 10px;
        border-radius: 20px;
        flex-wrap: wrap;
        color: white;
        font-weight: 520;

        p{
            min-width: 100px;
            align-items: center;
            padding: 0;
        }
    }
    .submit_btn{
        width: fit-content;
        background-color:#d48ea0;
        border: none;
        color: white;
        padding: 8px;
        font-weight: 540;
        border-radius: 15px;
    }
    .submit_btn:hover{
        background-color:  #039c33;
        color: black;
        cursor: pointer;
    }
  }

`;
