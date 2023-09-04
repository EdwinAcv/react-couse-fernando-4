import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"


const heavyStuff = ( iterationNumber = 100 ) => {
  for(let i = 0; i< iterationNumber; i++){
    console.log('Ahi Vamos...')
  }

  return `${ iterationNumber }`
}

export const MemorizeHook = () => {
    const [show, setShow] = useState(true)

    const {counter, increment} = useCounter(4000);

    const memorizedValue = useMemo( () => heavyStuff( counter ), [counter] )
  return (
    <>
        <h1>Counter: <small> { counter } </small>  </h1>
        <hr />

        <h4></h4>

        <button 
            className="btn btn-primary"
            onClick={ ()=> increment() }
        >+1</button>

        <button 
            className="btn btn-outline-primary"
            onClick={ () => setShow( !show ) }
            >
            show/hyde { JSON.stringify(show) }
        </button>
    </>
  )
}
