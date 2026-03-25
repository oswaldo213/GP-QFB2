document.addEventListener("DOMContentLoaded", function() {
    // 1. Buscamos el archivo sidebar.html
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            // 2. Inyectamos el contenido en el placeholder
            document.getElementById('sidebar-placeholder').innerHTML = data;

            // 3. Lógica para el "active" automático
            // Obtenemos el nombre del archivo actual (ej: "index.html")
            const path = window.location.pathname;
            const page = path.split("/").pop() || "index.html";

            // Buscamos el enlace que coincida con la página actual
            const activeLink = document.querySelector(`.sidebar-menu a[href="${page}"]`);
            
            if (activeLink) {
                // Le ponemos la clase 'active' al LI que envuelve al enlace
                activeLink.parentElement.classList.add('active');
            }
        })
        .catch(error => console.error('Error al cargar el sidebar:', error));
});


document.addEventListener("DOMContentLoaded", function() {
    fetch('search.html')
        .then(response => response.text())
        .then(data => {
            // 2. Inyectamos el contenido en el placeholder
            document.getElementById('search-placeholder').innerHTML = data;

            // 3. Lógica para el "active" automático
            // Obtenemos el nombre del archivo actual (ej: "index.html")
            const path = window.location.pathname;
            const page = path.split("/").pop() || "index.html";

            // Buscamos el enlace que coincida con la página actual
            const activeLink = document.querySelector(`.search-container a[href="${page}"]`);
            
            if (activeLink) {
                // Le ponemos la clase 'active' al LI que envuelve al enlace
                activeLink.parentElement.classList.add('active');
            }
        })
        .catch(error => console.error('Error al cargar el sidebar:', error));
});