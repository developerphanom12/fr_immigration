import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function PreNav({popOn}) {
    const navigate = useNavigate();
    const [activePop, setActivePop] = useState(false);
    return (
        <Root>
            <div className='logo'>
                <h1>I am logo</h1>
            </div>
            <div className='options'>
            <div className='opt_div'><button className='opt_btn' onClick={()=>{popOn(true)}}>Universities</button></div>
            <div className='opt_div'><button className='opt_btn' onClick={()=>{popOn(true)}}>Courses</button></div>
            <div className='opt_div'><button className='opt_btn' onClick={()=>{popOn(true)}}>Our Reach</button></div>
            <div className='opt_div'><button className='opt_btn' onClick={()=>{popOn(true)}}>Be our Ambassador</button></div>
            <div className='opt_div'><button className='opt_btn' onClick={()=>{popOn(true)}}>Be a partner</button></div>
                <div className='login' onClick={() => { navigate("/login") }}>Login</div>
            </div>
            <div className='menu' onClick={()=>{setActivePop(true)}}>menu</div>

            <div className={activePop? "pop_nav": "no_pop"} onClick={()=>{setActivePop(false)}}>
                <div>Universities</div>
                <div>Be A ambasador</div>
                <div>Our Reach</div>
                <div>Be A Partner</div>
                <div  onClick={() => { navigate("/login") }}>Login</div>
            </div>
        </Root>
    )
}

const Root = styled.section`
display: flex;
height:100px;
justify-content:center;
align-items:center;
.logo{
    width: 200px;
    background-color: yellow;
}
.options{
    background-color:  #fffff;
    flex: 1;
    display: flex;
    justify-content: space-around;
    .opt_btn{
  background:none;
  color:black;
  border-color:transparent;
  font-size:larger;
  padding:10px;
  border-radius:10px;
  cursor:pointer;
}

    @media(max-width: 650px){
        display: none
    }
}
.menu{
    @media(max-width: 650px){
        display: block
    }
}
.menu{
    @media(min-width: 651px){
        display: none
    }
}

.pop_nav{
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    background-color: #fff;
    height: 100%;
    width: 100%
}
.no_pop{
    display: none
}
.login{
    background:#FF7F50;
  color:#ffffff;
  padding:10px 30px 10px 30px;
  border-radius:10px;
  border-color:transparent;
  font-size:larger;
  cursor:pointer;
       
    }



`
