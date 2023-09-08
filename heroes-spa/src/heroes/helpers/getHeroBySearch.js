

import { heroes } from '../data/heroes';

export const getHeroeBySearch = ( Search = '' ) => {
    
    Search = Search.toLocaleLowerCase().trim();
    if ( Search.length === 0 ) return [];

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes( Search )
    )

    // return heroes.filter ( heroe => heroe.publisher === Search );
}