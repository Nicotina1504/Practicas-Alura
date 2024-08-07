let encabezado = document.querySelector("h1");
encabezado.innerHTML = "Hora del desafio";

function Clickusuario() {
    console.log(`El boton fue clickeado`);
}

function Pregunta() {
    let Pregunta = prompt("Nombre una ciudad de Brasil");
    alert(`Estaba en ${Pregunta} y te vi ahi`);
}

function Alerta() {
    alert("Amo Js")
}

function Suma() {
    let numerouno = prompt("Diga un numero");
    let numerodos = prompt("Diga otro Numero");
    let sumar = Number(numerouno) + Number(numerodos);
    alert(sumar)
}
