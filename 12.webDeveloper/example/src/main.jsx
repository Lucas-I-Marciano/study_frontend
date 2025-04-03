import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App, { App2 } from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
