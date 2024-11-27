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
let player_rate = document.getElementById("player_rate");

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
  displayPlayers();
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
      status: {
        ref: REF.value,
        pos: POS.value,
        kick: KICK.value,
        hand: HAND.value,
        pen: PEN.value
      },
      Rate: player_rate.value,
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
      status: {
        pace: PACE.value,
        shot: SHOT.value,
        pas: PAS.value,
        dri: DRI.value,
        phy: PHY.value
      },
      Rate: player_rate.value,
      nationalite: player_nationalite.value,
      league: player_league.value,
      club: player_club.value
    }
  }
  players.push(player);
  console.log(players);
}

// Ajouter les joueurs dans HTML
function displayPlayers() {

  list_players.innerHTML = "";
  players.forEach(item => {

    list_players.innerHTML += `
        
          <div class="relative flex flex-col items-center justify-center gap-1 text-white card_item" id="${item.id}">
        <div class="flex ">
          <div class="flex flex-col items-center absolute left-[20px] top-[60px]">
            <span class="font-bold">${item.Rate}</span>
            <span>${item.position}</span>
          </div>
          <img
            src="${item.image}"
            alt="arsenal player" class="w-32 h-32" />
        </div>
        <h1 class="font-bold">${item.name}</h1>
       ${item.position == "GK" ? `
        <div class="flex gap-2 text-xs stats">
           <div class="text-center pace">
            <p>REF</p>
            <p class="font-bold">${item.status.ref}</p>
          </div>
          <div class="text-center shot">
            <p>POS</p>
            <p class="font-bold">${item.status.pos}</p>
          </div>
          <div class="text-center PAS">
            <p>KICK</p>
            <p class="font-bold">${item.status.kick}</p>
          </div>
          <div class="text-center DRI">
            <p>HAND</p>
            <p class="font-bold">${item.status.hand}</p>
          </div>
          <div class="text-center PHY">
            <p>PEN</p>
            <p class="font-bold">${item.status.pen}</p>
          </div>
        </div>
        ` : `
        <div class="flex gap-2 text-xs stats">
          <div class="text-center pace">
            <p>PAC</p>
            <p class="font-bold">${item.status.pace}</p>
          </div>
          <div class="text-center shot">
            <p>SHO</p>
            <p class="font-bold">${item.status.shot}</p>
          </div>
          <div class="text-center PAS">
            <p>PAS</p>
            <p class="font-bold">${item.status.pas}</p>
          </div>
          <div class="text-center DRI">
            <p>DEF</p>
            <p class="font-bold">${item.status.dri}</p>
          </div>
          <div class="text-center PHY">
            <p>PHY</p>
            <p class="font-bold">${item.status.phy}</p>
          </div>
        </div>
        `}
        <div class="flex gap-1">
          <img class="w-6 h-4"
            src="https://cdn3.futbin.com/content/fifa25/img/nation/18.png?fm=png&ixlib=java-2.1.0&w=44&s=1753c56fa9da22457a16a2cf0f90184c"
            alt="nationalité flag" />

          <img
            src="https://cdn3.futbin.com/content/fifa25/img/league/dark/13.png?fm=png&ixlib=java-2.1.0&verzion=1&w=44&s=18fa65dd539f7a4c11622711afeecb1f"
            alt="" class="w-6 h-4" />
          <img class="w-6 h-4"
            src="https://cdn3.futbin.com/content/fifa25/img/clubs/dark/1.png?fm=png&ixlib=java-2.1.0&verzion=2&w=44&s=7b4e8535a9ec8a9fc1a5d2ef83e7322a"
            alt="club logo" />
        </div>
      </div>
        `;
  })


}