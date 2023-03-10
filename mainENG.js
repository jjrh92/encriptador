// Inicio

const logo = document.getElementById ("logo");
const textoEntrada = document.getElementById ("textoEntrada");
const munieco = document.getElementById ("munieco");
const Rectangle1_texto1 = document.getElementById ("Rectangle1_texto1");
const Rectangle1_texto2 = document.getElementById ("Rectangle1_texto2");
const Frame5 = document.getElementById ("Frame5");
const botonEncriptar = document.getElementById ("botonEncriptar");
const botonDesencriptar = document.getElementById ("botonDesencriptar");
const textarea = document.createElement ("textarea");
const botonCopiar = document.createElement ("button");

function RemoverDefault () {

    munieco.remove ();
    Rectangle1_texto1.remove ();
    Rectangle1_texto2.remove ();

}

function Encriptar () {

    let texto = textoEntrada.value;
    let textoMinusculas = texto.toLowerCase();

    if (textoMinusculas == "" || textoMinusculas == +textoMinusculas) {

        alert ("There is no text to encrypt.");

    } else {

        RemoverDefault ();
        let textoEncriptado = textoMinusculas.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        textarea.value = 'The encrypted text is: '+'"' +textoEncriptado+'".';
        textarea.spellcheck = false;
        textarea.className = "textoSalida";
        Frame5.append (textarea);
        botonCopiar.className = "btn_co";
        botonCopiar.innerText = "Copy";
        Frame5.append (botonCopiar);
        botonEncriptar.innerText = "Successful Encryption!";

        botonCopiar.onclick = function () {
            
            let textoCopiado = textoEncriptado;
            navigator.clipboard.writeText (textoCopiado);
            botonCopiar.innerText = "Text copied to clipboard!";

        }

    }

}

function Desencriptar () {

    let texto = textoEntrada.value;
    let textoMinusculas = texto.toLowerCase();

    if (textoMinusculas == "" || textoMinusculas == +textoMinusculas) {

        alert ("There is no text to decrypt.");

    } else {

        RemoverDefault ();
        let textoDesencriptado = textoMinusculas.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        textarea.value = 'The decrypted text is: '+'"' +textoDesencriptado+'".';
        textarea.spellcheck = false;
        textarea.className = "textoSalida";
        Frame5.append (textarea);
        botonCopiar.className = "btn_co";
        botonCopiar.innerText = "Copy";
        Frame5.append (botonCopiar);
        botonDesencriptar.innerText = "Successful Decryption!";


        botonCopiar.onclick = function () {

            let textoCopiado = textoDesencriptado;
            navigator.clipboard.writeText (textoCopiado);
            botonCopiar.innerText = "Text copied to clipboard!";

        }

    }

};

botonEncriptar.addEventListener ("click", Encriptar);
botonDesencriptar.addEventListener ("click", Desencriptar);

window.addEventListener('DOMContentLoaded', () => {

    logo.onmouseenter = () => {
    logo.src = "logo2.svg"
    };
        
    logo.onmouseleave = () => {
        logo.src = "logo.svg"
    };

});

// Solamente se admite el abecedario en minusculas de la a hasta la z.
// A excepcion de la coma, el punto y nueva linea (parrafo).

function CambiarCarsInvalidos (caracter) {

    const caracteresInvalidos = /[^a-z ,.??\n]/gi; 
  
    if (caracteresInvalidos.test(caracter.value)) {

        caracter.value = caracter.value.replace(caracteresInvalidos, "");

    }
};

// Fin

// Descripci??n


// ??Bienvenidos y Bienvenidas a nuestro primer desaf??o!

// Durante estas cuatro semanas, vamos a trabajar en una aplicaci??n que encripta textos, as?? podr??s intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptaci??n utilizada.

// Las "llaves" de encriptaci??n que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:
// - Debe funcionar solo con letras min??sculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versi??n encriptada tambi??n devolver una palabra encriptada para su versi??n original.

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

// La p??gina debe tener campos para
// inserci??n del texto que ser?? encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
// El resultado debe ser mostrado en la pantalla.
// Extras:
// - Un bot??n que copie el texto encriptado/desencriptado para la secci??n de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opci??n "copiar" del men?? de las aplicaciones.

// Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ??gil de desarrollo, utilizando el Trello de la siguiente forma:

// La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
// En la columna En Desarrollo estar??n los elementos que est??s desarrollando en el momento. Al iniciar una tarea, podr??s mover la tarjeta que contiene dicha tarea para esta columna.
// En la columna Pausado estar??n los elementos que comenzaste a desarrollar, pero necesitaste parar por alg??n motivo.
// Por fin, en la columna Concluido estar??n los elementos ya concluidos.
// El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no ser?? evaluada.

// Desencripta nuestro mensaje secreto!

// fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!

// Buen proyecto!