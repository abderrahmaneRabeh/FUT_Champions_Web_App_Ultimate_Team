// Récupérer les elements du DOM

let player_nom = document.getElementById("player_name");
let player_image = document.getElementById("player_image");
let player_position = document.getElementById("position");

let PACE = document.getElementById("PACE");
let SHOT = document.getElementById("SHOT");
let PAS = document.getElementById("PAS");
let DRI = document.getElementById("DRI");
let PHY = document.getElementById("PHY");

let REF = document.getElementById("REF");
let POS = document.getElementById("POS");
let KICK = document.getElementById("KICK");
let HAND = document.getElementById("HAND");
let PEN = document.getElementById("PEN");

let player_league = document.getElementById("player_league");
let player_club = document.getElementById("player_club");
let player_nationalite = document.getElementById("player_nationalite");

let player_form = document.getElementById("player_form");
let pop_up = document.getElementById("pop_up");
let all_stats = document.getElementById("all_stats");
let gk_stats = document.getElementById("gk_stats");

let ajouter_player_btn = document.getElementById("ajouter_player_btn");
let list_players = document.getElementById("list_players");

let id = 0;

// List des joueurs


let players = [];


let toggle = true;
ajouter_player_btn.addEventListener("click", () => {

    if (toggle) {
        pop_up.classList.remove("hidden");
        pop_up.classList.add("flex");
        toggle = false;
    } else {
        pop_up.classList.add("hidden");
        pop_up.classList.remove("flex");
        toggle = true;
    }
})

player_position.addEventListener("change", () => {
    if (player_position.value == "GK") {
        gk_stats.classList.remove("hidden");
        gk_stats.classList.add("flex");
        all_stats.classList.add("hidden");
        all_stats.classList.remove("flex");
    } else {
        gk_stats.classList.add("hidden");
        gk_stats.classList.remove("flex");
        all_stats.classList.remove("hidden");
        all_stats.classList.add("flex");
    }
})

player_form.addEventListener("submit", (e) => {
    e.preventDefault();
    addToPlayers();
    pop_up.classList.add("hidden");
    pop_up.classList.remove("flex");
    toggle = true;
})

// Ajouter le joueur
function addToPlayers() {
    let player = {};
    if (player_position.value == "GK") {
        player = {
            id: id++,
            name: player_nom.value,
            image: player_image.value,
            position: player_position.value,
            ref: REF.value,
            pos: POS.value,
            kick: KICK.value,
            hand: HAND.value,
            pen: PEN.value,
            nationalite: player_nationalite.value,
            league: player_league.value,
            club: player_club.value
        }
    } else {
        player = {
            id: id++,
            name: player_nom.value,
            image: player_image.value,
            position: player_position.value,
            pace: PACE.value,
            shot: SHOT.value,
            pas: PAS.value,
            dri: DRI.value,
            phy: PHY.value,
            nationalite: player_nationalite.value,
            league: player_league.value,
            club: player_club.value
        }
    }
    players.push(player);
    console.log(players);
}