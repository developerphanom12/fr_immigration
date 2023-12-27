import React from "react";
import styled from "styled-components";
import aircraft from "../../CommonPage/imageLogo/aircraft.jpg";
import business from "../../CommonPage/imageLogo/businessman-walking.jpg";
import university from "../../CommonPage/imageLogo/view-of-office.jpg";
import map from "../../CommonPage/imageLogo/map-colorfull.jpg";
import students from "../../CommonPage/imageLogo/students-image.jpg"

export default function Page4() {
  return (
    <Root>
      <div>
        <h2>Why To Choose Us</h2>
      </div>
      <div className="text_div">
        <div className="one1"></div>
        <div className="one2"></div>
        <div className="box_main">
          <div className="box">
            <img src={aircraft} alt="img" />
            <h2> 49+ </h2>
            <h5>Successfull VISA</h5>
          </div>
          <div className="box">
          <img src={business} alt="img" />
            <h2>49+</h2>
            <h5>Years of Experience</h5>
          </div>
          <div className="box">
          <img src={university} alt="img" />
            <h2>35+</h2>
            <h5>Universities </h5>
          </div>
          <div className="box">
          <img src={map} alt="img" />
            <h2>29+</h2>
            <h5>Countries</h5>
          </div>
          <div className="box">
          <img src={students} alt="img" />
            <h2>89+</h2>
            <h5>Students</h5>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-image: radial-gradient(circle, #8850e91a, #8850e91a, #ffffff);
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  > div {
    h2 {
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .text_div {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 20px;
    align-items: center;
    .one1 {
      width: 90%;
      height: 250px;
      transform: rotate(3.24deg);
      flex-shrink: 0;
      z-index: 2;
      position: absolute;
      border-radius: 28px;
      background: rgba(220, 238, 255, 0.9);
      background-blend-mode: screen;
    }
    .one2 {
      width: 90%;
      height: 250px;
      transform: rotate(-3.245deg);
      flex-shrink: 0;
      border-radius: 28px;
      background: rgba(244, 220, 255, 0.98);
      background-blend-mode: screen;
    }
    .box_main {
      display: flex;
      position: absolute;
      gap: 10px;
      /* flex-direction: column; */
      z-index: 9;
      .box {
        width: 160px;
        border-radius: 10px;
        background-color: #ffffff;
        box-shadow: -6px 10px 17.5px 1px rgba(0, 0, 0, 0.25);
        img {
          width: 50px;
          border-radius: 10px;
          height: 50px;
        }
        h2 {
          margin: 0;
          text-align: center;
          font-weight: 600;
          background: linear-gradient(101deg, #aa00fb 20.32%, #c42f2f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        h5 {
          text-align: center;

          padding: 10px;
          font-weight: 500;
          color: black;
        }
      }
    }
  }
`;
