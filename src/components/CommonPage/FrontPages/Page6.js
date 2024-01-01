import React from "react";
import styled from "styled-components";
import backImg from "../../CommonPage/imageLogo/page6image.png";
import triarrow from "../../CommonPage/imageLogo/TRI ARROW.svg";
import rectangleimg from "../../CommonPage/imageLogo/Rectangle 5098.png";
import book from "../../CommonPage/imageLogo/library_books_black_24dp 3.svg";

export default function Page6() {
  return (
    <Root>
      <div className="side_image_div">
        <img src={backImg} alt="img" />
      </div>
      <div className="parent_div">
        <div className="nothing">
          <img src={rectangleimg} alt="img" />
        </div>
        <h2>What We Offers </h2>
        <h2>To </h2>
        <h2>Agents...</h2>
        <div className="main_text_div">
          <div className="text_div">
            <img className="img" src={book} alt="img" />
            <div>
              <h6>User-Friendly Portal</h6>
              <p>
                For reliable, convenient and centralised management of your
                applications
              </p>
            </div>
          </div>
          <div className="text_div">
            {" "}
            <img className="img" src={book} alt="img" />
            <div>
              <h6>Seamless Application Management</h6>
              <p>
                End-to-end verification, processing and management of student
                applications
              </p>
            </div>
          </div>
          <div className="text_div">
            {" "}
            <img className="img" src={book} alt="img" />
            <div>
              <h6>Powerful Search Tools</h6>
              <p>
                Hit your targets and quotas with our requirement specific search
                tools
              </p>
            </div>
          </div>
          <div className="text_div">
            {" "}
            <img className="img" src={book} alt="img" />
            <div>
              <h6>Complete VISA Assistance</h6>
              <p>
                Leverage our high success rates with end-to-end support with
                visa processing
              </p>
            </div>
          </div>
        </div>

        <div className="img_div">
          <img src={triarrow} alt="img" />
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background: #f6f5fb;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-between;
  @media (max-width: 999px) {
    flex-direction: column;
    align-items: center;
  }
  .side_image_div {
    width: 40%;
    padding-top: 20px;
    @media (max-width: 999px) {
      width: 100%;
    }
    img {
      width: 590px;
      @media (max-width: 999px) {
        width: 100%;
        min-width: 390px;
      }
    }
  }
  .parent_div {
    width: 40%;
    padding: 10px;
    @media (max-width: 999px) {
      width: 100%;
    }
    .nothing {
      text-align: right;
      color: #9389ff;
    }
    h2 {
      width: 227px;
      font-weight: 600;
      top: 10px;
      left: -77px;
      position: relative;
      @media (max-width: 999px) {
        top: 0px;
        left: 0px;
        position: relative;
      }
    }

    .main_text_div {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 75%;
      @media (max-width: 999px) {
        width: 100%;
      }
      .text_div {
        display: flex;
        gap: 10px;
        top: -4px;
        position: relative;
        left: 72px;
        @media (max-width: 999px) {
        top: 0px;
        left: 0px;
        position: relative;
      }
        img {
          background-color: #9389ff;
          padding: 10px;
          height: 43px;
          border-radius: 50px;
        }
        > div {
          display: flex;
          flex-direction: column;
          h6 {
            color: gray;
            font-size: 13px;
          }
          p {
            font-size: 11px;
            color: gray;
          }
        }
      }
    }
    .img_div {
      text-align: right;
      position: relative;
      top: -70px;
    }
  }
`;
