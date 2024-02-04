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
  });

document.addEventListener('DOMContentLoaded', function () {
    function renderizarTabla() {
      const tbody = document.querySelector('#tabla tbody');
      const rows = [...tbody.querySelectorAll('tr')];

      rows.sort((a, b) => {
        const prioridadA = obtenerPrioridad(a);
        const prioridadB = obtenerPrioridad(b);

        const ordenPrioridad = {

            'Alta': 1,
            'Media':2,
            'Baja':3

        };

        return ordenPrioridad[prioridadA] - ordenPrioridad[prioridadB];
      });

      rows.forEach(row => tbody.appendChild(row));
    }

function obtenerPrioridad(row) {
    return row.querySelector('td:last-child').textContent;
}

    renderizarTabla();
});



