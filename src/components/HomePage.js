import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RxEnter } from 'react-icons/rx';
import { FaArrowRightLong } from 'react-icons/fa6';
import { AiOutlineSearch } from 'react-icons/ai';
import { PiNumberSquareOneLight } from 'react-icons/pi';
import { PiNumberSquareTwoLight } from 'react-icons/pi';
import { PiNumberSquareThreeLight } from 'react-icons/pi';
import { PiNumberSquareFourLight } from 'react-icons/pi';
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
import pic1 from '../imageLogo/unipic1.jpg';
import pic2 from '../imageLogo/unipic2.jpg';
import pic3 from '../imageLogo/unipic3.jpg';
import pic4 from '../imageLogo/unipic4.jpg';
import pic5 from '../imageLogo/unipiv5.jpg';
import pic6 from '../imageLogo/unipic6.jpg';
import pic7 from '../imageLogo/unipic7.jpg';
import six1 from '../imageLogo/six1.jpg';
import six2 from '../imageLogo/six2.jpg';
import six3 from '../imageLogo/six3.jpg';
import six4 from '../imageLogo/six4.jpg';
import six5 from '../imageLogo/six5.jpg';
export default function HomePage({ onSearch }) {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };
  const userDetails = useSelector((state) => state?.user?.userData)
  const userCheck = useSelector((state) => state?.user?.userCheck)



  console.log("userr", userDetails, userCheck)
  return (
    <Root>

      <div className='firstbox'>
        <div className='line'>
          <h3 className='line1'>Your Gateway to Global Connection</h3>
          <h2 className='line2'>The Ultimate Destination for <br /> Universities and Strategic Recruitment Partnerships</h2>
          Through our network, industry knowledge, and personalized business solutions,<br />
          we enable Universities and Recruitment Partners to effortlessly <br />
          navigate the recruitment process while achieving their targets.
          <div className='search'>
            <input className='searchbar' type="text" placeholder="Type University Name..." value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
            <button className='searchbar2' onClick={handleSearch}><AiOutlineSearch />ADVANCED SEARCH</button>
          </div>
        </div>
        <div className='photuuu'>
          <div className='photu1'><img src={photu1} alt='image' /></div>
          <div className='photu'></div>
          <div className='photu3'><img src={photu2} alt='image' /></div>
          <div className='photu'></div>
          <div className='photu'></div>
          <div className='photu2'><img src={photu3} alt='image' /></div>
          <div className='photu'><h4 className='h4'>80,000+ courses</h4></div>
          <div className='photu1'><img src={photu4} alt='image' /></div>
          <div className='photu3'><img src={photu5} alt='image' /></div>
          <div className='photu'></div>
          <div className='photu4'><img src={photu6} alt='image' /></div>
          <div className='photu'></div>
          <div className='photu'></div>
          <div className='photu4'><img src={photu7} alt='image' /></div>
          <div className='photu2'><h4 className='h4'>500,000+ Students</h4></div>
          <div className='photu1'><img src={photu8} alt='image' /></div>
        </div>

      </div>
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
      <div className='four_main_div'><div className='global'><h2>Global Connectivity with Phanom Professionals</h2></div>
        <div className='fourrr'>
          <div className='four_1'> <img src={photo1} alt='image' /></div>
          <div className='four_2'> <img src={photo2} alt='image' /><h2> For our Recruitment Partners</h2><br />
            <div className='arrow'><FaArrowRightLong />Connect with over 400 Universities<br /> </div>
            <div className='arrow'><FaArrowRightLong />Help students make better choices<br /> </div>
            <div className='arrow'><FaArrowRightLong />Expand and manage key relationships<br /> </div>
            <div className='arrow'> <FaArrowRightLong />Access best in class training<br /> </div>
            <div className='arrow'> <FaArrowRightLong />Leverage reliable assistance with applications </div>
            <div className='btn'> <button className='btnn'>Learn More</button></div>
          </div>
        </div>
        <div className='fourrr'>
          <div className='four_2'><img src={photo4} alt='image' /> <h2>For our Universities</h2><br />
            <div className='arrow'><FaArrowRightLong />Connect with over 1,500 trusted overseas consultants<br /> </div>
            <div className='arrow'><FaArrowRightLong />Hit internationalisation strategy milestones<br /> </div>
            <div className='arrow'><FaArrowRightLong />Raise brand awareness across over 50 countries<br /> </div>
            <div className='arrow'> <FaArrowRightLong />Gain exposure to prospective students globally<br /> </div>
            <div className='arrow'> <FaArrowRightLong />Leverage admissions process management </div>
            <div className='btn'> <button className='btnn'>Learn More</button></div>
          </div>
          <div className='four_1'> <img src={photo3} alt='image' /></div>
        </div>
      </div>
      <div className='main_five'>
        <div className='five1'><h2>How We Work</h2><br /><h3>For Universities</h3></div>
        <div className='five2'>
          <div className='fivebox'><PiNumberSquareOneLight /><img src={photo11} alt='image' /><h4>Strategic Consultation</h4>Action plan is curated, bespoke to fit your strategic objectives</div>
          <div className='fivebox'><PiNumberSquareTwoLight /><img src={photo12} alt='image' /> <h4>Global Networking</h4>Unlock access to verified leads from over 50 countries</div>
          <div className='fivebox'><PiNumberSquareThreeLight /><img src={photo13} alt='image' /> <h4>Brand Development</h4>Implementation of marketing strategies and promotions, delivering awareness from key stakeholders</div>
          <div className='fivebox'><PiNumberSquareFourLight /><img src={photo14} alt='image' /> <h4>24*7 CRM Support </h4>Rigorous and reliable, our software processes and manages your applications</div>
        </div>

      </div>
      <div className='main_six'><h3 className='h3'>For Recruitment Partners</h3>
        <div className='six1'>
          <div className='sixx_div1'><img className='img' src={six1} alt='image' /><h5>User-Friendly Portal</h5>
            <p>For reliable, convenient and centralised management of your applications</p></div>
          <div className='sixx_div1'><img className='img' src={six2} alt='image' /><h5>Powerful Search Tools</h5>
            <p>Hit your targets and quotas with our requirement specific search tools</p></div>
          <div className='sixx_div1'><img className='img' src={six3} alt='image' /><h5>Seamless Application Management</h5>
            <p>End-to-end verification, processing and management of student applications</p></div>
        </div>
        <div className='six2'>
          <div className='sixx_div2'><img className='img' src={six4} alt='image' /><h5>Complete VISA Assistance</h5>
            <p>Leverage our high success rates with end-to-end support<br /> with visa processing</p></div>
          <div className='sixx_div2'><img className='img' src={six5} alt='image' /><h5>Help Students Better</h5>
            <p>Secure target enrolment and strategic objectives with our industry<br />
              leading service helping you help students choose better</p></div>
        </div>
      </div>

    </Root>
  )
}
const Root = styled.section`
display : flex;
flex-direction:column;
@media (max-width: 999px) {
  .firstbox {
    margin: 20px;
    height: auto;
    padding: 20px;
    display:flex;
    flex-direction: column;


    .photuuu {
      flex-direction: column;
    }

    .sndbox {
      flex-direction: column;
      align-items: center;
      margin: 20px;
      padding: 10px;

      .snd1 {
        width: 100%;
      }

      .snd2 {
        flex-direction: column;

        .pic {
          width: 100%;
          text-align: center;

          img {
            width: 70%;
          }
        }
      }
    }

  } 
  
  .main_five {
    flex-direction: column;
    align-items: center;
    margin: 20px;

    .five2 {
      flex-direction: column;

      .fivebox {
        padding: 10px;
        width: 100%;

        img {
          width: 100%;
          transition: transform 0.4s;

          &:hover {
            transform: scale(1.5);
          }
        }
      }
    }
  }

  .main_six {
    flex-direction: column;
    padding: 20px;

    .h3 {
      justify-content: center;
    }

    .six1,
    .six2 {
      flex-direction: column;
      align-items: center;
      padding: 10px;

      .sixx_div1,
      .sixx_div2 {
        flex-direction: column;
      }
    }

    img {
      height: 50px;
      transition: transform 0.4s;

      &:hover {
        transform: scale(1.5);
      }
    }
  }
}

.firstbox{
  background:#fff3ee;
  margin:40px;
  font-size:larger;
 height:550px;
 display:flex;
 align-items:center;
.line{
  flex:1;
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
  flex-wrap: wrap;
  .h4{
    display:flex;
   align-items:center;
    padding-left:20px;
   background:orange;
   border-radius:50%;
   margin:0;
  }
  >div{
    display:flex;
    flex:1;
    min-height:130px;
    min-width:140px;
    >img{
      height:130px;
      width:140px;
    }
  }

  .photu2{
    animation: slideshow 4s infinite; 
  opacity: 0;
  }
  .photu1{
    animation: slideshow 5s infinite; 
  opacity: 0;
  }
  .photu3{
    animation: slideshow 6s infinite; 
  opacity: 0;
  }
  .photu4{
    animation: slideshow 4s infinite; 
  opacity: 0;
  }

/* .one{
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
} */

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
  /* flex-direction: column;   */
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

@media (max-width: 777px) {
  .thirdbox {
    margin: 20px;  
    padding: 10px;  
  }

  .third {
    max-width: none; 
  }
}

 


.four_main_div {
  background: #fff3ee;
  display: flex;
  flex-direction: column;
  font-size: larger;
  margin: 20px;  
  padding: 20px;  
}

.global {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fourrr {
  display: flex;
  /* flex-direction: column;   */
  align-items: center; 
  gap: 20px;  
  margin: 20px 0; 
}

.four_1 {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;  
  > img {
    max-width: 60%;  
    height: auto;
  }
}

.four_2 {
  max-width: 100%; 
  color: blue;
}

.arrow {
  width: 100%;  
  padding: 10px;
  display: flex;
  align-items: center;  
  gap: 10px;  
}

.btn {
  padding: 10px;
  display: flex;
  justify-content: center;  
  gap: 10px;  
  width: 100%;  
}

.btnn {
  padding: 10px 20px;  
  border-radius: 30px;
  font-size: medium;
  border-color: transparent;
  color: #ffffff;
  background: blue;
  cursor: pointer;
  text-align: center; 
}

.photo {
  display: flex;
  justify-content: center;  
}

 
@media (max-width: 768px) {
  .fourrr {
    gap: 10px;  
    margin: 20px 0;  
  }

  .arrow {
    width: 100%;  
  }

  .btn {
    gap: 5px;  
  }
}

.main_five{
  display:flex;
  flex-wrap:wrap;
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
  flex-wrap: wrap;
  justify-content:center;
  flex-direction:column;
  padding:40px;
   
  h5{
    display:flex;
  justify-content:center;
  }
  p{
    color:black;
  }
 .h3{
  display:flex;
  flex:1;
  align-items:center;
  justify-content:center;
  
   
 }
 .six1{
  display:flex;
  padding:10px;
  height:200px;
  justify-content:space-evenly;
  .sixx_div1{
    display:flex;
    justify-content:center;
   align-items:center;
    flex-direction:column;
    padding:10px;
      
  }

 }
 .six2{
  display:flex;
  justify-content:space-evenly;
  height:200px;
  padding:10px;
  .sixx_div2{
    display:flex;
    flex-direction:column;
    padding:10px;
    justify-content:center;
   align-items:center;
   
   
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

@media (max-width: 768px) {
  .firstbox,
  .sndbox,
  .four_main_div,
  .main_five,
  .main_six {
    margin: 10px;
    padding: 10px;
    font-size: medium;
  }

  .firstbox {
    height: auto;

    .search {
      width: 100%;
    }

    .photuuu {
      .photu > img {
        /* height: 100px;
        width: 100px; */
      }
    }

    .four_main_div {
      margin: 0px;
      font-size: medium;

      .four_1 > img {
        height: auto;
        width: 100%;
      }
    }
  }

  .sndbox {
    .snd1 {
      width: 100%;
    }
  }

  .main_five {
    .five2 {
      .fivebox {
        width: 100%;
        padding: 10px;

        img {
          width: 100%;
          transition: transform 0.4s;

          &:hover {
            transform: scale(1.5);
          }
        }
      }
    }
  }

  .main_six {
    h5 {
      font-size: medium;
    }

    .h3 {
      img {
        height: 50px;
        transition: transform 0.4s;

        &:hover {
          transform: scale(1.5);
        }
      }
    }
  }
}
.firstbox {
  background: #fff3ee;
  margin: 20px; 
  font-size: larger;
  min-height: 100vh; 
  display: flex;
  /* flex-direction: column; */
}

.line {
  margin: 20px;  
  display: flex;
  flex-direction: column;  
  align-items: center;  
}

.line1 {
  color: #ff7f50;
}

.line2 {
  color: #6495ed;
}

.search {
  width: 100%;  
  max-width: 450px; 
  margin: 20px;  
  display: flex;
  flex-direction: column;  
  align-items: center; 
}

.searchbar {
  height: 40px;
  border-radius: 20px;
  border-color: transparent;
  width: 100%; 
}

.searchbar2 {
  background: #1e90ff;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  border-color: transparent;
  margin-top: 4px;
  padding: 5px;
  width: 100%; 
}

.photuuu {
  display: flex;
  flex: 1;
  /* flex-direction: column;  */
  align-items: center;  
}

.h4 {
  display: flex;
  align-items: center;
  padding-left: 20px;
  background: orange;
  border-radius: 50%;
  margin: 0;
  height: 40px;
  width: 40px; /* Adjust size for smaller screens */
}

.photu {
  display: flex;
  flex: 1;
  /* flex-direction: column;  */
  align-items: center; /* Center align for smaller screens */
}

.photu > img {
  height: 130px;
  width: 140px;
}

/* Responsive styles for screens with a maximum width of 768px */
@media (max-width: 768px) {
  .firstbox {
    min-height: auto; /* Reset min-height for smaller screens */
  }

  .line {
    margin: 10px; /* Further reduce margin for smaller screens */
  }

  .search {
    max-width: 100%; /* Remove maximum width limit for smaller screens */
    margin: 10px; /* Further reduce margin for smaller screens */
  }

  .searchbar2 {
    width: auto; /* Reset width for smaller screens */
  }

  .photuuu {
    align-items: flex-start; /* Adjust alignment for smaller screens */
  }

  .h4 {
    height: 30px; /* Adjust size for smaller screens */
    width: 30px; /* Adjust size for smaller screens */
  }

  .photu > img {
    height: 100px; /* Adjust image size for smaller screens */
    width: 100px; /* Adjust image size for smaller screens */
  }
}


`
