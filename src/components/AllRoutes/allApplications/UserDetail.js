import React from 'react'

export default function UserDetail({popUser, getDetails}) {
  console.log("getDetails",getDetails)
  return (
    <div>
      <button onClick={()=>{popUser(false)}}>Back</button>

    </div>
  )
}
