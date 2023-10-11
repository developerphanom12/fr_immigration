import React from "react";
import styled from "styled-components";
import photo11 from "../imageLogo/target.png";
import photo12 from "../imageLogo/global.png";
import photo13 from "../imageLogo/brand.png";
import photo14 from "../imageLogo/support.png";
import six1 from "../imageLogo/sixone.png";
import six2 from "../imageLogo/sixtwoo.png";
import six3 from "../imageLogo/six3.png";
import six4 from "../imageLogo/sixfour.png";
import six5 from "../imageLogo/sixfive.png";
import { PiNumberSquareOneLight } from "react-icons/pi";
import { PiNumberSquareTwoLight } from "react-icons/pi";
import { PiNumberSquareThreeLight } from "react-icons/pi";
import { PiNumberSquareFourLight } from "react-icons/pi";

export default function HomeFour() {
  return (
    <Root>
      <div className="main_five">
        <div className="five1">
          <h2>How We Work</h2>
          <br />
          <h3>For Universities</h3>
        </div>
        <div className="five2">
          <div className="fivebox">
            <PiNumberSquareOneLight />
            <img src={photo11} alt="image" />
            <h4>Strategic Consultation</h4>
            Action plan is curated, bespoke to fit your strategic objectives
          </div>
          <div className="fivebox">
            <PiNumberSquareTwoLight />
            <img src={photo12} alt="image" />
            <h4>Global Networking</h4>
            Unlock access to verified leads from over 50 countries
          </div>
          <div className="fivebox">
            <PiNumberSquareThreeLight />
            <img src={photo13} alt="image" /> <h4>Brand Development</h4>
            Implementation of marketing strategies and promotions, delivering
            awareness from key stakeholders
          </div>
          <div className="fivebox">
            <PiNumberSquareFourLight />
            <img src={photo14} alt="image" /> <h4>24*7 CRM Support </h4>Rigorous
            and reliable, our software processes and manages your applications
          </div>
        </div>
      </div>
      <div className="main_six">
        <h2 className="h3">For Recruitment Partners</h2>
        <div className="six1">
          <div className="sixx_div1">
            <img className="img" src={six1} alt="image" />
            <h5>User-Friendly Portal</h5>
            <p>
              For reliable, convenient and centralised management of your
              applications
            </p>
          </div>
          <div className="sixx_div1">
            <img className="img" src={six2} alt="image" />
            <h5>Powerful Search Tools</h5>
            <p>
              Hit your targets and quotas with our requirement specific search
              tools
            </p>
          </div>
          <div className="sixx_div1">
            <img className="img" src={six3} alt="image" />
            <h5>Seamless Application Management</h5>
            <p>
              End-to-end verification, processing and management of student
              applications
            </p>
          </div>
        </div>
        <div className="six2">
          <div className="sixx_div2">
            <img className="img" src={six4} alt="image" />
            <h5>Complete VISA Assistance</h5>
            <p>
              Leverage our high success rates with end-to-end support
              <br /> with visa processing
            </p>
          </div>
          <div className="sixx_div2">
            <img className="img" src={six5} alt="image" />
            <h5>Help Students Better</h5>
            <p>
              Secure target enrolment and strategic objectives with our industry
              <br />
              leading service helping you help students choose better
            </p>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-wrap: wrap;
  .main_five {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background:#D4F0F0;
    padding:10px;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 100%;
    border-radius:2%;

    .five1 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #00008b;
    }
    .five2 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 15px;
      /* padding: 10px; */
      flex-wrap: wrap;
      justify-content: space-evenly;

      .fivebox {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        border-radius: 20px;
        background: #ffffff;
        color: #00008b;
        flex: 1;
        gap: 10px;
        height: 350px;
        width: 200px;
        min-width: 180px;
        max-width: 220px;
        svg{
          height:30px;
          width:30px;
          color:black;
        }

        > img {
          min-width: 50px;
          width: 100%;
          height: 100%;
          min-height: 50px;
          max-height:150px;
          max-width:150px;
          background: #f8f8ff;
          transition: transform 0.4s;
        }
        &:hover > img {
          transform: scale(1.1);
          cursor: pointer;
        }
      }
    }
  }

  .main_six {
    background: #fff3ee;
    color: #4169e1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    padding:0px  40px;
    /* min-width: 100vw; */
    width: 100%;
    min-height: 100vh;
    height: 100%;
    text-align:center;

    h5 {
      display: flex;
      justify-content: center;
    }
    p {
      color: black;
    }
    .h3 {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
    }
    .six1 {
      display: flex;
      padding: 10px;
      min-height: 200px;
      height: 100%;
      justify-content: space-evenly;
      .sixx_div1 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 10px;
      }
    }
    .six2 {
      display: flex;
      justify-content: space-around;
      min-height: 200px;
      height: 100%;
      .sixx_div2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    img {
      min-width: 50px;
      width: 100%;
      height: 100%;
      min-height: 50px;
      max-height:250px;
      max-width:250px;
      transition: transform 0.4s;
    }
    img:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }

  /* @media (max-width: 999px) {
    .main_five {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      margin: 20px;

      .five2 {
        flex-direction: column;

        .fivebox {
          padding: 10px;
          width: 100%;

          img {
            width: 100%;
            min-width: 50px;
            transition: transform 0.4s;

            &:hover {
              transform: scale(1.5);
            }
          }
        }
      }
    }
  } */
  @media (max-width: 999px) {
    .main_six {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      padding: 20px;
      width: auto;
      .h3 {
        justify-content: center;
      }

      .six1,
      .six2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;

        .sixx_div1,
        .sixx_div2 {
          display: flex;
          flex-direction: column;
        }
      }

      img {
        height: 50px;
        height: 100%;
        width: 100%;
        min-width: 50px;
        transition: transform 0.4s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;
