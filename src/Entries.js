import React from 'react'

export default function Entries({user}) {
  return (
    <div> {`Hello, ${user.name} ${user.entries}`}</div>
  )
}
