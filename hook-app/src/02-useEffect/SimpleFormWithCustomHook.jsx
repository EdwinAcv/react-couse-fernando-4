import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHook = () => {


    const {formState, onInputChange, onReset} = useForm({
        username: '',
        email: '',
        password:''
    })
    
    const {username, email, password} = formState;
    
   
    
    
  return (
    <>
        <h1>Formulario Simple Con Custom Hook</h1>

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
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Password"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />
        
        <button onClick={ onReset }  className="btn btn-primary mt-2">Borrar</button>

    </>
  )
}
