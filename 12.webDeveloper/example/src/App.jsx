import { useEffect } from 'react'
import './App.css'

import { root } from './services/auth'
import { useState } from 'react'

function App() {
  const [testRoot, setTestRoot] = useState("")

  useEffect(()=>{
    const toQuery = async ()=>{
      const response = await root()
      setTestRoot(response.message)
    }
    toQuery()
  },[])

  return (
    <>
      <p className='bg-red-500'>{testRoot}</p>
    </>
  )
}

export default App
