import React, { useState } from "react";
import styled from "styled-components";
import russia from "../adminLogo/Russia.png"
import canada from "../adminLogo/canada.png"
import us from "../adminLogo/unitedstates.png"
import maxico from "../adminLogo/maxico.jpg"
import china from "../adminLogo/china.png"
import Notice from "./Notice";
export default function DashboardAdmin() {
    const [notices, setNotices] = useState([
      'Welcome to the dashboard!',
      'Important update: ...',
     
    ])
  return (
    <Root><h2>WELCOME TO DASHBOARD</h2>
      <div className="flags">
        <div> <img src={russia} alt="img"/>Russia</div>
        <div> <img src={canada} alt="img"/> Canada</div>
        <div> <img src={ us} alt="img"/>United States</div>
        <div> <img src={maxico} alt="img"/>Mexico</div>
        <div> <img src={china} alt="img"/>China</div>
      </div>
      <div className="dashboard_details">
        <div className="details">
          <div>Total Applications<h3>{60}</h3></div>
          <div>Application Processed<h3>{25}</h3></div>
          <div>Rejected Documents<h3>{1}</h3></div>
          <div>Fake Documents<h3>{0}</h3></div>
        </div>
      </div>
      <div className="notice">
      <Notice notices={notices
      } />
    </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  overflow:hidden;
  .flags {
    display: flex;
    height: 40px;
    margin: 10px 0px;
    gap: 10px;
    padding:8px;
    > div {
      width: 120px;
      align-items: center;
      display: flex;
      background-color:rgb(34, 232, 186);
      border-radius: 12px;
      text-align: center;
      justify-content: center;
    }
    img{
      width: 40px;
      height:40px;
      border-radius: 130px;
    }
  }
  .dashboard_details {
    flex-wrap: wrap;
    background-color:rgb(244, 130, 153);
    border-radius: 10px;
    display: flex;
    margin: 4px;
    height: 80px;
    .details {
      display: flex;
      justify-content: space-evenly;   
      width: 100%;
      font-size: 17px;
      font-family: "Times New Roman", serif;
      /* border: 1px solid black; */
      > div {
        display: flex;
      
        margin: 10px;
        max-width: 230px;
        width: 100%;
        min-width: 50px;
        border-radius: 10px;
        /* background-color: rgb(254, 202, 156); */
        background-color: white;
        align-items: center;
        justify-content: center;
        gap: 2px;
        border-left: 2px solid black;
        border-right: 2px solid black;
      }
    }
  }
  /* src/App.css */

.notice {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Courier, monospace;
  /* background-color: ; */
}

.notice_board {
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
}

.notice-board h2 {
  text-align: center;
}

.notice-board ul {
  list-style-type: none;
  padding: 0;
}

`
