const fieldset = document.querySelector("#fieldset1");
const IMG_2 = "https://media.admagazine.com/photos/63b8643347e50dfe1e2f4997/master/w_3000,h_2000,c_limit/cama-de-hotel-cabecero.jpg";
const pInfoSelec = document.querySelector("#pInfo");

function proximaPagina() {
    fieldset.innerHTML = `
        <img src="${IMG_2}">
        <fieldset id="fieldset2">
            <p>Cantidad de Camas:</p>
            <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </fieldset>
        <button onclick="proximaPagina()">Seguinte</button>
    `;
}