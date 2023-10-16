import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdPersonSearch } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import cogoToast from "cogo-toast";

export default function SideBar() {
  const navigate = useNavigate();

  return (
    <Root>
      <div className="menu_top">
        <div className='company_logo'>
         <h1>PHENOM</h1><img src='phanom.jpg' alt='img'/>
        </div>
        <div>
          <h4 className="caption">ANALYTICS</h4>
        </div>
        <div className="nav_section nav_div">
          <div
            onClick={() => {
              navigate("/dashboard");
            }}
            className="div_1"
          >
            <FaHome />
            <h3>Dashboard</h3>
          </div>
          <div
            onClick={() => {
              navigate("/applications");
            }}
            className="div_2"
          >
            {<MdPersonSearch/>}
            <h4>Add New Applicaton</h4>
          </div>
          <div
            onClick={() => {
              navigate("/history");
            }}
            className="div_2"
          >
            {<MdWorkHistory/>}
            <h4>Application History</h4>
          </div>
          <div
            onClick={() => {
              navigate("/urm");
            }}
            className="div_2"
          >
            {<FaUniversity/>}
            <h4>URM university</h4>
          </div>
          <div
            onClick={() => {
              navigate("/search");
            }}
            className="div_2"
          >
            {<MdSearch/>}
            <h4>Search Course</h4>
          </div>
        </div>
        
      </div>
      <div className="logout">
          <div
            onClick={() => {
              navigate("/login");
              cogoToast.success("Logout Successfully");
            }}
            className="div_2"
          >
            <FiLogOut />
            <h4>Logout</h4>
          </div>
        </div>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: space-between;
  /* height: 100%; */
  color: white;
  padding: 5px;
  font-family: "Times New Roman", serif;
  width: 100%;
  .menu_top {
    /* display: flex;  */
    .logout{
   background-color: aqua;
    }

    .nav_section {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
      justify-content: space-between;
      svg{
        width: 25px;
        height: 25px;
      }

      .div_1 {
        text-decoration: none;
        display: flex;
        height: 30px;
        gap: 5px;
        justify-content: left;
        align-items: center;
        font-size: 20px;
        padding: 8px;
        padding-left: 10px;
        border-radius: 10px;
        /* color: whitesmoke; */
        background-color: rgb(244, 130, 153);
        color: black;
        cursor: pointer;
        svg {
          font-size: 25px;
        }
      }
      .div_1.active,
      .div_1:hover {
        background-color: rgb(244, 130, 153);
        color: white;
        cursor: pointer;
      }
    }
  }
  .menu_button {
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;

    .admin_profile2 {
      display: flex;
      background-color: whitesmoke;
      border-radius: 10px;
      padding: 5px;
      img {
        object-fit: cover;
      }
      .admin_details {
        font-weight: 600;
        font-size: 18px;
        color: black;
        text-transform: capitalize;

        p {
          font-size: 12px;
          color: black;
        }
      }
    }
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
  .div_2 {
    text-decoration: none;
    display: flex;
    gap: 5px;
    justify-content: left;
    align-items: center;
    font-size: 17px;
    font-weight: 600;
    padding: 10px;
    border-radius: 10px;
    color: black;
    padding-left: 10px;
    height: 30px;
  }
  .div_2.active,
  .div_2:hover {
    background-color: rgb(244, 130, 153);
    color: black;
    cursor: pointer;
  }

  .caption {
    margin-top: 5px;
    color: gray;
    padding: 10px;
  }
`;
