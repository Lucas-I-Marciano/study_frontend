import { HomeLogin } from "./pages/HomeLogin"
import { Register } from "./pages/Register"
import { ForgotPassword } from "./pages/ForgotPassword"

import { Routes, Route } from "react-router";
import { ResetPassword } from "./pages/ResetPassword";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  )
}

export default App
