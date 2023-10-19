import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import logo from '../imageLogo/phanom.jpg'

export default function PreNav() {
  const navigate = useNavigate();
  const [activePop, setActivePop] = useState(false);
  return (
    <Root>
      <div className="logo" onClick={()=>{navigate('/')}}>
        <img src={logo} alt="image" />
      </div>
      <div className="options">
        <div className="opt_div">
          <button
            className="opt_btn"
            onClick={() => {
              navigate("/universities");
            }}
          >
            Universities
          </button>
        </div>
        <div className="opt_div">
          <button
            className="opt_btn"
            onClick={() => {
              navigate("/reach");
            }}
          >
            Our Reach
          </button>
        </div>
        <div className="opt_div">
          <button
            className="opt_btn"
            onClick={() => {
              navigate("/ambassadar");
            }}
          >
            Be our Ambassador
          </button>
        </div>
        <div className="opt_div">
          <button
            className="opt_btn"
            onClick={() => {
              navigate("/partner");
            }}
          >
            Be a partner
          </button>
        </div>
        <div
          className="login"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </div>
      </div>

      <div
        className="menu"
        onClick={() => {
          setActivePop(true);
        }}
      >
        <AiOutlineMenu />
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
              navigate("/universities");
            }}
          >
            Universities
          </button>
        </div>
        <div className="opt_div">
          <button
            className="opt_btn"
            onClick={() => {
              navigate("/reach");
            }}
          >
            Our Reach
          </button>
        </div>
        <div className="opt_div">
          <button
            className="opt_btn"
            onClick={() => {
              navigate("/ambassadar");
            }}
          >
            Be our Ambassador
          </button>
        </div>
        <div className="opt_div">
          <button
            className="opt_btn"
            onClick={() => {
              navigate("/partner");
            }}
          >
            Be a partner
          </button>
        </div>
        <div  className="opt_div"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </div>
      </div>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  height: 80px;
  /* min-width:100vw;
  width:100%; */
  /* justify-content: center; */
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  .opt_btn {
    background: none;
    color: black;
    border-color: transparent;
    font-size: larger;
    padding: 8px;
    border-radius: 10px;
    cursor: pointer;
    width: 200px ;

  }
  .opt_btn:hover{
    background-color: rgb(249, 147, 45);
    color: #ffffff;
  }

  .logo {
    width: 200px;
    img {
      width: 100%;
    }
  }
  .options {
    background-color: #ffffff;
    flex: 1;
    display: flex;
    justify-content: space-around;

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
    background: #ff7f50;
    color: #ffffff;
    padding: 10px 30px 10px 30px;
    border-radius: 40px;
    border-color: transparent;
    font-size: larger;
    cursor: pointer;
  }
`
   