const btnMenu = document.getElementById("btn-menu")
const menu = document.getElementById("drop-down-menu")


btnMenu.addEventListener("click", (e) => {
    e.stopPropagation();

    menu.classList.toggle("open")
    menu.animate (
        [
            { transform: 'translateY(50px)' },
            { transform: 'translateY(0)' },
            { transform: 'translateY(10px)'},
            { transform: 'translateY(0)' }
        ],
        {
            duration: 500,
            easing: 'ease'
        }
    )
});

document.addEventListener("click", () => {
    menu.classList.remove("open");
});

menu.addEventListener("click", () => {
    menu.classList.remove("open")
});
