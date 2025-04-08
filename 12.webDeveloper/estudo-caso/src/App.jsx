import { Form } from "./components/Form"
import { Routes, Route } from "react-router";
import "./App.css"

function App() {

  return (
    <>
      <Routes>
        <Route path="/car/create" element={<Form />} />
        <Route path="/car/edit/:id" element={<Form />} />
      </Routes>
    </>
  )
}

export default App
