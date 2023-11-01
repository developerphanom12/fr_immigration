import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PageNF() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>This Page Is Not Found</h1>
        <button onClick={()=>{navigate(-1)}} >Back To Previous Page</button>

    </div>
   
  )
} 

