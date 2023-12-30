import React from "react";
import styled from "styled-components";
import ellips from "../../CommonPage/imageLogo/Ellipse 15 (1).png";
import dotted from "../../CommonPage/imageLogo/dotted1.png";
import dottedd from "../../CommonPage/imageLogo/dotted2.png";
import dotteddd from "../../CommonPage/imageLogo/dotted3.png";
import group from "../../CommonPage/imageLogo/Group 4.png";
import group5 from "../../CommonPage/imageLogo/Group 5.png";

export default function Page5() {
  return (
    <Root>
      <div className="content_div">
        <h2>What We Offer For Students</h2>
        <p>Easy And Fast</p>
        <div className="main_div">
          <div className="child_div">
            <div>
              <img src={dotted} alt="img" />
            </div>
            <div className="text_div">
              <h6>Strategic Consultation</h6>
              <p>
                Action plan is curated, bespoke to fit your strategic objectives
              </p>
            </div>
          </div>
          <div className="child_div">
            <div>
              <img src={dottedd} alt="img" />
            </div>

            <div className="text_div">
              <h6>Global Networking</h6>
              <p>Unlock access to verified leads from over 50 countries</p>
            </div>
          </div>
          <div className="child_div">
            <div>
              <img src={dotteddd} alt="img" />
            </div>

            <div className="text_div">
              <h6>Brand Development</h6>
              <p>
                Implementation of marketing strategies and promotions,
                delivering awareness from key stakeholders
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="img_div">
        <img className="img1" src={ellips} alt="img" />
        <img className="img2" src={group5} alt="img" />
        <img className="img3" src={group} alt="img" />
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
  .content_div {
    padding: 10px;
    width: 30%;
    @media (max-width: 999px) {
      width: 100%;
    }
    h2 {
      font-weight: 600;
      color: #210202;
    }
    p {
      font-weight: 500;
      color: #696767;
      text-align: right;
    }
    .main_div {
      .child_div {
        display: flex;
        gap: 15px;
        .text_div {
          p {
            font-size: 13px;
            text-align: left;
          }
        }
      }
    }
  }
  .img_div {
    display: flex;
    width: 40%;
    @media (max-width: 999px) {
      width: 100%;
      text-align: center;
    }
    .img1 {
      width: 300px;
      height: 300px;
      position: relative;
      top: 101px;
      left: 274px;
    }
    .img2 {
      width: 438px;
      height: 407px;
      position: relative;
      z-index: 120;
      top: 34px;
      left: -260px;
    }
    .img3 {
      width: 368px;
      height: 194px;
      position: relative;
      z-index: 123;
      top: 193px;
      left: -419px;
    }
  }
`;
