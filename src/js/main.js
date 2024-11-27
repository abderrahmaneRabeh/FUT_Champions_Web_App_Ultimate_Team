let close_sidebar = document.getElementById("close_sidebar");

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


//Récuperer les joueurs dans localStorage

if (localStorage.getItem("players")) {
    let players = JSON.parse(localStorage.getItem("players"));
    console.log(players);

}
