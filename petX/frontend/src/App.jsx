import { HomeLogin } from "./pages/HomeLogin"
import { Register } from "./pages/Register"
import { ForgotPassword } from "./pages/ForgotPassword"

import { Routes, Route } from "react-router";
import { ResetPassword } from "./pages/ResetPassword";
import { Feed } from "./pages/Feed";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </>
  )
}

export default App
