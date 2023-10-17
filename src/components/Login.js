import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import cogoToast from 'cogo-toast'
import { useDispatch } from 'react-redux'
import { userCheckAction, userDataAction } from '../redux/users/action'
import { EXCHANGE_URLS } from './URLS'


export default function Login() {
  const [logindata, setlogindata] = useState({
    username: '',
    password: ''
  })
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginApi = async () => {
    try {
      const res = await axios.post(`${EXCHANGE_URLS}/login1`, logindata)
      console.log("resres123", res)
      if (res?.status === 200) {
        localStorage.setItem("token", res?.data?.token)
        dispatch(userDataAction(res?.data))
        dispatch(userCheckAction(true))
        cogoToast.success("Login SuccessFully")
        navigate("/dashboard")
      }

    } catch (err) {
      console.log("err", err)
    }
  }

  const handleClick = () => {
    if (logindata.username.length > 3 && logindata.password.length > 8) {
      loginApi()
    } else {
      cogoToast.error("Username & password Length should be greater than 3 & 8 character")
    }
  }
  

  console.log("logindata",logindata)
  return (
    <Root className='login'>LOGINLOGIN
      <div className='box'>
        <div className='boxx_div'>
        </div>
        <div className='box_div'><h2><u>LOG-IN</u></h2>
          <h5> If You Don't Have Log-in Id, Click On Register Here... </h5>
          <div className='user_name'>
            <input value={logindata.username} onChange={(e) => { setlogindata({ ...logindata, username: e.target.value }) }} placeholder='User Name' />
          </div>
          <div className='user_name'>
            <input type='Password' value={logindata.password}  onChange={(e) => { setlogindata({ ...logindata, password: e.target.value }) }} placeholder='Password' />
          </div>
          <div>
            <button className='user_btn' onClick={() => { handleClick() }}>Log-in</button>
          </div>
         
        </div>
      </div>
    </Root>
  )

}
const Root = styled.section`
background-color:lightgray;
width:100%;
min-width:100vw;
height:100%;
min-height:100vh;
display:flex;
align-items:center;
justify-content:center;
margin:0px;
.login{
  display: flex;
  flex-direction: row;
  height:100%;
 min-height:100vh;
 width: 100%;
}

  .box {
    display: flex;
    width: 100%;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  }
 
.boxx_div{
display: flex;
background-image:url("/login.jpg");
background-size:cover; 
background-repeat:no-repeat;
width:900px;
height:600px;
flex-wrap: wrap;
}

.box_div{
  width:700px;
  height:580px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  font-size: large;
  background-color: #ffffff;
  padding:10px 20px 10px 20px;
 flex-wrap: wrap;
}

.user_btn{
    display:flex;
    flex-direction: column;
    width:300px;
    height:40px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 8px 0px 8px 0px;
  
}

.user_name{
    display:flex;
    gap: 8px;
    flex-direction: column;
    width:300px;
    height:70px;
    justify-content: center;
    align-items: center;
   
  
}
input {
    width: 95%;
    padding: 8px;
    cursor: pointer;
}


.user_btn:hover{
  background-color:green;
}

`

