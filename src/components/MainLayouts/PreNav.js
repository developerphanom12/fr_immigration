import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FcList } from "react-icons/fc";
import logo from "../CommonPage/imageLogo/phanom.jpg";

export default function PreNav() {
  const navigate = useNavigate();
  const [activePop, setActivePop] = useState(false);
  return (
    <Root>
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} alt="img" />
      </div>
      <div className="options">
        <button
          className="opt_btn"
          onClick={() => {
            navigate("/uniregister");
          }}
        >
          University Register
        </button>
        <button
          className="opt_btn"
          onClick={() => {
            navigate("/register");
          }}
        >
          Student Register
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
          className="login"
          onClick={() => {
            navigate("/login");
          }}
        >
          AGENT LOGIN
        </button>
        <button
          className="login"
          onClick={() => {
            navigate("/studentlogin");
          }}
        >
          STUDENT LOGIN
        </button>
        <button
          className="login"
          onClick={() => {
            navigate("/unilogin");
          }}
        >
          UNIVERSITY LOGIN
        </button>
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
        <div
          className="opt_btn"
          onClick={() => {
            navigate("/uniregister");
          }}
        >
          UNIVERSITY REGISTER
        </div>

        <div
          className="opt_btn"
          onClick={() => {
            navigate("/register");
          }}
        >
          STUDENT REGISTER
        </div>
        <div
          className="opt_btn"
          onClick={() => {
            navigate("/partner");
          }}
        >
          BE A PARTNER
        </div>

        <div
          className="login"
          onClick={() => {
            navigate("/login");
          }}
        >
          AGENT LOGIN
        </div>
        <div
          className="login"
          onClick={() => {
            navigate("/studentlogin");
          }}
        >
          STUDENT LOGIN
        </div>
        <div
          className="login"
          onClick={() => {
            navigate("/unilogin");
          }}
        >
          UNIVERSITY LOGIN
        </div>
      </div>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  height: 80px;
  align-items: center;
  z-index: 10;
  overflow: hidden;
  position: fixed;
  width: 100%;
  background-color: #fff;

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
    gap: 10px;
    button {
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 40px;
      padding: 10px;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: lightgray;
      }
    }

    .login {
      color: #ffffff;
      padding: 10px;
      border-color: transparent;
      cursor: pointer;
      background: linear-gradient(
        45deg,
        #ff6525 19%,
        #ffffffe6 51%,
        #ff6525 100%
      );
      border-radius: 50px;
      background-size: 300% 100%;
      transition: all 0.3s ease-in-out 0s;
      &:hover {
        background: linear-gradient(
          -25deg,
          #ff6525 49%,
          #ffffffe6 91%,
          #ff6525 100%
        );
      }
    }

    @media (max-width: 950px) {
      display: none;
    }
  }
  .menu {
    @media (max-width: 950px) {
      display: block;
      padding-right: 10px;
    }
  }
  .menu {
    @media (min-width: 951px) {
      display: none;
    }
  }

  .pop_nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    background-color: #fff;
    height: 400px;
    width: 100%;
    padding: 20px;
    gap: 10px;
    color: white;
    background: #ff7f50;
  }
  .no_pop {
    display: none;
  }
`;
