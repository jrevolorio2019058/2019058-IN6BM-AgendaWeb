

function obtener(){
    let abrirModal = document.getElementById('abrirModal');
    let modal = document.getElementById('modal');
    let modal1 = document.getElementById('modal1');
    let modal2 = document.getElementById('modal2');
    let modal3 = document.getElementById('modal3');
    let modal4 = document.getElementById('modal4');
    let modal5 = document.getElementById('modal5');
    let modal6 = document.getElementById('modal6');
    let siBtn = document.getElementById('siBtn');
    let noBtn = document.getElementById('noBtn');
    let modalAbierto = true;
    
}

function abrirModal(entrada){

    let opcionModal  = '';
    obtener();
    opcionModal = entrada;
    modalAbierto = true;

    if(opcionModal === 1){

        modal.style.display = 'flex';

    }else if(opcionModal === 2){

        modal1.style.display = 'flex';

    }else if(opcionModal === 3){

        modal2.style.display = 'flex';

    }else if(opcionModal === 4){

        modal3.style.display = 'flex';

    }else if(opcionModal === 5){

        modal4.style.display = 'flex';

    }else if(opcionModal === 6){

        modal5.style.display = 'flex';

    }else if(opcionModal === 7){

        modal6.style.display = 'flex';

    }
    
    
    
}

function negativoSalir(){
    obtener();
    modalAbierto = false;
    modal.style.display = 'none';
    modal1.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
    modal4.style.display = 'none';
    modal5.style.display = 'none';
    modal6.style.display = 'none';
}

function positivoSalir(){
    obtener();
    modalAbierto = false;
    window.location.href = './../../index.html';
    modal.style.display = 'none';
}

window.addEventListener('beforeunload', function (event) {
    if (modal.style.display === 'flex' && modalAbierto && opcionModal === 1) {
        event.preventDefault();
        event.returnValue = '¿Seguro de Salir?';
    }else if (modal1.style.display === 'flex' && modalAbierto && opcionModal === 2) {
        event.preventDefault();
        event.returnValue = '¿Seguro de Salir?';
    }else if (modal2.style.display === 'flex' && modalAbierto && opcionModal === 3) {
        event.preventDefault();
        event.returnValue = '¿Seguro de Salir?';
    }else if (modal3.style.display === 'flex' && modalAbierto && opcionModal === 4) {
        event.preventDefault();
        event.returnValue = '¿Seguro de Salir?';
    }else if (modal4.style.display === 'flex' && modalAbierto && opcionModal === 5) {
        event.preventDefault();
        event.returnValue = '¿Seguro de Salir?';
    }else if (modal5.style.display === 'flex' && modalAbierto && opcionModal === 6) {
        event.preventDefault();
        event.returnValue = '¿Seguro de Salir?';
    }else if (modal6.style.display === 'flex' && modalAbierto && opcionModal === 7) {
        event.preventDefault();
        event.returnValue = '¿Seguro de Salir?';
    }
  });

  function faseBeta(){

    window.alert('Error! La App esta en fase beta, pronto podra modificar favoritos');

  }