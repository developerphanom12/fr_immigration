import React from 'react'
import styled from 'styled-components';
import { FaArrowRightLong } from 'react-icons/fa6';
import photo1 from '../imageLogo/edu.jpg';
import photo2 from '../imageLogo/hat-icon.png';
import photo3 from '../imageLogo/imggg.png';
import photo4 from '../imageLogo/hat-icon2.png';

export default function HomeThird() {
  return (
    <Root>

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
    </Root>
  )
}
const Root = styled.section`
.four_main_div {
  background: #fff3ee;
  display: flex;
  flex-direction: column;
  font-size: larger;
  margin: 20px;  
  padding: 20px;  
  justify-content:space-evenly;
  align-items:center;
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
  width:100%;
  gap: 20px;  
  margin: 20px 0; 
  justify-content:space-evenly;

}

.four_1 {
  display: flex;
  align-items: center;
  justify-content: center;
  /* max-width: 100%;   */
  >img {
    width:100%;
    min-width:50px;
    height:100%;
    min-height:50px;
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

 
@media (max-width: 999px) {
  .fourrr {
    flex-direction:column;
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
`
