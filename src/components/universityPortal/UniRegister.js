import axios from "axios";
import cogoToast from "cogo-toast";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EXCHANGE_URLS_UNIVERSITY } from "../URLS";

export default function UniRegister() {
  const [universityImagePreview, setUniversityImagePreview] = useState("");
  const [certificatePreview, setCertificatePreview] = useState("");

  const [formData, setFormData] = useState({
    university_name: "",
    ambassador_name: "",
    phone_number: "",
    email: "",
    username: "",
    password: "",
    university_image: "",
    registration_certificate: "",
  });

  const [add, setAdd] = useState({
    street_address: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
  });

  const navigate = useNavigate();

  const handleUniversityImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, university_image: file });
      setUniversityImagePreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, university_image: "" });
      setUniversityImagePreview("");
    }
  };

  const handleCertificatePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, registration_certificate: file });
      setCertificatePreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, registration_certificate: "" });
      setCertificatePreview("");
    }
  };

  const registerApi = async () => {
    const data = new FormData();
    data.append("university_name", formData.university_name);
    data.append("ambassador_name", formData.ambassador_name);
    data.append("phone_number", formData.phone_number);
    data.append("email", formData.email);
    data.append("username", formData.username);
    data.append("password", formData.password);
    data.append("university_image", formData.university_image);
    data.append("registration_certificate", formData.registration_certificate);

    // Append address fields
    Object.keys(add).forEach((key) => {
      data.append(`address[${key}]`, add[key]);
    });

    try {
      const res = await axios.post(
        `${EXCHANGE_URLS_UNIVERSITY}/register`,
        data
      );

      if (res?.status === 200) {
        cogoToast.success("Registered Successfully");
        // Reset form data and navigate to login page
        setFormData({
          university_name: "",
          ambassador_name: "",
          phone_number: "",
          email: "",
          username: "",
          password: "",
          university_image: "",
          registration_certificate: "",
        });
        setAdd({
          street_address: "",
          city: "",
          state: "",
          country: "",
          postal_code: "",
        });
        setUniversityImagePreview("");
        setCertificatePreview("");
        navigate("/unilogin");
      }
    } catch (err) {
      console.error("Error:", err);
      cogoToast.error("Registration Failed");
    }
  };
  const selectContainerStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
    padding: "10px",
    borderRadius: "10px",
    margin: "10px",
    border: "2px dashed #555",
    color: "#444",
    cursor: "pointer",
    transition: "background .2s ease-in-out, border .2s ease-in-out",
  };

  const handleRegisterClick = () => {
    // Perform password matching validation here
    registerApi();
  };
  return (
    <Root>
      <div className="first_div">
        <h2>University Registration Portal</h2>

        <div className="first_box1">
          <div>
            <h4>Your University Details :-</h4>
          </div>

          <div>
            <div className="name">
              {" "}
              University Name
              <input
                type="name"
                value={formData?.university_name}
                onChange={(e) => {
                  setFormData({ ...formData, university_name: e.target.value });
                }}
                placeholder="University Name"
              />
            </div>
            <div className="name">
              {" "}
              Ambassador Name
              <input
                type="name"
                value={formData?.ambassador_name}
                onChange={(e) => {
                  setFormData({ ...formData, ambassador_name: e.target.value });
                }}
                placeholder="Ambassador Name"
              />
            </div>
            <div className="name">
              Phone Number
              <input
                type="name"
                value={formData?.phone_number}
                onChange={(e) => {
                  setFormData({ ...formData, phone_number: e.target.value });
                }}
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div>
            <div className="nameyy">
              Email
              <input
                type="email"
                value={formData?.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                placeholder="ex-phanom@gmail.com"
              />
            </div>
            <div className="nameyy">
              User Name
              <input
                type="name"
                value={formData?.username}
                onChange={(e) => {
                  setFormData({ ...formData, username: e.target.value });
                }}
                placeholder="User Name"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="second_div">
        <div className="company">
          <div>
            {" "}
            <h4> Your Address :-</h4>
          </div>

          <div>
            {" "}
            <div className="name">
              Street Address
              <input
                value={add?.street_address}
                onChange={(e) => {
                  setAdd({ ...add, street_address: e.target.value });
                }}
                placeholder="Street Address"
              />
            </div>
            <div className="name">
              City
              <input
                value={add?.city}
                onChange={(e) => {
                  setAdd({ ...add, city: e.target.value });
                }}
                placeholder="City"
              />
            </div>
            <div className="name">
              State
              <input
                value={add?.state}
                onChange={(e) => {
                  setAdd({ ...add, state: e.target.value });
                }}
                placeholder="State"
              />
            </div>
          </div>
          <div>
            <div className="nameyy">
              Country
              <input
                value={add?.country}
                onChange={(e) => {
                  setAdd({ ...add, country: e.target.value });
                }}
                placeholder="Country"
              />
            </div>
            <div className="nameyy">
              Postal Code
              <input
                value={add.postal_code}
                onChange={(e) => {
                  setAdd({ ...add, postal_code: e.target.value });
                }}
                placeholder="Postal Code"
              />
            </div>
          </div>
          <div>
            <div className="nameyyy">
              Upload University Image
              <div className="imgg" style={selectContainerStyle}>
                Click Here
                <img
                  src={
                    universityImagePreview ||
                    "https://www.crizac.co.uk/catalog/assets/images/upload_icon.svg"
                  }
                  alt="Upload"
                  className="inside_img"
                />
                <input type="file" onChange={handleUniversityImagePreview} />
              </div>
            </div>
            <div className="nameyyy">
              Registration Certificate
              <div className="imgg" style={selectContainerStyle}>
                Click Here
                <img
                  src={
                    certificatePreview ||
                    "https://www.crizac.co.uk/catalog/assets/images/upload_icon.svg"
                  }
                  alt="Upload"
                  className="inside_img"
                />
                <input type="file" onChange={handleCertificatePreview} />
              </div>
            </div>
          </div>
        </div>
        <div className="password">
          <h4>Your Password :-</h4>

          <div>
            <div className="name">
              Password
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
              Confirm Password
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

  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }

  h4 {
    color: #0e4d92;
    margin: 0;
  }
  .nameyy {
    display: flex;
    flex-direction: column;
    font-size: small;
    width: 32.5%;
    margin-right: 10px;
    color: black;
    input {
      border-radius: 10px;
      padding: 5px;
      color: #202020;
      width: 90%;
      text-decoration: none;
      border: 2px solid #a5d8fa;
      @media (max-width: 600px) {
        width: 100%;
      }
    }
    @media (max-width: 900px) {
      width: 90%;
    }

    input:focus,
    input:active {
      border-color: #ff6525;
    }
  }

  .name {
    display: flex;
    flex-direction: column;
    font-size: small;
    width: 90%;
    margin-right: 10px;
    color: black;
    input {
      border-radius: 10px;
      padding: 5px;
      color: #202020;
      width: 90%;
      text-decoration: none;
      border: 2px solid #a5d8fa;
      @media (max-width: 900px) {
        width: 100%;
      }
    }

    input:focus,
    input:active {
      border-color: #ff6525;
    }

    .imgg {
      text-align: center;
      position: relative;
      cursor: pointer;
      width: 40%;
      height: 40%;
      &:hover {
        opacity: 0.5;
      }
      .inside_img {
        width: 25%;
        object-fit: contain;
      }
      input {
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0;
      }
    }
    @media (max-width: 900px) {
      width: 90%;
    }
  }
  .nameyyy {
    display: flex;
    flex-direction: column;
    font-size: small;
    width: 33%;
    margin-right: 10px;
    color: black;
    input {
      border-radius: 10px;
      padding: 5px;
      color: #202020;
      width: 90%;
      text-decoration: none;
      border: 2px solid #a5d8fa;
      @media (max-width: 900px) {
        width: 100%;
      }
    }

    input:focus,
    input:active {
      border-color: #ff6525;
    }

    .imgg {
      text-align: center;
      position: relative;
      cursor: pointer;
      width: 70%;
      height: 40%;
      &:hover {
        opacity: 0.5;
      }
      .inside_img {
        width: 25%;
        object-fit: contain;
      }
      input {
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0;
      }
    }
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
      padding: 10px;
      width: 70%;
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
        background: #000080;
        border-radius: 10px;
        color: #fff;
        padding: 10px 5px;
        background-size: 300% 100%;
        transition: all 0.3s ease-in-out 0s;
        text-transform: uppercase;
        &:hover {
          box-shadow: 10px 5px 5px gray;
          transition: all 0.2s ease-in-out 0s;
          background: linear-gradient(-25deg, #000080 49%, #000080 100%);
        }
      }
    }
  }
  .regis {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    .btnn {
      padding: 10px;
      border-radius: 10px;
      font-size: small;
      border-color: transparent;
      width: 15%;
      font-size: medium;
      color: #ffffff;
      margin-right: 108px;
      background: #000080;
      color: #fff;
      background-size: 300% 100%;
      transition: all 0.3s ease-in-out 0s;
      text-transform: uppercase;
      &:hover {
        box-shadow: 10px 5px 5px gray;
        transition: all 0.2s ease-in-out 0s;
        background: linear-gradient(-25deg, #000080 49%, #000080 100%);
      }
    }
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
