// Récupérer les valeurs des formulaire

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
let player_form = document.getElementById("player_form");
let pop_up = document.getElementById("pop_up");

let ajouter_player_btn = document.getElementById("ajouter_player_btn");


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

player_form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(player_nom.value);
    console.log(player_image.value);
    console.log(player_position.value);
    console.log(PACE.value);
    console.log(SHOT.value);
    console.log(PAS.value);
    console.log(DRI.value);
    console.log(PHY.value);
    console.log(REF.value);
    console.log(POS.value);
    console.log(KICK.value);
})