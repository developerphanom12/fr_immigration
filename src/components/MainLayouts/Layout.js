import { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import PreNav from "./PreNav";
import { useSelector } from "react-redux";
import Reach from "../Reach";
import Footer from "../Footer";

export default function Layout({children}) {
  const userCheck = useSelector((state) => state?.user?.userCheck);
  const token = localStorage.getItem("token")
  console.log("token",userCheck, token)

    const[popOn, setPopOn] = useState(false);
  
    return (
      <Root>
          <div className='main_bar'>
        {token ?
          <div className='top_bar'>
            <Navbar />
          </div>
          :
          <div className='pre_nav'><PreNav/></div>
        }
        <div className='main_body'>{children}</div>
        <div className='footer'><Footer/></div>
      </div>
           
      
      </Root>
    )
  }
  
  const Root = styled.section`
  display:flex;
  flex-direction: column;
  background:#ffffff;
  height:100%;
  min-height:100vh;
  
 `