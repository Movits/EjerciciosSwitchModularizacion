const pPrecioTotal = document.querySelector("#precioTotal");
const PRECIO_PROD_1 = 500;
const selectCant = document.querySelector("select");


function agregarProducto() {
    pPrecioTotal.innerHTML = "Total: $" + selectCant.value * PRECIO_PROD_1;
}