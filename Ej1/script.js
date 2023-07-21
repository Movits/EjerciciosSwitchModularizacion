const pPrecioTotal = document.querySelector("#precioTotal");
const PRECIO_PROD_1 = 500;
const selectCant = document.querySelector("select");

let precioTotal = 0;

function agregarProducto() {
    precioTotal = (PRECIO_PROD_1 * selectCant.value) + precioTotal;
    pPrecioTotal.innerHTML = "Total: $" + precioTotal;
}