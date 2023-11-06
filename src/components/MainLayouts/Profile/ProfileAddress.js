import React from 'react'

export default function ProfileAddress({ profile }) {
  return (
    <div>
      <h1>Address Details</h1>
      <p>Street Address: {profile?.address.street_address}</p>
      <p>City: {profile?.address.city}</p>
      <p>State: {profile?.address.state}</p>
      <p>Postal Code: {profile?.address.postal_code}</p>

    </div>
  )
}
