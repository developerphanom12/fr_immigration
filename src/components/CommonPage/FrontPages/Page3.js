import React from "react";
import styled from "styled-components";
import p1 from "../../CommonPage/imageLogo/P1.png";
import p2 from "../../CommonPage/imageLogo/P2.png";
import p3 from "../../CommonPage/imageLogo/P3.png";
import p4 from "../../CommonPage/imageLogo/P4.png";

export default function Page3() {
  return (
    <Root>
      <div className="head">
        <h2>Immigrate in 4 Easy Steps...</h2>
      </div>
      <div className="text_divv">
        <div className="text_div1">
          <img src={p1} alt="img" />
          <div>
            <h6 className="h6_div1"> Carrer Counseling</h6>
            <p>
              Guiding paths, unlocking potential, shaping futures—career
              counseling transforms aspirations into reality.
            </p>
          </div>
        </div>
        <div className="text_div2">
          <img src={p2} alt="img" />
          <div>
            <h6 className="h6_div2">Admission process</h6>
            <p>
              Navigate admissions seamlessly, unlock opportunities, and embrace
              educational journeys confidently.
            </p>
          </div>
        </div>
        <div className="text_div3">
          <img src={p3} alt="img" />
          <div>
            <h6 className="h6_div3">VISA Assistance</h6>
            <p>
              Simplify VISA procedures, ensure compliance, and facilitate
              seamless global transitions.
            </p>
          </div>
        </div>
        <div className="text_div4">
          <img src={p4} alt="img" />
          <div>
            <h6 className="h6_div4">Pre-Departure Orientation</h6>
            <p>
              Prepare for success abroad with our comprehensive pre-departure
              orientation services.
            </p>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(#8850e91a #ffffff);
  padding-bottom: 20px;
  .head {
    padding: 10px;
    h2 {
      color: #330101;
    }
  }
  .text_divv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84%;
    @media (max-width: 999px) {
      width: 100%;
    }
    .text_div2 {
      position: relative;
      img {
        width: 240px;
        position: relative;
        top: 50px;
        left: -11px;
        @media (max-width: 999px) {
          width: 120px;
        }
      }
      > div {
        position: absolute;
        top: 127px;
        left: 42px;
        @media (max-width: 999px) {
          position: absolute;
          top: 87px;
          left: 0px;
        }
        .h6_div2 {
          color: #0067ff;
          text-align: center;
          padding-top: 10px;
          margin: 0;
          width: 150px;
          @media (max-width: 999px) {
            padding-top: 5px;
            width: 100px;
            font-size: 10px;
          }
        }
        p {
          font-size: 10px;
          color: gray;
          padding: 10px;
          text-align: center;
          width: 150px;
          @media (max-width: 999px) {
            padding: 0px;
            width: 100px;
            font-size: 6px;
            margin: 0px;
          }
        }
      }
    }
    .text_div4 {
      position: relative;

      img {
        width: 240px;
        position: relative;
        top: 57px;
        left: -33px;
        @media (max-width: 999px) {
          width: 120px;
        }
      }
      > div {
        position: absolute;
        top: 127px;
        left: 17px;
        @media (max-width: 999px) {
          position: absolute;
          top: 86px;
          left: -22px;
        }
        .h6_div4 {
          color: purple;
          text-align: center;
          padding-top: 10px;
          margin: 0;
          width: 150px;
          @media (max-width: 999px) {
            padding-top: 5px;
            width: 100px;
            font-size: 12px;
          }
        }
        p {
          font-size: 10px;
          color: gray;
          padding: 10px;
          text-align: center;
          width: 150px;
          @media (max-width: 999px) {
            padding: 0px;
            width: 100px;
            font-size: 6px;
          }
        }
      }
    }
    .text_div1 {
      position: relative;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      img {
        width: 240px;
        @media (max-width: 999px) {
          width: 120px;
        }
      }
      > div {
        position: absolute;
        top: 74px;
        left: 42px;
        @media (max-width: 999px) {
          position: absolute;
          top: 35px;
          left: 10px;
        }
        .h6_div1 {
          color: #00d4ff;
          padding-top: 10px;
          margin: 0;
          text-align: center;
          width: 150px;
          @media (max-width: 999px) {
            padding-top: 5px;
            width: 100px;
            font-size: 10px;
          }
        }
        p {
          font-size: 10px;
          color: gray;
          padding: 10px;
          width: 150px;
          text-align: center;
          @media (max-width: 999px) {
            padding: 0px;
            width: 100px;
            font-size: 6px;
          }
        }
      }
    }
    .text_div3 {
      position: relative;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      img {
        width: 240px;
        position: relative;
        left: -19px;
        @media (max-width: 999px) {
          width: 120px;
        }
      }
      > div {
        position: absolute;
        top: 74px;
        left: 27px;
        @media (max-width: 999px) {
          position: absolute;
          top: 41px;
          left: -9px;
        }
        .h6_div3 {
          margin: 0;
          width: 150px;
          color: #7f43e7;
          text-align: center;
          padding-top: 10px;
          @media (max-width: 999px) {
            padding-top: 5px;
            width: 100px;
            font-size: 10px;
          }
        }

        p {
          font-size: 10px;
          color: gray;
          padding: 10px;
          width: 150px;
          text-align: center;
          @media (max-width: 999px) {
            padding: 0px;
            width: 100px;
            font-size: 6px;
          }
        }
      }
    }
  }
`;
