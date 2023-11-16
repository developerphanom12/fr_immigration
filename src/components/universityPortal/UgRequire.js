// import React, { useState } from 'react'
// import styled from 'styled-components'
// import { EXCHANGE_URLS_UNIVERSITY } from '../URLS';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import cogoToast from 'cogo-toast';

// export default function UgRequire() {
//   const [require, setRequire] = useState({
//     english_requirement: "",
//     academic_requirement: "",
//     offer_timeline: "",
//     Credibility: "",
//     Finance: "",
//     Discount: "",
//   });

//   const navigate = useNavigate();

//   const pgrequireApi = async () => {
//     try {
//       const axiosConfig = {
//         headers: {
//           authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       };
//       const res = await axios.post(
//         `${EXCHANGE_URLS_UNIVERSITY}/ugrequirement`,
//         axiosConfig
//       );
//       if (res.status === 200) {
//         cogoToast.success("PG requirement add Successfully");
//         setRequire({
//           english_requirement: "",
//           academic_requirement: "",
//           offer_timeline: "",
//           Credibility: "",
//           Finance: "",
//           Discount: "",
//         });
//         navigate("/unidash");
//       }
//     } catch (err) {
//       console.log("err", err);
//     }
//   };

//   const handleClick = () => {
//     pgrequireApi();
//   };

//   console.log("require", require);
//   return (
//     <Root>
//       <h3>UG Entry Requirement</h3>
//       <div className="child1">
//         <div className="child2">
//           <p>English Requirement</p>
//           <input
//             type="name"
//             value={require?.english_requirement}
//             onChange={(e) => {
//               setRequire({ ...require, english_requirement: e.target.value });
//             }}
//             placeholder="English Requirement"
//           />
//         </div>
//         <div className="child2">
//           <p>Academic Requirement</p>
//           <input
//             type="name"
//             value={require?.academic_requirement}
//             onChange={(e) => {
//               setRequire({ ...require, academic_requirement: e.target.value });
//             }}
//             placeholder="Academic Requirement"
//           />
//         </div>
//         <div className="child2">
//           <p>Offer Timeline</p>
//           <input
//             type="name"
//             value={require?.offer_timeline}
//             onChange={(e) => {
//               setRequire({ ...require, offer_timeline: e.target.value });
//             }}
//             placeholder="Offer Timeline"
//           />
//         </div>
//         <div className="child2">
//           <select
//             value={require.Credibility}
//             onChange={(e) => {
//               setRequire({ ...require, Credibility: e.target.value });
//             }}
//           >
//             <option value="">SELECT OPTION</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </div>
//         <div className="child2">
//           <select
//             value={require.Finance}
//             onChange={(e) => {
//               setRequire({ ...require, Finance: e.target.value });
//             }}
//           >
//             <option value="">SELECT OPTION</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </div>
//         <div className="child2">
//           <p>Discount</p>
//           <input
//             type="name"
//             value={require?.Discount}
//             onChange={(e) => {
//               setRequire({ ...require, Discount: e.target.value });
//             }}
//             placeholder="Discount"
//           />
//         </div>
//         <div className="child2">
//           <button
//            onClick={() => {
//             handleClick();
//           }}
//           >

//          Submit
//           </button>
         
//         </div>
//       </div>
//     </Root>
//   )
// }
// const Root = styled.section`
//  font-family: "Mulish", "sans-serif";
//   .child1 {
//     width: 90%;
//     .child2 {
//       width: 70%;
//       padding: 10px;
//       p {
//         margin: 5px;
//       }
//       input {
//         border-radius: 40px;
//         padding: 10px;
//         color: #202020;
//         width: 60%;
//         text-decoration: none;
//         border: 2px solid #a5d8fa;
//         @media (max-width: 600px) {
//           width: 100%;
//         }
//       }

//       input:focus,
//       input:active {
//         border-color: #ff6525;
//       }
//       select {
//         background-color: white;
//         color: black;
//         text-decoration: none;
//         border: 2px solid #a5d8fa;
//         line-height: 1.5em;
//         padding: 8px;
//         border-radius: 20px;
//         -webkit-box-sizing: border-box;
//         -moz-box-sizing: border-box;
//         box-sizing: border-box;
//         -webkit-appearance: none;
//         -moz-appearance: none;
//         width:60%;
//         background-image: linear-gradient(45deg, transparent 50%, blue 50%),
//           linear-gradient(135deg, blue 50%, transparent 50%),
//           linear-gradient(to right, skyblue, skyblue);
//         background-position: calc(100% - 20px) calc(1em + 2px),
//           calc(100% - 15px) calc(1em + 2px), 100% 0;
//         background-size: 5px 5px, 5px 5px, 40px 45px;
//         background-repeat: no-repeat;
//         @media (max-width: 555px) {
//           padding: 3px;
//           width:100%;
//           background-size: 5px 5px, 5px 5px, 30px 35px;
//           align-items: center;
//         }
  
//         select:focus {
//           background-image: linear-gradient(45deg, white 50%, transparent 50%),
//             linear-gradient(135deg, transparent 50%, white 50%),
//             linear-gradient(to right, gray, gray);
//           background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
//             100% 0;
//           background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
//           background-repeat: no-repeat;
//           border-color: grey;
//           outline: 0;
//         }
//       }
//       button{
//       padding: 10px;
//       border-radius: 50px;
//       font-size: medium;
//       border-color: transparent;
//       width: 60%;
//       font-size: medium;
//       color: #ffffff;
//       background: rgb(255 94 0);
//       margin-right: 108px;
//       background: linear-gradient(
//         45deg,
//         #ff6525 19%,
//         #ffffffe6 51%,
//         #ff6525 100%
//       );
//       border-radius: 50px;
//       color: #fff;
//       padding: 10px 5px;
//       background-size: 300% 100%;
//       transition: all 0.3s ease-in-out 0s;
//       text-transform: uppercase;
//       &:hover {
//         background: linear-gradient(
//           -25deg,
//           #ff6525 49%,
//           #ffffffe6 91%,
//           #ff6525 100%
//         );
//       }
//     }
//     }
//   }
// `