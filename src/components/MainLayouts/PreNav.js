import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FcList } from "react-icons/fc";
import logo from '../CommonPage/imageLogo/phanom.jpg'

export default function PreNav() {
  const navigate = useNavigate();
  const [activePop, setActivePop] = useState(false);
  return (
    <Root>
      <div className="logo" onClick={()=>{navigate('/')}}>
        <img src={logo} alt="img" />
      </div>
      <div className="options">
        <div className="opt_div">
        <button
            className="opt_btn"
            onClick={() => {
              navigate("/register");
            }}
          >
           Register as a Student
          </button>
          <button
            className="opt_btn"
            onClick={() => {
              navigate("/partner");
            }}
          >
            Be a partner
          </button>
          <button
            className="opt_btn"
            onClick={() => {
              navigate("/reach");
            }}
          >
            Our Network
          </button>
          
        </div>
        <div
          className="login"
          onClick={() => {
            navigate("/login");
          }}
        >
         Agent Login
        </div>
        <div
          className="login"
          onClick={() => {
            navigate("/studentlogin");
          }}
        >
         Student Login
        </div>
      </div>

      <div
        className="menu"
        onClick={() => {
          setActivePop(true);
        }}
      >
        <FcList />
      </div>

      <div
        className={activePop ? "pop_nav" : "no_pop"}
        onClick={() => {
          setActivePop(false);
        }}
      >
        <div className="opt_div">
        <button
            className="opt_btn"
            onClick={() => {
              navigate("/register");
            }}
          >
           Register as a Student
          </button>
          <button
            className="opt_btn"
            onClick={() => {
              navigate("/partner");
            }}
          >
            Be a partner
          </button>
        </div>
        <div  className="login"
          onClick={() => {
            navigate("/login");
          }}
        >
         Agent Login
        </div>
        <div  className="login"
          onClick={() => {
            navigate("/studentlogin");
          }}
        >
         Student Login
        </div>
      </div>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  height: 80px;
  align-items: center;
  overflow: hidden;
  position:fixed;
  width: 100%;
  background-color: #fff;
  .opt_btn {
    background: none;
    color: black;
    border-color: transparent;
    font-size: medium;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    width: 200px ;
    height: 44px;

  }
  

  .logo {
    width: 200px;
    background-color: #ffffff;
    img {
      width: 100%;
    }
  }
  .options {
    background-color: #ffffff;
    flex: 1;
    display: flex;
    justify-content: right;

    @media (max-width: 850px) {
      display: none;
    }
  }
  .menu {
    @media (max-width: 850px) {
      display: block;
      padding-right: 10px;

    }
  }
  .menu {
    @media (min-width: 851px) {
      display: none;
    }
  }

  .pop_nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    background-color: #fff;
    height:400px;
    width: 100%;
    background: #ff7f50;
  }
  .no_pop {
    display: none;
  }
  .login {
    background:#FF6525;
    color: #ffffff;
    padding: 10px 10px 10px 10px;
    border-color: transparent;
    font-size: medium;
    text-align: center;
    width: 160px;
    margin: 5px;
    cursor: pointer;
    background: linear-gradient( 45deg, #ff6525 19%, #ffffffe6 51%, #ff6525 100%);
    border-radius: 50px;
    color: #FFF;
    background-size: 300% 100%;
    transition: all 0.3s ease-in-out 0s;
    text-transform: uppercase;
    &:hover{
          background: linear-gradient(
          -25deg,
          #ff6525 49%,
          #ffffffe6 91%,
          #ff6525 100%
        );
        }
  }
`
   