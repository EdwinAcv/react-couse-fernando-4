import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'edwin',
        email: 'edwinacevedo@correo.com'
    })

    const {username, email} = formState;

    const onInputChange = ( { target } ) => {
        const {name, value} = target;
        setFormState({...formState , [ name ]: value})
    }

    useEffect(() => {
    //    console.log('useEfect Called');
    }, [])
    useEffect(() => {
    //    console.log('form Called');
    }, [formState])
    useEffect(() => {
    //    console.log('email Called');
    }, [email])
    
    
  return (
    <>
        <h1>Formulario Simple</h1>

        <hr/>

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="edwinacevedo@correo.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />
        {
            username === 'edwin02' && <Message/>
        }


    </>
  )
}
