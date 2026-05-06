
export function renderDashboard() {
    const container = document.querySelector('.content');
    
    container.innerHTML = `
          <div class="titulo-dashboard-container">
                        <h1 id="titulo_dashboard">Dashboard</h1>
                        <a id="subtitulo_dashboard">Sistema de Gestión de Pasantes ISSSTE</a>
                    </div>

                    <section class = "cuadros-dashboard"> <!--es para agrupar contenido comun-->
                            <!-- es como limitar una espacio en la pagina-->
                        <div class ="card">

                            <div class = "tope-de-cuadro">
                                <span class="material-symbols-outlined">group</span>
                            </div>

                            <div class = "medio-de-cuadro">
                                <div class="card-info">
                                <!--contenedores flexibles para alojar varios tipos de datos-->
                                <span class = "card-title">Pasantes activos</span>
                                <!--sitve para contenedor de una linea-->
                                <h3 class = "card-value">124</h3>
                                </div>
                            </div>
                        </div>

                        <div class ="card">

                            <div class = "tope-de-cuadro">
                                <span class="material-symbols-outlined">domain</span>
                            </div>

                            <div class = "medio-de-cuadro">
                                <div class="card-info">
                                <!--contenedores flexibles para alojar varios tipos de datos-->
                                <span class = "card-title">Tratos hechos</span>
                                <!--sitve para contenedor de una linea-->
                                <h3 class = "card-value">1</h3>
                                </div>
                                </div>
                            </div>

                        <div class ="card">

                        <div class = "tope-de-cuadro">
                            <span class="material-symbols-outlined">assignment</span>
                        </div>

                        <div class = "medio-de-cuadro">
                            <div class="card-info">
                            <!--contenedores flexibles para alojar varios tipos de datos-->
                            <span class = "card-title">Evaluaciones Pendientes</span>
                            <!--sitve para contenedor de una linea-->
                            <h3 class = "card-value">1</h3>
                            </div>
                            </div>
                        </div>

                        <div class ="card">

                        <div class = "tope-de-cuadro">
                                <span class="material-symbols-outlined">sync</span>
                        </div>

                        <div class = "medio-de-cuadro">
                            <div class="card-info">
                            <!--contenedores flexibles para alojar varios tipos de datos-->
                            <span class = "card-title">Proxima Rotación</span>
                            <!--sitve para contenedor de una linea-->
                            <h3 class = "card-value">124</h3>
                            </div>
                            </div>
                        </div>
                    
                    </section>
                
                    <section class = "cuadro-debajo">
                    <div class="Titulo-de-cuadro">
                            <h3>Evaluaciones Pendientes</h3>
                    </div>
                    <section class ="espacio-cuadro-filas" id="contenedor-pasantes">
                        </section>
                    </section>

                    


    `;

    // Ejecutamos la lógica de inyección de pasantes que tenías en script.js
    const pasantes = [
        { nombre: 'Oswaldo', inicial: 'O', area: 'Laboratorio' },
        { nombre: 'Cesar', inicial: 'C', area: 'Química' },
        { nombre: 'Lucía', inicial: 'L', area: 'Hematología' }
    ];
    
    const contenedor = document.getElementById('contenedor-pasantes');
    if (contenedor) {
        contenedor.innerHTML = pasantes.map(p => `
            <div class="fila-pasante">
                <div class="user-info">
                    <div class="avatar-circle">${p.inicial}</div>
                    <div class="user-details"><span class="nombre">${p.nombre}</span></div>
                </div>
                <div class="area-tag"><span>${p.area}</span></div>
            </div>
        `).join('');
    }
}