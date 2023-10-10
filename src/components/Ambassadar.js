import React from 'react'
import styled from 'styled-components';
import picc  from './imageLogo/ambassdor.jpg.png';
import four1  from './imageLogo/knowledge.jpg.png';
import four2  from './imageLogo/incentiv.png';
import four3  from './imageLogo/counseller.jpg.png';


export default function Ambassadar() {
  return (
    <Root>
  <div className='first_div'>
    <div className='first_box1'> <h2 className='h2'>Join our <br/> Ambassador Program</h2> 
    <p>Are you a Phanom Alumni? Join our Ambassador Program and <br/>play 
    a role in helping students keen to study abroad</p></div>
    <div className='first_box2'><img src ={picc} alt = 'image'/></div>
  </div>
 <div className='second_div'>
    <div className='second_box1'><h2 className='h2'>What is the<br/> Phanom Ambassador<br/> Program?</h2></div>
    <div className='second_box2'><p>The Phanom Ambassador Program is designed for all existing Phanom students and Alumni looking for the opportunity to get involved. Phanom ambassadors connect with recruitment partners and prospective students to share their personal experiences abroad and aid students in their decision making processes while gaining industry knowledge and exposure</p></div>
 </div>
 <div className='third_div'><h2>Become an Ambassador</h2> 
        <p>Connect with us today for the opportunity to become a certified career counsellor while helping promote<br/> study abroad to overseas students</p>
        <div className='third_box'>
        <button  className='third_box1'>Join The Program</button>
        <button  className='third_box1'>SIGN IN</button>
        </div>
        </div>
 <div className='fourth_div'>
  <div className='fourth_head'> <h2>The Benefits for You</h2></div>
  <div className='fourth_body'>
    <div className='body_box1'><div><div><img src ={four1} alt = 'image'/></div><h3>Industry specific knowledge</h3></div></div>
    <div className='body_box1'><div><div><img src ={four2} alt = 'image'/></div><h3>Earn attractive incentives</h3></div></div>
    <div className='body_box1'><div><div><img src ={four3} alt = 'image'/></div><h3>Become a certified career counsellor</h3></div></div>
  </div>
 </div>
 <div className='fifth_div'>
  <div className='fifth_box'><div><h2>Get in Touch</h2></div>
  <p>If you have any questions, concerns or requests for further information, please send us a<br/> message and a member of our team will get in touch with you</p></div>
  <div  className='fifth_box'><button className='btnn'>Learn More</button></div>
 </div>
    </Root>
  )
}
const Root = styled.section`
display:flex;
overflow:hidden;
width:100%;
flex-direction:column;
align-items:center;
.first_div{
    background:#fff3ee;
    display:flex;
    justify-content:space-between;
    /* margin:0px 0px 40px 0px; */
    .first_box1{
      .h2{
        color:#000080;
        padding:20px 0px 20px 0px;
      }
        padding:70px 0px 0px 20px;
        margin-left:70px;
        font-size:medium;
        text-align:center;
    }
    .first_box2{
        padding-right:70px;
        margin-right:40px;

      >img{
        height:500px;
        width:500px;
        border-radius:100px;
      }
    }
}
@media (max-width: 768px) {
    .first_div {
        flex-direction: column;

        .first_box1 {
            padding: 20px;
            margin-left: 20px;
            font-size: medium;
        }

        .first_box2 {
            padding: 20px;
            margin-right: 20px;

            > img {
                max-width: 100%;
                height: auto;
                border-radius: 50%;
            }
        }
    }
}

.second_div{
  display:flex;
  width:auto;
  padding:0px 20px 70px 20px;
  flex:1;
  .second_box1{
    display:flex;
    /* align-items:center; */
    justify-content:center;
    width:90%;
  padding:20px 20px 0px 20px;

    .h2{
        color:#000080;
        padding:20px 0px 20px 0px;
      }
  }
  .second_box2{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
  padding:20px 20px 20px 20px;

  }
}
@media (max-width: 768px) {
    .second_div {
        flex-direction: column;

        .second_box1 {
            padding: 20px;
            margin-left: 20px;
            font-size: medium;
        }

        .second_box2 {
            padding: 20px;
            margin-right: 20px;
        }
    }
}

.third_div{
  /* margin:20px 100px ; */
  background:rgb(255 94 0);
  color:#ffffff;
  display:flex;
  flex-direction:column;
  border-radius:40px;
  align-items:center;
  padding:20px;
  
  .third_box{
  padding:10px;
  flex-wrap:wrap;
  display: flex;
  justify-content: space-evenly;
  width:50%;
}
.third_box1{
  padding:10px;
  border-radius:10px;
  font-size:medium;
  border-color:transparent;
  color:blue;
}
.third_box1:hover{
  color:#ffffff;
  background:blue;
  cursor:pointer;
}
}
@media (max-width: 768px) {
  .third_div {
    margin: 10px;  
    border-radius: 10px;  
  }

  .third_box1 {
    padding: 5px;  
    border-radius: 5px;  
  }
}
.fourth_div{
  background:#fff3ee;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:#000080;
  padding:20px;
  width:100%;
  
  img{
    max-width: 100%;  
  height: auto;  
  width: 100px;  
  max-height: 100px;
  }
 .fourth_head{
  font-size:larger;
 }
 .fourth_body{
  align-items:center;
  display:flex;
   .body_box1{
    width:100%;
    gap:20px;
    display:flex;
    flex-direction: column;  
   align-items: center;  
   justify-content: center; 
    >div{
      padding:10px;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
    }
   }

 }
 

}
.fifth_div{
  background:#0E4D92;
  color:white;
  display:flex;
  justify-content:space-between;
  width:100%;
   
  .fifth_box{
    margin:40px;
    padding:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    /* width:50%; */
   justify-content:center; 
  .btnn{
  padding:20px;
  border-radius:30px;
  font-size:medium;
  border-color:transparent;
  color:#ffffff;
  background:rgb(255 94 0);
}
.btnn:hover{
  color:blue;
  background:#F0F8FF;
  cursor:pointer;
}

  }
}



`