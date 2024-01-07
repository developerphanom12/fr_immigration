import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EXCHANGE_URLS_STUDENT } from "../URLS";
import axios from "axios";
import cogoToast from "cogo-toast";
import logo from "../CommonPage/imageLogo/phanom.jpg";

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
      <div className="Container-fluid">
        <div className="row">
          <div className="col-lg-2"></div>

          <div className="col-lg-8">
            <div className="register-main-div">
              <div className="row">
                <div className="col-lg-4 sub-first-div">
                  <img src={logo} alt="img" height="50px" className="logo" />
                </div>

                <div className="col-lg-8 sub-second-div">
                  <h3 className="text-center">Create account</h3>
                  <div className="row mt-2">
                    <div class="col-lg-6 col-md-6 col-6">
                      <label>First name </label>
                      <br></br>
                      {/* {/ <input type="text"></input> /} */}
                      <input
                        type="name"
                        value={formData?.username}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            username: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                      <label>Last name </label>
                      <br></br>
                      {/* {/ <input type="text"></input> /} */}
                      <input
                        type="name"
                        value={formData?.last_name}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            last_name: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-lg-6 col-md-6 col-6">
                      <label>Email Address</label>
                      {/* {/ <input type="email"></input> /} */}
                      <input
                        type="email"
                        value={formData?.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                        }}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                      <label>Phone Number </label>
                      {/* {/ <input type="number"></input> /} */}
                      <input
                        type="number"
                        value={formData?.phone_number}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            phone_number: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-lg-6 col-md-6 col-6">
                      <label>User name </label>
                      {/* {/ <input type="text"></input> /} */}
                      <input
                        type="name"
                        value={formData?.username}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            username: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                      {/* <label>Gender</label>
                      <input type="text"></input> */}
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

                  <div className="row mt-2">
                    <div className="col-lg-6 col-md-6 col-6">
                      <label>Date of Birth</label>
                      {/* {/ <input type="date"></input> /} */}
                      <input
                        type="date"
                        value={formData?.dob}
                        onChange={(e) => {
                          setFormData({ ...formData, dob: e.target.value });
                        }}
                      />
                    </div>
                    <div className="col-lg-6  col-md-6 col-6 mt-3">
                      <button
                        onClick={() => {
                          navigate("/register2");
                        }}
                      >
                        <Link
                          to={{
                            pathname: "/register2",
                            state: { formData, add },  
                          }}
                        ></Link>
                        Save & Proceed
                      </button>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-5 col-md-5 col-4"></div>

                    <div className="col-lg-1 col-md-1 col-2">
                      <h6 className="indication-btn-one">1</h6>
                    </div>
                    <div class="col-lg-1 col-md-1 col-2">
                      <h6 className="indication-btn-two">2</h6>
                    </div>

                    <div className="col-lg-5"></div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-lg-7 col-md-7 col-7">
                      <div className="login-content-ist">
                        <a href="#">Already have an account?</a>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-5 col-4">
                      <div className="link-content-second">
                        <a
                          href="#"
                          onClick={() => {
                            navigate("/studentlogin");
                          }}
                        >
                          <b>Login</b>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-2"></div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  .register-main-div {
    border: 1px solid black;
    // height:400px;
    margin: 130px 0 50px 0;
    border-radius: 20px;
  }

  .sub-first-div {
    border: none;
    // height:400px
  }

  .sub-first-div .logo {
    padding-left: 30px;
    margin-top: 10px;
  }

  .sub-second-div {
    border: none;
    // height:400px
    padding-right: 50px;
    padding-bottom: 10px;
  }

  .sub-second-div h3 {
    padding-top: 10px;
  }

  .sub-second-div label {
    color: #4a4a4a;
    font-size: 12px;
    padding-left: 10px;
  }

  .sub-second-div input {
    border-radius: 10px;
    color: grey;
    height: 32px;
    border: 1px solid black;
    width: 100%;
  }

  select {
    border: 1px solid black;
    margin-top: 22px;
    font-size: 12px;
    color: #4a4a4a;
    width: 100%;
    height: 32px;
    border-radius: 10px;
  }
  .sub-second-div button {
    border: none;
    background-color: #8656ec;
    color: white;
    padding: 7px 70px;
    border-radius: 20px;
  }

  .indication-btn-one {
    color: white;
    background-color: #8656ec;
    margin-top: 20px;
    text-align: center;
    font-size: 12px;
    border-radius: 20px;
    padding: 5px 0px;
  }

  .indication-btn-two {
    color: white;
    background-color: #c3c0c8;
    margin-top: 20px;
    text-align: center;
    font-size: 12px;
    border-radius: 20px;
    padding: 5px 0px;
  }

  .login-content-ist {
    border: none;
    height: 30px;
  }

  .login-content-ist a {
    margin-left: 126px;
    color: #4a4a4a;
    font-size: 15px;
    text-decoration: none;
  }

  .login-content-second {
    border: none;
    height: 50px;
  }

  .login-content-second a {
    color: #8656ec !important;
    font-size: 15px;
    text-decoration: none;
    font-weight: 600;
  }

  @media (max-width: 567px) {
    .sub-second-div {
      padding: 0 20px;
    }

    .sub-second-div button {
      padding: 9px 43px;
      font-size: 10px;
      margin-top: 10px;
    }

    .login-content-ist a {
      margin-left: 28px;
    }
    .indication-btn-one {
      font-size: 14px;
      padding: 10px 0px;
    }

    .indication-btn-two {
      font-size: 14px;
      padding: 10px 0px;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .sub-second-div {
      padding: 0 20px;
    }

    .sub-second-div button {
      padding: 9px 43px;
      font-size: 10px;
      margin-top: 10px;
    }

    .login-content-ist a {
      margin-left: 60%;
    }

    .indication-btn-one {
      font-size: 14px;
      padding: 10px 0px;
    }

    .indication-btn-two {
      font-size: 14px;
      padding: 10px 0px;
    }
  }
  // font-family: "Roboto", sans-serif;
  // margin: 80px 0px 0px 0px;
  // max-width: 100vw;
  // width: 100%;

  // input {
  //   border-radius: 10px;
  //   padding: 5px;
  //   color: #202020;
  //   width: 90%;
  //   text-decoration: none;
  //   border: 2px solid #a5d8fa;
  //   @media (max-width: 600px) {
  //     min-width: 100px;
  //     width: 100%;
  //   }
  // }

  // input:focus,
  // input:active {
  //   border-color: #ff6525;
  // }

  // .flex-container {
  //   display: flex;
  //   flex-wrap: wrap;
  // }

  // h4 {
  //   color: #0e4d92;
  //   margin: 0;
  // }

  // .name {
  //   display: flex;
  //   flex-direction: column;
  //   font-size: small;
  //   width: 90%;
  //   margin-right: 10px;
  //   color: black;
  // }

  // .nameee {
  //   display: flex;
  //   flex-direction: column;
  //   font-size: small;
  //   width: 100%;
  //   justify-content: space-around;
  //   color: black;
  //   select {
  //     background-color: white;
  //     color: black;
  //     text-decoration: none;
  //     border: 2px solid #a5d8fa;
  //     line-height: 1.5em;
  //     width: 29%;
  //     padding: 6px;
  //     border-radius: 10px;
  //     -webkit-box-sizing: border-box;
  //     -moz-box-sizing: border-box;
  //     box-sizing: border-box;
  //     -webkit-appearance: none;
  //     -moz-appearance: none;
  //     background-image: linear-gradient(45deg, transparent 50%, blue 50%),
  //       linear-gradient(135deg, blue 50%, transparent 50%),
  //       linear-gradient(to right, skyblue, skyblue);
  //     background-position: calc(100% - 20px) calc(1em + 2px),
  //       calc(100% - 15px) calc(1em + 2px), 100% 0;
  //     background-size: 5px 5px, 5px 5px, 40px 45px;
  //     background-repeat: no-repeat;
  //     @media (max-width: 555px) {
  //       padding: 8px;
  //       background-size: 5px 5px, 5px 5px, 30px 45px;
  //       align-items: center;
  //     }

  //     select:focus {
  //       background-image: linear-gradient(45deg, white 50%, transparent 50%),
  //         linear-gradient(135deg, transparent 50%, white 50%),
  //         linear-gradient(to right, gray, gray);
  //       background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
  //         100% 0;
  //       background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
  //       background-repeat: no-repeat;
  //       border-color: grey;
  //       outline: 0;
  //     }
  //   }
  // }

  // .first_div {
  //   h2 {
  //     color: #0e4d92;
  //     display: flex;
  //     justify-content: center;
  //     margin: 0;
  //   }

  //   .first_box1 {
  //     display: flex;
  //     flex-direction: column;
  //     margin: 0px 10px;
  //     > div {
  //       display: flex;
  //       flex: 1;
  //       padding: 10px;
  //       gap: 5px;
  //     }
  //   }
  // }

  // .second_div {
  //   display: flex;
  //   flex-direction: column;
  //   font-family: "Roboto", sans-serif;
  //   flex-wrap: wrap;
  //   width: 100%;

  //   .company {
  //     display: flex;
  //     flex-direction: column;
  //     margin: 0px 10px;
  //     width: 100%;

  //     > div {
  //       display: flex;
  //       padding: 10px;
  //       width: 100%;

  //       .name1 {
  //         display: flex;
  //         flex-direction: column;
  //         font-size: small;
  //         width: 100%;
  //         margin-right: 10px;
  //         color: black;
  //       }
  //       .name2 {
  //         display: flex;
  //         flex-direction: column;
  //         font-size: small;
  //         width: 100%;
  //         margin-right: 10px;
  //         color: black;
  //       }
  //     }
  //   }

  //   .password {
  //     display: flex;
  //     flex-direction: column;
  //     padding: 20px;
  //     width: 50%;
  //     > div {
  //       display: flex;
  //       padding: 10px;
  //     }
  //   }
  // }

  // .fifth_div {
  //   background: #0e4d92;
  //   color: white;
  //   display: flex;
  //   justify-content: space-between;
  //   flex-wrap: wrap;
  //   padding: 10px;

  //   .fifth_box {
  //     margin: 40px;
  //     padding: 10px;
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //     text-align: center;
  //     justify-content: center;
  //     .btnn {
  //       padding: 10px;
  //       border-radius: 10px;
  //       font-size: small;
  //       border-color: transparent;
  //       width: 80%;
  //       font-size: medium;
  //       color: #ffffff;
  //       background: rgb(255 94 0);
  //       margin: 20px;
  //       background: #000080;
  //       border-radius: 10px;
  //       color: #fff;
  //       padding: 10px 5px;
  //       background-size: 300% 100%;
  //       transition: all 0.3s ease-in-out 0s;
  //       text-transform: uppercase;
  //       &:hover {
  //         box-shadow: 10px 5px 5px gray;
  //         transition: all 0.2s ease-in-out 0s;
  //         background: linear-gradient(-25deg, #000080 49%, #000080 100%);
  //       }
  //     }
  //   }
  // }
  // .regis {
  //   display: flex;
  //   justify-content: flex-end;
  //   padding: 10px;
  //   .btnn {
  //     padding: 10px;
  //     border-radius: 10px;
  //     font-size: small;
  //     border-color: transparent;
  //     width: 15%;
  //     font-size: medium;
  //     color: #ffffff;
  //     margin-right: 108px;
  //     background: #000080;
  //     color: #fff;
  //     background-size: 300% 100%;
  //     transition: all 0.3s ease-in-out 0s;
  //     text-transform: uppercase;
  //     &:hover {
  //       box-shadow: 10px 5px 5px gray;
  //       transition: all 0.2s ease-in-out 0s;
  //       background: linear-gradient(-25deg, #000080 49%, #000080 100%);
  //     }
  //   }
  //   /* .btnn:hover {
  //   color: #f0f8ff;
  //   background: blue;
  //   cursor: pointer;
  // } */
  // }
  // @media (max-width: 768px) {
  //   .first_box1 > div,
  //   .company > div,
  //   .password {
  //     flex-direction: column;
  //   }

  //   .name,
  //   .name1,
  //   .name2 {
  //     width: 100%;
  //     margin-right: 0;
  //   }

  //   .name input,
  //   .name1 input,
  //   .name2 input {
  //     width: calc(100% - 28px);
  //   }

  //   .fifth_box {
  //     margin: 20px;
  //   }
  // }
`;
