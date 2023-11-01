import React, { useState } from 'react'
import styled from 'styled-components';
import Student from './Student';
import Course from './Course';
import Upload from './Upload';
import AppHistory from './AppHistory';
import Comment from './Comment';


export default function DetailView() {
  const [active, setActive] = useState("student");

  return (
    <Root> 
      <h2>Application History</h2>
      <div className="nav_tab">
    <button
      className={active === "student" ? "btn_1 active" : "btn_1"}
      onClick={() => {
        setActive("student");
      }}
    >
      Student Detail
    </button>
    <button
      className={active === "course" ? "btn_1 active" : "btn_1"}
      onClick={() => {
        setActive("course");
      }}
    >
      Course Detail
    </button>
    <button
      className={active === "upload" ? "btn_1 active" : "btn_1"}
      onClick={() => {
        setActive("upload");
      }}
    >
      Upload / Download
    </button>
    <button
      className={active === "apphistory" ? "btn_1 active" : "btn_1"}
      onClick={() => {
        setActive("apphistory");
      }}
    >
     Application History
    </button>
    <button
      className={active === "comment" ? "btn_1 active" : "btn_1"}
      onClick={() => {
        setActive("comment");
      }}
    >
      Comment
    </button>
  </div>

  <div className='table'>
    {active === "student"
      ? <Student/>
      : active === "course"
      ? <Course/>
      : active === "upload"
      ? <Upload/>
      : active === "apphistory"
      ?<AppHistory/>
      : active === "comment"
      ?<Comment/>
      : <Student/>

      }
  </div>
  </Root>
  )
}
const Root = styled.section`
font-family: 'Mulish', sans-serif;
margin: 20px;
background-color: #f8f8f8;
height: 100%;
padding: 20px;
gap:10px;
h2{
  margin: 10px;
font-size: 32px;
font-weight: 600;

}
  .nav_tab {
    display: flex;
    gap: 15px;
    align-items: center;
    background: #e6f5ff;
    justify-content: center;
    padding: 10px;
    border-radius: 40px;
    margin: 10px;
    border-bottom:1px solid lightgray ;
   
    .btn_1 {
      background-color: transparent;
      border: none;
      width: fit-content;
      padding: 10px;
      border-radius: 40px;
      &:hover {
        background-color:blue;
        color: white;
      }
    }
    .active {
     background-color: blue;
     color: #ffffff;
    }
  }
  .table{
    border-top:1px solid lightgray;
  }
`
