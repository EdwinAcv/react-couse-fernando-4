import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, setCounter } = useCounter();
  return (
    <>
        <h1>Counter with Hook: { counter } </h1>
        <hr/>

        <button className="btn btn-primary" onClick={() => { setCounter( counter  + 1 ) }}>+1</button>      
        <button className="btn btn-primary" onClick={() => { setCounter( 10 ) }}>Reset</button>      
        <button className="btn btn-primary" onClick={() => { setCounter( counter - 1  ) }}>-1</button>      
    </>
  )
}
