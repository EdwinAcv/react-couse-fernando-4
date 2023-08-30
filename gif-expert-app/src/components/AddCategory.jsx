import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputvalue, setInputvalue] = useState('Dangaronpa');
    const onInputChange = (event) => {
        setInputvalue(event.target.value);
    } 

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputvalue.trim().length <= 1 ) return;
        //setCategories( categories => [ ...categories, inputvalue ])
        onNewCategory( inputvalue.trim() );
        setInputvalue('');
    }
  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar Gif"
            value={ inputvalue }
            onChange={  onInputChange }
        ></input>
    </form>
  )
}
