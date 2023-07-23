const fieldset = document.querySelector("#fieldset1");
const pInfoSelec = document.querySelector("#pInfo");
const IMG_2 = "https://media.admagazine.com/photos/63b8643347e50dfe1e2f4997/master/w_3000,h_2000,c_limit/cama-de-hotel-cabecero.jpg";
const IMG_3 = "https://img.freepik.com/vector-premium/reloj-vector-icono-fondo-blanco-ilustracion-vectorial_736051-174.jpg";

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
                <option value="lunes">Lunes</option>
                <option value="miercules">Miercules</option>
                <option value="sabado">Sabado</option>
            </select>
        </fieldset>
        <button onclick="grabarIngreso(); pagServicios();">Seguinte</button>
    `;
}

function grabarIngreso() {
    reserva.ingreso = document.querySelector("#diasIngresoOpc").value;
    pInfoSelec.innerHTML = pInfoSelec.innerHTML + ", Ingresa en " + reserva.ingreso;
  }