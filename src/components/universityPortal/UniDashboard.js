import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PiArrowFatLinesDownLight } from "react-icons/pi";
import { EXCHANGE_URLS_UNIVERSITY } from "../URLS";
import axios from "axios";
import { useParams } from "react-router-dom";
 

export default function UniDashboard() {
  const [showArrow, setShowArrow] = useState(true);
  const [showDescriptionBox, setShowDescriptionBox] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [latest, setLatest] = useState({
    heading: "",
    descpription: "",
  });
  const [getFaq,setGetFaq] = useState();
  const [faq, setFaq] = useState({
    question: "",
    answer: "",
  });

  let {id} = useParams();
  console.log("idd",id)

  const latestUpdateApi = async () => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.post(
        `${EXCHANGE_URLS_UNIVERSITY}/latestupdate`,
        latest,
        axiosConfig
      );
      if(res?.status === 201){
        setLatest({
          heading: "",
          descpription: "",
        })
      }
      console.log("resres123", res?.data?.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  const latestFaqApi = async () => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.post(
        `${EXCHANGE_URLS_UNIVERSITY}/universityFaq`,
        faq,
        axiosConfig
      );
      if(res?.status === 201){
        setFaq({
          question: "",
          answer: "",
        })
      }
      console.log("resres123", res?.data?.data);
    } catch (err) {
      console.log("err", err);
    }
  };


  const getFaqApi = async () =>{
    const axiosConfig ={
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    }
    try{
      const res = await axios.get(  `${EXCHANGE_URLS_UNIVERSITY}/getbyUniversity/${id}`,
      axiosConfig
      )
      setGetFaq(res?.data?.data);
      console.log("ressss",res?.data?.data)
    }
    catch(err){
      console.log("errr",err);
    }
  }

  useEffect(() => {
    getFaqApi()
    const intervalId = setInterval(() => {
      setShowArrow((prev) => !prev);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    setShowDescriptionBox(true);
  };
  const handleEnter = () => {
    setShowFaq(true);
  };

  const handleSubmit = () => {
    latestUpdateApi();
  };
  const handleDone = () => {
    latestFaqApi();
  };
  return (
    <Root>
      <div className="main_dash">
        <h3>WELCOME TO DASHBOARD</h3>
        <div className="get_updates">
          Whats New Update...
          <div className="deatil_update">description</div>
        </div>
        <div className="faq">
          <h4>FAQ</h4>
          {/* <h6>Questions{getFaq.question}</h6> */}
          {/* <p>Answers{getFaq.answer}</p> */}
        </div>
      </div>
      <div className="new_updates">
        <button onClick={handleClick}>
          {showArrow && <PiArrowFatLinesDownLight />}
          New Updates
        </button>
        {showDescriptionBox && (
          <div className="description-box">
            <div className="head">
              Heading
              <input
                value={latest.heading}
                onChange={(e) => {
                  setLatest({ ...latest, heading: e.target.value });
                }}
              />
            </div>
            <div className="head">
              Description
              <input
                value={latest.descpription}
                onChange={(e) => {
                  setLatest({ ...latest, descpription: e.target.value });
                }}
              />
            </div>
            {latest.heading.length && latest.descpription.length > 0 ? (
              <div>
                <button onClick={handleSubmit}>Submit</button>
              </div>
            ) : (
              ""
            )}
          </div>
        )}

        <button onClick={handleEnter}>
          {showArrow && <PiArrowFatLinesDownLight />}
          Add FAQ Here..
        </button>
        {showFaq && (
          <div className="description-box">
            <div className="head">
              Question ?
              <input
                value={faq.question}
                onChange={(e) => {
                  setFaq({ ...faq, question: e.target.value });
                }}
              />
            </div>
            <div className="head">
              Answers.
              <input
                value={faq.answer}
                onChange={(e) => {
                  setFaq({ ...faq, answer: e.target.value });
                }}
              />
            </div>
            {faq.question.length && faq.answer.length > 0 ? (
              <div>
                <button onClick={handleDone}>Done</button>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding-left: 80px;
  margin: 10px;
  display: flex;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  .main_dash {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 20px;
    .get_updates {
      border-radius: 4px;
      padding: 10px;
      border: 1px solid gray;
      .deatil_update {
        border-top: 1px solid gray;
      }
    }
    .faq {
      border-radius: 4px;
      padding: 10px;
      border: 1px solid gray;
    }
  }
  .new_updates {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px;
    width: 50%;
    gap: 10px;
    button {
      border: none;
      width: 200px;
      border-radius: 4px;
      background-color: #000080;
      color: #ffffff;
      padding: 5px 25px 5px 5px;
      position: relative;
      svg {
        position: absolute;
        top: 50%;
        left: 89%;
        transform: translate(-50%, -50%);
        animation: blink 1s infinite;
        width: 20px;
        height: 20px;

        @keyframes blink {
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
    .description-box {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      align-items: flex-end;

      .head {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        input {
          padding: 10px;
        }
      }
      > div {
        display: flex;
        margin-top: 10px;
        justify-content: flex-end;
        button {
        }
      }
    }
  }
`;
