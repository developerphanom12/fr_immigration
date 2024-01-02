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
    country_id: "",
    gender:"",
    staff_id:"",
  });
  const [activeNext, setActiveNext] = useState(true);
  const [applicationId, setApplicationId] = useState("");
  const [course, setCourse] = useState([]);
  const [university, setUniversity] = useState([]);
  const [countryy, setCountryy] = useState([]);
  const [getStaff,setGetstaff] = useState([]);

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
  const getstaff = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.get(
        `${EXCHANGE_URLS_UNIVERSITY}/allstaffget`,
        axiosConfig
      );
      if (res?.status === 200) {
        setGetstaff(res?.data?.data);
        console.log("staaaaffff",res?.data?.data)
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
    getstaff();
  }, []);

  console.log("dddddd=====", data);
  return (
    <Root>
      {activeNext ? (
        <div className="first_div">
          <div className="heading">
            <h2>Apply For New Courses</h2>
          </div>
          <div className="first_box1">
            <div className="textarea">
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
            <div className="textarea">
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
            <div className="textarea">
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
            <div className="textarea">
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
            <div className="textarea">
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
            <div className="textarea">
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
                University Name
                <select
                  onChange={(e) => {
                    setData({ ...data, university_id: e.target.value });
                  }}
                >
                  <option>University</option>
                  {university &&
                    university.map((i) => {
                      return (
                        <option value={i?.id}>
                          {i.university_name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="name">
                {" "}
                Staff Name
                <select
                  onChange={(e) => {
                    setData({ ...data, staff_id: e.target.value });
                  }}
                >
                  <option>Select staff</option>
                  {getStaff &&
                    getStaff.map((i) => {
                      return (
                        <option value={i?.id}>
                          {i.staff_name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="textarea">
              <div className="name">
                {" "}
                Country Name
                <select
                  onChange={(e) => {
                    setData({ ...data, country_id: e.target.value });
                  }}
                >
                  <option>Select Country</option>
                  {countryy &&
                    countryy.map((i) => {
                      return <option value={i?.id}>{i.country_name}</option>;
                    })}
                </select>
              </div>
              <div className="name">
                {" "}
                Course Name
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
            <div className="textbutton">
              <div className="name">
                {" "}
                Select Gender
                <select
                  onChange={(e) => {
                    setData({ ...data, gender: e.target.value });
                  }}
                >
                  <option>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button
                onClick={() => {
                  handleSubmit();
                }}
              >
                Next
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 80px;
  @media (max-width: 788px) {
    padding-left: 60px;
    flex-direction: column;
  }
  .first_div {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    .heading {
      h2 {
        font: 20px "Roboto", sans-serif;
        color: #202020;
        font-weight: 600;
        padding: 10px;
        display: flex;
        margin: 0;
      }
    }
    @media (max-width: 709px) {
      flex-direction: column;
    }

    .first_box1 {
      display: flex;
      flex-direction: column;
      margin: 0px 10px;
      padding: 10px;
      width: 100%;
      box-shadow: 1px 1px 4px 1px gray;

      @media (max-width: 850px) {
        padding: 0;
      }
      .textarea {
        display: flex;
        background-color: white;
        justify-content: space-between;
        @media (max-width: 700px) {
           
            flex-direction: column;
          }
        .name {
          display: flex;
          flex-direction: column;
          width: 50%;
          padding: 7px;
          font-size: 14px;
          justify-content: center;
          color: #202020;
          background-color: white;
          @media (max-width: 700px) {
            width: 80%;
            flex-direction: column;
          }
        }
      }
      .textbutton {
        display: flex;
        width: 100%;
        flex-direction: column;
        @media (max-width: 850px) {
          flex-direction: column;
        }
        .name {
          display: flex;
          flex-direction: column;
          width: 50%;
          padding: 7px;
          font-size: 14px;
          justify-content: center;
          color: #202020;
          background-color: white;
          @media (max-width: 700px) {
            width: 80%;
            flex-direction: column;
          }
        }
        button {
          display: flex;
          flex-direction: column;
          width: 28%;
          height: 45px;
          padding: 10px;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          margin-top: 20px;
          border-radius: 50px;
          border: transparent;
          background: #8656EC;
          color: #fff;
          background-size: 300% 100%;
          transition: all 0.3s ease-in-out 0s;
          text-transform: uppercase;
          &:hover {
            background: #8656EC;
            transition: all 0.1s ease-in-out 0s;
            box-shadow: 4px 5px 5px gray;
          }
        }
        select {
          background-color: white;
          color: black;
          text-decoration: none;
          border: 1px solid gray;
          padding: 10px;
          border-radius: 50px;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: linear-gradient(45deg, transparent 50%, black 50%),
            linear-gradient(135deg, black 50%, transparent 50%),
            linear-gradient(to right,#8656EC, #C6ABFF);
          &:hover {
            box-shadow: 4px 4px 5px darkgray;
            transition: all 0.1s ease-in-out 0s;
          }
          @media (max-width: 555px) {
            padding: 8px;
            background-size: 5px 5px, 5px 5px, 30px 45px;
            align-items: center;
          }
        }
      }
      input {
        border-radius: 50px;
        padding: 10px;
        color: #202020;
        text-decoration: none;
        border: 1px solid gray;
        &:hover {
          box-shadow: 4px 4px 5px darkgray;
          transition: all 0.1s ease-in-out 0s;
        }
        @media (max-width: 600px) {
          min-width: 100px;
          width: 100%;
        }
      }
      select {
        background-color: white;
        color: black;
        text-decoration: none;
        border: 1px solid gray;
        padding: 10px;
        border-radius: 50px;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, black 50%),
          linear-gradient(135deg, black 50%, transparent 50%),
          linear-gradient(to right, #8656EC, #C6ABFF);
        background-position: calc(100% - 20px) calc(1em + 2px),
          calc(100% - 15px) calc(1em + 2px), 100% 0;
        background-size: 5px 5px, 5px 5px, 40px 45px;
        background-repeat: no-repeat;
        &:hover {
          box-shadow: 4px 4px 5px darkgray;
          transition: all 0.1s ease-in-out 0s;
        }
        @media (max-width: 555px) {
          padding: 8px;
          /* width: 120px; */
          background-size: 5px 5px, 5px 5px, 30px 45px;
          align-items: center;
        }
      }
    }
  }
`;
