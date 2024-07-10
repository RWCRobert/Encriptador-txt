function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let dibujo = document.getElementById("dibujo");

    let textoCifrado = texto
                        .replace(/a/gi, "ai")
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if (texto.lenght != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        dibujo.src = "./img/encriptar.jpg";
    } else {
        dibujo.src = "./img/Muneco.svg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Alerta: Debes ingresar algún texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let dibujo = document.getElementById("dibujo");

    let textoCifrado = texto
                        .replace(/ai/gi, "a")
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");

    if (texto.lenght != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto deseencriptado con éxito";
        parrafo.textContent = "";
        dibujo.src = "./img/desencriptado.jpg";
    } else {
        dibujo.src = "./img/Muneco.svg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Alerta: Debes ingresar algún texto");
    }

}
