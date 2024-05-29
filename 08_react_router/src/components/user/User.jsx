import React from 'react'

function User() {
    const {userid}=useParams()
  return (
    <div>User: {userid}</div>
  )
}

export default User