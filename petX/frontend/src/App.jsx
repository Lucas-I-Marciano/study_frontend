import { HomeLogin } from "./pages/HomeLogin"
import { Register } from "./pages/Register"
import { ForgotPassword } from "./pages/ForgotPassword"

import { Routes, Route } from "react-router";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default App
