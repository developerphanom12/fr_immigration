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
        password: ''
    });
    const navigate = useNavigate();
    const handleRegisterClick = () => {
        navigate('/login')
    }
    const [company, setCompany] = useState({
        company: '',
        websites: '',
        address: '',
        city: '',
        postcode: '',
        country: '',
        state: ''
    })


    return (
        <Root>
            <div className='first_div'>
                <div><h2>Sign-Up to access our online portal and join our network</h2></div>
                <div className='first_box1'><div><h3>Your personal Details  :-</h3></div>
                    <div>
                        <div className='name'> First Name* :- 
                            <input type='name' value={data.firstname} onChange={(e) => { setData({ ...data, firstname: e.target.value }) }}  placeholder='First Name' />

                        </div>
                        <div className='name'>Last Name* :-
                            <input type='name' value={data.lastname} onChange={(e) => { setData({ ...data, lastname: e.target.value }) }} placeholder='Last Name' />
                        </div>
                    </div>
                    <div>
                        <div className='name'>E-Mail* :-
                            <input type='email' value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }} placeholder='Ex-Phanom@gmail.com' />
                        </div>
                        <div className='name'>Confirm Email* :-
                            <input type='email' value={data.confirm_email} onChange={(e) => { setData({ ...data, confirm_email: e.target.value }) }} placeholder='Ex-Phanom@gmail.com' />
                        </div>
                    </div>
                    <div>
                        <div className='name'>Mobile No.* :-
                            <input type='number' value={data.mobilenumber} onChange={(e) => { setData({ ...data, mobilenumber: e.target.value }) }} placeholder='Mobile Number' />
                        </div>
                        <div className='name'>Whatsapp No. :-
                            <input type='number' value={data.whatsappnumber} onChange={(e) => { setData({ ...data, whatsappnumber: e.target.value }) }} placeholder='Whatsapp Number' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='second_div'>
                <div className='company'><div><h3>Company Details :-</h3></div>
                    <div>

                        <div className='name1'>Company* :-
                            <input value={data.company} onChange={(e) => { setCompany({ ...data, company: e.target.value }) }} placeholder='Company' />

                        </div>

                        <div className='name1'>Website :-
                            <input value={data.websites} onChange={(e) => { setCompany({ ...data, websites: e.target.value }) }} placeholder='Website' />
                        </div>


                        <div className='name1'>Address* :-
                            <input value={data.address} onChange={(e) => { setCompany({ ...data, address: e.target.value }) }} placeholder='Address' />
                        </div>

                    </div>
                    <div>
                        <div className='name2'>City* :-
                            <input value={data.city} onChange={(e) => { setCompany({ ...data, city: e.target.value }) }} placeholder='City' />

                        </div>
                        <div className='name2'>Post Code* :-
                            <input value={data.postcode} onChange={(e) => { setCompany({ ...data, postcode: e.target.value }) }} placeholder='Post Code' />
                        </div>
                        <div className='name2'>Country* :-
                            <input value={data.country} onChange={(e) => { setCompany({ ...data, country: e.target.value }) }} placeholder='---Please Select---' />
                        </div>
                        <div className='name2'>Region/State* :-
                            <input value={data.state} onChange={(e) => { setCompany({ ...data, state: e.target.value }) }} placeholder='Select State' />
                        </div>
                    </div>

                </div>
                <div className='password'><div><h3>Your Password :-</h3></div>
                <div>
                    <div className='name'>Password* :-
                        <input type='password' value={data.password} onChange={(e) => { setData({ ...data, password: e.target.value }) }} placeholder='Enter Password' />
                    </div>
                    <div className='name'>Confirm Password* :-
                        <input type='password' id='password' value={data.password} onChange={(e) => { setData({ ...data, password: e.target.value }) }} placeholder='Confirm Password' />
                    </div>
                    </div>
                </div>
                <div className='fifth_div'>
                    <div className='fifth_box'><div><h2>Get in Touch</h2></div>
                        <p>If you have any questions, concerns or requests for further information, please send us a<br /> message and a member of our team will get in touch with you</p></div>
                    <div className='fifth_box'><button className='btnn'>Contact  Us</button></div>
                </div>
                <div>
                    <button className='btnn' onClick={() => { handleRegisterClick() }}>Register</button>
                </div>
            </div>


        </Root>
    )
}
const Root = styled.section`
input {
  /* width: 85%; */
  height: 45px;
  border-radius: 50px;
  padding:0px  14px;
  border-color: #DCDCDC;
  background-color:rgb(244, 252, 253);
  font-size: large;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

h3 {
  color: #0E4D92;
  margin: 0;
}

.name {
  display: flex;
  flex-direction: column;
  font-size: larger;
  width: 100%;
  margin-right: 10px;
  padding:20px;
  gap: 10px;
  color:rgb(249, 118, 17);

}

.first_div {
    font-family: Georgia, serif;
    flex-wrap:wrap;
  h2 {
    color: #0E4D92;
    padding: 10px;
    display: flex;
    justify-content: center;
    margin: 0;
  }

  .first_box1 {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 0px 10px;
    > div {
      display: flex;
      flex: 1;
      padding: 10px;
      gap: 5px;
    }
  }
}

.second_div {
  display: flex;
  flex-direction: column;
  font-family: Georgia, serif;
  flex-wrap:wrap;
  
  .company {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 0px 10px;
     
    > div {
      display: flex;
      flex: 1;
      padding: 10px;

      .name1,
      .name2 {
        display: flex;
        flex-direction: column;
        font-size: larger;
        /* width: 100%; */
        margin-right: 10px;
        padding:20px;
        gap: 10px;
        color:rgb(249, 118, 17);
        input {
          /* width: 100%; */
        }
      }
    }
  }

  .password {
    display: flex;
    flex-direction: column;
    margin: 0px 10px;
    padding: 20px;
    >div{
      display: flex;
    }
  }
}

 
  .fifth_div{
  background:#0E4D92;
  color:white;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
   
  .fifth_box{
    margin:40px;
    padding:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    /* width:50%; */
   justify-content:center; 
 

  }
}
.btnn{
  padding:10px;
  border-radius:50px;
  font-size:medium;
  border-color:transparent;
  width:150px;
  font-size: medium;
  color:#ffffff;
  background:rgb(255 94 0);
  margin:20px;              
}
.btnn:hover{
  color:#F0F8FF;
  background:blue;
  cursor:pointer;
}
@media (max-width: 768px) {
  .first_box1 > div,
  .company > div,.password {
    flex-direction: column;
  }

  .name,
  .name1,
  .name2 {
    width: 100%;
    margin-right: 0;
  }

  .name input,
  .name1 input,
  .name2 input {
    width: calc(100% - 28px);
  }

  .fifth_box {
    margin: 20px;
  }
}


`
