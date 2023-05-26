import { nbaStars } from "./app.js";

function test() {
    const filteredByPosition = filtered();
    const sortedAZ = sortedByName(filteredByPosition);

    sortedAZ.forEach((player) => {
        showPlayers(player);
    });
}

function filtered() {
    return nbaStars.filter((player) => player.position.includes("Forward"));
}

function sortedByName(players) {
    return players.sort((a, z) => a.name.localeCompare(z.name));
}

function showPlayers(player) {
    const html = /*html*/ `
    
<tr>
<td>${player.name}</td>
<td>${player.position}</td>
<td>${player.height}</td>

</tr>
    
    `;

    document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
}
export { test };
