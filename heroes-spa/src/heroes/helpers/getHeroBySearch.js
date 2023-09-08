

import { heroes } from '../data/heroes';

export const getHeroeBySearch = ( Search = '' ) => {
    
    Search = Search.toLocaleLowerCase().trim();
    if ( Search.length === 0 ) return [];

    return heroes.filter(
        hero => {
            for (const key in hero) {     
                
                const isTrue = hero[key].toLocaleLowerCase().includes( Search )
                if(isTrue){
                    return isTrue;
                }
            }
             
        }
    )

    // return heroes.filter ( heroe => heroe.publisher === Search );
}