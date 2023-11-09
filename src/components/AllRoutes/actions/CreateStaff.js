import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_ADMIN } from "../../URLS";
import cogoToast from "cogo-toast";
import { useNavigate } from "react-router-dom";

export default function CreateStaff() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    staff_name: "",
    password: "",
    staff_email: "",
    staff_phone_number: "",
    country_id: "",
  });
  const [countryy, setCountryy] = useState([]);

  const staffApi = async () => {
    const { confirm_password, ...data } = formData;
    try {
      const res = await axios.post(`${EXCHANGE_URLS_ADMIN}/addstaff/`,
      { ...data});
      console.log("res", res);
      cogoToast.success("Staff Register SuccessFully");
    //   setFormData({
    //     staff_name: "",
    //     password: "",
    //     staff_email: "",
    //     staff_phone_number: "",
    //     country_id:""
    //   });
       navigate("/applications");
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
  const handleRegisterClick = () => {
    if (formData?.password === formData?.confirm_password) {
        staffApi();
    } else {
      cogoToast.error("Password and Confirm Password Does Not Match");
    }
  };

  useEffect(() => {
    getCountry();
  }, []);
console.log("formData",formData)
  return (
    <Root>
      <div>
        <div className="name">
          Staff Name
          <input
            type="name"
            value={formData.staff_name}
            onChange={(e) => {
              setFormData({ ...formData, staff_name: e.target.value });
            }}
            placeholder="Staff Name"
          />
        </div>
        <div className="name">
          Staff Email
          <input
            type="email"
            value={formData.staff_email}
            onChange={(e) => {
              setFormData({ ...formData, staff_email: e.target.value });
            }}
            placeholder="Staff Name"
          />
        </div>
        <div className="name">
          Staff Phone Number
          <input
            type="number"
            value={formData.staff_phone_number}
            onChange={(e) => {
              setFormData({ ...formData, staff_phone_number: e.target.value });
            }}
            placeholder="Staff Name"
          />
        </div>
        <div className="name">
          {" "}
          Country Name
          <select
            onChange={(e) => {
              setFormData({ ...formData, country_id: e.target.value });
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
              Password*
              <input
                type="password"
                value={formData?.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
                placeholder="Enter Password"
              />
            </div>
            <div className="name">
              Confirm Password*
              <input
                value={formData?.confirm_password}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    confirm_password: e.target.value,
                  });
                }}
                placeholder="Confirm Password"
              />
            </div>
            <div className="regis">
          <button
            className="btnn"
            onClick={() => {
              handleRegisterClick();
            }}
          >
            Register
          </button>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`

.name {
    display: flex;
    flex-direction: column;
    font-size: larger;
    width: 100%;
    margin-right: 10px;
    padding: 20px;
    gap: 10px;
    color: black;

    select {
        background-color: white;
        color: black;
        text-decoration: none;
        border: 2px solid #a5d8fa;
        line-height: 1.5em;
        width:50%;
        padding: 8px;
    
      border-radius: 30px;
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
    .regis {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    .btnn {
      padding: 10px;
      border-radius: 50px;
      font-size: medium;
      border-color: transparent;
      width: 160px;
      font-size: medium;
      color: #ffffff;
      background: rgb(255 94 0);
      margin: 20px;
      background: linear-gradient(
        45deg,
        #ff6525 19%,
        #ffffffe6 51%,
        #ff6525 100%
      );
      border-radius: 50px;
      color: #fff;
      padding: 10px 5px;
      background-size: 300% 100%;
      transition: all 0.3s ease-in-out 0s;
      text-transform: uppercase;
      &:hover {
        background: linear-gradient(
          -25deg,
          #ff6525 49%,
          #ffffffe6 91%,
          #ff6525 100%
        );
      }
    }
   
  }
}
button {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 50px;
      padding: 10px;
      margin: 10px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-top: 20px ;
      border-radius: 30px;
      border: transparent;
      background: linear-gradient(
        45deg,
        #0146ff 19%,
        #0146ff96 48%,
        #0146ff 100%
      );
      &:hover {
        background: linear-gradient(
          -25deg,
          #0146ff 19%,
          #0146ff96 88%,
          transparent 100%
        );
        transition: all 0.3s ease-in-out 0s;
      }
      border-radius: 50px;
      color: #fff;
      padding: 20px 30px;
      background-size: 300% 100%;
      transition: all 0.3s ease-in-out 0s;
      text-transform: uppercase;
    }
    input {
        border-radius: 40px;
        padding: 10px;
        color: #202020;
        width: 50%;
        text-decoration: none;
        border: 2px solid #a5d8fa;
        @media (max-width: 600px) {
          min-width: 100px;
          width: 100%;
        }
      }`;
