let close_sidebar = document.getElementById("close_sidebar");

close_sidebar.addEventListener("click", () => {
    right.style.width = "10%";
    right.classList.add("grid-cols-1");
    right.style.overflow = "scroll";
    left.style.width = "90%";

})
