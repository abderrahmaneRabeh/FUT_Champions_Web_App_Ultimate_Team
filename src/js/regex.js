
function regex(input, regex) {
    input.addEventListener("input", () => {
        let value = input.value;
        if (!regex.test(value)) {
            error.innerText = "Le nom doit contenir uniquement des lettres";
        } else {
            error.innerText = "";
        }
    })
}


regex(player_nom, /^[A-Za-z]+$/);


regex(player_league, /^[A-Za-z]+$/);


regex(player_rate, /^[0-9{1,2}]+$/);

let stats = [PACE, SHOT, PAS, DRI, PHY, REF, POS, KICK, HAND, PEN];

stats.forEach(stat => {
    stat.addEventListener("input", () => {
        let regex = /^[0-9]{1,2}$/;
        let value = stat.value;
        if (!regex.test(value)) {
            error_stats.innerText = "Les stats doit contenir uniquement des chiffres et doit avoir un maximum de deux chiffres";
        } else {
            error_stats.innerText = "";
        }
    })
})