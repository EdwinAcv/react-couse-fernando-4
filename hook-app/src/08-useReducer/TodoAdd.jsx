import { useState } from "react"
import { useForm } from "../hooks/useForm"


export const TodoAdd = ( { onNewTodo } ) => {

    
    const { description, onInputChange, onReset } = useForm({
        description: ''
    })

    const onFormSubmit = ( event ) => {

        event.preventDefault();
        if( description.length <= 1 ) return;

        const newTodo = {
            
            id: new Date().getTime(),
            description: description,
            done: false
        } 
         
        onNewTodo(newTodo);
        onReset();
     }

  return (
    <form onSubmit={ onFormSubmit }>
        <input 
            type="text" 
            placeholder="Que hay que hacer?"
            className="form-control"
            name="description"
            value={ description }
            onChange={ onInputChange  }
            

        />

        <button 
            type="submit"
            className="btn btn-outline-primary mt-2 "
            
        >
            Agregar
        </button>

        <input 
            type="file" 
            name="myDocs" 
            accept=".docx,.pdf"
            className="form-control mt-2"
        />
    </form>
  )
}
