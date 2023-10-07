import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export default function Partner() {
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        confirm_email: '',
        mobilenumber: '',
        whatsappnumber: '',
    });
    const navigate = useNavigate();
    const handleRegisterClick = () => {
        navigate('/login')
    }


    return (
        <Root>
            <div className='first_div'>
                <div><h2>Sign-Up to access our online portal and join our network</h2></div>
                <div className='first_box1'><div><h3>Your personal Details</h3></div>
                <div>
                    <div className='name'>First Name :-
                        <input value={data.firstname}  onChange={(e) => { setData({ ...data, firstname: e.target.value }) }} placeholder='First Name'/>
                  
                
                 
                    </div>
                    <div className='name'>Last Name :-
                        <input value={data.lastname} onChange={(e) => { setData({ ...data, lastname: e.target.value }) }} placeholder='Last Name' />
                    </div>
                    </div>
                    <div>
                    <div className='name'>Email :-
                        <input value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }} placeholder='Phanom@gmail.com' />
                    </div>
                    <div className='name'>Confirm Email :-
                        <input value={data.confirm_email} onChange={(e) => { setData({ ...data, confirm_email: e.target.value }) }} placeholder='Phanom@gmail.com' />
                    </div>
                    </div>
                    <div>
                    <div className='name'>Mobile No. :-
                        <input value={data.mobilenumber} onChange={(e) => { setData({ ...data, mobilenumber: e.target.value }) }} placeholder='Mobile Number' />
                    </div>
                    <div className='name'>Whatsapp No. :-
                        <input value={data.whatsappnumber} onChange={(e) => { setData({ ...data, whatsappnumber: e.target.value }) }} placeholder='Whatsapp Number' />
                    </div>
                    </div>
                </div>
            </div>
            <div className='second_div'>
                <div>
                    <button className='user_btn' onClick={() => { handleRegisterClick() }}>Register Here </button>
                </div>
            </div>


        </Root>
    )
}
const Root = styled.section`
.first_div{
    h2{
        color:#0E4D92;
        padding:20px;
        display:flex;
        justify-content:center;
    }
    h3{
        color:#0E4D92;
        padding:10px;  
    }
 .first_box1{
    display:flex;
    flex-direction:column;
    padding:20px;
    margin:0px 40px 0px 40px;
    >div{
        display:flex;
        flex:1;
    }
    .name{
        display:flex;
        flex-direction:column;
        font-size:larger;
        width:100%;
        margin-right: 10px;
        input{
            width:500px;
            height:50px;
            border-radius:50px;
            padding:5px;
            border-color:gray;
        }
    }
 }

}

`
