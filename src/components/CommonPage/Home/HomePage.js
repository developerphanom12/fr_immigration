import React from 'react'
import styled from 'styled-components'
import HomeFirst from './HomeFirst'
// import { useNavigate } from 'react-router-dom'
import HomeSec from './HomeSec'
import HomeThird from './HomeThird'
import HomeFour from './HomeFour'

export default function HomePage() {
  // const navigate = useNavigate()
  return (
    <Root>
      <HomeFirst/>
      <HomeSec/>
      <HomeThird/>
      <HomeFour/>
    </Root>
  )
}
const Root = styled.section`
display:flex;
flex-direction:column;

overflow:hidden;
width: 100%;
max-width: 95vw;
margin: 80px 30px 30px 30px;
@media (max-width:899px){
  margin:40px 10px 10px 10px;
}

`
