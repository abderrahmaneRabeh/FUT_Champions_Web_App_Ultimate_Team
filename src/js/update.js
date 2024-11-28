let player_position = document.getElementById("position");
let gk_stats = document.getElementById("gk_stats");
let all_stats = document.getElementById("all_stats");

let player_nom = document.getElementById("player_name");
let player_image = document.getElementById("player_image");

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
let player_rate = document.getElementById("player_rate");

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

// show player data

// update player

let player;

if (localStorage.getItem("update_player")) {
    player = JSON.parse(localStorage.getItem("update_player"));
    player_nom.value = player.name;
    player_image.value = player.image;
    player_rate.value = player.Rate;
    player_league.value = player.league;
    player_club.value = player.club;
    player_nationalite.value = player.nationalite;

    if (player.position == "GK") {
        gk_stats.classList.remove("hidden");
        gk_stats.classList.add("flex");
        all_stats.classList.add("hidden");
        all_stats.classList.remove("flex");
        player_position.value = "GK";
        REF.value = player.status.ref;
        POS.value = player.status.pos;
        KICK.value = player.status.kick;
        HAND.value = player.status.hand;
        PEN.value = player.status.pen;
    } else {
        gk_stats.classList.add("hidden");
        gk_stats.classList.remove("flex");
        all_stats.classList.remove("hidden");
        all_stats.classList.add("flex");
        player_position.value = player.position;
        PACE.value = player.status.pace;
        SHOT.value = player.status.shot;
        PAS.value = player.status.pas;
        DRI.value = player.status.dri;
        PHY.value = player.status.phy;
    }
}

player_form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (player_nom.value == "" || player_position.value == "" || player_rate.value == "" || player_image.value == "") {
        return;
    }

    if (player_position.value == "GK") {
        player.status = {
            ref: REF.value,
            pos: POS.value,
            kick: KICK.value,
            hand: HAND.value,
            pen: PEN.value
        }
    } else {
        player.status = {
            pace: PACE.value,
            shot: SHOT.value,
            pas: PAS.value,
            dri: DRI.value,
            phy: PHY.value
        }
    }

    player.name = player_nom.value;
    player.image = player_image.value;
    player.Rate = player_rate.value;
    player.league = player_league.value;
    player.club = player_club.value;
    player.nationalite = player_nationalite.value;

    let players = JSON.parse(localStorage.getItem("players"));

    for (let i = 0; i < players.length; i++) {
        if (players[i].id == player.id) {
            players[i] = player;
            localStorage.setItem("players", JSON.stringify(players));
            break;
        }

    }

    window.location.href = "./players.html";
})