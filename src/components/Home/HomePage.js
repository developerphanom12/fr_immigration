import React from 'react'
import styled from 'styled-components'
import HomeFirst from './HomeFirst'
import { useNavigate } from 'react-router-dom'
import HomeSec from './HomeSec'
import HomeThird from './HomeThird'
import HomeFour from './HomeFour'

export default function HomePage() {
    const navigate = useNavigate( )
  return (
    <Root>
        <div><HomeFirst/></div>
        <div> <HomeSec/></div>
        <div> <HomeThird/></div>
        <div> <HomeFour/></div>
    </Root>
  )
}
const Root = styled.section`
display:flex;
flex-direction:column;
background:blue;
`
