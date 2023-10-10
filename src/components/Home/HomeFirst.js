import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
// import photu1 from '../imageLogo/div1.png';
import photu2 from '../imageLogo/div2.png';
import photu3 from '../imageLogo/div3.png';
import photu4 from '../imageLogo/div4.png';
import photu5 from '../imageLogo/div5.png';
import photu6 from '../imageLogo/div6.png';
import photu7 from '../imageLogo/div7.png';
import photu8 from '../imageLogo/div8.png';

export default function HomeFirst({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };
   
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
                    {/* <div className='photu1'><img src={photu1} alt='image' /></div> */}
                    <div className='photu'></div>
                    <div className='photu3'><img src={photu2} alt='image' /></div>
                    <div className='photu'></div>
                    <div className='photu2'><img src={photu3} alt='image' /></div>
                    <div className='photu'></div>
                    <div className='photu'><h4 className='h4'>80,000+ courses</h4></div>
                    <div className='photu3'><img src={photu3} alt='image' /></div>
                    <div className='photu'></div>
                    <div className='photu1'><img src={photu4} alt='image' /></div>
                    <div className='photu'></div>
                    <div className='photu3'><img src={photu5} alt='image' /></div>
                    <div className='photu4'><img src={photu6} alt='image' /></div>
                    <div className='photu'></div>
                    <div className='photu4'><img src={photu7} alt='image' /></div>
                    <div className='photu'><h4 className='h4'>500,000+ Students</h4></div>
                    <div className='photu1'><img src={photu8} alt='image' /></div>
                </div>
            </div>


        </Root>
    )
}
const Root = styled.section`
display:flex;
flex-direction:column;
.firstbox{
  background:#fff3ee;
  padding:30px;
  font-size:larger;
 display:flex;
 flex-wrap:wrap;
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
      flex-wrap:wrap;
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
  h4{
  display:flex;
  align-items:center;
  /* padding-left:20px; */
  background:orange;
   border-radius:50%;
  margin:0;
  }
  .photuuu{
    display:flex;
    flex:1;
    /* width:100%;
    min-width:100px;
    height:100%;
    min-height:100px; */
   flex-wrap: wrap;
    >div{
      display:flex;
     flex:1;
     flex-wrap: wrap;
     min-height:130px;
     min-width:140px;
      >img{
        /* width:100%;
       min-width:50px;
       height:100%;
        min-height:50px; */
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
   } */

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

@media (max-width: 999px) {
  .firstbox { 
    display:flex;
    flex-wrap:wrap;
    flex-direction: column;
  }

  .line {
    display:flex;
    flex-wrap:wrap;
    width:100%;
    margin: 20px 0;
    .search {
    }
  }

  .photuuu {
    display:flex;
    flex-wrap:wrap;
    /* width:100%;
    min-width:100px;
    height:100%;
    min-height:100px; */
    /* display:none; */
    /* flex-direction: column; */
    align-items: center;
    > div {
      min-width:50px;
      width:100%;
      margin-bottom: 20px;
    }
  }
}
`
