import React from 'react'
import styled from 'styled-components'

export default function StuDashboard() {
  return (
    <Root>
        
        <h2>Dashboard</h2>

    </Root>
  )
}
const Root = styled.section`
 padding-left: 90px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  h2{
    text-shadow: 5px 6px 6px gray;
  }
`
