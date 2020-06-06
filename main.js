var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/alcatraces.jpg') {
      miImage.setAttribute('src','alcatraces.jpg');
    } else {
      miImage.setAttribute('src', 'images/alcatraces.jpg');
    }
}

// personalized welcome message code

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Alcatraces,' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Alcatraces,' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}