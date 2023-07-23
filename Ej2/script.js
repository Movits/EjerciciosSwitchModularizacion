const fieldset = document.querySelector("#fieldset1");
const pInfoSelec = document.querySelector("#pInfo");
const IMG_2 = "https://media.admagazine.com/photos/63b8643347e50dfe1e2f4997/master/w_3000,h_2000,c_limit/cama-de-hotel-cabecero.jpg";
const IMG_3 = "https://earthsky.org/upl/2014/04/532px-Cranmer_Sundial.jpg";
const IMG_4 = "https://www.guiarepsol.com/content/dam/repsol-guia/contenidos-imagenes/comer/cultura-gastronomica/el-desayuno-de-hotel-mas-alla-del-bufe/gr-cms-media-featured_images-none-c58d3bd2-57c8-4094-941e-f29f1599a756-1.jpg";
const IMG_5 = "https://media.tenor.com/r5a_QxNpB6UAAAAC/gracias-thanks.gif";

let reserva = {
    camas: null,
    dias: null,
    ingreso: null,
    servicios: null
  };

function pagCama() {
    fieldset.innerHTML = `
        <img src="${IMG_2}">
        <fieldset id="fieldset2">
            <p>Cantidad de Camas:</p>
            <select name="" id="camasOpc">
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </fieldset>
        <button onclick="grabarCama(); pagDias();">Seguinte</button>
    `;

    pInfoSelec.innerHTML = ``;
}

function grabarCama() {
    reserva.camas = document.querySelector("#camasOpc").value;
    pInfoSelec.innerHTML = "Reserva: " + reserva.camas + " cama/s";
  }

function pagDias() {
    fieldset.innerHTML = `
        <img src="${IMG_3}">
        <fieldset id="fieldset2">
            <p>Cantidad de Dias:</p>
            <select name="" id="diasOpc">
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="7">7</option>
            </select>
        </fieldset>
        <button onclick="grabarDias(); pagIngreso();">Seguinte</button>
    `;
}

function grabarDias() {
    reserva.dias = document.querySelector("#diasOpc").value;
    pInfoSelec.innerHTML = pInfoSelec.innerHTML + ", " + reserva.dias + " dia/s";
  }

function pagDias() {
    fieldset.innerHTML = `
        <img src="${IMG_3}">
        <fieldset id="fieldset2">
            <p>Cantidad de Dias:</p>
            <select name="" id="diasOpc">
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="7">7</option>
            </select>
        </fieldset>
        <button onclick="grabarDias(); pagIngreso();">Seguinte</button>
    `;
}

function grabarDias() {
    reserva.dias = document.querySelector("#diasOpc").value;
    pInfoSelec.innerHTML = pInfoSelec.innerHTML + ", " + reserva.dias + " dia/s";
  }

function pagIngreso() {
    fieldset.innerHTML = `
        <img src="${IMG_3}">
        <fieldset id="fieldset2">
            <p>Dia de Ingreso:</p>
            <select name="" id="diasIngresoOpc">
                <option value="Lunes">Lunes</option>
                <option value="Miercules">Miercules</option>
                <option value="Sabado">Sabado</option>
            </select>
        </fieldset>
        <button onclick="grabarIngreso(); pagServicios();">Seguinte</button>
    `;
}

function grabarIngreso() {
    reserva.ingreso = document.querySelector("#diasIngresoOpc").value;
    pInfoSelec.innerHTML = pInfoSelec.innerHTML + ", Ingresa en " + reserva.ingreso;
  }

function pagServicios() {
    fieldset.innerHTML = `
        <img src="${IMG_4}">
        <fieldset id="fieldset2">
            <p>Servicios Extra:</p>
            <select name="" id="serviciosOpc">
                <option value="Desayuno">Desayuno</option>
                <option value="Desayuno y almuerzo">Desayuno y almuerzo</option>
                <option value="Desayuno, almuerzo y cena">Desayuno, almuerzo y cena</option>
            </select>
        </fieldset>
        <button onclick="grabarServicios(); pagGracias();">Seguinte</button>
    `;
}

function grabarServicios() {
    reserva.servicios = document.querySelector("#serviciosOpc").value;
    pInfoSelec.innerHTML = pInfoSelec.innerHTML + " y " + reserva.servicios + " de servicios.";
  }