import { HomeLogin } from "./pages/HomeLogin"
import { Register } from "./pages/Register"

import { Routes, Route } from "react-router";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
