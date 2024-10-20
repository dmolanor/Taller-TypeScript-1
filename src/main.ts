import { series } from './data.js';

let tbodySeries: HTMLElement = document.getElementById("tbodySeries")!;

let totalSeasons = 0

series.forEach((serie, index) => {
    agregarSerie(index, serie.name, serie.platform, serie.seasons)
    totalSeasons += serie.seasons;
});

agregarPromedio(totalSeasons, series.length)

function agregarSerie(i:number, name:string, platform:string, seasons:number):void {
    
    let row: HTMLElement = document.createElement("tr");

    row.innerHTML = `
        <th scope="row">${i + 1}</th>
        <td>${name}</td>
        <td>${platform}</td>
        <td>${seasons}</td>
    `;

    tbodySeries.appendChild(row);
}

function agregarPromedio(total:number, numSeries:number) {
    let average:number = total / numSeries
    let row: HTMLElement = document.createElement("tr");

    row.innerHTML = `
        <td colspan="2">Seasons average: ${average}</td>
    `;

    tbodySeries.appendChild(row);
}