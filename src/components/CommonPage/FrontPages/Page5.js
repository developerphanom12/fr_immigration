import React from "react";
import styled from "styled-components";
import university_imgaes_background from "../../CommonPage/imageLogo/Div5-Universities.png";
import dotted from "../../CommonPage/imageLogo/dotted1.png";
import dottedd from "../../CommonPage/imageLogo/dotted2.png";
import dotteddd from "../../CommonPage/imageLogo/dotted3.png";

export default function Page5() {
  return (
    <Root>
      <div className="content_div">
        <h2>What We Offer For Students</h2>
        <p>Easy And Fast</p>
        <div className="main_div">
          <div className="child_div">
            <div><img src={dotted} alt="img" /></div>
            <div className="text_div">
              <h6>Strategic Consultation</h6>
              <p>
                Action plan is curated, bespoke to fit your strategic objectives
              </p>
            </div>
          </div>
          <div className="child_div">
          <div><img src={dottedd} alt="img" /></div>

            <div className="text_div">
              <h6>Global Networking</h6>
              <p>Unlock access to verified leads from over 50 countries</p>
            </div>
          </div>
          <div className="child_div">
          <div><img src={dotteddd} alt="img" /></div>

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
        <img src={university_imgaes_background} alt="img" />
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  .content_div {
    padding: 10px;
    width: 30%;
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
        .text_div{
            p{
                font-size: 13px;
                text-align: left;
            }
        }
      }
    }
    .img_div{
        width: 40%;
        img{
            width: 350px;
            height: 350px;

        }
    }
  }
`;
