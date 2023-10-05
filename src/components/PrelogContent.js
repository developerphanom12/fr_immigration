import React from 'react'
import { styled } from 'styled-components'

export default function PrelogContent() {
  return (
    <Root>
        <h2 className='title_main'>Know More About Us !!</h2>
        <div className='prelog_child'>
            {/* <img src='\images\robo.png'/> */}
        </div>
    </Root>
  )
}

const Root = styled.section`
display: flex;
height: 100%;
justify-content: center;
align-items: center;
flex-direction: column;
.title_main{
    color: #fff;
    font-size: 30px;
    margin: 20px;
}

.prelog_child{
    display: flex;
    justify-content: center;
    img{
        width: 80%;
    }
}
`
