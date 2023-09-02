import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {


    const {data, isLoading, hasError} = useFetch('https://www.digi-api.com/api/v1/digimon/20');

    

    const { name, id , types} = !!data  && data ;
    const {type} = !!types && types[0];
    // console.log(types[0].type)
    return (
    <>
      <h1>Digimon Api</h1>
      <hr/>

        {
            isLoading  ? (

                <div className="alert alert-info text-center">
                    Loading...
                </div>

            )
            :(
                <blockquote className="blockquote text-end">
                    <p className="mb-1"> { name } </p>
                    <footer className="blockquote-footer"> {id} </footer>
                    <footer className="blockquote-footer"> Tipo: {type} </footer>
                </blockquote>

            )
        }

        <button  className="btn btn-primary">
            Next Quote
        </button>
    </>
  )
}
