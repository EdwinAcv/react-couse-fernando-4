

import { heroes } from '../data/heroes';

export const getHeroeBySearch = ( Search ) => {
    // const validSearch = ['Marvel Comics','DC Comics'];
    // if(!validSearch.includes( Search )){
    //     throw new Error(`${ publisher } is not a valid Search`)
    // }
    
    return heroes.filter ( heroe => heroe.publisher === Search );
}