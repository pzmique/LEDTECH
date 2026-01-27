window.addEventListener("beforeunload", function () {
    localStorage.setItem("scrollPos", window.scrollY);
});

window.addEventListener("load", function () {
    let scrollPos = localStorage.getItem("scrollPos");
    if (scrollPos) {
        window.scrollTo(0, scrollPos);
    }
});
