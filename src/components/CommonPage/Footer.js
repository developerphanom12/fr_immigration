import React from "react";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import styled from "styled-components";
import logo from "../CommonPage/imageLogo/phanom.jpg";
import { useNavigate } from "react-router-dom";
import { IoCall, IoMail } from "react-icons/io5";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Root>
      <div className="footer_top">
        <div className="footer_top_div1">
          <img src={logo} alt="img" />
          <p>Unlock New Horizons: Navigate Immigration with Confidence. Your Trusted Partner for a Seamless Journey to a Brighter Future Abroad.</p>
        </div>
        <div className="footer_top_div2">
          <h5>Head Office</h5>
          <h6>Phanom Professionals ,Tecfin Tower ,Phase 8B ,Mohali ,Punjab</h6>
          <p>
            <IoCall /> +91 99154 52169
          </p>
          <p>
            <IoMail />
            phanomprofessionals@gmail.com
          </p>
        </div>
        <div className="footer_top_div3">
          <p>Become A Partner</p>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Join now
          </button>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_line">
          Export @ 2024 ACQUIRE. All rights reserved.
        </div>
        <div className="footer_bottom_logo">
          <IoLogoTwitter />
          <IoLogoLinkedin />
          <IoLogoFacebook />
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 30px;
  color: white;
  background: black;

  .footer_top {
    display: flex;
    justify-content: space-between;
    .footer_top_div1{
      width: 220px;
      img{
        width: 180px;
      }
      p{
        padding: 10px;
        font-size: 13px;
      }
    }
    .footer_top_div2 {
      font-size: 12px;
      h6{
        font-size: 12px;
        font-weight: 400;
      }
      p {
        display: flex;
        gap: 10px;
        color: blue;
        svg {
          color: #fff;
          width: 20px;
          height: 14px;
        }
      }
    }
    .footer_top_div3 {
      display: flex;
      flex-direction: column;
      p {
        font-weight: 600;
        margin-bottom: 5px;
      }
      span{
        font-size: 12px;
      }
      button {
        margin: 5px;
        padding: 5px 10px;
        color: #fff;
        font-weight: 500;
        border: none;
        border-radius: 20px;
        background: linear-gradient(
          92deg,
          #ff621f 1.09%,
          rgba(190, 14, 151, 0.73) 52.8%,
          rgba(137, 1, 201, 0.79) 94.57%
        );
      }
    }
  }
  .footer_bottom {
    display: flex;
    border-top: 1.5px solid white;
    width: 100%;
    justify-content: space-between;
    .footer_bottom_line {
      font-size: 14px;
      padding: 10px;
    }
    .footer_bottom_logo {
      padding: 10px;

      svg {
        width: 30px;
        height: 24px;
      }
    }
  }
`;
