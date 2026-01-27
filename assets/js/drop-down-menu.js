const btnMenu = document.getElementById("btn-menu")
const menu = document.getElementById("drop-down-menu")


btnMenu.addEventListener("click", (e) => {
    e.stopPropagation();

    menu.classList.toggle("open")
});

document.addEventListener("click", () => {
    menu.classList.remove("open");
});

menu.addEventListener("click", () => {
    menu.classList.remove("open")
});