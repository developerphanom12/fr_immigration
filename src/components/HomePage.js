import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {RxEnter} from 'react-icons/rx';
import {FaArrowRightLong} from 'react-icons/fa6';
import {AiOutlineSearch} from 'react-icons/ai';
import {PiNumberSquareOneLight} from 'react-icons/pi';
import {PiNumberSquareTwoLight} from 'react-icons/pi';
import {PiNumberSquareThreeLight} from 'react-icons/pi';
import {PiNumberSquareFourLight} from 'react-icons/pi';
import photo1 from '../imageLogo/edu.jpg';
import photo2 from '../imageLogo/hat-icon.png';
import photo3 from '../imageLogo/imggg.jpg';
import photo4 from '../imageLogo/hat-icon2.png';
import photo11 from '../imageLogo/target.jpg';
import photo12 from '../imageLogo/globalll.jpg';
import photo13 from '../imageLogo/brand.jpg';
import photo14 from '../imageLogo/support.jpg';
import photu1 from '../imageLogo/div1.jpg';
import photu2 from '../imageLogo/div2.png';
import photu3 from '../imageLogo/div3.png';
import photu4 from '../imageLogo/div4.png';
import photu5 from '../imageLogo/div5.png';
import photu6 from '../imageLogo/div6.png';
import photu7 from '../imageLogo/div7.png';
import photu8 from '../imageLogo/div8.png';
import pic1  from '../imageLogo/unipic1.jpg';
import pic2  from '../imageLogo/unipic2.jpg';
import pic3  from '../imageLogo/unipic3.jpg';
import pic4  from '../imageLogo/unipic4.jpg';
import pic5  from '../imageLogo/unipiv5.jpg';
import pic6  from '../imageLogo/unipic6.jpg';
import pic7  from '../imageLogo/unipic7.jpg';
import six1  from '../imageLogo/six1.jpg';
import six2  from '../imageLogo/six2.jpg';
import six3  from '../imageLogo/six3.jpg';
import six4  from '../imageLogo/six4.jpg';
import six5  from '../imageLogo/six5.jpg';
export default function HomePage({ onSearch }) {
 
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = () => {
      onSearch(searchTerm);
    };
  const userDetails = useSelector((state)=>state?.user?.userData)
  const userCheck = useSelector((state)=>state?.user?.userCheck)



  console.log("userr", userDetails,userCheck)
  return (
    <Root>
      
      <div className='firstbox'>
        <div className='line'>
         <h3 className='line1'>Your Gateway to Global Connection</h3>
         <h2 className='line2'>The Ultimate Destination for <br/> Universities and Strategic Recruitment Partnerships</h2>
         Through our network, industry knowledge, and personalized business solutions,<br/> 
         we enable Universities and Recruitment Partners to effortlessly <br/>
         navigate the recruitment process while achieving their targets.
         <div className='search'>
          <input className='searchbar' type="text" placeholder="Type University Name..." value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
           <button className='searchbar2' onClick={handleSearch}><AiOutlineSearch/>ADVANCED SEARCH</button>
          </div>
            </div>
         <div className='photuuu'>
          <div className='one'>
          <div className='photu'><img src ={photu1} alt = 'image'/></div>
          <div className='photu'></div>
          <div className='photu'><img src ={photu2} alt = 'image'/></div>
          <div className='photu'></div>
          </div>
          <div className='two'>
          <div className='photu'></div>
          <div className='photu'><img src ={photu3} alt = 'image'/></div>
          <div className='photu'><h4 className='h4'>80,000+ courses</h4></div>
          <div className='photu'><img src ={photu4} alt = 'image'/></div>
          </div>
          <div className='three'>
          <div className='photu'><img src ={photu5} alt = 'image'/></div>
          <div className='photu'></div>
          <div className='photu'><img src ={photu6} alt = 'image'/></div>
          <div className='photu'></div>
          </div>
          <div className='four'>
          <div className='photu'></div>
          <div className='photu'><img src ={photu7} alt = 'image'/></div>
          <div className='photu'><h4 className='h4'>500,000+ Students</h4></div>
          <div className='photu'><img src ={photu8} alt = 'image'/></div>
          </div>
         </div>
        
      </div>
      <div className='sndbox'>
        <div className='snd1'><h2>Our Global <br/> Network of <br/> 400+ <br/> Universities</h2>
           Explore Institutions..... <RxEnter/>
        </div>
        <div className='snd2'> 
        <div className='pic'><img src ={pic1} alt = 'image'/></div>
        <div className='pic'><img src ={pic2} alt = 'image'/></div>
        <div className='pic'><img src ={pic3} alt = 'image'/></div>
        <div className='pic'><img src ={pic4} alt = 'image'/></div>
        <div className='pic'><img src ={pic5} alt = 'image'/></div>
        <div className='pic'><img src ={pic6} alt = 'image'/></div>
        <div className='pic'><img src ={pic7} alt = 'image'/></div>
        </div>

      </div>
       <div className='thirdbox'><h2>The Access You Need</h2>We provide you with the access you need to drive 
       your key strategic targets.<br/> Get connected with us today to leverage the rich collaboration between university,<br/>
        education consultant and student
        <div className='third'>
        <button  className='third1'>Join Us</button>
        <button  className='third1'>Sign In</button>
        </div>
        </div>
       <div className='four_main_div'><div className='global'><h2>Global Connectivity with Phanom Professionals</h2></div>
       <div className='fourrr'>
       <div className='four_1'> <img src ={photo1} alt = 'image'/></div>
       <div className='four_2'> <img src ={photo2} alt = 'image'/><h2> For our Recruitment Partners</h2><br/>
       <div className='arrow'><FaArrowRightLong/>Connect with over 400 Universities<br/> </div>
       <div className='arrow'><FaArrowRightLong/>Help students make better choices<br/> </div>
       <div className='arrow'><FaArrowRightLong/>Expand and manage key relationships<br/> </div>
       <div className='arrow'> <FaArrowRightLong/>Access best in class training<br/> </div>
       <div className='arrow'> <FaArrowRightLong/>Leverage reliable assistance with applications </div>
       <div className='btn'> <button className='btnn'>Learn More</button></div>
       </div>
       </div>
       <div className='fourrr'>
       <div className='four_2'><img src ={photo4} alt = 'image'/> <h2>For our Universities</h2><br/>
       <div className='arrow'><FaArrowRightLong/>Connect with over 1,500 trusted overseas consultants<br/> </div>
       <div className='arrow'><FaArrowRightLong/>Hit internationalisation strategy milestones<br/> </div>
       <div className='arrow'><FaArrowRightLong/>Raise brand awareness across over 50 countries<br/> </div>
       <div className='arrow'> <FaArrowRightLong/>Gain exposure to prospective students globally<br/> </div>
       <div className='arrow'> <FaArrowRightLong/>Leverage admissions process management </div>
       <div className='btn'> <button className='btnn'>Learn More</button></div>
       </div>
       <div className='four_1'> <img src ={photo3} alt = 'image'/></div>
       </div>
       </div>
       <div className='main_five'>
        <div className='five1'><h2>How We Work</h2><br/><h3>For Universities</h3></div>
        <div className='five2'>
          <div  className='fivebox'><PiNumberSquareOneLight/><img src ={photo11} alt = 'image'/><h4>Strategic Consultation</h4>Action plan is curated, bespoke to fit your strategic objectives</div>
          <div  className='fivebox'><PiNumberSquareTwoLight/><img src ={photo12} alt = 'image'/> <h4>Global Networking</h4>Unlock access to verified leads from over 50 countries</div>
          <div  className='fivebox'><PiNumberSquareThreeLight/><img src ={photo13} alt = 'image'/> <h4>Brand Development</h4>Implementation of marketing strategies and promotions, delivering awareness from key stakeholders</div>
          <div  className='fivebox'><PiNumberSquareFourLight/><img src ={photo14} alt = 'image'/> <h4>24*7 CRM Support </h4>Rigorous and reliable, our software processes and manages your applications</div>
        </div>

       </div>
       <div className='main_six'><h3 className='h3'>For Recruitment Partners</h3>
        <div className='six1'>
        <div className='sixx_div1'><img src ={six1} alt = 'image'/><h5>User-Friendly Portal</h5>
        <p>For reliable, convenient and centralised management of your applications</p></div>
        <div  className='sixx_div1'><img src ={six2} alt = 'image'/><h5>Powerful Search Tools</h5>
        <p>Hit your targets and quotas with our requirement specific search tools</p></div>
        <div  className='sixx_div1'><img src ={six3} alt = 'image'/><h5>Seamless Application Management</h5>
        <p>End-to-end verification, processing and management of student applications</p></div>
        </div>
        <div className='six2'>
          <div  className='sixx_div2'><img src ={six4} alt = 'image'/><h5>Complete VISA Assistance</h5>
          <p>Leverage our high success rates with end-to-end support<br/> with visa processing</p></div>
          <div  className='sixx_div2'><img src ={six5} alt = 'image'/><h5>Help Students Better</h5>
          <p>Secure target enrolment and strategic objectives with our industry<br/>
             leading service helping you help students choose better</p></div>
        </div>
       </div>
     
    </Root>
  )
}
const Root = styled.section`
display : flex;
flex-direction:column;
height:100vh;
min-height:100%;
.firstbox{
  background:#fff3ee;
  margin:40px;
  font-size:larger;
 height:550px;
 display:flex;
 align-items:center;
 /* width:100%; */

.line{
  margin:100px;
  .line1{
    color:#FF7F50;
  }
  .line2{
    color:#6495ED;
  }
  .search{
    height:48px;
    width:450px;
    border-radius:20px;
    display:flex;
    justify-content:space-between;
    background:#ffffff;
    margin:20px;
    .searchbar{
      height:40px;
      border-radius:20px;
      border-color:transparent;
      
    }
    .searchbar2{
      background:#1E90FF;
      height:40px;
      border-radius:20px;
      cursor:pointer;
      border-color:transparent;
      margin-top:4px;
      padding:5px;
    }
  }
}
.photuuu{
  display:flex;
  flex:1;
  height:100%;
  .h4{
    display:flex;
   align-items:center;
    padding-left:20px;
   background:orange;
   border-radius:50%;
   margin:0;
  }
  .photu{
    display:flex;
    flex:1;
    height:130px;
    width:140px;
    >img{
      height:130px;
      width:140px;
    }
  }
 
.three{
  animation: slideshow 4s infinite; 
  opacity: 0;
}

@keyframes slideshow {
  0%, 100% {
    opacity: 0;
  }
  25%, 75% {
    opacity: 1;
  }
}

.four{
  animation: slideshow 5s infinite; 
  opacity: 0;
}

@keyframes slideshow {
  0%, 100% {
    opacity: 0;
  }
  25%, 75% {
    opacity: 1;
  }
}

.two {
  animation: slideshow 5s infinite;  
  opacity: 0;
}

@keyframes slideshow {
  0%, 100% {
    opacity: 0;
  }
  25%, 75% {
    opacity: 1;
  }
}



.one{
  animation: slideshow 5s infinite alternate; 
  opacity: 0;
}

@keyframes slideshow {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

}
}
.sndbox{
  display:flex;
  margin:40px;
  padding:20px;
  color:#4169E1;
  
 .snd1{
  width:300px;
 }
 /* Add the following CSS code to your stylesheet */

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
.thirdbox{
  margin:80px;
  padding:40px;
  background:rgb(255 94 0);
  color:#ffffff;
  display:flex;
  flex-direction:column;
  border-radius:40px;
  align-items:center;
.third{
  padding:10px;
  display: flex;
  justify-content: space-between;
  width: 200px;
}
.third1{
  padding:20px;
  border-radius:30px;
  font-size:medium;
  border-color:transparent;
  color:blue;
}
.third1:hover{
  color:#ffffff;
  background:blue;
  cursor:pointer;
}

}
.four_main_div{
  background:#fff3ee;
  display:flex;
  flex-direction:column;
  justify-content:center;
  font-size:larger;
  margin:0px 80px 0px 80px;
  .global{
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .fourrr{
   display:flex;
   padding:10px;
   gap:180px;
   margin:0px 40px 0px 40px;

    .four_1{
      display: flex;
      align-items:center;
      justify-content:center;
     >img{
      height:500px;
      width:550px;
     }
    }
    .four_2{
     height:700px;
     width:700px;
     color:blue;
     .arrow{
      width:420px;
      padding:10px;
      display:flex;
      align-items:center;
      gap:10px;
     }
     . btn{
  padding:10px;
  display: flex;
  justify-content: space-between;
  width: 200px;
}
.btnn{
  padding:20px;
  border-radius:30px;
  font-size:medium;
  border-color:transparent;
  color:#ffffff;
  background:blue;
}
.btnn:hover{
  color:blue;
  background:#F0F8FF;
  cursor:pointer;
}
.photo{
  display:flex;
}
    }
  }
}
.main_five{
  display:flex;
  flex-direction:column;
  margin:80px;
  justify-content:center;
  align-items:center;
  margin:20px;

.five1{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
 margin:10px;
}
.five2{
  display:flex;
  align-items:center;
  width:100%;
    gap:20px;
  .fivebox{
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
    border-radius:20px;
    background:#F8F8FF;
    color:#00008B;
    flex:1;
    gap:10px;
  >img{
    width:130px;
    height:130px;
    background:#F8F8FF;
    transition: transform 0.4s;
  }
  &:hover > img {
    transform: scale(1.5); 
    cursor:pointer;
  }
  }
}
}

.main_six{
  background:#fff3ee;
  color:#4169E1;
  display:flex;
  flex-direction:column;
  padding:40px;
 .h3{
  display:flex;
  flex:1;
  align-items:center;
  justify-content:center;
  >p{
    color:black;
  }
   
 }
 .six1{
  display:flex;
  padding:10px;
  height:200px;
  justify-content:space-evenly;
  

  .six_div1{
    display:flex;
    flex:1;
    flex-direction:column;
   border:5px solid black;

  }

 }
 .six2{
  display:flex;
  justify-content:space-evenly;
  height:200px;
  padding:10px;
  .six_div2{
    display:flex;
    flex:1;
    flex-direction:column;   
   
  }
 }
 img {
    height: 80px;
    transition: transform 0.4s;
  
}
  img:hover{
    transform: scale(1.5); 
    cursor:pointer;
  }
}
`
