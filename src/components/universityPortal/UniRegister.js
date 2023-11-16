import axios from "axios";
import cogoToast from "cogo-toast";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EXCHANGE_URLS_UNIVERSITY } from "../URLS";

export default function UniRegister() {
  const [preImgUniversity, setPreImgUniversity] = useState("");
  const [preImgCertificate, setPreImgCertificate] = useState(""); 

  const [add, setAdd] = useState({
    street_address: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
  });
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

  // const handleUniversityImageUpload = (e) => {
  //   if (e) {
  //     setPreImgUniversity(URL.createObjectURL(e));
  //   }
  // };

  // const handleCertificateUpload = (e) => {
  //   if (e) {
  //     setPreImgCertificate(URL.createObjectURL(e));
  //   }
  // };
  const navigate = useNavigate();

  const registerApi = async () => {
    const { confirm_password, ...fdata } = formData;
    if (!preImgUniversity) {
      cogoToast.error("Please select a document type");
      return;
    }

    if (!preImgCertificate) {
      cogoToast.error("Please select a file to upload");
      return;
    }
    const data = new FormData();
    data.append('additional_field', preImgUniversity)
    data.append("certificate", preImgCertificate);
    
    try {
      const res = await axios.post(`${EXCHANGE_URLS_UNIVERSITY}/register`, {
        ...data,
        ...fdata,
        address: add,
      });

      console.log("resres", res);
      if (res?.status === 200) {
        cogoToast.success("Register SuccessFully");
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

        navigate("/unilogin");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const selectContainerStyle = {
    position: "relative",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
    width: "40%",
    padding: "20px",
    borderRadius: "10px",
    border: "2px dashed #555",
    color: "#444",
    cursor: "pointer",
    transition: "background .2s ease-in-out, border .2s ease-in-out",
  };

  const handleRegisterClick = () => {
    if (formData?.password === formData?.confirm_password) {
      registerApi();
    } else {
      cogoToast.error("Password and Confirm Password Does Not Match");
    }
  };
  const handleUniversityImagePreview = (e) => {
    if (e) {
      setPreImgUniversity(URL.createObjectURL(e));
    } else {
      setPreImgUniversity("");
    }
  };
  
  const handleCertificatePreview = (e) => {
    if (e) {
      setPreImgCertificate(URL.createObjectURL(e));
    } else {
      setPreImgCertificate("");
    }
  };
  

  return (
    <Root>
      <div className="first_div">
        <h1>University Registration Portal</h1>

        <div className="first_box1">
          <div>
            <h3>Your University Details :-</h3>
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
            <div className="name">
              Email
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
          <div>
            <div className="name">
              Upload University Image
              <div className="imgg" style={selectContainerStyle}>
                <img
                  src={
                    preImgUniversity
                      ? preImgUniversity
                      : "https://www.crizac.co.uk/catalog/assets/images/upload_icon.svg"
                  }
                  alt="Upload"
                  className="inside_img"
                ></img>
                <input
                  type="file"
                  value={formData?.university_image}
                  onChange={(e) => {
                    handleUniversityImagePreview(e.target.files[0]);
                  }}
                />
              </div>
            </div>
            <div className="name">
              Registration Certificate
              <div className="imgg" style={selectContainerStyle}>
                <img
                  src={
                    preImgCertificate
                      ? preImgCertificate
                      : "https://www.crizac.co.uk/catalog/assets/images/upload_icon.svg"
                  }
                  alt="Upload"
                  className="inside_img"
                ></img>
                <input
                  type="file"
                  value={formData?.registration_certificate}
                  onChange={(e) => {
                    handleCertificatePreview(e.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second_div">
        <div className="company">
          <div>
            {" "}
            <h3> Your Address :-</h3>
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
            <div className="name">
              Country
              <input
                value={add?.country}
                onChange={(e) => {
                  setAdd({ ...add, country: e.target.value });
                }}
                placeholder="Country"
              />
            </div>
            <div className="name">
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
        </div>
        <div className="password">
          <h3>Your Password :-</h3>

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
  font-family: 22px "Mulish", sans-serif;
  margin: 80px 0px 0px 0px;
  max-width: 100vw;
  width: 100%;

  input {
    border-radius: 40px;
    padding: 10px;
    color: #202020;
    text-decoration: none;
    border: 2px solid #a5d8fa;
    @media (max-width: 600px) {
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

  h3 {
    color: #0e4d92;
    margin: 0;
  }
  > div {
    width: 100%;
    .name {
      display: flex;
      flex-direction: column;
      font-size: larger;
      width: 100%;
      margin-right: 10px;
      padding: 20px;
      gap: 10px;
      color: black;
    }
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
      padding: 10px;
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
      /* width: 95%; */
      margin: 0px 10px;

      > div {
        display: flex;
        flex: 1;

        .name1 {
          display: flex;
          flex-direction: column;
          font-size: larger;
          /* width: 100%; */
          margin-right: 10px;
          padding: 20px;
          gap: 10px;
          color: black;
        }
        .name2 {
          display: flex;
          flex-direction: column;
          font-size: larger;
          /* width: 100%; */
          margin-right: 10px;
          padding: 20px;
          gap: 10px;
          color: black;
        }
      }
    }

    .password {
      display: flex;
      flex-direction: column;
      margin: 0px 10px;
      padding: 20px;
      width: 100%;
      > div {
        display: flex;
        @media (max-width: 990px) {
          flex-direction: column;
        }
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
      margin-right: 108px;
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
    /* .btnn:hover {
    color: #f0f8ff;
    background: blue;
    cursor: pointer;
  } */
  }
  @media (max-width: 868px) {
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
  .imgg {
    text-align: center;
    /* margin-bottom: 32px;
  margin-right: 36px; */
    position: relative;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
    .inside_img {
      height: 80%;
      width: 100%;
      object-fit: contain;
    }
    input {
      position: absolute;
      height: 100%;
      width: 100%;
      opacity: 0;
    }
  }
`;
