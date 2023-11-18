import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EXCHANGE_URLS_STUDENT } from "../URLS";
import axios from "axios";
import cogoToast from "cogo-toast";

export default function Register() {
  const [add, setAdd] = useState({
    street_address: "",
    city: "",
    state: "",
    postal_code: "",
  });
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    gender: "",
    dob: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const navigate = useNavigate();
  const registerApi = async () => {
    console.log("yyyyy", formData);
    const { confirm_password, ...data } = formData;

    try {
      const res = await axios.post(`${EXCHANGE_URLS_STUDENT}/studentregister`, {
        ...data,
        address: add,
      });
      console.log("resres", res);
      if (res?.status === 200) {
        cogoToast.success("Register SuccessFully");
        setFormData({
          username: "",
          firstname: "",
          lastname: "",
          email: "",
          phone_number: "",
          password: "",
        });
        setAdd({
          street_address: "",
          city: "",
          state: "",
          postal_code: "",
        });

        navigate("/studentlogin");
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  const handleRegisterClick = () => {
    if (formData?.password === formData?.confirm_password) {
      registerApi();
    } else {
      cogoToast.error("Password and Confirm Password Does Not Match");
    }
  };

  console.log("ttttt", { ...formData, address: add });

  return (
    <Root>
      <div className="first_div">
        <h2>Student Registration Portal</h2>

        <div className="first_box1">
          <div>
            <h4>Your Personal Details :-</h4>
          </div>

          <div>
            <div className="name">
              {" "}
              User Name*
              <input
                type="name"
                value={formData?.username}
                onChange={(e) => {
                  setFormData({ ...formData, username: e.target.value });
                }}
                placeholder="User Name"
              />
            </div>
            <div className="name">
              {" "}
              First Name*
              <input
                type="name"
                value={formData?.first_name}
                onChange={(e) => {
                  setFormData({ ...formData, first_name: e.target.value });
                }}
                placeholder="First Name"
              />
            </div>
            <div className="name">
              Last Name*
              <input
                type="name"
                value={formData?.last_name}
                onChange={(e) => {
                  setFormData({ ...formData, last_name: e.target.value });
                }}
                placeholder="Last Name"
              />
            </div>
          </div>

          <div>
            <div className="name">
              Date Of Birth*
              <input
                type="date"
                value={formData?.dob}
                onChange={(e) => {
                  setFormData({ ...formData, dob: e.target.value });
                }}
                placeholder="Last Name"
              />
            </div>
            <div className="name">
              E-Mail*
              <input
                type="email"
                value={formData?.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                placeholder="Ex-Phanom@gmail.com"
              />
            </div>
            <div className="name">
              Phone No.*
              <input
                type="number"
                value={formData?.phone_number}
                onChange={(e) => {
                  setFormData({ ...formData, phone_number: e.target.value });
                }}
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="nameee">
            {" "}
            Select Gender
            <select
              onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value });
              }}
            >
              <option>Gender</option>
              <option value={formData.gender.male}>Male</option>
              <option value={formData.gender.female}>Female</option>
              <option value={formData.gender.other}>Other</option>
            </select>
          </div>
        </div>
      </div>
      <div className="second_div">
        <div className="company">
          <div>
            {" "}
            <h4>Address :-</h4>
          </div>

          <div>
            {" "}
            <div className="name1">
              Street Address*
              <input
                value={add?.street_address}
                onChange={(e) => {
                  setAdd({ ...add, street_address: e.target.value });
                }}
                placeholder="Street Address"
              />
            </div>
            <div className="name1">
              City*
              <input
                value={add?.city}
                onChange={(e) => {
                  setAdd({ ...add, city: e.target.value });
                }}
                placeholder="City"
              />
            </div>
            <div className="name1">
              State*
              <input
                value={add?.state}
                onChange={(e) => {
                  setAdd({ ...add, state: e.target.value });
                }}
                placeholder="State"
              />
            </div>
            <div className="name2">
              Postal Code*
              <input
                value={add.postal_code}
                onChange={(e) => {
                  setAdd({ ...add, postal_code: e.target.value });
                }}
                placeholder="Postal Code"
              />
            </div>
          </div>
        </div>
        <div className="password">
          <h4>Your Password :-</h4>

          <div>
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
          </div>
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
        <div className="fifth_div">
          <div className="fifth_box">
            <div>
              <h2>Get in Touch</h2>
            </div>
            <p>
              If you have any questions, concerns or requests for further
              information, please send us a<br /> message and a member of our
              team will get in touch with you
            </p>
          </div>
          <div className="fifth_box">
            <button className="btnn">Contact Us</button>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  font-family: 20px "Roboto", sans-serif;
  margin: 80px 0px 0px 0px;
  max-width: 100vw;
  width: 100%;

  input {
    border-radius: 10px;
    padding: 5px;
    color: #202020;
    width: 90%;
    text-decoration: none;
    border: 2px solid #a5d8fa;
    @media (max-width: 600px) {
      min-width: 100px;
      width: 100%;
    }
  }

  input:focus,
  input:active {
    border-color: #ff6525;
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }

  h4 {
    color: #0e4d92;
    margin: 0;
  }

  .name {
    display: flex;
    flex-direction: column;
    font-size: small;
    width: 90%;
    margin-right: 10px;
    color: black;
  }

  .nameee {
    display: flex;
    flex-direction: column;
    font-size: small;
    width: 100%;
    justify-content: space-around;
    color: black;
    select {
      background-color: white;
      color: black;
      text-decoration: none;
      border: 2px solid #a5d8fa;
      line-height: 1.5em;
      width: 29%;
      padding: 8px;
      border-radius: 10px;
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

  .first_div {
    h2 {
      color: #0e4d92;
      display: flex;
      justify-content: center;
      margin: 0;
    }

    .first_box1 {
      display: flex;
      flex-direction: column;
      margin: 0px 10px;
      > div {
        display: flex;
        flex: 1;
        padding: 10px;
        gap: 5px;
      }
    }
  }

  .second_div {
    display: flex;
    flex-direction: column;
    font-family: Roboto, sans-serif;
    flex-wrap: wrap;
    width: 100%;

    .company {
      display: flex;
      flex-direction: column;
      margin: 0px 10px;
      width: 100%;

      > div {
        display: flex;
        padding: 10px;
        width: 100%;

        .name1 {
          display: flex;
          flex-direction: column;
          font-size: small;
          width: 100%;
          margin-right: 10px;
          color: black;
        }
        .name2 {
          display: flex;
          flex-direction: column;
          font-size: small;
          width: 100%;
          margin-right: 10px;
          /* padding: 20px; */
          /* gap: 10px; */
          color: black;
        }
      }
    }

    .password {
      display: flex;
      flex-direction: column;
      padding: 20px;
      width: 50%;
      > div {
        display: flex;
      padding: 10px;

      }
    }
  }

  .fifth_div {
    background: #0e4d92;
    color: white;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;

    .fifth_box {
      margin: 40px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      /* width:50%; */
      justify-content: center;
      .btnn {
        padding: 10px;
        border-radius: 10px;
        font-size: small;
        border-color: transparent;
        width: 80%;
        font-size: medium;
        color: #ffffff;
        background: rgb(255 94 0);
        margin: 20px;
        background:#000080;
        border-radius: 10px;
        color: #fff;
        padding: 10px 5px;
        background-size: 300% 100%;
        transition: all 0.3s ease-in-out 0s;
        text-transform: uppercase;
        &:hover {
          box-shadow: 10px 5px 5px gray;
          transition: all 0.2s ease-in-out 0s;
          background: linear-gradient(
            -25deg,
            #000080 49%,
            #000080 100%
          );
        }
      }
    }
  }
  .regis {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    .btnn {
      padding: 10px;
      border-radius: 10px;
      font-size: small;
      border-color: transparent;
      width: 20%;
      font-size: medium;
      color: #ffffff;
      margin-right: 108px;
      background:#000080;
      color: #fff;
      background-size: 300% 100%;
      transition: all 0.3s ease-in-out 0s;
      text-transform: uppercase;
      &:hover {
        box-shadow: 10px 5px 5px gray;
          transition: all 0.2s ease-in-out 0s;
        background: linear-gradient(
          -25deg,
          #000080 49%,
          #000080 100%
        );
      }
    }
    /* .btnn:hover {
    color: #f0f8ff;
    background: blue;
    cursor: pointer;
  } */
  }
  @media (max-width: 768px) {
    .first_box1 > div,
    .company > div,
    .password {
      flex-direction: column;
    }

    .name,
    .name1,
    .name2 {
      width: 100%;
      margin-right: 0;
    }

    .name input,
    .name1 input,
    .name2 input {
      width: calc(100% - 28px);
    }

    .fifth_box {
      margin: 20px;
    }
  }
`;
