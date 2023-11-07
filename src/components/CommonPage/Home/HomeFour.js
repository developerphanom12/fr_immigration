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

export default function HomeFour() {
  return (
    <Root>
      <div className="main_five">
        <div className="five1">
          <h1>How We Work</h1>
          <h3>For Universities</h3>
        </div>
        <div className="five2">
          <div className="fivebox">
            <img src={photo11} alt="img" />
            <h4>Strategic Consultation</h4>
            <p>Action plan is curated, bespoke to fit your strategic objectives</p>
          </div>
          <div className="fivebox">
            <img src={photo12} alt="img" />
            <h4>Global Networking</h4>
            <p>Unlock access to verified leads from over 50 countries</p>
          </div>
          <div className="fivebox">
            <img className="brand" src={photo13} alt="img" />{" "}
            <h4>Brand Development</h4>
            <p>Implementation of marketing strategies and promotions, delivering
            awareness from key stakeholders</p>
          </div>
          <div className="fivebox">
            <img src={photo14} alt="img" /> <h4>24*7 CRM Support </h4>
            <p>Rigorous and reliable, our software processes and manages your applications</p>
          </div>
        </div>
      </div>
      <div className="main_six">
        <h1 >For Recruitment Partners</h1>
        <div className="six1">
          <div className="sixx_div1">
            <img className="img" src={six1} alt="img" />
            <h5>User-Friendly Portal</h5>
            <p>
              For reliable, convenient and centralised management of your
              applications
            </p>
          </div>
          <div className="sixx_div1">
            <img className="img" src={six2} alt="img" />
            <h5>Powerful Search Tools</h5>
            <p>
              Hit your targets and quotas with our requirement specific search
              tools
            </p>
          </div>
          <div className="sixx_div1">
            <img className="img" src={six3} alt="img" />
            <h5>Seamless Application Management</h5>
            <p>
              End-to-end verification, processing and management of student
              applications
            </p>
          </div>
        </div>
        <div className="six2">
          <div className="sixx_div2">
            <img className="img" src={six4} alt="img" />
            <h5>Complete VISA Assistance</h5>
            <p>
              Leverage our high success rates with end-to-end support with visa
              processing
            </p>
          </div>
          <div className="sixx_div2">
            <img className="img" src={six5} alt="img" />
            <h5>Help Students Better</h5>
            <p>
              Secure target enrolment and strategic objectives with our industry
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
    background: #d4f0f0;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 100%;
    border-radius: 2%;

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
        padding: 10px;
        border-radius: 20px;
        background: #ffffff;
        color: #00008b;
        flex: 1;
        gap: 5px;
        height: 350px;
        width: 250px;
        min-width: 180px;
        max-width: 220px;
        .brand {
          margin:10px;
          width: 108px;
          padding-top:5px;
          background-color: white;
          height: 108px;
        }
        p{
          color:black;
        }

        img {
          min-width: 50px;
          width: 100%;
          height: 100%;
          min-height: 50px;
          max-height: 130px;
          max-width: 130px;
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
    /* flex-wrap: wrap; */
    justify-content: center;
    flex-direction: column;
    padding: 40px 20px;
    margin-bottom: 20px;
    text-align: center;

    h5 {
      display: flex;
      justify-content: center;
    }
    p {
      color: black;
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
        p {
          width: 400px;
        }
      }
    }
    img {
      min-width: 50px;
      width: 100%;
      height: 100%;
      min-height: 50px;
      max-height: 250px;
      max-width: 250px;
      transition: transform 0.4s;
    }
    img:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
  @media (max-width: 999px) {
    .main_six {
      display: flex;
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
