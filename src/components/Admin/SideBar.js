import React, { useEffect, useState } from 'react'
import { FaHome } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import {useNavigate } from "react-router-dom";
import styled from 'styled-components';
import cogoToast from 'cogo-toast';

// import {FaHome,FaUserAlt,FaRegAddressCard} from 'react-icons/fa'



export default function SideBar() {
  const navigate = useNavigate()

  return (
    <Root>
      <div className='menu_top'>
        <div className='company_logo'>
         {/* <h1>PHENOM</h1><img src='phanom.jpg' alt='img'/> */}
        </div>
        <div>
          <h4 className="caption">ANALYTICS</h4>
        </div>
        <div className='nav_section nav_div'>
          <div onClick={()=>{ navigate('/dashboard')}} className= "div_1"
            ><FaHome/><h3>Dashboard</h3>
          </div>
          <div onClick={()=>{ navigate('/login');cogoToast.success("Logout Successfully")}} className='div_2'>
          <FiLogOut/><h3>Logout</h3>
          </div>
        </div>
      </div>
    </Root>
  )
}

const Root = styled.section`

display: flex;
flex-direction: column;
gap: 60px;
justify-content: space-between;
height: 100%;
color: white;

.menu_top{

  .company_logo{
    padding: 10px 20px 10px 0px;
    text-align: center;
    .com_img{
      border-style: none;
      height: 80px;
      width: 200px;
      object-fit: contain;
    }
  }

  .nav_section{
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: space-between;

    .div_1{
      text-decoration: none;
      display: flex;
      height: 30px;
      gap: 5px;
      justify-content: left;
      align-items: center;
      font-size: 20px;
      padding: 8px;
      padding-left: 10px;
      border-radius: 10px;
      color: whitesmoke;
      background-color: whitesmoke;
      color: black;
      cursor: pointer;
      svg{
        font-size: 25px;
      }
    }
    .div_1.active, .div_1:hover{
      background-color: whitesmoke;
      color: black;
      cursor: pointer;
    }
    
  
  }
}
 .menu_button{
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;

  .admin_profile2{
    display: flex;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 5px;
    img{
      object-fit: cover;
    }
    .admin_details{
      font-weight: 600;
      font-size: 18px;
      color: black;
      text-transform: capitalize;

      p{
        font-size: 12px;
        color: black;

      }
    }
  }
  button{
    background-color: transparent;
    border: none;
    cursor: pointer;

  }
}
.div_2{
      text-decoration: none;
      display: flex;
      gap: 5px;
      justify-content: left;
      align-items: center;
      font-size: 17px;
      font-weight: 600;
      padding: 10px;
      border-radius: 10px;
      color:blue;
      padding-left: 10px;
      height: 30px;
    }
    .div_2.active, .div_2:hover{
      background-color: whitesmoke;
      color: black;
      cursor: pointer;
    }

.caption{
  margin-top: 5px;
  color: grey;
  padding: 10px;
}



`

