import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByPublisher } from "../helpers";


export const SearchPage = () => {

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const heroes =  getHeroesByPublisher( 'DC Comics' )
  console.log(heroes)

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="">
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off" 
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">

          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            No her with <b>  </b>
          </div>

          {/* <HeroCard key={ hero.id } { ...hero } /> */}

        </div>
      </div>
    </>
  )
}
