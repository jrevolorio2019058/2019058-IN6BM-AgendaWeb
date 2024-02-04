function obtener(){
    let abrirModal = document.getElementById('abrirModal');
    let modal = document.getElementById('modal');
    let siBtn = document.getElementById('siBtn');
    let noBtn = document.getElementById('noBtn');
    let modalAbierto = true;
}

function abrirModal(){

    obtener();
    modalAbierto = true;
    modal.style.display = 'flex';
}

function negativoSalir(){
    obtener();
    modalAbierto = false;
    modal.style.display = 'none';
}

function positivoSalir(){
    obtener();
    modalAbierto = false;
    window.location.href = './../../index.html';
    modal.style.display = 'none';
}

window.addEventListener('beforeunload', function (event) {
    if (modal.style.display === 'flex' && modalAbierto) {
        event.preventDefault();
        event.returnValue = '¿Seguro de Salir?';
    }
  });s