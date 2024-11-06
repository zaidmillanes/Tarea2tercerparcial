s
function contarLetrasSinEspacios(nombre) {
    let nombreSinEspacios = nombre.replace(/\s/g, '');
    return nombreSinEspacios.length;
}

let nombre = prompt("Zaid Roberto Millanes Dominguez");

// Llamamos a la función y mostramos el resultado
let numeroDeLetrasSinEspacios = contarLetrasSinEspacios(nombre);
alert("Tu nombre tiene " + numeroDeLetrasSinEspacios + " letras sin contar los espacios.");
