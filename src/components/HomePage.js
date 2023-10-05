import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {RxEnter} from 'react-icons/rx';
import {FaArrowRightLong} from 'react-icons/fa6';
import {AiOutlineSearch} from 'react-icons/ai';
import photo1 from '../imageLogo/edu.jpg';
import photo2 from '../imageLogo/hat-icon.png';
import photo3 from '../imageLogo/imggg.jpg';
import photo4 from '../imageLogo/hat-icon2.png';
import photo11 from '../imageLogo/target.jpg';
import photo12 from '../imageLogo/globalll.jpg';
import photo13 from '../imageLogo/brand.jpg';
import photo14 from '../imageLogo/support.jpg';
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
         <p>Through our network, industry knowledge, and personalized business solutions,<br/> we enable Universities and Recruitment Partners to effortlessly <br/>navigate the recruitment process while achieving their targets.</p>
         <div className='search'>
          <input className='searchbar' type="text" placeholder="Type University Name..." value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
           <button className='searchbar2' onClick={handleSearch}><AiOutlineSearch/>ADVANCED SEARCH</button>
          </div>
         </div>
      </div>
      <div className='sndbox'>
        <div className='snd1'><h2>Our Global <br/> Network of <br/> 400+ <br/> Universities</h2>
           Explore Institutions..... <RxEnter/>
        </div>
        <div className='snd2'>img</div>

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
          <div  className='fivebox'> <img src ={photo11} alt = 'image'/><h4>Strategic Consultation</h4>Action plan is curated, bespoke to fit your strategic objectives</div>
          <div  className='fivebox'><img src ={photo12} alt = 'image'/> <h4>Global Networking</h4>Unlock access to verified leads from over 50 countries</div>
          <div  className='fivebox'>  <img src ={photo13} alt = 'image'/> <h4>Brand Development</h4>Implementation of marketing strategies and promotions, delivering awareness from key stakeholders</div>
          <div  className='fivebox'> <img src ={photo14} alt = 'image'/> <h4>24*7 CRM Support </h4>Rigorous and reliable, our software processes and manages your applications</div>
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
 height:450px;
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
}
.sndbox{
  display:flex;
  margin:40px;
  padding:20px;
  color:#4169E1;
 .snd1{
  width:300px;
 }
 .snd2{
  width:1000px;
  border-left: 2px solid black;
  padding:10px;
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
  margin:0px 80px 0px 80px;
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
  width:1200px;
    gap:20px;
  .fivebox{
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
    border-radius:20px;
    flex:1;
  >img{
    width:130px;
    height:130px;
    background:#F8F8FF;
  }
  }
}
}
`
