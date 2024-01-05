import React from "react";
import styled from "styled-components";
import logo from "../CommonPage/imageLogo/phanom.jpg";

export default function Register2() {
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
                      <label> Street Address </label>
                      <br></br>
                      {/* {/ <input type="text"></input> /}     */}
                      <input
                        // value={add?.street_address}
                        // onChange={(e) => {
                        //   setAdd({ ...add, street_address: e.target.value });
                        // }}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                      <label> City </label>
                      <br></br>
                      {/* {/ <input type="text"></input> /} */}
                      <input
                        // value={add?.state}
                        // onChange={(e) => {
                        //   setAdd({ ...add, state: e.target.value });
                        // }}
                        // placeholder="State"
                      />
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-lg-6 col-md-6 col-6">
                      <label> State</label>
                      {/* {/ <input type="email"></input> /} */}
                      <input
                        type="email"
                        // value={formData?.email}
                        // onChange={(e) => {
                        //   setFormData({ ...formData, email: e.target.value });
                        // }}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                      <label> Postal Code </label>
                      {/* {/ <input type="number"></input> /} */}
                      <input
                        // value={add.postal_code}
                        // onChange={(e) => {
                        //   setAdd({ ...add, postal_code: e.target.value });
                        // }}
                        // placeholder="Postal Code"
                      />
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-lg-6 col-md-6 col-6">
                      <label> Password</label>
                      {/* {/ <input type="text"></input> /} */}
                      <input
                        type="password"
                        // value={formData?.password}
                        // onChange={(e) => {
                        //   setFormData({
                        //     ...formData,
                        //     password: e.target.value,
                        //   });
                        // }}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                      <label> Confirm Password</label>
                      <input
                        // value={formData?.confirm_password}
                        // onChange={(e) => {
                        //   setFormData({
                        //     ...formData,
                        //     confirm_password: e.target.value,
                        //   });
                        // }}
                        // placeholder="Confirm Password"
                      />
                    </div>
                  </div>

                  <div className="row mt-2">
                    {/* <div className="col-lg-6 col-md-6 col-6">
                      <label>Date of Birth</label>
                      {/ <input type="date"></input> /}
                      {/* <input
                        type="date"
                        value={formData?.dob}
                        onChange={(e) => {
                          setFormData({ ...formData, dob: e.target.value });
                        }}
                      />
                    </div> */} 
                    <div className="col-lg-4  col-md-5 col-4 mt-3">

                    </div>

                    <div className="col-lg-6  col-md-6 col-6 mt-3">
                      <button>Sign In</button>
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
                        <a href="#">
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
    background-color:#8656EC;
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
      margin-left: 14px;
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
`;
