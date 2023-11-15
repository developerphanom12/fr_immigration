// import axios from 'axios';
// import cogoToast from 'cogo-toast';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// export default function UniRegister() {
//     const [add, setAdd] = useState({
//         street_address: "",
//         city: "",
//         state: "",
//         country:"",
//         postal_code: "",
//       });
//       const [formData, setFormData] = useState({
//         university_name: "",
//         ambassador_name: "",
//         phone_number: "",
//         email: "",
//         username: "",
//         password: "",
//         university_image: "",
//         registration_certificate: "",

//       });
    
//       const navigate = useNavigate();
//       const registerApi = async () => {
//         console.log("yyyyy", formData);
//         const { confirm_password, ...data } = formData;
//         try {
//           const res = await axios.post(`${EXCHANGE_URLS_UNIVERSITY}/register`, {
//             ...data,
//             address: add,
//           });
//           console.log("resres", res);
//           if (res?.status === 200) {
//             cogoToast.success("Register SuccessFully");
//             setFormData({
//                 university_name: "",
//                 ambassador_name: "",
//                 phone_number: "",
//                 email: "",
//                 username: "",
//                 password: "",
//                 university_image: "",
//                 registration_certificate: "",
//             });
//             setAdd({
//                 street_address: "",
//                 city: "",
//                 state: "",
//                 country:"",
//                 postal_code: "",
//             });
    
//             navigate("/dashboardd");
//           }
//         } catch (err) {
//           console.log("err", err);
//         }
//       };
//       const handleRegisterClick = () => {
//         if (formData?.password === formData?.confirm_password) {
//           registerApi();
//         } else {
//           cogoToast.error("Password and Confirm Password Does Not Match");
//         }
//       };
    
//   return (
//     <div>UniRegister</div>
//   )
// }
