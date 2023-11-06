import React, { useState } from 'react'
import { EXCHANGE_URLS } from '../../URLS';
import axios from 'axios';
import cogoToast from 'cogo-toast';

export default function ProfilePassword() {
  const [changePass,setChangePass] = useState({
    currentPassword:'',
    newPassword:'',
  });


  const ChangePassApi = async (old,newP) =>{
    const axiosConfig ={
       header:{
        authentication :`bearer ${localStorage.getItem('token')}`
       }
    }
    try{
      const data = {
        currentPassword: old,
        newPassword: newP,
      };
      const res = await axios.post(`${EXCHANGE_URLS}/change-password`,data,axiosConfig)
     
        
      cogoToast.success("Password Changed Successfully")
      setChangePass({currentPassword:"",
    })
    console.log("res222",res?.data?.data)
     
    }catch(err){
      console.log("err",err);
    }
  }
  const handleChangePassword = ()=>{
    ChangePassApi()
  };
  console.log("changePass",changePass);
  return (
    <div className="box1">
      <input
        type="password"
        placeholder="---Current Password---"
        value={changePass.currentPassword}
        onChange={(e) => setChangePass({ ...changePass, currentPassword: e.target.value })}
      />
          <input
            type="password"
            placeholder="---New Password---"
            value={changePass.newPassword}
            onChange={(e) =>
              setChangePass({ ...changePass, newPassword: e.target.value })
            }
          />
          <div className="box1">
            <button
              onClick={()=>{handleChangePassword()}}
            >
              Set New Password
            </button>
          </div>
        </div>
  )
}
