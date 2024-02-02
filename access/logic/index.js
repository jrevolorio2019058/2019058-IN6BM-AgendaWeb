const usuario = document.getElementById("usaurio");
const clave = document.getElementById("clave");


function validar(){

    if(usuario.toLowerCase() == "admin" && clave.toLowerCase() == "admin"){

        window.alert("Prueba");
        window.location.href = './access/html/contactos.html';
        limpiar();
    
    }else{
        window.alert("Usuario o Contraseña incorectos");
        clave.value = "";
    }

}

function limpiar(){

    usuario.value = "";
    clave.value = "";

}

