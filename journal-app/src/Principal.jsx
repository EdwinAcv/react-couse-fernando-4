import { Ejemplo } from "./Ejemplo"

export const Principal = () => {

    const ejecutar = (bot= '') =>{
        console.log(`Hola ${bot}`)
    }

    return (
        <>
        <h1>Botones</h1>
        <Ejemplo ejecutar={()=>ejecutar('Enviar')} nombre={'Enviar'}/>
        <Ejemplo ejecutar={()=>ejecutar('Movi')} nombre={'Movi'}/>
    </>
  )
}
