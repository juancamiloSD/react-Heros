import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById"
import { useMemo } from "react"

export const HeroPage = () => {

    const { id } = useParams()

    const hero = useMemo( () => getHeroById( id ), [ id ]) 

    if( !hero ){
      return <Navigate to="/marvel" />
    }

    const urlImage = `/../../../../public/heros/${ id }.jpg`

    const navigate = useNavigate()
    const onBack = () => {
      navigate(-1)
    }

    return (
      <div className="row mt-5">
        <div className="col-4">
          <img 
            className="img-thumbnail animate__animated animate__fadeInLeft"
            src={ urlImage }
            alt="" 
          />
        </div>
        <div className="col-6">
          <h1 className="pb-3">{ hero.superhero }</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego }</li>
            <li className="list-group-item"><b>Publisher:</b> { hero.publisher }</li>
            <li className="list-group-item"><b>First appearance:</b> { hero.first_appearance }</li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{ hero.characters }</p>
          <button 
            className="btn btn-outline-primary"
            onClick={ onBack }
          >
            Regresar
          </button>
        </div>
      </div>
    )
  }