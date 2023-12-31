import React from 'react'

interface User {
  id: number
  name: string
  username: string
  email: string
  address: any
  phone: string
  website: string
  company: any
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 },
  })
  const users: User[] = await res.json()
  return (
    <>
      <h1>NewUserPage</h1>
      <p>{new Date().toLocaleString()}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage
