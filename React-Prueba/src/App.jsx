import { useState } from 'react'
import {Nav} from './Nav.jsx'
import './App.css'
import './pruebas.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
    </>
  )
}

export default App
