import React from 'react'
import styled from 'styled-components'

export default function Urm_university() {
  return (
    <Root>
      <h1>URM University</h1>
      <div className='first_child'>
        <select>
          <option>---Select University Name---</option>
          <option>Select University Name</option>
          <option>Select University Name</option>
          <option>Select University Name</option>
        </select>

        <select>
          <option>---Select URM Name---</option>
          <option>Select URM Name</option>
          <option>Select URM Name</option>
          <option>Select URM Name</option>
        </select>

        <button>
          0 Filter
        </button>

      </div>


    </Root>
  )
}
const Root = styled.section`

.first_child{
  display: flex;
  background-color: lightblue;
  width: 100%;
  padding: 30px;
  border-radius: 15px;
  justify-content: space-between;
  select{
    width: 40%;
    border-radius: 20px;
    padding: 10px;
  }
  button{
    background-color: blue;
    width: 80px;
    border: none;
    border-radius: 15px;
    color: white;
    &:hover{
      background-color: red; 
      cursor: pointer;
    }
  }
}

`
