const pPrecioTotal = document.querySelector("#precioTotal");
const selectCant = document.querySelector("select");
const olListaCarrito = document.querySelector("#listaCarrito");
const PROD_1 = "Pan";
const PROD_2 = "Medialuna";
const PRECIO_PROD_1 = 500;
const PRECIO_PROD_2 = 300;


let precioTotal = 0;
let tipoProducto = document.querySelector("#tipo-producto");
let precioProducto = document.querySelector("#precio-producto");
let imgProducto = document.querySelector("#img-producto");

let nombreProductoActual = PROD_1;
let precioProductoActual = PRECIO_PROD_1;

function calcularDescuento(cantidad, producto) {
    cantidad = Number(cantidad);
    let descuento = 0;
    if (producto === PROD_1) {
        if (cantidad === 3) descuento = 0.10;
        else if (cantidad === 7) descuento = 0.25;
    } else if (producto === PROD_2) {
        if (cantidad === 1) descuento = 0.15;
        else if (cantidad === 7) descuento = 0.30;
    }
    return descuento;
}

function calcularRegalo(cantidad, producto) {
    cantidad = Number(cantidad);
    if (producto === PROD_2 && cantidad === 7) return 1;
    else return 0;
}

function agregarProducto() {
    let cantidad = Number(selectCant.value);
    let descuento = calcularDescuento(cantidad, nombreProductoActual);
    let precioDescuento = precioProductoActual * descuento;
    let totalProducto = (precioProductoActual - precioDescuento) * cantidad;

    precioTotal = totalProducto + precioTotal;

    if (calcularRegalo(cantidad, nombreProductoActual) === 1) {
        cantidad++;
    }

    pPrecioTotal.innerHTML = "Total: $" + precioTotal;
    olListaCarrito.innerHTML += `
    <li>${nombreProductoActual} (${cantidad}) </li>
    `;
}

function siguienteProducto() {
    

    tipoProducto.innerHTML = PROD_2;
    precioProducto.innerHTML = "Precio: " + PRECIO_PROD_2 + "$";
    imgProducto.src = "https://www.abc.com.py/resizer/XRvOD1fw0nVKkmGJY6JbE21yZkE=/fit-in/770x495/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/abccolor/PVBO4DFYMZH2NHZTQPE7H3P7HE.jpg";

    nombreProductoActual = PROD_2;
    precioProductoActual = PRECIO_PROD_2;
}