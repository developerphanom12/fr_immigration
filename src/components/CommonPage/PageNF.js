import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

export default function PageNF() {
    const navigate = useNavigate();
  return (
    <Root>
        <h2>This Page Is Not Found</h2>
        <button onClick={()=>{navigate(-1)}} >Back To Previous Page</button>

    </Root>
   
  )
} 
const Root = styled.section`
position:relative;
top:80px;
padding: 20px;
`

