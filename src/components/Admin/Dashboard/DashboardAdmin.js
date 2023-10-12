import React from 'react'
import styled from 'styled-components';
export default function DashboardAdmin() {
  return (
    <Root>
     WELCOME TO DASHBOARD
     <div className='flags'>
      <div> Russia</div>
      <div> Canada</div>
      <div> United States</div>
      <div> Mexico</div>
      <div> China</div>
     </div>
     <div className='dashboard_details'>
      <div className='details'>
      <div>div1</div>
      <div>div2</div>
      <div>div3</div>
      <div>div4</div>
      </div>
     </div>
    </Root>
  )
}
const Root = styled.section`
display:flex;
flex-direction:column;
.flags{
  display:flex;
  background-color: aqua;
  height: 40px;
  margin:10px 0px;
  padding: 0%;
  >div{
    width:120px;
  }
}
.dashboard_details{
  background-color:pink;
  display: flex;
  height: 80px;
 >div{
  
 }
}
`
