import React from 'react'
import styled from 'styled-components';
import { RxEnter } from 'react-icons/rx';
import pic1 from '../imageLogo/unipic1.jpg';
import pic2 from '../imageLogo/unipic2.jpg';
import pic3 from '../imageLogo/unipic3.jpg';
import pic4 from '../imageLogo/unipic4.jpg';
import pic5 from '../imageLogo/unipiv5.jpg';
import pic6 from '../imageLogo/unipic6.jpg';
import pic7 from '../imageLogo/unipic7.jpg';

export default function HomeSec() {
    return (
        <Root>
            <div className='sndbox'>
                <div className='snd1'><h2>Our Global <br /> Network of <br /> 400+ <br /> Universities</h2>
                    Explore Institutions..... <RxEnter />
                </div>
                <div className='snd2'>
                    <div className='pic'><img src={pic1} alt='image' /></div>
                    <div className='pic'><img src={pic2} alt='image' /></div>
                    <div className='pic'><img src={pic3} alt='image' /></div>
                    <div className='pic'><img src={pic4} alt='image' /></div>
                    <div className='pic'><img src={pic5} alt='image' /></div>
                    <div className='pic'><img src={pic6} alt='image' /></div>
                    <div className='pic'><img src={pic7} alt='image' /></div>
                </div>

            </div>
            <div className='thirdbox'><h2>The Access You Need</h2>We provide you with the access you need to drive
                your key strategic targets.<br /> Get connected with us today to leverage the rich collaboration between university,<br />
                education consultant and student
                <div className='third'>
                    <button className='third1'>Join Us</button>
                    <button className='third1'>Sign In</button>
                </div>
            </div>

        </Root>
    )
}
const Root = styled.section`
.sndbox{
  display:flex;
  margin:40px;
  padding:20px;
  color:#4169E1;
  
 .snd1{
  width:300px;
 }

.snd2 {
  display: flex;
  flex: 1;
  border-left: 2px solid black;
  padding: 10px;
  gap: 30px;
  position: relative; 
  overflow: hidden;  

  .pic {
    width: 180px;
    height: 180px;
    position: relative;  
  }

  .pic > img {
    width: 130px;
    height: 130px;
    position: absolute;
    left: 0;  
    animation: slideLeft 5s infinite;  
  }

  @keyframes slideLeft {
    0% {
      left: 0;  
    }
    25% {
      left: -200px;  
    }
    50% {
      left: -400px; 
    }
    75% {
      left: -600px; 
    }
    100% {
      left: -800px;  
    }
  }
}

}
display : flex;
flex-direction:column;
@media (max-width: 999px) {
    .sndbox {
      padding: 10px;
      .snd1 {
        min-width:60px;
        width: 100%;
      }

      .snd2 {
        display:flex;
        min-width:60px;
        width: 100%;
        .pic {
          width: 100%;
          min-width:50px;
          text-align: center;

          img {
            width: 70%;
          }
        }
      }
    }

  } 


.thirdbox {
  margin: 40px; 
  padding: 20px; 
  background: rgb(255 94 0);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  align-items: center;
}

.third {
  padding: 10px;
  display: flex;
  align-items: center;  
  gap: 10px;  
  max-width: 300px;  
  width: 100%;  
}

.third1 {
  padding: 10px 20px; 
  border-radius: 30px;
  font-size: medium;
  border-color: transparent;
  color: blue;
  cursor: pointer;
  text-align: center;  
}

@media (max-width: 999px) {
  .thirdbox {
    margin: 20px;  
    padding: 10px;  
  }

  .third {
    max-width: none; 
  }
}

`
