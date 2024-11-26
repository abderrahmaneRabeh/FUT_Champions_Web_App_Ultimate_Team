let close_sidebar = document.getElementById("close_sidebar");

let toggle = true;
close_sidebar.addEventListener("click", () => {
    if (toggle) {
        right.style.width = "10%";
        right.classList.add("grid-cols-1");
        right.style.overflow = "scroll";
        left.style.width = "90%";
        right.style.transition = "width 0.5s ease-in-out";
        toggle = false;
    } else {
        right.style.width = "20%";
        right.classList.remove("grid-cols-1");
        setTimeout(() => {
            left.style.width = "80%";
        }, 1000)
        right.style.transition = "width 0.5s ease-in-out";
        toggle = true;
    }
})

