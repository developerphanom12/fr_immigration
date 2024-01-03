import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_APPLICATION } from "../../../URLS";
import cogoToast from "cogo-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

export default function Comment({ value }) {
  // let { id } = useParams();
  // console.log("checkdata", id);
  const [val, setVal] = useState({
    applicationId: "",
    comment_text: "",
    select_type: "",
  });
  const navigate = useNavigate();
  const getDetails = useSelector((state) => state?.users?.appDetails);

  const commentApi = async () => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.post(
        `${EXCHANGE_URLS_APPLICATION}/comments`,
        val,
        axiosConfig
      );
      setVal(res);
      value(true);
      navigate("/detailview/:id");
      console.log("resress", res);
    } catch (e) {
      console.log("error", e);
    }
  };
  console.log("vallll", value);

  const handleSubmit = () => {
    commentApi();
    value(true);
    cogoToast.success("Comment Added");
  };

  return (
    <Root>
      <div className="box1">
        <select
          value={val.select_type}
          onChange={(e) => {
            setVal({
              ...val,
              select_type: e.target.value,
              applicationId: getDetails.application_id,
            });
          }}
        >
          <option>Select Type</option>
          <option>Application Related Comment</option>
          <option>Appointment Of Agent Required</option>
          <option>CAS Document Uploaded/CAS Required</option>
          <option>Course Change Required</option>
          <option>Change Of Agent Required</option>
          <option>Conditional To Unconditional Offer Required</option>
          <option>Defer Required</option>
          <option>Others</option>
          <option>Refund Required</option>
        </select>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>

          <div className="col-lg-8">
            <div className="box2">
              <input
                type="text"
                placeholder="Comment...."
                value={val.comment_text}
                onChange={(e) => {
                  setVal({ ...val, comment_text: e.target.value });
                }}
              />
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "Roboto", "sans-serif";
  display: flex;
  padding-left: 80px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  flex-direction: column;
  margin: 10px;
  align-items: center;
  height: 100%;
  gap: 10px;
  .box1 {
    display: flex;
    width: 60%;
    justify-content: center;
    align-items: center;

    select {
      background-color: white;
      color: black;
      text-decoration: none;
      border: 1px solid gray;
      padding: 10px;
      width: 80%;
      border-radius: 50px;
      font-size: 12px;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-image: linear-gradient(45deg, transparent 50%, black 50%),
        linear-gradient(135deg, black 50%, transparent 50%),
        linear-gradient(to right, #8656ec, #c6abff);
      background-position: calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px), 100% 0;
      background-size: 5px 5px, 5px 5px, 40px 45px;
      background-repeat: no-repeat;
      &:hover {
        box-shadow: 4px 4px 5px darkgray;
        transition: all 0.1s ease-in-out 0s;
      }
      @media (max-width: 555px) {
        padding: 8px;
        font-size: 14px;
        background-size: 5px 5px, 5px 5px, 30px 45px;
      }
    }
  }
  .box2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    > div {
      text-align: center;
      .btn {
        border: none;
        width: 150px;
        padding: 8px;
        border-radius: 50px;
        background-color: #8656ec;
        color: white;
        &:hover {
          box-shadow: 1px 1px 5px 1px gray;
        }
      }
      @media (max-width: 565px) {
        width: 100px;
        .btn {
          width: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    input[type="text"] {
      width: 80%;
      border-radius: 10px;
      border: 1px solid gray;
      font-size: 15px;
      height: 100px;
      box-sizing: border-box;
     

      @media (max-width: 566px) {
        padding: 5px;
      }
    }
    ::-webkit-input-placeholder {
        white-space: pre-line;
        position: relative;
        padding: 5px;
        top: -25px;
      }

  }

  @media (max-width: 566px) {
    margin: 0;
    padding: 0;
  }
`;
