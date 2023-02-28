function saludar() {
    respuesta = prompt("¡Hola Mundo! ¿Como estas?");
    if (respuesta == "muy bien") {
        alert("Exelente")
    } else if (respuesta == "bien") {
        alert("Me alegro")
    } else {
        alert("Que mal")
    }
    console.log(saludar);
}
saludar()

document.getElementById("fecha").onclick = function () {
    console.log("fecha actual");
    document.getElementById("fecha").innerHTML = Date()
    
}
