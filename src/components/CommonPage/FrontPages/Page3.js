import React from "react";
import styled from "styled-components";

export default function Page3() {
  return (
    <Root>
      <div>
        <h2>Immigrate in 4 Easy Steps...</h2>
      </div>
      <div className="text_divv">
        <div className="text_div1">
          <h6 className="h6_div1"> Carrer Counseling</h6>
          <p>
            Guiding paths, unlocking potential, shaping futures—career
            counseling transforms aspirations into reality.
          </p>
        </div>
        <div className="text_div1">
          <h6 className="h6_div2">Admission process</h6>
          <p>
            Navigate admissions seamlessly, unlock opportunities, and embrace
            educational journeys confidently.
          </p>
        </div>
        <div className="text_div1">
          <h6 className="h6_div3">VISA Assistance</h6>
          <p>
            Simplify VISA procedures, ensure compliance, and facilitate seamless
            global transitions.
          </p>
        </div>
        <div className="text_div1">
          <h6 className="h6_div4">Pre-Departure Orientation</h6>
          <p>
            Prepare for success abroad with our comprehensive pre-departure
            orientation services.
          </p>
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
  background-image: radial-gradient( circle ,#8850e91a,  #8850e91a, #ffffff);
  padding: 20px;
  > div {
    padding: 10px;
    h2 {
      color: #330101;
    }
  }
  .text_divv {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 80%;
    .text_div1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
      width: 20%;
      margin: 10px;
      border-left:5px dotted black;
      height: 190px;
      padding: 10px;
      border-radius: 50%;
      flex-wrap: wrap;
      .h6_div1 {
        color: #00d4ff;
        padding-top: 10px;
        margin: 0;
        text-align: center;
      }
      .h6_div2 {
        color: #0067ff;
        text-align: center;
        padding-top: 10px;
        margin: 0;
      }
      .h6_div3 {
        margin: 0;

        color: #7f43e7;
        text-align: center;
        padding-top: 10px;
      }
      .h6_div4 {
        color: purple;
        text-align: center;
        padding-top: 10px;
        margin: 0;
      }
      p {
        font-size: 10px;
        color: gray;
        padding: 10px;
        text-align: center;
      }
    }
  }
`;
