let close_sidebar = document.getElementById("close_sidebar");

// Les position des joueurs 

let GK = document.getElementById("GK");
let LB = document.getElementById("LB");
let RB = document.getElementById("RB");
let DC_1 = document.getElementById("DC1");
let DC_2 = document.getElementById("DC2");
let MC = document.getElementById("CM");
let CAM = document.getElementById("CAM");
let CDM = document.getElementById("CMD");
let RW = document.getElementById("RW");
let LW = document.getElementById("LW");
let ST = document.getElementById("ST");


// substituer les joueurs

let sub_1 = document.getElementById("substitut-1");
let sub_2 = document.getElementById("substitut-2");
let sub_3 = document.getElementById("substitut-3");
let sub_4 = document.getElementById("substitut-4");
let sub_5 = document.getElementById("substitut-5");
let sub_6 = document.getElementById("substitut-6");
let sub_7 = document.getElementById("substitut-7");

// tout les remplacent des joueurs

let sub = [sub_1, sub_2, sub_3, sub_4, sub_5, sub_6, sub_7];

let toggle = true;
close_sidebar.addEventListener("click", () => {
    if (toggle) {
        right.style.transition = "width 0.5s ease-in-out";
        right.classList.remove("grid-cols-2");
        right.classList.add("grid-cols-1");
        close_sidebar.style.width = "2rem";
        close_sidebar.style.paddingBottom = "1rem";
        right.style.width = "10%";
        right.style.overflow = "scroll";
        left.style.width = "90%";
        toggle = false;
    } else {
        right.style.width = "20%";
        right.classList.remove("grid-cols-1");
        right.classList.add("grid-cols-2");
        setTimeout(() => {
            left.style.width = "80%";
        }, 300)
        right.style.transition = "width 0.5s ease-in-out";
        toggle = true;
    }
})


//Récuperer les joueurs de localStorage

let players = [];

if (localStorage.getItem("players")) {
    players = JSON.parse(localStorage.getItem("players"));
    console.log(players);
}

// Ajouter le joueur à un position dans l'equipe

function filterPlayersByPosition(position) {
    return players.filter(player => player.position === position);
}

function popUp(input, position) {

    input.addEventListener("click", () => {
        setUpPopUp();

        let players = filterPlayersByPosition(position);

        displayPlayers(players);

        setTimeout(() => {
            players_pop_up.classList.remove("flex");
            players_pop_up.classList.add("hidden");
        }, 2000)

    })

}

popUp(GK, "GK");
popUp(LB, "LB");
popUp(RB, "RB");
popUp(MC, "CM");
popUp(CAM, "CAM");
popUp(CDM, "CDM");
popUp(RW, "RW");
popUp(LW, "LW");
popUp(ST, "ST");

let def_1 = false;
let def_2 = false;
DC_1.addEventListener("click", () => {

    setUpPopUp();

    let players = filterPlayersByPosition("DC");

    displayPlayers(players);

    def_1 = true;
    def_2 = false;

    setTimeout(() => {
        players_pop_up.classList.remove("flex");
        players_pop_up.classList.add("hidden");
    }, 2000)

});
DC_2.addEventListener("click", () => {

    setUpPopUp();

    def_1 = false;
    def_2 = true;

    let players = filterPlayersByPosition("DC");

    displayPlayers(players);

    setTimeout(() => {
        players_pop_up.classList.remove("flex");
        players_pop_up.classList.add("hidden");
    }, 2000)


});


function displayPlayers(players = []) {

    players.forEach(player => {
        players_pop_up.innerHTML += `
        <div class="relative cursor-pointer hover:scale-95 transition-transform flex flex-col items-center justify-center text-white card_item" onClick="AddaPlayerToTeam(${player.id})" id="${player.id}">
            <div class="flex">
                <div class="flex flex-col items-center absolute left-[10px] top-[20px] rate_item">
                    <span class="font-bold">${player.Rate}</span>
                    <span>${player.position}</span>
                </div>
                <img src="${player.image}"
                    alt="arsenal player" class="w-12 h-12 mt-2">
            </div>
            <p class="font-bold name_joueur">${player.name}</p>

          ${player.position == "GK" ? `
           <div class="flex gap-1 text-xs stats">
                <div class="text-center pace">
                    <p>REF</p>
                    <p class="font-bold">${player.status.ref}</p>
                </div>
                <div class="text-center shot">
                    <p>POS</p>
                    <p class="font-bold">${player.status.pos}</p>
                </div>
                <div class="text-center PAS">
                    <p>KICK</p>
                    <p class="font-bold">${player.status.kick}</p>
                </div>
                <div class="text-center DRI">
                    <p>HAND</p>
                    <p class="font-bold">${player.status.hand}</p>
                </div>
                <div class="text-center PHY">
                    <p>PEN</p>
                    <p class="font-bold">${player.status.pen}</p>
                </div>
            </div>
          `: `
          
          <div class="flex gap-2 text-xs stats">
    <div class="text-center pace">
      <p>PAC</p>
      <p class="font-bold">${player.status.pace}</p>
    </div>
    <div class="text-center shot">
      <p>SHO</p>
      <p class="font-bold">${player.status.shot}</p>
    </div>
    <div class="text-center PAS">
      <p>PAS</p>
      <p class="font-bold">${player.status.pas}</p>
    </div>
    <div class="text-center DRI">
      <p>DEF</p>
      <p class="font-bold">${player.status.dri}</p>
    </div>
    <div class="text-center PHY">
      <p>PHY</p>
      <p class="font-bold">${player.status.phy}</p>
    </div>
  </div>`}

            <div class="flex gap-1 mb-2">
                <img class="w-3 h-2"
                    src="${player.nationalite}"
                    alt="nationalité flag">

                <img src="https://cdn3.futbin.com/content/fifa25/img/league/dark/13.png?fm=png&amp;ixlib=java-2.1.0&amp;verzion=1&amp;w=44&amp;s=18fa65dd539f7a4c11622711afeecb1f"
                    alt="" class="w-3 h-2">
                <img class="w-3 h-2"
                    src="https://cdn3.futbin.com/content/fifa25/img/clubs/dark/1.png?fm=png&amp;ixlib=java-2.1.0&amp;verzion=2&amp;w=44&amp;s=7b4e8535a9ec8a9fc1a5d2ef83e7322a"
                    alt="club logo">
            </div>
        </div>
        
        `
    });

}

//set up pop up 

function setUpPopUp() {

    players_pop_up.innerHTML = "";

    players_pop_up.classList.remove("hidden");
    players_pop_up.classList.add("flex");

    if (players.length == 0) {
        players_pop_up.innerHTML = `<div class="w-full mt-32 font-bold text-xl text-center">Aucun joueur, ajouté nouveau joueur</div>`;
    }
}

// add cliked player to the right position

function AddaPlayerToTeam(id) {

    let player = players.find((player) => player.id == id);

    switch (player.position) {
        case "GK":
            GK.innerHTML = `
                <div class="relative flex flex-col items-center justify-center text-white card_item">
                    <div class="flex">
                        <div class="flex flex-col items-center absolute left-[10px] top-[20px] rate_item">
                            <span class="font-bold">${player.Rate}</span>
                            <span>${player.position}</span>
                        </div>
                        <img src="${player.image}"
                            alt="arsenal player" class="w-12 h-12 mt-2">
                    </div>
                    <p class="font-bold name_joueur">${player.name}</p>

                    <div class="flex gap-1 text-xs stats">
                        <div class="text-center pace">
                        <p>REF</p>
                        <p class="font-bold">${player.status.ref}</p>
                        </div>
                        <div class="text-center shot">
                        <p>POS</p>
                        <p class="font-bold">${player.status.pos}</p>
                        </div>
                        <div class="text-center PAS">
                        <p>KICK</p>
                        <p class="font-bold">${player.status.kick}</p>
                        </div>
                        <div class="text-center DRI">
                        <p>HAND</p>
                        <p class="font-bold">${player.status.hand}</p>
                        </div>
                        <div class="text-center PHY">
                        <p>PEN</p>
                        <p class="font-bold">${player.status.pen}</p>
                        </div>
                    </div>

                    <div class="flex gap-1 mb-2">
                        <img class="w-3 h-2"
                            src="${player.nationalite}"
                            alt="nationalité flag">

                        <img src="https://cdn3.futbin.com/content/fifa25/img/league/dark/13.png?fm=png&amp;ixlib=java-2.1.0&amp;verzion=1&amp;w=44&amp;s=18fa65dd539f7a4c11622711afeecb1f"
                            alt="" class="w-3 h-2">
                        <img class="w-3 h-2"
                            src="https://cdn3.futbin.com/content/fifa25/img/clubs/dark/1.png?fm=png&amp;ixlib=java-2.1.0&amp;verzion=2&amp;w=44&amp;s=7b4e8535a9ec8a9fc1a5d2ef83e7322a"
                            alt="club logo">
                    </div>
                </div>
            `
            break;
        case "LB":
            LB.innerHTML = playerData(player, true);
            break;
        case "RB":
            RB.innerHTML = playerData(player, true);
            break;
        case "DC":
            if (def_1) {
                DC_1.innerHTML = playerData(player);
            } else {
                DC_2.innerHTML = playerData(player);
            }
            break;
        case "CM":
            MC.innerHTML = playerData(player);
            break;
        case "CAM":
            CAM.innerHTML = playerData(player, true);
            break;
        case "CDM":
            CDM.innerHTML = playerData(player);
            break;
        case "RW":
            RW.innerHTML = playerData(player);
            break;
        case "LW":
            LW.innerHTML = playerData(player);
            break;
        case "ST":
            ST.innerHTML = playerData(player, true);
            break;
    }
}

function playerData(player, mrg = false) {
    return `
            <div class="relative flex flex-col items-center justify-center ${mrg ? "ml-14" : ""} text-white card_item">
                <div class="flex">
                    <div class="flex flex-col items-center absolute left-[10px] top-[20px] rate_item">
                        <span class="font-bold">${player.Rate}</span>
                        <span>${player.position}</span>
                    </div>
                    <img src="${player.image}"
                        alt="arsenal player" class="w-12 h-12 mt-2">
                </div>
                <p class="font-bold name_joueur">${player.name}</p>
                 <div class="flex gap-2 text-xs stats">
                    <div class="text-center pace">
                    <p>PAC</p>
                    <p class="font-bold">${player.status.pace}</p>
                    </div>
                    <div class="text-center shot">
                    <p>SHO</p>
                    <p class="font-bold">${player.status.shot}</p>
                    </div>
                    <div class="text-center PAS">
                    <p>PAS</p>
                    <p class="font-bold">${player.status.pas}</p>
                    </div>
                    <div class="text-center DRI">
                    <p>DEF</p>
                    <p class="font-bold">${player.status.dri}</p>
                    </div>
                    <div class="text-center PHY">
                    <p>PHY</p>
                    <p class="font-bold">${player.status.phy}</p>
                    </div>
                </div>
                <div class="flex gap-1 mb-2">
                    <img class="w-3 h-2"
                        src="${player.nationalite}"
                        alt="nationalité flag">
                    <img src="https://cdn3.futbin.com/content/fifa25/img/league/dark/13.png?fm=png&amp;ixlib=java-2.1.0&amp;verzion=1&amp;w=44&amp;s=18fa65dd539f7a4c11622711afeecb1f"
                        alt="" class="w-3 h-2">
                    <img class="w-3 h-2"
                        src="https://cdn3.futbin.com/content/fifa25/img/clubs/dark/1.png?fm=png&amp;ixlib=java-2.1.0&amp;verzion=2&amp;w=44&amp;s=7b4e8535a9ec8a9fc1a5d2ef83e7322a"
                        alt="club logo">
                </div>
            </div>
            `
}