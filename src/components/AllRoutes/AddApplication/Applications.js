import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  EXCHANGE_URLS_ADMIN,
  EXCHANGE_URLS_APPLICATION,
  EXCHANGE_URLS_UNIVERSITY,
} from "../../URLS";
import Documents from "./Documents";

export default function Applications() {
  const [data, setData] = useState({
    course_id: 0,
    university_id: 0,
    student_firstname: "",
    student_lastname: "",
    student_email: "",
    student_whatsapp_number: "",
    student_passport_no: "",
    marital_status: "",
    previous_visa_refusals: "",
    ielts_reading: 0,
    ielts_listening: 0,
    ielts_writing: 0,
    ielts_speaking: 0,
    gender:"",
  });
  const [activeNext, setActiveNext] = useState(true);
  const [applicationId, setApplicationId] = useState("");
  const [course, setCourse] = useState([]);
  const [university, setUniversity] = useState([]);
  const [countryy, setCountryy] = useState([]);
  // const navigate = useNavigate();

  const appApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        `${EXCHANGE_URLS_APPLICATION}/addappplications`,
        data,
        axiosConfig
      );
      console.log("ressssss", res);
      if (res?.status === 200) {
        setApplicationId(res?.data?.data.id);
        setActiveNext(false);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const getCourse = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.get(
        `${EXCHANGE_URLS_UNIVERSITY}/all/courseonly`,
        axiosConfig
      );
      if (res?.status === 200) {
        setCourse(res?.data.data);
        setUniversity(res?.data?.data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  const getCountry = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.get(
        `${EXCHANGE_URLS_ADMIN}/getallcountry/`,
        axiosConfig
      );
      if (res?.status === 200) {
        setCountryy(res?.data.data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const getUniversity = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.get(
        `${EXCHANGE_URLS_UNIVERSITY}/getall/university`,
        axiosConfig
      );
      if (res?.status === 200) {
        setUniversity(res?.data?.data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleSubmit = () => {
    appApi();
  };

  useEffect(() => {
    getCourse();
    getUniversity();
    getCountry();
  }, []);

  console.log("dddddd=====", data);
  return (
    <Root>
      {activeNext ? (
        <div className="first_div">
          <div>
            <h1>Apply For New Courses</h1>
          </div>
          <div className="first_box1">
            <div>
              <div className="name">
                {" "}
                First Name
                <input
                  type="name"
                  value={data.student_firstname}
                  onChange={(e) => {
                    setData({ ...data, student_firstname: e.target.value });
                  }}
                  placeholder="First Name"
                />
              </div>
              <div className="name">
                Last Name 
                <input
                  type="name"
                  value={data.student_lastname}
                  onChange={(e) => {
                    setData({ ...data, student_lastname: e.target.value });
                  }}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div>
              <div className="name">
                E-Mail 
                <input
                  type="email"
                  value={data.student_email}
                  onChange={(e) => {
                    setData({ ...data, student_email: e.target.value });
                  }}
                  placeholder="Ex-Phanom@gmail.com"
                />
              </div>
              <div className="name">
                Passport no
                <input
                  type="email"
                  value={data.student_passport_no}
                  onChange={(e) => {
                    setData({ ...data, student_passport_no: e.target.value });
                  }}
                  placeholder="passport no"
                />
              </div>
            </div>
            <div>
              <div className="name">
                {" "}
                Whatsapp No 
                <input
                  type="number"
                  value={data.student_whatsapp_number}
                  onChange={(e) => {
                    setData({
                      ...data,
                      student_whatsapp_number: e.target.value,
                    });
                  }}
                  placeholder="Whatsapp No"
                />
              </div>

              <div className="name">
                {" "}
                Marital status 
                <select
                  value={data.marital_status}
                  onChange={(e) => {
                    setData({ ...data, marital_status: e.target.value });
                  }}
                >
                  <option>Marital Status</option>
                  <option value={data.marital_status.married}>married</option>
                  <option value={data.marital_status.unmarried}>
                    unmarried
                  </option>
                </select>
              </div>
            </div>
            <div>
              <div className="name">
                {" "}
                Visa Refusal 
                <select
                  value={data.previous_visa_refusals}
                  onChange={(e) => {
                    setData({
                      ...data,
                      previous_visa_refusals: e.target.value,
                    });
                  }}
                >
                  {" "}
                  <option>Visa</option>
                  <option value={data.previous_visa_refusals.yes}>yes</option>
                  <option value={data.previous_visa_refusals.no}>no</option>
                </select>
              </div>
              <div className="name">
                {" "}
                Ielts reading
                <input
                  type="name"
                  value={data.ielts_reading}
                  onChange={(e) => {
                    setData({ ...data, ielts_reading: e.target.value });
                  }}
                  placeholder="reading"
                />
              </div>
            </div>
            <div>
              <div className="name">
                {" "}
                Ielts listening 
                <input
                  type="name"
                  value={data.ielts_listening}
                  onChange={(e) => {
                    setData({ ...data, ielts_listening: e.target.value });
                  }}
                  placeholder="listening"
                />
              </div>
              <div className="name">
                {" "}
                Ielts writing 
                <input
                  type="name"
                  value={data.ielts_writing}
                  onChange={(e) => {
                    setData({ ...data, ielts_writing: e.target.value });
                  }}
                  placeholder="writing"
                />
              </div>
            </div>
            <div>
              <div className="name">
                {" "}
                Ielts speaking 
                <input
                  type="name"
                  value={data.ielts_speaking}
                  onChange={(e) => {
                    setData({ ...data, ielts_speaking: e.target.value });
                  }}
                  placeholder="speaking"
                />
              </div>
              <div className="name">
                {" "}
                University ID
                <select
                  onChange={(e) => {
                    setData({ ...data, university_id: e.target.value });
                  }}
                >
                  <option>University</option>
                  {university &&
                    university.map((i) => {
                      return (
                        <option value={i?.university_id}>
                          {i.university_name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div>
              <div className="name">
                {" "}
                Country Name 
                <select
                  onChange={(e) => {
                    setData({ ...data, id: e.target.value });
                  }}
                >
                  <option>Select Country</option>
                  {countryy &&
                    countryy.map((i) => {i.id
                      return <option value={i?.id}>{i.country_name}</option>;
                    })}
                </select>
              </div>
              <div className="name">
                {" "}
                Course ID
                <select
                  onChange={(e) => {
                    setData({ ...data, course_id: e.target.value });
                  }}
                >
                  {course &&
                    course.map((i) => {
                      return (
                        <option value={i?.course_id}>{i.course_name}</option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="name1">
              <div>     {" "}
                Select Gender<select
                onChange={(e) => {
                  setData({ ...data, gender: e.target.value });
                }}
                >
                <option>Gender</option>
                <option  value={data.gender.male}>Male</option>
                <option  value={data.gender.female}>Female</option>
                <option  value={data.gender.other}>Other</option>
                
                </select></div>
              <button
                className="btnn"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Documents appId={applicationId} />
      )}
    </Root>
  );
}
const Root = styled.section`
  color: black;
  background-color: #f8f8f8;
  > div {
    .name1 {
      display: flex;
      width: 100%;
      padding: 20px;
      gap: 10px;
      text-align: center;
      align-items: center;
      justify-content: center;
      color: rgb(249, 118, 17);
      background-color: #ffffff;
      .btnn {
        padding: 10px;
        border-radius: 30px;
        font-size: medium;
        border-color: transparent;
        color: #ffffff;
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        display: flex;
        background: blue;
        margin: 10px;
        @media (max-width: 700px) {
          min-width: 100px;
          width: 100%;
          flex-direction: column;
        }
      }
      .btnn:hover {
        color: #f0f8ff;
        background: #ff6525;
        cursor: pointer;
      }
    }
    .name {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 20px;
      justify-content: center;
      gap: 10px;
      color: #202020;
      background-color: white;
      @media (max-width: 700px) {
        min-width: 100px;
        width: 100%;
        flex-direction: column;
      }
    }
  }
  .first_div {
    flex-wrap: wrap;
    h1 {
      font: 32px "cairo", sans-serif;
      color: #202020;
      font-weight: 600;
      padding: 30px;
      display: flex;
      margin: 0;
    }
    @media (max-width: 709px) {
      flex-direction: column;
    }

    .first_box1 {
      display: flex;
      flex-direction: column;
      padding: 20px;
      margin: 0px 10px;

      @media (max-width: 850px) {
        padding: 0;
      }
      > div {
        display: flex;
        flex: 1;
        @media (max-width: 850px) {
          flex-direction: column;
        }
      }
      input {
        border-radius: 40px;
        padding: 10px;
        color: #202020;
        text-decoration: none;
        border: 2px solid #a5d8fa;
        @media (max-width: 600px) {
          min-width: 100px;
          width: 100%;
        }
      }
      select {
        background-color: white;
      color: black;
      text-decoration: none;
      border: 2px solid #a5d8fa;
      line-height: 1.5em;
      padding: 10px;
      border-radius: 20px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-image: linear-gradient(45deg, transparent 50%, blue 50%),
        linear-gradient(135deg, blue 50%, transparent 50%),
        linear-gradient(to right, skyblue, skyblue);
      background-position: calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px), 100% 0;
      background-size: 5px 5px, 5px 5px, 40px 45px;
      background-repeat: no-repeat;
      @media (max-width: 555px) {
        padding: 8px;
        /* width: 120px; */
        background-size: 5px 5px, 5px 5px, 30px 45px;
        align-items: center;
      }

      select:focus {
        background-image: linear-gradient(45deg, white 50%, transparent 50%),
          linear-gradient(135deg, transparent 50%, white 50%),
          linear-gradient(to right, gray, gray);
        background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
          100% 0;
        background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
        background-repeat: no-repeat;
        border-color: grey;
        outline: 0;
      }
      }
    }
  }
`;
