import { Link } from 'react-router-dom'

const CharacterByHero = ({ alter_ego, characters }) => {
    // if( alter_ego === characters ) return (<></>)
    // return <p>{ characters }</p>
    return ( alter_ego === characters )
        ? <></>
        : <p>{ characters }</p>
}

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
 }) => {

    const heroImageUrl = `/../../public/heros/${ id }.jpg`

    return (
        <>
            <div className='col animate__animated animate__fadeIn'>
            <div className="card mb-3">
                <div className="row">
                        <div className="col-md-4">
                            <img src={ heroImageUrl } className="img-fluid rounded-start" alt={ superhero } />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <CharacterByHero characters={ characters } atler_ego={ alter_ego } />
                            <p className="card-text"><small className="text-body-secondary">{ publisher }</small></p>
                            <Link
                                to={ `/hero/${ id }` }    
                            >
                                Ver más
                            </Link>
                        </div>
                        </div>
                </div>
            </div>
            </div>
        </>
    )
}
