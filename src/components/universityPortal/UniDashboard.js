import React from 'react'
import styled from 'styled-components'

export default function UniDashboard() {
  return (
    <Root>
      <h1>WELCOME TO DASHBOARD</h1>


    </Root>
  )
}
const Root = styled.section`
padding-left: 80px;
    @media (max-width:788px){
      padding-left: 60px;
    }
`
