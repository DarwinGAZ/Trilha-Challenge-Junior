let menu = document.querySelector(".menu");
let hamburguer = document.querySelector(".hamburguer");

document.querySelector("#btn-menu").addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        hamburguer.innerHTML = "X";
    } else {
        hamburguer.innerHTML = "&#9776;";
    }
});
