let comprobacionA = 'admin';
let comprobacionB = 'admin';

function validar() {

    let usuario = document.getElementById('usuario').value;
    let clave = document.getElementById('clave').value;

    if(usuario.toLowerCase() === comprobacionA && clave.toLowerCase() === comprobacionB){
        window.location.href = './access/html/contactos.html';
        limpiarInput();
    }else{
        window.alert('Usuario o Contraseña incorectos');
        document.getElementById('clave').value = '';
    }

}

function limpiarInput() {
    
    document.getElementById('usuario').value = '';
    document.getElementById('clave').value = '';

}

