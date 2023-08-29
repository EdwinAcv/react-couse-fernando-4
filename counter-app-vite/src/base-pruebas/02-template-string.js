






export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}
const nombre = 'Edwin';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );