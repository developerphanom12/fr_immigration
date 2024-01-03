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
      const res = await axios.post(`${EXCHANGE_URLS_ADMIN}/addstaff/`, {
        ...data,
      });
      console.log("res", res);
      cogoToast.success("Staff Register SuccessFully");
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
  console.log("formData", formData);
  return (
    <Root>
      <div className="main">
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
  padding-left: 90px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  .main {
    display: flex;
    margin: 20px;
    box-shadow: 1px 1px 5px 1px gray;
    border-radius: 10px;
    flex-wrap: wrap;
    width: 80%;
    .name {
      display: flex;
      flex-direction: column;
      font-size: small;
      width: 47%;
      padding: 10px;
      gap: 10px;
      color: black;

      select {
        background-color: white;
        color: black;
        text-decoration: none;
        border: 1px solid gray;
        padding: 10px;
        border-radius: 50px;
        font-size: 12px;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, black 50%),
          linear-gradient(135deg, black 50%, transparent 50%),
          linear-gradient(to right, #8656ec, #c6abff);
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
          font-size: 14px;
          background-size: 5px 5px, 5px 5px, 30px 45px;
        }
      }
      input {
        border-radius: 50px;
        padding: 10px;
        color: #202020;
        text-decoration: none;
        border: 1px solid gray;
        @media (max-width: 600px) {
          min-width: 100px;
          width: 100%;
        }
      }
    }

    .regis {
      display: flex;
      button {
        display: flex;
        flex-direction: column;
        padding:5px 10px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 10px;
        font-size: 12px;
        border-radius: 50px;
        border: transparent;
        background:#8656ec;
        color: #fff;
        background-size: 300% 100%;
        transition: all 0.3s ease-in-out 0s;
        text-transform: uppercase;
        &:hover {
          background: #8656ec;
          transition: all 0.1s ease-in-out 0s;
          box-shadow: 4px 5px 5px gray;
        }
         
      }
    }
  }
`;
