import React from "react";
import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";
import photo1 from "../imageLogo/edu.jpg";
import photo2 from "../imageLogo/hat-icon.png";
import photo3 from "../imageLogo/imggg.png";
import photo4 from "../imageLogo/hat-icon2.png";
import { useNavigate } from "react-router-dom";

export default function HomeThird() {
  const navigate = useNavigate();
  return (
    <Root>
      <div className="four_main_div">
        <div className="global">
          <h1>Global Connectivity with Phanom Professionals</h1>
        </div>
        <div className="fourrr">
          <div className="four_1">
            <img src={photo1} alt="img" />
          </div>
          <div className="four_2">
            <img src={photo2} alt="img" />
            <h2> For our Recruitment Partners</h2>

            <div className="arrow">
              <FaArrowRightLong />
              Connect with over 400 Universities
            </div>
            <div className="arrow1">
              <FaArrowRightLong />
              Help students make better choices
            </div>
            <div className="arrow">
              <FaArrowRightLong />
              Expand and manage key relationships
            </div>
            <div className="arrow1">
              <FaArrowRightLong />
              Access best in class training
            </div>
            <div className="arrow">
              <FaArrowRightLong />
              Leverage reliable assistance with applications{" "}
            </div>
            <div className="btn">
              <button
                className="btnn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="fourrr">
          <div className="four_2">
            <img src={photo4} alt="image" /> <h2>For our Universities</h2>
            <div className="arrow1">
              <FaArrowRightLong />
              Connect with over 1,500 trusted overseas consultants
            </div>
            <div className="arrow">
              <FaArrowRightLong />
              Hit internationalisation strategy milestones
            </div>
            <div className="arrow1">
              <FaArrowRightLong />
              Raise brand awareness across over 50 countries
            </div>
            <div className="arrow">
              <FaArrowRightLong />
              Gain exposure to prospective students globally
            </div>
            <div className="arrow1">
              <FaArrowRightLong />
              Leverage admissions process management{" "}
            </div>
            <div className="btn">
              <button
                className="btnn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="four_1">
            <img src={photo3} alt="image" />
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  .four_main_div {
    background: #fff3ee;
    display: flex;
    flex-direction: column;
    font-size: larger;
    margin: 20px;
    padding: 20px;
    justify-content: space-evenly;
    align-items: center;
    margin: 0%;
  }

  .global {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fourrr {
    display: flex;
    /* flex-direction: column;   */
    align-items: center;
    width: 100%;
    gap: 20px;
    margin: 20px 0;
    justify-content: space-evenly;
  }

  .four_1 {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%;   */
    img {
      width: 100%;
      min-width: 50px;
      height: 100%;
      min-height: 50px;
      border-radius: 10px;
    }
  }

  .four_2 {
    max-width: 100%;
    color: blue;
  }

  .arrow {
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .arrow1 {
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #ffffff;
  }

  .btn {
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }

  .btnn {
    padding: 10px 20px;
    border-radius: 30px;
    font-size: medium;
    border-color: transparent;
    color: #ffffff;
    background: blue;
    cursor: pointer;
    text-align: center;
  }

  .photo {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 999px) {
    .fourrr {
      flex-direction: column;
      gap: 10px;
      margin: 20px 0;
    }

    .arrow {
      width: 100%;
    }

    .btn {
      gap: 5px;
    }
  }
`;
