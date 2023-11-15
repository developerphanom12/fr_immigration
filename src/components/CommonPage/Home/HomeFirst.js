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
      <div className="firstbox">
        <div className="line">
          <h2 className="line1">Your Gateway to Global Connection</h2>
          <h1 className="line2">
            The Ultimate Destination for Universities and Strategic Recruitment
            Partnerships
          </h1>
          <h6>
            Through our network, industry knowledge, and personalized business
            solutions, we enable Universities and Recruitment Partners to
            effortlessly navigate the recruitment process while achieving their
            targets.
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
        <div className="toggle_pictures">
          <div className="photo2">
            <img src={photo1} alt="img" />
          </div>
          <div className="photo"></div>
          <div className="photo3">
            <img src={photo2} alt="img" />
          </div>
          <div className="photo"></div>
          <div className="photo"></div>
          <div className="photo1">
            <img src={photo8} alt="img" />
          </div>
          <div className="photo">
            <h4 className="h4">80,000+ courses</h4>
          </div>
          <div className="photo3">
            <img src={photo5} alt="img" />
          </div>
          <div className="photo3">
            <img src={photo3} alt="img" />
          </div>
          <div className="photo"></div>
          <div className="photo1">
            <img src={photo4} alt="img" />
          </div>
          <div className="photo"></div>
          <div className="photo"></div>
          <div className="photo4">
            <img src={photo6} alt="img" />
          </div>
          <div className="photo">
            <h4 className="h4">500,000+ Students</h4>
          </div>
          <div className="photo4">
            <img src={photo7} alt="img" />
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
  font-family: "Mulish", "sans-serif";

  .firstbox {
    background: #fff3ee;
    padding: 25px;
    font-size: larger;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    font: "Mulish", "sans-serif";

    .line {
      flex: 1;
      display: flex;
      padding: 15px;
      flex-direction: column;
      justify-content: space-evenly;
      .line1 {
        color: #ff6525;
        font-weight: 700;
      }
      .line2 {
        color: #005082;
        padding: 10px;
        font-weight: 800;
        font-family: "Mulish", "sans-serif";
      }
      .search {
        height: 48px;
        width: 580px;
        border-radius: 20px;
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        justify-content: space-between;
        background: #ffffff;
        margin: 20px;
        align-items: baseline;
        .searchbar {
          height: 40px;
          border-radius: 20px;
          border-color: transparent;
        }
        @media (max-width:780px){
          display: flex;
          flex-direction: row;
          width: 100%;
          margin: 5px;
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
    .toggle_pictures {
      display: flex;
      flex: 1;
      width: 100%;
      height: 100%;
      flex-wrap: wrap;
      @media(max-width: 1115px){
        display: none;
      }
      > div {
        display: flex;
        /* flex: 1; */
        flex-wrap: wrap;
        max-height: 120px;
        max-width: 120px;
        width: 100%;
         height: 100%;
        .photo {
          max-width: 120px;
          max-height: 120px;
          width: 100%;
         height: 100%;
          object-fit: cover;
        }
        img {
          max-height: 120px;
          width: 100%;
          height: 100%;
          max-width: 120px;
          object-fit: cover;

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
      padding: 10px;
    }
    
    .line {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      margin: 20px 0;
    }
    .toggle_pictures{
      background-color: red;
      display: none;
      /* flex-wrap: wrap;
      width: 100%;
      flex-direction: column;
      max-width: 200px;
      height: 100%;
      max-height: 200px; */
      /* .photo{
        min-width: 50px;
        min-height: 50px;
        height:100%;
        width: 100%;
      }
      .photo1 {
        min-width: 50px;
        min-height: 50px;
        height:100%;
        width: 100%;
        margin-bottom: 20px;
      }
      img{
        min-width: 50px;
        width: 100%;
        height: 100%;
        min-height: 50px;
      }
      .photo2 {
        min-width: 50px;
        min-height: 50px;
        height:100%;
        width: 100%;
        margin-bottom: 20px;
      }
      img{
        min-width: 50px;
        width: 100%;
        height: 100%;
        min-height: 50px;
      }
      .photo3 {
        min-width: 50px;
        min-height: 50px;
        height:100%;
        width: 100%;
        margin-bottom: 20px;
      }
      img{
        min-width: 50px;
        width: 100%;
        height: 100%;
        min-height: 50px;
      }
      .photo4 {
        min-width: 50px;
        min-height: 50px;
        height:100%;
        width: 100%;
        margin-bottom: 20px;
      }
      img{
        min-width: 50px;
        width: 100%;
        height: 100%;
        min-height: 50px;
      } */
    }
  }
 
  


`;
