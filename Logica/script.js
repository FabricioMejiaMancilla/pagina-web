function cargarBarra() {
    fetch('/barra.html') 
        .then(response => response.text())
        .then(data => {
            document.getElementById('Barra-Navegacion').innerHTML = data;
        })
        .catch(error => console.error('No se encuentra la página:', error));
}

window.onload = cargarBarra;