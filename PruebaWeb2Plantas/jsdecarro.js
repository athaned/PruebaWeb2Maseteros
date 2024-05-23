console.log('hola :D2');
document.addEventListener('DOMContentLoaded', (event) => {
    //mensaje para comprobar conexion
    console.log('hola :D');
    // variables
    let carrito = document.querySelector('.icono-carrito');
    let botonagregar= document.querySelector('.botonagregar');
    let cartab = document.querySelector('.cartatab');
    let cerrar = document.querySelector('.cerrar');
    // funciones para abrir y cerrar el carrito
    if (carrito) {
        carrito.addEventListener('click', () => {
            console.log('Carrito clicked');
            cartab.classList.toggle('hidden');
        });
    } else {
        console.error('No se encontró el elemento con la clase .icono-carrito');
    }

    if (botonagregar) {
        botonagregar.addEventListener('click', () => {
            console.log('Carrito clicked');
            cartab.classList.toggle('hidden');
        });
    } else {
        console.error('No se encontró el elemento con la clase .botonagregar');
    }

    if (cerrar) {
        cerrar.addEventListener('click', () => {
            console.log('Cerrar clicked');
            cartab.classList.toggle('hidden');
        });
    } else {
        console.error('No se encontró el elemento con la clase .cerrar');
    }
}); 
