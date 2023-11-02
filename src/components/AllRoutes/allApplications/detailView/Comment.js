import React from "react";
import styled from "styled-components";

export default function Comment() {
  return (
    <Root>
      <div className="box1">
        <select>
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
      <div className="box2">
        <input type="text" placeholder="Comment...."  id="myInput"></input>
        <button
          className="btn"
          onClick={() => {
            // approveApi();
          }}
        >
          Submit
        </button>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: "mulish", "sans-serif";
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  margin: 20px;
  align-items: center;
  height: 100%;
  gap: 20px;
  .box1 {
    /* padding: 20px; */
    max-width:900px;
    width: 100%;
    select{
      max-width:900px;
      width: 100%;
      border-radius: 40px;
      background-color: white;
    border: 3px solid #e6f5ff;
    display: inline-block;
    line-height: 1.5em;
    padding: 10px;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, black 50%),
      linear-gradient(135deg,  black 50%, transparent 50%),
      linear-gradient(to right,#e6f5ff, #e6f5ff);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), 100% 0;
    background-size: 5px 5px, 5px 5px, 40px 45px ;
    background-repeat: no-repeat;

    select:focus {
      background-image: linear-gradient(45deg, white 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, white 50%),
        linear-gradient(to right, gray, gray);
      background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, 100% 0;
      background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
      background-repeat: no-repeat;
      border-color: grey;
      outline: 0;
    }
    }
  }
  .box2 {
    display: flex;
    flex-direction: column;
    /* padding: 20px; */
    gap: 10px;
      .btn {
    border: none;
    width:150px;
    padding: 10px;
    border-radius: 40px;
    background-color: blue;
    color: white;
    }
    
  }
  input[type="text"] {
    border-radius: 40px;
    border: 2px solid #d1edff;
    height: 200px;
    width: 900px;
    font-size: 16px;
    padding: 10px; 
    box-sizing: border-box; 
  }
  ::placeholder {
      text-align: left;
      vertical-align: top;
      color: #999;
  }
 

`;
