import React from 'react'

export default function ProfileUser({ profile ,prop}) {
  return (
    <div>
    <h1>Profile Details</h1>
    <p>Username: {profile?.username}</p>
    <p>First Name: {profile?.firstname}</p>
    <p>Last Name: {profile?.lastname}</p>
    <p>E-Mail: {profile?.email}</p>
    <p>Phone Number: {profile?.phone_number}</p>


  </div>
  )
}
