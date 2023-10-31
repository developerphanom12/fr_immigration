import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EXCHANGE_URLS } from "../URLS";
import axios from "axios";
import cogoToast from "cogo-toast";

export default function Partner() {
  const [add, setAdd] = useState({
    street_address: "",
    city: "",
    state: "",
    postal_code: "",
  });
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const navigate = useNavigate();
  const partnerApi = async () => {
    console.log("yyyyy", formData);
    const { confirm_password, ...data } = formData;
    try {
      const res = await axios.post(`${EXCHANGE_URLS}/registerss`, {
        ...data,
        address: add,
      });
      console.log("resres", res);
      if (res?.status === 201) {
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

        navigate("/login");
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  const handleRegisterClick = () => {
    if (formData?.password === formData?.confirm_password) {
      partnerApi();
    } else {
      cogoToast.error("Password and Confirm Password Does Not Match");
    }
  };

  console.log("ttttt", { ...formData, address: add });

  return (
    <Root>
      <div className="first_div">
        <h1>Sign-Up to access our online portal and join our network</h1>

        <div className="first_box1">
          <div>
            <h3>Your personal Details :-</h3>
          </div>

          <div>
            <div className="name">
              {" "}
              User Name* :-
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
              First Name* :-
              <input
                type="name"
                value={formData?.firstname}
                onChange={(e) => {
                  setFormData({ ...formData, firstname: e.target.value });
                }}
                placeholder="First Name"
              />
            </div>
            <div className="name">
              Last Name* :-
              <input
                type="name"
                value={formData?.lastname}
                onChange={(e) => {
                  setFormData({ ...formData, lastname: e.target.value });
                }}
                placeholder="Last Name"
              />
            </div>
          </div>

          <div>
            <div className="name">
              E-Mail* :-
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
              Phone No.* :-
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
        </div>
      </div>
      <div className="second_div">
        <div className="company">
          <div>
            {" "}
            <h3>Address :-</h3>
          </div>

          <div>
            {" "}
            <div className="name1">
              Street Address* :-
              <input
                value={add?.street_address}
                onChange={(e) => {
                  setAdd({ ...add, street_address: e.target.value });
                }}
                placeholder="Street Address"
              />
            </div>
            <div className="name1">
              City :-
              <input
                value={add?.city}
                onChange={(e) => {
                  setAdd({ ...add, city: e.target.value });
                }}
                placeholder="City"
              />
            </div>
            <div className="name1">
              State* :-
              <input
                value={add?.state}
                onChange={(e) => {
                  setAdd({ ...add, state: e.target.value });
                }}
                placeholder="State"
              />
            </div>
            <div className="name2">
              Postal Code* :-
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
          <h3>Your Password :-</h3>

          <div>
            <div className="name">
              Password* :-
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
              Confirm Password* :-
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
  font-family: 22px "Mulish", sans-serif;
  margin-top: 80px;
  input {
    /* width: 85%; */
    height: 45px;
    border-radius: 50px;
    padding: 14px;
    border-color: #dcdcdc;
    background-color: rgb(244, 252, 253);
    font-size: large;
  }
  input:focus,
  input:active {
    border-color: #ff6525;
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }

  h3 {
    color: #0e4d92;
    margin: 0;
  }

  .name {
    display: flex;
    flex-direction: column;
    font-size: larger;
    width: 100%;
    margin-right: 10px;
    padding: 20px;
    gap: 10px;
    color:black;
  }

  .first_div {
    h1 {
      color: #0e4d92;
      padding: 10px;
      display: flex;
      justify-content: center;
      margin: 0;
    }

    .first_box1 {
      display: flex;
      flex-direction: column;
      padding: 20px;
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
    font-family: Georgia, serif;
    flex-wrap: wrap;

    .company {
      display: flex;
      flex-direction: column;
      padding: 20px;
      margin: 0px 10px;

      > div {
        display: flex;
        flex: 1;
        padding: 10px;

        .name1{
          display: flex;
          flex-direction: column;
          font-size: larger;
          /* width: 100%; */
          margin-right: 10px;
          padding: 20px;
          gap: 10px;
          color:black;
        }
        .name2 {
          display: flex;
          flex-direction: column;
          font-size: larger;
          /* width: 100%; */
          margin-right: 10px;
          padding: 20px;
          gap: 10px;
          color:black;
          
        }
      }
    }

    .password {
      display: flex;
      flex-direction: column;
      margin: 0px 10px;
      padding: 20px;
      width: 50%;
      > div {
        display: flex;
      }
    }
  }

  .fifth_div {
    background: #0e4d92;
    color: white;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

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
    border-radius: 50px;
    font-size: medium;
    border-color: transparent;
    width: 160px;
    font-size: medium;
    color: #ffffff;
    background: rgb(255 94 0);
    margin: 20px;
    background: linear-gradient( 45deg, #ff6525 19%, #ffffffe6 51%, #ff6525 100%);
    border-radius: 50px;
    color: #FFF;
    padding: 10px 5px;
    background-size: 300% 100%;
    transition: all 0.3s ease-in-out 0s;
    text-transform: uppercase;
    &:hover{
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
 .regis{
  display: flex;
  justify-content: flex-end;
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
    background: linear-gradient( 45deg, #ff6525 19%, #ffffffe6 51%, #ff6525 100%);
    border-radius: 50px;
    color: #FFF;
    padding: 10px 5px;
    background-size: 300% 100%;
    transition: all 0.3s ease-in-out 0s;
    text-transform: uppercase;
    &:hover{
          background: linear-gradient(
          -25deg,
          #ff6525 49%,
          #ffffffe6 91%,
          #ff6525 100%
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
