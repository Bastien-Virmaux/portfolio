const header = document.querySelector("#header");

// On écoute l'événement de scroll sur la fenêtre
window.addEventListener("scroll", function () {
    // Récupération du scroll sur l'axe vertical
    const scrollY = window.scrollY;
    // Si le scroll est supérieur à 0, on ajoute la classe "scroll" au header
    if (scrollY > 0) {
        header.classList.add("scroll");
    }
    // Sinon, on enlève la classe "scroll"
    else {
        header.classList.remove("scroll");
    }
});