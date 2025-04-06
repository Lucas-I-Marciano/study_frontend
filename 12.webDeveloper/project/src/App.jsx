import './App.css'
import { Routes, Route } from "react-router";

const Home = () => {
  return <h1>Home Page</h1>
}

const Cart = () => {
  return <h1>Cart Page</h1>
}

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  )
}

export default App
