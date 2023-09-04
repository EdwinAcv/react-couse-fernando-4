import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FokusScree } from './04-useRef/FokusScree'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <FokusScree />
  // </React.StrictMode>,
)
