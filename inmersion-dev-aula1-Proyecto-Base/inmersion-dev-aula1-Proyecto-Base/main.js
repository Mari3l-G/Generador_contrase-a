let cantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar');
let contrasena = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

// Asignar la función generar al evento click del botón de generar
botonGenerar.addEventListener('click', generar);

// Asignar la función limpiar al evento click del botón de limpiar
botonLimpiar.addEventListener('click', limpiar);

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    
    if (numeroDigitado < 6) {
        alert("La cantidad de caracteres tiene que ser mayor que 6");
        return; // Salir de la función si la condición se cumple
    }

    let password = '';
    
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    contrasena.value = password;
    
    // Validar la fortaleza de la contraseña
    validarContrasena(password);
}

function validarContrasena(password) {
    const tieneNumero = /\d/.test(password); // Verifica si hay al menos un número
    const tieneMayuscula = /[A-Z]/.test(password); // Verifica si hay al menos una letra mayúscula
    const tieneMinuscula = /[a-z]/.test(password); // Verifica si hay al menos una letra minúscula
    const tieneSimbolo = /[!@#$%^&*()]/.test(password); // Verifica si hay al menos un símbolo

    if (tieneNumero && tieneMayuscula && tieneMinuscula && tieneSimbolo) {
        mensaje.innerText = "La contraseña es fuerte.";
        mensaje.style.color = "green";
    } else {
        mensaje.innerText = "La contraseña es débil. Asegúrate de incluir al menos un número, una letra mayúscula, una letra minúscula y un símbolo.";
        mensaje.style.color = "red";
    }
}

function limpiar() {
    cantidad.value = ''; // Limpiar el campo de cantidad
    contrasena.value = ''; // Limpiar el campo de contraseña
    mensaje.innerText = ''; // Limpiar el mensaje de validación
}





