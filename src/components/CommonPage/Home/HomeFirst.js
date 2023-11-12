import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import photo1 from "../imageLogo/div1.jpg";
import photo2 from "../imageLogo/div2.png";
import photo3 from "../imageLogo/div3.png";
import photo4 from "../imageLogo/div4.png";
import photo5 from "../imageLogo/div5.png";
import photo6 from "../imageLogo/div6.png";
import photo7 from "../imageLogo/div7.png";
import photo8 from "../imageLogo/div8.png";

export default function HomeFirst({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Root>
      <div className="main">
        <div className="firstbox">
          <div className="line">
            <h3 className="line1">Your Gateway to Global Connection</h3>
            <h2 className="line2">
              The Ultimate Destination for Universities and Strategic
              Recruitment Partnerships
            </h2>
            <h6>
              Through our network, industry knowledge, and personalized business
              solutions, we enable Universities and Recruitment Partners to
              effortlessly navigate the recruitment process while achieving
              their targets.
            </h6>
            <div className="search">
              <input
                className="searchbar"
                type="text"
                placeholder="Type University Name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="searchbar2" onClick={handleSearch}>
                <AiOutlineSearch />
                ADVANCED SEARCH
              </button>
            </div>
          </div>
          <div className="pictures">
            <div className="photo2">
              <img src={photo1} alt="img" />
            </div>
            <div className="photo"></div>
            <div className="photo3">
              <img src={photo2} alt="img" />
            </div>
            <div className="photo"></div>
            <div className="photo2">
              <img src={photo3} alt="img" />
            </div>
            <div className="photo"></div>
            <div className="photo">
              <h4 className="h4">80,000+ courses</h4>
            </div>
            <div className="photo3">
              <img src={photo3} alt="img" />
            </div>
            <div className="photo"></div>
            <div className="photo1">
              <img src={photo4} alt="img" />
            </div>
            <div className="photo"></div>
            <div className="photo3">
              <img src={photo5} alt="img" />
            </div>
            <div className="photo4">
              <img src={photo6} alt="img" />
            </div>
            <div className="photo"></div>
            <div className="photo4">
              <img src={photo7} alt="img" />
            </div>
            <div className="photo">
              <h4 className="h4">500,000+ Students</h4>
            </div>
            <div className="photo1">
              <img src={photo8} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff3ee;
  height: 600px;
  /* .main{
    padding: 40px;
    gap: 20px;
  } */
  .firstbox {
    background: #fff3ee;
    padding: 30px;
    font-size: larger;
    display: flex;
    flex-wrap: wrap;
    .line {
      flex: 1;
      padding: 20px;
      .line1 {
        /* font-family: 'Courier New'; */
        color: #ff6525;
      }
      .line2 {
        color: #6495ed;
        padding: 10px;
      }
      .search {
        height: 48px;
        width: 580px;
        border-radius: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background: #ffffff;
        margin: 20px;
        align-items: baseline;
        .searchbar {
          height: 40px;
          border-radius: 20px;
          border-color: transparent;
        }
        .searchbar2 {
          background: #1e90ff;
          height: 40px;
          border-radius: 20px;
          cursor: pointer;
          border-color: transparent;
          margin-top: 4px;
          padding: 5px;
        }
      }
    }
    h4 {
      display: flex;
      align-items: center;
      background: orange;
      border-radius: 50%;
      margin: 0;
      height: 100px;
      width: 100px;
      text-align: center;
    }
    .pictures {
      display: flex;
      flex: 1;
      width: 100%;
      height: 100%;
      flex-wrap: wrap;
      > div {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        min-height: 100px;
        min-width: 100px;
        .photo {
          width: 100px;
          height: 100px;
        }
        img {
          max-height: 100px;
          width: 100%;
          height: 100%;
          min-height: 50px;
          min-width: 50px;
          max-width: 100px;
        }
      }

      .photo2 {
        animation: slideshow 4s infinite;
        opacity: 0;
      }
      .phot01 {
        animation: slideshow 5s infinite;
        opacity: 0;
      }
      .photo3 {
        animation: slideshow 6s infinite;
        opacity: 0;
      }
      .photo4 {
        animation: slideshow 4s infinite;
        opacity: 0;
      }

      @keyframes slideshow {
        0%,
        100% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 999px) {
    .firstbox {
      flex-wrap: wrap;
      flex-direction: column;
    }

    .line {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: 20px 0;
    }

    .pictures {
      flex-wrap: wrap;
      width: 100%;
      min-width: 200px;
      height: 100%;
      min-height: 200px;
      /* display:none; */
      .photo.photo1,
      .photo1,
      .photo2,
      .photo3,
      .photo4 {
        min-width: 50px;
        /* width: 100%; */
        margin-bottom: 20px;
      }
    }
  }
`;
