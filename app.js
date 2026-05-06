import { renderDashboard } from "./Dashboard.js";
import { renderDistribucion } from "./Distribucion.js";

// 1. Objeto de rutas (aquí los nombres deben ser exactos)
const rutas = {
    '#/Dashboard': renderDashboard,
    '#/distribucion': renderDistribucion
};

function router() {

   
    const content = document.querySelector('.content');

    const path = window.location.hash || '#/Dashboard';

    const viewFunction = rutas[path];


    document.querySelectorAll('.menu-item').forEach(li => {
        li.classList.remove('active');
    });

    // 2. Buscamos el enlace <a> que coincida con el hash actual
    const enlaceActivo = document.querySelector(`a[href="${path}"]`);
    if (enlaceActivo) {
        // Al encontrarlo, le ponemos 'active' a su padre <li>
        enlaceActivo.closest('.menu-item').classList.add('active');
    }

    if(viewFunction) {
        viewFunction();
    } else {
        content.innerHTML = '<h1>404 - Página no encontrada</h1>';
    }

}


// Escuchar cuando la URL cambia (clics en menús)
window.addEventListener('hashchange', router);

// Escuchar cuando la página se carga o se recarga (F5)
window.addEventListener('load', router);
