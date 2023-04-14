import { useMemo } from "react"
import { getHeros } from "../helpers/getHeros"
import { HeroCard } from "./HeroCard"

export const HeroList = ({ publisher }) => {

    const heros = useMemo( () => getHeros( publisher ), [ publisher ])

    return (
        <>
            <div className="row rows-cols-1 row-cols-md-3">
                {
                    heros.map( hero => (
                        <HeroCard 
                            key={ hero.id } 
                            { ...hero }
                    />
                    ))
                }
            </div>
        </>
    )
}
