import { heros } from '../data/heros'

export const getHeros = ( publisher ) => {
    
    const validPublishers = ['DC Comics', 'Marvel Comics']
    if( !validPublishers.includes( publisher ) ){
        throw new Error(`${ publisher } No valid`)
    }
    return heros.filter( hero => hero.publisher === publisher )

}