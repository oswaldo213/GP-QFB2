document.getElementById("myButton").addEventListener("click", function() {
    window.location.href = "login.html";
});


function cargarContenido(url,elemento){

    const todosLosItems = document.querySelectorAll('.menu-item');
    todosLosItems.forEach(item => item.classList.remove('active'));

    // 2. Si el usuario hizo clic en un elemento, le ponemos la clase 'active'
    if (elemento) {
        // Buscamos el padre <li> del <a> para ponerle el fondo negro
        const liPadre = elemento.closest('.menu-item');
        if (liPadre) {
            liPadre.classList.add('active');
        }
    }

     fetch(url)
        .then(res => res.text())
        .then(html => {
           const parser = new DOMParser(); //declaro un objeto de tipo DOM
           //DOM es para la interaz de js 
           const doc = parser.parseFromString(html,'text/html'); 
           //es para convertir el texto que tiene el html en uno virtual
           
           
           const nuevoContenido = doc.querySelector('.content').innerHTML; // ??
            //estoy metiendo a nuevo contenido el contenido de la pagina que se cargara
            document.querySelector('.content').innerHTML = nuevoContenido;
            //aqui es para decir que el espacio del area .content original sera actualizado
            window.history.pushState({},'',url);
            //recargar el historia para que no recargue
        })
        .catch(error => console.error('Error al cargar:', error));
}

