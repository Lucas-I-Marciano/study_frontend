import { useEffect } from 'react'
import './App.css'

import { login, getMe } from './services/auth'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState("")
  const [user, setUser] = useState({})

  useEffect(()=>{
    const toQuery = async ()=>{
      const response = await login(
        {
          "email": "user2@example.com",
          "password": "password2"
        }
      )
      setToken(response.token)
    }
    toQuery()
  },[])
  
  useEffect(()=>{
    const toQuery = async ()=>{
      try {
        const response = await getMe(token)
        setUser(response)
        
      } catch (error) {
        console.error("ERRO: ", error)
      }
    }
    toQuery()
  },[token])

  return (
    <>
      <p className='bg-blue-100 p-2 w-100 rounded-xl m-2'>E-mail: {user.email}</p>
      <p className='bg-blue-100 p-2 w-100 rounded-xl m-2'>Username: {user.username}</p>
    </>
  )
}

export default App
