// Función para manejar la apertura de pestañas
function openTab(evt, tabName) {
    // Oculta todos los contenidos de las pestañas
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
        tabContents[i].classList.remove('active');
    }

    // Oculta las pestañas y la imagen
    document.getElementById('tabs').classList.add('hidden');
    document.getElementById('main-image').style.display = 'none';

    // Muestra el contenido de la pestaña seleccionada
    document.getElementById(tabName).style.display = 'block';
    document.getElementById(tabName).classList.add('active');
}

// Función para regresar a la vista de pestañas
function goBack() {
    // Oculta todo el contenido
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
        tabContents[i].classList.remove('active');
    }

    // Vuelve a mostrar las pestañas y la imagen
    document.getElementById('tabs').classList.remove('hidden');
    document.getElementById('main-image').style.display = 'block';
}

// Mostrar la pestaña inicial (vacía, solo pestañas visibles)
document.addEventListener('DOMContentLoaded', function () {
    // No mostrar contenido de pestañas inicialmente
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }
});
