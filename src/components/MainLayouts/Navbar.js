import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../imageLogo/phanom.jpg";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [activePop, setActivePop] = useState(false);
  const navigate = useNavigate();

  return (
    <Root>
     <div className="logo" onClick={()=>{navigate('/')}}>
        <img src={logo} alt="img" />
      </div>
      <div className="logged_nav">
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
        <div className="opt_div2">
          {" "}
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
  background: #ffffff;
  display:flex;
  height: 80px;
  /* justify-content: center; */
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  .logo {
    width: 200px;
    img {
      width: 100%;
    }
  }
  .logged_nav {
    gap: 10px;
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    @media (max-width: 950px) {
      display: none;
    }
    .opt_btn {
      background: none;
      color: black;
      border-color: transparent;
      font-size: larger;
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
      /* flex-wrap: wrap; */
      .opt_btn2 {
        margin-left: 10px;
      }
    }
    .user_btn2 {
      background: #ff7f50;
      color: #ffffff;
      padding: 10px 30px 10px 30px;
      border-radius: 10px;
      border-color: transparent;
      font-size: larger;
      cursor: pointer;
    }
  }
  .opt_btn:hover {
    background: #ff7f50;
    color: #ffffff;
  }
  .user_btn2:hover {
    background: green;
  }
  .logo {
    width: 200px;
    img {
      width: 100%;
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
    height:400px;
    width: 100%;
    background: #ff7f50;
  }
  .no_pop {
    display: none;
  }
`;
