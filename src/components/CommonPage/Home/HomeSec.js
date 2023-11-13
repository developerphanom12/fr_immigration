import React from "react";
import styled from "styled-components";
import { RxEnter } from "react-icons/rx";
import pic1 from "../imageLogo/unipic1.jpg";
import pic2 from "../imageLogo/unipic2.jpg";
import pic3 from "../imageLogo/unipic3.jpg";
import pic4 from "../imageLogo/unipic4.jpg";
import pic5 from "../imageLogo/unipiv5.jpg";
import pic6 from "../imageLogo/unipic6.jpg";
import pic7 from "../imageLogo/unipic7.jpg";
import { useNavigate } from "react-router-dom";

export default function HomeSec() {
  const navigate = useNavigate();
  return (
    <Root>
      <div className="sndbox">
        <div className="snd1">
          <h2>
            Our Global Network of 400+ Universities Explore Institutions.....{" "}
          </h2>
          <RxEnter />
        </div>
        <div className="snd2">
          <div className="pic">
            <img src={pic1} alt="img" />
          </div>
          <div className="pic">
            <img src={pic2} alt="img" />
          </div>
          <div className="pic">
            <img src={pic3} alt="img" />
          </div>
          <div className="pic">
            <img src={pic4} alt="img" />
          </div>
          <div className="pic">
            <img src={pic5} alt="img" />
          </div>
          <div className="pic">
            <img src={pic6} alt="img" />
          </div>
          <div className="pic">
            <img src={pic7} alt="img" />
          </div>
        </div>
      </div>
      <div className="thirdbox">
        <h2>The Access You Need</h2>We provide you with the access you need to
        drive your key strategic targets. Get connected with us today to
        leverage the rich collaboration between university, education consultant
        and student
        <div className="third">
          <button
            className="third1"
            onClick={() => {
              navigate("/partner");
            }}
          >
            Join Us{" "}
          </button>
          <button
            className="third1"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign In{" "}
          </button>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
font-family: 'Mulish','sans-serif';
  .sndbox {
    display: flex;
    margin: 20px;
    padding: 20px;
    h2{
      color: #4169e1;
    }

    .snd1 {
      width: 300px;
      color: black;
      padding: 10px;
      svg{
        width: 20px;
        height: 20px;
      }
    }

    .snd2 {
      display: flex;
      flex: 1;
      border-left: 1px solid black;
      padding: 10px;
      gap: 30px;
      position: relative;
      overflow: hidden;

      .pic {
        position: relative;
        min-width: 150px;
        min-height: 150px;
      }

      .pic > img {
        width: 130px;
        height: 130px;
        position: relative;
        left: 0;
        animation: slideLeft 4s linear infinite;
        display: inline-block;
      }

      @keyframes slideLeft {
        0% {
          left: 20;
        }
        25% {
          left: -150px;
        }
        50% {
          left: -300px;
        }
        75% {
          left: -450px;
        }
        100% {
          left: -600px;
        }
      }
    }
  }
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    .sndbox {
      flex-direction: column;
      .snd1 {
        width: 100%;
      }
      .snd2 {
        width: 100%;
      }
    }
  }

  .thirdbox {
    margin: 40px;
    padding: 20px;
    background: rgb(255 94 0);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    align-items: center;
    text-align: center;
  }

  .third {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 300px;
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  .third1 {
    padding: 10px 20px;
    border-radius: 30px;
    font-size: medium;
    border-color: transparent;
    color: blue;
    cursor: pointer;
    text-align: center;
  }

  @media (max-width: 999px) {
    .thirdbox {
      margin: 20px;
      padding: 10px;
    }

    .third {
      max-width: none;
    }
  }
`;
