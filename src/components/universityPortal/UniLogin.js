import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  universityLoginAction,
  userCheckAction,
  userDataAction,
} from "../../redux/users/action";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function UniLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    username: yup.string().required("Username is required."),
    password: yup.string().required("Password is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handelLogin = (e) => {
    const data = {
      username: e.username,
      password: e.password,
    };
    console.log("console1", data);
    const userCallback = (response) => {
      if (response.status === 201) {
        dispatch(userDataAction(response?.data?.user));
        localStorage.setItem("token", response?.data?.user?.token);
        console.log("tokeen", response?.data?.user?.token);
        navigate("/unidash");
        reset();
      }
    };
    dispatch(userCheckAction(true));
    dispatch(universityLoginAction(data, userCallback));
  };

  const onSubmit = (data) => {
    handelLogin(data);
  };

  return (
    <Root>
      {/* <div className="logimg">
        <h4>Sign-in to join the Phanom Online Portal</h4>
        <img src={loginUniversity} alt="img" />
      </div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4"></div>

            <div className="col-lg-4">
              <div class="login-main-div">
                <h2 className="text-center">Welcome back,</h2>
                <label>User name or email address</label>
                <br></br>
                {/* {/ <input type="text"></input><br></br> /} */}
                <input type="username" {...register("username")} />
                {errors.username && <p>{errors.username.message}</p>}

                <label>Password</label>
                <br></br>
                {/* {/ <input type="Password"></input> /} */}
                <input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                />
                {/* {/ <h5>Forget your password</h5> /} */}
                <div className="password-div">
                  <a
                    onClick={() => {
                      navigate("/forgot");
                    }}
                  >
                    {" "}
                    Forget your password
                  </a>
                </div>
                <button type="submit">Login</button>

                <div className="row">
                  <div className="col-lg-8 col-md-7 col-8">
                    <h6 className="account-content">Don't have an account</h6>
                  </div>

                  <div className="col-lg-4  col-4">
                    {/* {/ <h6 className="sign-content" >Sign up</h6> /} */}
                    <div className="sign-content">
                      <a
                        onClick={() => {
                          navigate("/uniregister");
                        }}
                      >
                        Sign up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4"></div>
          </div>
        </div>

        {/* <div className="user_name">
          User Name*
          <input
            type="username"
            {...register("username")}
            placeholder="University Name"
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div className="user_name">
          Password*
          <input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          <button className="btn" onClick={togglePasswordVisibility}>
            {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
          </button>
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="button_div">
          <button type="submit">Log-in</button>
        </div>
        <div className="forget">
          <button
            onClick={() => {
              navigate("/forgot");
            }}
          >
            Forget Password
          </button>
        </div>
        <div className="register">
          <h5>Don't Have An Account ?</h5>
          <button
            onClick={() => {
              navigate("/uniregister");
            }}
          >
            Get Started
          </button>
        </div> */}
      </form>
    </Root>
  );
}
const Root = styled.section`
  .login-main-div {
    border: 1px solid black;
    height: 400px;
    margin: 120px 0 50px 0;
    border-radius: 20px;
  }

  .login-main-div h2 {
    padding-top: 30px;
  }

  .login-main-div label {
    padding-left: 40px;
    margin-top: 15px;
    font-size: 12px;
  }
  .login-main-div input {
    width: 80%;
    padding: 6px ;
    margin-left: 40px;
    border-radius: 20px;
  }

  .login-main-div h5 {
    font-size: 15px;
    font-weight: 500;
    text-decoration: underline;
    text-align: right;
    padding-top: 5px;
    padding-right: 50px;
  }

  .login-main-div button {
    border: none;
    background-color: #8656ec;
    color: white;
    padding: 10px 100px;
    margin: 3% 0 0 23%;
    border-radius: 20px;
  }

  .account-content {
    text-align: right;
    padding-top: 10px;
  }

  .sign-content {
    text-align: left;
    padding-top: 10px;
    margin-left: -10px;
    color: #8656ec;
    text-decoration: underline;
  }

  .password-div {
    text-align: right;
    margin-right: 44px;
    margin-top: 10px;
    font-size: 12px;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
      color: #8656ec;
    }
  }

  @media (max-width: 567px) {
    button {
      margin-left: 15% !important;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    button {
      margin: 1% 0 0 33% !important;
    }

    h5 {
      padding-right: 105px !important;
    }
  }

  // width: 90%;
  // height: 90%;
  // min-height: 100vh;
  // min-width: 100vw;
  // display: flex;
  // align-items: flex-end;
  // justify-content: center;
  // background-repeat: no-repeat;
  // background-position: center;
  // background-size: cover;
  // padding-bottom: 20px;
  // position: relative;
  // top: -16px;
  // font: 22px "Roboto", sans-serif;
  // @media (max-width: 719px) {
  //   display: flex;
  //   margin-top: 40px;
  //   flex-direction: column;
  //   align-items: center;
  //   gap: 10px;
  //   position: relative;
  //   top: 70px;
  // }

  // .logimg {
  //   h4 {
  //     color: white;
  //     text-align: center;
  //     font: 22px "Roboto", sans-serif;
  //   }
  //   border-top-left-radius: 30px;
  //   border-bottom-left-radius: 30px;
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   padding: 20px 0px 0px 0px;
  //   margin: 0px 30px 0px 30px;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-evenly;
  //   height: 80%;
  //   width: 40%;
  //   position: bottom center;
  //   background-color: #007fbe;
  //   img {
  //     max-width: 80%;
  //     max-height: 70%;
  //     display: flex;
  //     align-items: center;
  //     padding-left: 70px;
  //     justify-content: center;
  //     @media (max-width: 809px) {
  //       justify-content: center;
  //       align-items: center;
  //       width: 100%;
  //       height: 50%;
  //     }
  //   }
  //   @media (max-width: 809px) {
  //     padding: 10px;
  //     width: 80%;
  //     margin: 20px;
  //   }
  // }

  // form {
  //   height: 86%;
  //   width: 40%;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  //   background-color: #ffffff;
  //   flex-wrap: wrap;
  //   padding: 10px;
  //   font: 16px "Roboto", sans-serif;
  //   color: #353535;
  //   @media (max-width: 800px) {
  //     padding: 10px;
  //     width: 100%;
  //     flex-direction: column;
  //     justify-content: flex-start;
  //   }
  //   .user_name {
  //     display: flex;
  //     flex-direction: column;
  //     width: 90%;
  //     justify-content: center;
  //     gap: 5px;
  //     padding: 10px;
  //     font: 14px "Roboto", sans-serif;
  //     @media (max-width: 799px) {
  //       align-items: center;
  //       padding: 0px;
  //       gap: 0px;
  //       height: 80px;
  //     }
  //     .btn {
  //       position: relative;
  //       top: -49px;
  //       left: 175px;
  //     }
  //     input {
  //       width: 100%;
  //       padding: 15px;
  //       cursor: pointer;
  //       border: transparent;
  //       border-radius: 10px;
  //       background-color: #e8f0fe;
  //       @media (max-width: 809px) {
  //         height: 35px;
  //         padding: 10px;
  //       }
  //     }
  //   }
  //   .button_div {
  //     width: 90%;
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;

  //     button {
  //       display: flex;
  //       flex-direction: column;
  //       width: 97%;
  //       height: 50px;
  //       justify-content: center;
  //       align-items: center;
  //       cursor: pointer;
  //       border-radius: 10px;
  //       border: transparent;
  //       margin: 5px;
  //       background: #000080;
  //       color: #fff;
  //       background-size: 300% 100%;
  //       transition: all 0.2s ease-in-out 0s;
  //       text-transform: uppercase;
  //       @media (max-width: 899px) {
  //         height: 30px;
  //       }
  //       &:hover {
  //         transition: all 0.2s ease-in-out 0s;
  //         box-shadow: 10px 5px 5px gray;
  //       }
  //     }
  //   }
  //   .forget {
  //     text-align: right;
  //     width: 85%;
  //     @media (max-width: 800px) {
  //       height: 30px;
  //       text-align: center;
  //       display: flex;
  //       align-items: center;
  //       justify-content: center;
  //     }
  //     button {
  //       color: dodgerblue;
  //       font-family: "Roboto", sans-serif;
  //       text-decoration: underline;
  //       font-weight: 700;
  //       font-size: 18px;
  //       cursor: pointer;
  //       border: none;
  //       padding: 10px;
  //       text-align: right;
  //       background-color: transparent;
  //       @media (max-width: 899px) {
  //         height: 35px;
  //         text-align: center;
  //       }
  //     }
  //   }

  //   .register {
  //     display: flex;
  //     font: 16px;
  //     width: 90%;
  //     align-items: center;
  //     justify-content: center;
  //     gap: 20px;
  //     @media (max-width: 889px) {
  //       flex-direction: column;
  //     }
  //     button {
  //       border: none;

  //       @media (max-width: 809px) {
  //         width: 100%;
  //         height: 30px;
  //       }
  //       background: #000080;
  //       border-radius: 10px;
  //       display: flex;
  //       align-items: center;
  //       justify-content: center;
  //       width: 40%;
  //       color: #fff;
  //       padding: 15px;
  //       background-size: 300% 100%;
  //       transition: all 0.2s ease-in-out 0s;
  //       text-transform: uppercase;
  //       &:hover {
  //         box-shadow: 10px 5px 5px gray;
  //         transition: all 0.2s ease-in-out 0s;
  //       }
  //     }
  //   }
  // }
`;
