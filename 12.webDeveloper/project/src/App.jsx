import './App.css'
import { Routes, Route } from "react-router";

import { BdContextProvider } from "./context/bd"
import { Cart } from "./components/Cart"
import { Home } from "./components/Home"






function App() {

  return (
    <>
      <BdContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BdContextProvider>
    </>
  )
}

export default App
