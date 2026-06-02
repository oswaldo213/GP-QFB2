export function renderDistribucion() {
    const container = document.querySelector('.content');
    const pasantes = ["Paula Garcia", "Ramon Sarmiento", "Sergio Verdugo",
         "Oswaldo Mendoza", "Manuel Taker"];
    const areas = ["Quimica", "Orinas", "Hematologia", "Inmunologia",
        "Bacteriologia"];

    container.innerHTML = `
        <div class="titulo-distribucion-container">
            <h1 id="titulo_distribucion">Distribucion de pasantes</h1>
            <p id="subtitulo_distribucion">
                Asignacion de areas del laboratorio ISSSTE
            </p>
        </div>

        <div id="resultado"></div>

        <div class="medio">
            <button class="distribuir">
            <i class="fa-solid fa-shuffle" id="simbolo_shuffle"></i> 
            <i id="nombre_boton_distribuir">Generar</i>
            </button>
        </div>
    `;

    container.querySelector('.distribuir').addEventListener('click', () => {
        let resultado = `<div class="tarjetas-container">`; 

        let mezclados = [...pasantes].sort(() => Math.random() - 0.5);
        mezclados.forEach((pasante, index) => {
            resultado += `
                <div class="tarjeta">
                    <div class="tarjeta-header">
                        <span class="icono-area"><i class="fa-solid fa-briefcase"></i></span>
                        <strong> ${areas[index]}</strong>
                    </div>
                    <p class="tarjeta-pasante">  ${pasante}</p>
                </div>
            `;
        });

        resultado += `</div>`;
        document.getElementById("resultado").innerHTML = resultado;
    });
}