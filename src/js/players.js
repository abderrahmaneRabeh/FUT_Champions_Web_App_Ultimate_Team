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

// let id = 0;

// loCalStorage
console.log(JSON.parse(localStorage.getItem("players")));


let players = [];

const ars_club = "https://cdn3.futbin.com/content/fifa25/img/clubs/dark/1.png?fm=png&ixlib=java-2.1.0&verzion=2&w=40&s=fb65bfee0b8455d18921c9ab8ced3928"
const ars_league = "https://cdn3.futbin.com/content/fifa25/img/league/dark/13.png?fm=png&ixlib=java-2.1.0&verzion=1&w=48&s=d063dafc41472a6fcf6500f96cb312b2"
// List des joueurs
if (localStorage.getItem("players")) {
  players = JSON.parse(localStorage.getItem("players"));
} else {
  players = [
    {
      id: 1,
      name: "Saliba",
      position: "DC",
      Rate: 70,
      image: "https://cdn3.futbin.com/content/fifa25/img/players/243715.png?fm=png&ixlib=java-2.1.0&verzion=1&w=100&s=46665a9cf4cae0b0ac09b102b99146a1",
      nationalite: "https://cdn3.futbin.com/content/fifa25/img/nation/18.png?fm=png&ixlib=java-2.1.0&w=48&s=505a4eaa2a12185bc0161dfb339d843d",
      club: ars_club,
      league: ars_league,
      status: {
        pace: Math.floor(Math.random() * 20) + 50,
        shot: Math.floor(Math.random() * 20) + 40,
        pas: Math.floor(Math.random() * 20) + 50,
        dri: Math.floor(Math.random() * 20) + 50,
        phy: Math.floor(Math.random() * 20) + 50
      }
    },
    {
      id: 2,
      name: "Odegaard",
      position: "CAM",
      Rate: 80,
      image: "https://cdn3.futbin.com/content/fifa25/img/players/222665.png?fm=png&ixlib=java-2.1.0&verzion=1&w=100&s=96c17bef4344b41d1082ff97b9eaf235",
      nationalite: "https://cdn3.futbin.com/content/fifa25/img/nation/36.png?fm=png&ixlib=java-2.1.0&w=48&s=611d5cc6a76c481e826c830457244fb5",
      club: ars_club,
      league: ars_league,
      status: {
        pace: Math.floor(Math.random() * 20) + 60,
        shot: Math.floor(Math.random() * 20) + 50,
        pas: Math.floor(Math.random() * 20) + 60,
        dri: Math.floor(Math.random() * 20) + 60,
        phy: Math.floor(Math.random() * 20) + 50
      }
    },
    {
      id: 3,
      name: "Saka",
      position: "RW",
      Rate: 90,
      image: "https://cdn3.futbin.com/content/fifa25/img/players/246669.png?fm=png&ixlib=java-2.1.0&verzion=1&w=100&s=a9ba1eaa6410065652a5cb29bfc81327",
      nationalite: "https://cdn3.futbin.com/content/fifa25/img/nation/14.png?fm=png&ixlib=java-2.1.0&w=48&s=e870d07278756954991cdb36d6e2fb33",
      club: ars_club,
      league: ars_league,
      status: {
        pace: Math.floor(Math.random() * 20) + 70,
        shot: Math.floor(Math.random() * 20) + 50,
        pas: Math.floor(Math.random() * 20) + 60,
        dri: Math.floor(Math.random() * 20) + 60,
        phy: Math.floor(Math.random() * 20) + 50
      },
    },
    {
      id: 4,
      name: "RICE",
      position: "CDM",
      Rate: 83,
      image: "https://cdn3.futbin.com/content/fifa25/img/players/234378.png?fm=png&ixlib=java-2.1.0&verzion=1&w=100&s=66f9692f308589c226ecd10d2ab480e5",
      nationalite: "https://cdn3.futbin.com/content/fifa25/img/nation/14.png?fm=png&ixlib=java-2.1.0&w=48&s=e870d07278756954991cdb36d6e2fb33",
      club: ars_club,
      league: ars_league,
      status: {
        pace: Math.floor(Math.random() * 20) + 70,
        shot: Math.floor(Math.random() * 20) + 50,
        pas: Math.floor(Math.random() * 20) + 60,
        dri: Math.floor(Math.random() * 20) + 60,
        phy: Math.floor(Math.random() * 20) + 50
      },
    },
    {
      id: 5,
      name: "WHITE",
      position: "RB",
      Rate: 83,
      image: "https://cdn3.futbin.com/content/fifa25/img/players/231936.png?fm=png&ixlib=java-2.1.0&verzion=1&w=100&s=8b7a0d7b790fc0a7b7b745e42e01f6ac",
      nationalite: "https://cdn3.futbin.com/content/fifa25/img/nation/14.png?fm=png&ixlib=java-2.1.0&w=48&s=e870d07278756954991cdb36d6e2fb33",
      club: ars_club,
      league: ars_league,
      status: {
        pace: Math.floor(Math.random() * 20) + 70,
        shot: Math.floor(Math.random() * 20) + 50,
        pas: Math.floor(Math.random() * 20) + 60,
        dri: Math.floor(Math.random() * 20) + 60,
        phy: Math.floor(Math.random() * 20) + 50
      },
    },
    {
      id: 6,
      name: "WHITE",
      position: "RB",
      Rate: 83,
      image: "https://cdn3.futbin.com/content/fifa25/img/players/231936.png?fm=png&ixlib=java-2.1.0&verzion=1&w=100&s=8b7a0d7b790fc0a7b7b745e42e01f6ac",
      nationalite: "https://cdn3.futbin.com/content/fifa25/img/nation/14.png?fm=png&ixlib=java-2.1.0&w=48&s=e870d07278756954991cdb36d6e2fb33",
      club: ars_club,
      league: ars_league,
      status: {
        pace: Math.floor(Math.random() * 20) + 70,
        shot: Math.floor(Math.random() * 20) + 50,
        pas: Math.floor(Math.random() * 20) + 60,
        dri: Math.floor(Math.random() * 20) + 60,
        phy: Math.floor(Math.random() * 20) + 50
      },
    },
    {
      id: 7,
      name: "Ramsdell",
      position: "GK",
      Rate: 83,
      image: "https://cdn3.futbin.com/content/fifa25/img/players/233934.png?fm=png&ixlib=java-2.1.0&verzion=1&w=100&s=856838dcc1b0f330200df3e5dcae5441",
      nationalite: "https://cdn3.futbin.com/content/fifa25/img/nation/14.png?fm=png&ixlib=java-2.1.0&w=48&s=e870d07278756954991cdb36d6e2fb33",
      club: ars_club,
      league: ars_league,
      status: {
        ref: Math.floor(Math.random() * 20) + 70,
        pos: Math.floor(Math.random() * 20) + 50,
        kick: Math.floor(Math.random() * 20) + 60,
        hand: Math.floor(Math.random() * 20) + 60,
        pen: Math.floor(Math.random() * 20) + 50
      },
    },
    {
      id: 8,
      name: "Raya",
      position: "GK",
      Rate: 83,
      image: "https://cdn3.futbin.com/content/fifa25/img/players/220901.png?fm=png&ixlib=java-2.1.0&verzion=1&w=100&s=bd1775dce096ad92059454cfdb89be6b",
      nationalite: "https://cdn3.futbin.com/content/fifa25/img/nation/45.png?fm=png&ixlib=java-2.1.0&w=48&s=a9a40a2ba724903eff690cd775c98631",
      club: ars_club,
      league: ars_league,
      status: {
        ref: Math.floor(Math.random() * 20) + 70,
        pos: Math.floor(Math.random() * 20) + 50,
        kick: Math.floor(Math.random() * 20) + 60,
        hand: Math.floor(Math.random() * 20) + 60,
        pen: Math.floor(Math.random() * 20) + 50
      },
    },
    {
      id: 9,
      name: "Merino",
      position: "CM",
      Rate: 88,
      image: "https://cdn3.futbin.com/content/fifa25/img/players/225193.png?fm=png&ixlib=java-2.1.0&verzion=1&w=100&s=ee3c007f3561253884b40faa7393e284",
      nationalite: "https://cdn3.futbin.com/content/fifa25/img/nation/45.png?fm=png&ixlib=java-2.1.0&w=48&s=a9a40a2ba724903eff690cd775c98631",
      club: ars_club,
      league: ars_league,
      status: {
        pace: Math.floor(Math.random() * 20) + 60,
        shot: Math.floor(Math.random() * 20) + 80,
        pas: Math.floor(Math.random() * 20) + 60,
        dri: Math.floor(Math.random() * 20) + 65,
        phy: Math.floor(Math.random() * 20) + 70
      }
    },
    {
      id: 10,
      name: "MAGALACH",
      position: "DC",
      Rate: 88,
      image: "https://cdn3.futbin.com/content/fifa25/img/players/232580.png?fm=png&ixlib=java-2.1.0&verzion=1&w=100&s=ba4fbdce5f49dd02b6349659ada946d1",
      nationalite: "https://cdn3.futbin.com/content/fifa25/img/nation/54.png?fm=png&ixlib=java-2.1.0&w=48&s=3f3b15b89cf9a113f6eb786eec27ccba",
      club: ars_club,
      league: ars_league,
      status: {
        pace: Math.floor(Math.random() * 20) + 60,
        shot: Math.floor(Math.random() * 20) + 80,
        pas: Math.floor(Math.random() * 20) + 60,
        dri: Math.floor(Math.random() * 20) + 65,
        phy: Math.floor(Math.random() * 20) + 70
      }
    },
    {
      id: 11,
      name: "Jesus",
      position: "ST",
      Rate: 88,
      image: "https://cdn3.futbin.com/content/fifa25/img/players/230666.png?fm=png&ixlib=java-2.1.0&verzion=1&w=100&s=0778a76a2f0610547e3d97b2c482ff94",
      nationalite: "https://cdn3.futbin.com/content/fifa25/img/nation/54.png?fm=png&ixlib=java-2.1.0&w=48&s=3f3b15b89cf9a113f6eb786eec27ccba",
      club: ars_club,
      league: ars_league,
      status: {
        pace: Math.floor(Math.random() * 20) + 60,
        shot: Math.floor(Math.random() * 20) + 80,
        pas: Math.floor(Math.random() * 20) + 60,
        dri: Math.floor(Math.random() * 20) + 65,
        phy: Math.floor(Math.random() * 20) + 70
      }
    },
    {
      id: 12,
      name: "Martinelli",
      position: "LW",
      Rate: 88,
      image: "https://cdn3.futbin.com/content/fifa25/img/players/251566.png?fm=png&ixlib=java-2.1.0&verzion=1&w=100&s=995daef79f0f8d43d295ce59f83b513b",
      nationalite: "https://cdn3.futbin.com/content/fifa25/img/nation/54.png?fm=png&ixlib=java-2.1.0&w=48&s=3f3b15b89cf9a113f6eb786eec27ccba",
      club: ars_club,
      league: ars_league,
      status: {
        pace: Math.floor(Math.random() * 20) + 60,
        shot: Math.floor(Math.random() * 20) + 80,
        pas: Math.floor(Math.random() * 20) + 60,
        dri: Math.floor(Math.random() * 20) + 65,
        phy: Math.floor(Math.random() * 20) + 70
      }
    },
    {
      id: 13,
      name: "Trossard",
      position: "ST",
      Rate: 88,
      image: "https://cdn3.futbin.com/content/fifa25/img/players/207421.png?fm=png&ixlib=java-2.1.0&verzion=1&w=100&s=e069fa4fe472df9668af0167a6e61b77",
      nationalite: "https://cdn3.futbin.com/content/fifa25/img/nation/7.png?fm=png&ixlib=java-2.1.0&w=48&s=930bed56b28dfb3c3479f7f03faca45e",
      club: ars_club,
      league: ars_league,
      status: {
        pace: Math.floor(Math.random() * 20) + 60,
        shot: Math.floor(Math.random() * 20) + 80,
        pas: Math.floor(Math.random() * 20) + 60,
        dri: Math.floor(Math.random() * 20) + 65,
        phy: Math.floor(Math.random() * 20) + 70
      }
    },
    {
      id: 14,
      name: "Jorjino",
      position: "CDM",
      Rate: 88,
      image: "https://cdn3.futbin.com/content/fifa25/img/players/205498.png?fm=png&ixlib=java-2.1.0&verzion=1&w=100&s=c7e56aae46e4d56a7a128fcf99534c6a",
      nationalite: "https://cdn3.futbin.com/content/fifa25/img/nation/27.png?fm=png&ixlib=java-2.1.0&w=48&s=6acfac00e6ed8f0a43cf9b9cf6be06c2",
      club: ars_club,
      league: ars_league,
      status: {
        pace: Math.floor(Math.random() * 20) + 60,
        shot: Math.floor(Math.random() * 20) + 80,
        pas: Math.floor(Math.random() * 20) + 60,
        dri: Math.floor(Math.random() * 20) + 65,
        phy: Math.floor(Math.random() * 20) + 70
      }
    },
    {
      id: 15,
      name: "Calafori",
      position: "LB",
      Rate: 88,
      image: "https://cdn3.futbin.com/content/fifa25/img/players/257711.png?fm=png&ixlib=java-2.1.0&verzion=1&w=100&s=0e715b17e8ae7a4625434ffa8c5cdcde",
      nationalite: "https://cdn3.futbin.com/content/fifa25/img/nation/27.png?fm=png&ixlib=java-2.1.0&w=48&s=6acfac00e6ed8f0a43cf9b9cf6be06c2",
      club: ars_club,
      league: ars_league,
      status: {
        pace: Math.floor(Math.random() * 20) + 60,
        shot: Math.floor(Math.random() * 20) + 80,
        pas: Math.floor(Math.random() * 20) + 60,
        dri: Math.floor(Math.random() * 20) + 65,
        phy: Math.floor(Math.random() * 20) + 70
      }
    },

  ];
}

displayPlayers();

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
      id: players.length + 1,
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
      id: players.length + 1,
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
  sauvegarder_players();
}


if (players.length == 0) {
  list_players.innerHTML = `<div class="w-full mt-32 font-bold text-xl text-center">Aucun joueur, ajouté nouveau joueur</div>`;
}

// Ajouter les joueurs dans HTML
function displayPlayers(filter = []) {

  list_players.innerHTML = "";


  if (filter.length == 0) {
    filter = players;
  }

  filter.forEach((item) => {
    list_players.innerHTML += `       
    <div class="relative  flex flex-col items-center justify-center gap-1 text-white card_item" id="${item.id}">
  <div class="flex">
    <div class="flex flex-col items-center absolute left-[20px] top-[45px] rate_item">
      <span class="font-bold">${item.Rate}</span>
      <span>${item.position}</span>
    </div>
    <div class="flex flex-col items-center absolute space-y-2 right-[15px] top-[45px] edit_del">
      <span class="fa-solid fa-trash" onclick="deletePlayer(${item.id})"></span>
      <span class="fa-solid fa-pen-to-square" onclick="updatePlayer(${item.id})"></span>
    </div>
    <img
      src="${item.image}"
      alt="arsenal player" class="w-20 h-20" />
  </div>
  <h1 class="font-bold">${item.name}</h1>
 ${item.position == "GK" ? `
  <div class="flex gap-1 text-xs stats">
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
      src="${item.nationalite}"
    alt = "nationalité flag" />

    <img
      src="https://cdn3.futbin.com/content/fifa25/img/league/dark/13.png?fm=png&ixlib=java-2.1.0&verzion=1&w=44&s=18fa65dd539f7a4c11622711afeecb1f"
      alt="" class="w-6 h-4" />
    <img class="w-6 h-4"
      src="https://cdn3.futbin.com/content/fifa25/img/clubs/dark/1.png?fm=png&ixlib=java-2.1.0&verzion=2&w=44&s=7b4e8535a9ec8a9fc1a5d2ef83e7322a"
      alt="club logo" />
  </div >
</div >
      `;
  })
}


// rEchercher les joueurs
let search = document.querySelector(".search");

function searchPlayer() {
  let filter = players.filter((item) => {
    return item.name.toLowerCase().includes(search.value.toLowerCase());
  });

  displayPlayers(filter);
}

search.addEventListener("input", searchPlayer);


// sauvegarder les joueurs

function sauvegarder_players() {
  localStorage.setItem("players", JSON.stringify(players));
}