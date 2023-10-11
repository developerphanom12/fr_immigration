import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';


export default function PreNav() {

    const navigate = useNavigate();
    const [activePop, setActivePop] = useState(false);
    return (
        <Root>
            <div className='logo'><img src='imageLogo\phanom.jpg' alt='image' />
            </div>
            <div className='options'>
                <div className='opt_div'><button className='opt_btn'  onClick={() => { navigate('/universities') }}>Universities</button></div>
                <div className='opt_div'><button className='opt_btn' onClick={() => { navigate('/reach') }} >Our Reach</button></div>
                <div className='opt_div'><button className='opt_btn' onClick={() => { navigate('/ambassadar') }}>Be our Ambassador</button></div>
                <div className='opt_div'><button className='opt_btn' onClick={() => { navigate('/partner') }} >Be a partner</button></div>
                <div className='login' onClick={() => { navigate("/login") }}>Login</div>
            </div>

            <div className='menu' onClick={() => { setActivePop(true) }}><AiOutlineMenu /></div>

            <div className={activePop ? "pop_nav" : "no_pop"} onClick={() => { setActivePop(false) }}>
                <div className='opt_div'><button className='opt_btn' onClick={() => { navigate('/universities') }}>Universities</button></div>
                <div className='opt_div'><button className='opt_btn' onClick={() => { navigate('/reach') }}>Our Reach</button></div>
                <div className='opt_div'><button className='opt_btn' onClick={() => { navigate('/ambassadar') }}>Be our Ambassador</button></div>
                <div className='opt_div'><button className='opt_btn' onClick={() => { navigate('/partner') }} >Be a partner</button></div>
                <div onClick={() => { navigate("/login") }}>Login</div>
            </div>
        </Root>
    )
}

const Root = styled.section`
display: flex;
height:100px;
justify-content:center;
align-items:center;
.opt_btn{
  background:none;
  color:black;
  border-color:transparent;
  font-size:larger;
  padding:10px;
  border-radius:10px;
  cursor:pointer;
}

.logo{
    width: 200px;
    background-color: yellow;
    img{
        width:100%;
    }
}
.options{
    background-color:  #fffff;
    flex: 1;
    display: flex;
    justify-content: space-around;
   
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
    width: 100%;
    background:#FF7F50;
}
.no_pop{
    display: none;

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
