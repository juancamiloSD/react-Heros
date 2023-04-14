import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import queryString from 'query-string'
import { getHeroByName } from "../helpers/getHeroByName"
import { HeroCard } from "../components/HeroCard"


export const SearchPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { q = '' } = queryString.parse( location.search )

    const heros = getHeroByName( q )

    const showSearch = (q.length === 0);
    const showError  = (q.length > 0) && heros.length === 0;

    const { searchText, onInputChange } = useForm({
      searchText: q
    })

    const onSearchSubmit = (e) => {
      e.preventDefault()
      // if( searchText.trim().length <= 1 ) return
      navigate(`?q=${ searchText }`)
    }

    return (
      <>
        <h1>Buscar</h1>
        <hr />
        <div className="row">
          <div className="col-5">
            <h4>Buscando</h4>
            <hr />
            <form 
              className="row" 
              onSubmit={ onSearchSubmit }
            >
              <div className="col-8">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Buscar un hero"
                  name="searchText"
                  autoComplete="off"
                  value={ searchText }
                  onChange={ onInputChange }
                />
              </div>
              <div className="col-4">
                <button className="btn btn-outline-primary mb-3">Buscar</button>
              </div>
            </form>
          </div>
          <div className="col-7">
            <h4>Resultados</h4>
            <hr />

            <div 
              className="alert alert-primary animate__animated animate__fadeIn"
              style={{ display: showSearch ? '' : 'none' }}
            > 
              Buscar un hero
            </div>

            <div 
              className="alert alert-danger animate__animated animate__fadeIn"
              style={{ display: showError ? '' : 'none' }}
            >
              Error! no existe ese <b>{ q }</b>
            </div>
            {
              heros.map( hero => (
                <HeroCard key={ hero.id } { ...hero }/>
              ))
            }

          </div>
        </div>
      </>
    )
  }