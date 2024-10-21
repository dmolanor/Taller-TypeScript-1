import { series } from './data.js';
let tbodySeries = document.getElementById("tbodySeries");
let serieDetail = document.getElementById("serieDetail");
let totalSeasons = 0;
// Recorre las series y agrega filas a la tabla
series.forEach((serie) => {
    agregarSerie(serie.id, serie.name, serie.channel, serie.seasons, serie);
    totalSeasons += serie.seasons;
});
agregarPromedio(totalSeasons, series.length);
// Función para agregar series a la tabla
function agregarSerie(id, name, platform, seasons, serie) {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${id}</td>
        <td><a href="#" class="serie-name" data-serie-id="${id}">${name}</a></td>
        <td>${platform}</td>
        <td>${seasons}</td>
    `;
    // Agrega un event listener solo al nombre de la serie
    let serieNameLink = row.querySelector('.serie-name');
    serieNameLink?.addEventListener("click", (e) => {
        e.preventDefault(); // Previene la navegación por defecto del enlace
        mostrarDetalleSerie(serie);
    });
    tbodySeries.appendChild(row);
}
// Función para agregar el promedio de temporadas
function agregarPromedio(total, numSeries) {
    let average = total / numSeries;
    let row = document.createElement("tr");
    row.innerHTML = `
        <td colspan="2">Seasons average: ${average.toFixed(2)}</td>
    `;
    tbodySeries.appendChild(row);
}
// Función para mostrar el detalle de la serie en una tarjeta (Card de Bootstrap)
function mostrarDetalleSerie(serie) {
    serieDetail.innerHTML = `
        <div class="card">
            <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.link}" class="btn btn-primary" target="_blank">Go to ${serie.name}</a>
            </div>
        </div>
    `;
    serieDetail.style.display = 'block';
}
