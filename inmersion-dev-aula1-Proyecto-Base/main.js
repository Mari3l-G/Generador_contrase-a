let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


boton.addEventListener('click', generar);

function generar() {
   
    let numeroDigitado = parseInt(cantidad.value);
    

    if (numeroDigitado < 6) {
        alert("La cantidad de caracteres tiene que ser mayor que 6");
        return; 
    }

    let password = '';
    

    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }


    contrasena.value = password;
}









