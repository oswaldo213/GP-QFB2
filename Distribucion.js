export function renderDistribucion() {
    const container = document.querySelector('.content');
    
    container.innerHTML = `
        <div class="titulo-distribucion-container">
        <h1 id="titulo_distribucion">Distribucion de pasantes</h1>
        <p id="subtitulo_distribucion">
        Asignacion de areas del laboratorio ISSSTE
        </p>
        </div>

        <div class="medio">
            <button class = "distribuir">
            <i class="fa-solid fa-shuffle" id="simbolo_shuffle"></i>
            <i id = "nombre_boton_distribuir">jajaj</i>
            </button>
        </div>
    `;

    container.querySelector('.distribuir').addEventListener('click',() => {
        console.log("Iniciando distribucion...");
    });

}