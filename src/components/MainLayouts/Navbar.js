import styled from 'styled-components'
import Login from '../Login'
import { useNavigate } from 'react-router-dom'
import logo from '../imageLogo/phanom.jpg'


export default function Navbar() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/Login')
  }
  
    return (
      <Root>
         <div className='logo'><img src={logo} alt = 'image'/>
            </div>
        <div className='logged_nav'>
            {/* <div className='opt_div'><button className='opt_btn' >Universities</button></div>
            <div className='opt_div'><button className='opt_btn'  >Our Reach</button></div>
            <div className='opt_div'><button className='opt_btn'  >Be our Ambassador</button></div>
            <div className='opt_div'><button className='opt_btn' >Be a partner</button></div> */}
           {/* <div className='opt_div2'> <button className='user_btn2' onClick={() => { handleLoginClick() }}>Login </button></div> */}
          <div className='profile_div'>
            {/* <img className='user_profile' src={'images/fosla.png'}/> */}
          </div>
        </div>
      </Root>
    )
  }
  
  const Root = styled.section`
 background:#ffffff;
 .logo{
    width: 200px;
    background-color: yellow;
    img{
        width:100%;
    }
}
 .logged_nav{
  gap:10px;
 display:flex;
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
  .opt_btn2{
    margin-left:10px;
  }

 }
 .user_btn2{
  background:#FF7F50;
  color:#ffffff;
  padding:10px 30px 10px 30px;
  border-radius:10px;
  border-color:transparent;
  font-size:larger;
  cursor:pointer;

 }
 }
 .opt_btn:hover{
  background:#FF7F50;
  color:#ffffff;
 }
 .user_btn2:hover{
  background:green;
 }

  `
  