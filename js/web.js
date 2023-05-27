function encriptar(){
    /*variables y la relación con las variables del html*/
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto //creamos los parametros que se cambiaran al momento de cifrar, ademas; de cual sera su remplazo.
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

        //creamos una validación
        if(texto.length !=0){//comprobamos que dato ingresadp sea diferente de 0

            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto encriptado con éxito"; //cambiamos el titulo del texto 
            parrafo.textContent = ""; // borramos el parrafo
            muñeco.src = "./imagenes/encriptado.jpg"; // cambiamos la imagen 

        }else{

            muñeco.src = "./imagenes/Muñeco.png"; // en caso sea falsa la iteracion la img no cambia y se envia una alerta
            tituloMensaje.textContent= "Ningun mensaje fue encontrado";
            parrafo.textContent= "Ingresa el texto que deseas encriptar o desencriptar";
            swal("Ooops", "Debes ingresar algún texto", "warning");

        }
}
function desencriptar(){

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto 
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.length !=0){//comprobamos que dato ingresadp sea diferente de 0

        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito"; //cambiamos el titulo del texto 
        parrafo.textContent = ""; // borramos el parrafo
        muñeco.src = "./imagenes/desencriptado.jpg"; // cambiamos la imagen 

    }else{

        muñeco.src = "./imagenes/Muñeco.png"; // en caso sea falsa la iteracion la img no cambia y se envia una alerta
        tituloMensaje.textContent= "Ningun mensaje fue encontrado";
        parrafo.textContent= "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops", "Debes ingresar algún texto", "warning");

    }

}