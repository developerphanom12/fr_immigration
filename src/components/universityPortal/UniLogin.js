// import React, { useState } from "react";
// import loginUniversity from "../CommonPage/imageLogo/uniiiiiiiiii.avif"
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { EXCHANGE_URLS_UNIVERSITY } from "../URLS";
// import axios from "axios";

// export default function UniLogin() {
//     const navigate = useNavigate();

//   const [logindata, setlogindata] = useState({
//     username: "",
//     password: "",
//   });
//   const dispatch = useDispatch();

//   const loginApi = async () => {
//     try {
//       const res = await axios.post(`${EXCHANGE_URLS_UNIVERSITY}/unilogin`, logindata);
//       console.log("resres123", res?.data?.data?.user);

//       if (res?.status === 200) {
//         localStorage.setItem("token", res?.data?.data?.user?.token);
//         dispatch(userDataAction(res?.data?.data?.user));
//         dispatch(userCheckAction(true));
//         cogoToast.success("Login SuccessFully");
//         navigate("/dashboardd");
//       } else {
//         cogoToast.error("Username Or Password Incorrect")
//       }
//     } catch (err) {
//       console.log("err", err);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleClick();
//     }
//   };

//   const handleClick = () => {

//     if (logindata.username.length > 3 && logindata.password.length > 3) {
//       loginApi();
//     } else {
//       cogoToast.error(
//         "Username & password Length should be greater than 3 & 3 character"
//       );
//     }
//   };

//   console.log("logindata", logindata);
//   return (
//     <div>
//       <div className="logimg">
//         <h4>Sign-in to join the Phanom Online Portal</h4>
//         <img src={loginUniversity} alt="img" />
//       </div>
//       <div className="box_div">
//         <div className="user_name">
//           User Name*
//           <input
//             value={logindata.username}
//             onChange={(e) => {
//               setlogindata({ ...logindata, username: e.target.value });
//             }}
//             onKeyDown={handleKeyDown}
//             placeholder="User Name"
//           />
//         </div>
//         <div className="user_name">
//           Password*
//           <input
//             type="Password"
//             value={logindata.password}
//             onChange={(e) => {
//               setlogindata({ ...logindata, password: e.target.value });
//             }}
//             onKeyDown={handleKeyDown}
//             placeholder="Password"
//           />
//         </div>
//         <div className="button_div">
//           <button
//             onClick={() => {
//               handleClick();
//             }}
//           >
//             Log-in
//           </button>
//         </div>
//         <div className="forget">
//           <button
//             onClick={() => {
//               navigate("/forgot");
//             }}
//           >
//             Forget Password
//           </button>
//         </div>
//         <div className="register">
//           <h5>Don't Have An Account ?</h5>
//           <button
//             onClick={() => {
//               navigate("/partner");
//             }}
//           >
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
