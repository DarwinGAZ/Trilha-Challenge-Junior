let menu = document.querySelector(".menu");
let hamburguer = document.querySelector(".hamburguer");
let link = document.querySelectorAll(".menu li a");

document.querySelector("#btn-menu").addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        hamburguer.innerHTML = "X";
    } else {
        hamburguer.innerHTML = "&#9776;";
    }
});

link.forEach((item) => {
    item.addEventListener("click", () => {
        hamburguer.innerHTML = "&#9776;";
        menu.classList.remove("active");
    });
});

document.querySelectorAll("details").forEach((item) => {
    item.addEventListener("toggle", (item) => {
        const details = item.target;
        if (details.open) {
            details.style.backgroundColor = "#1b1b1b";
            details.style.color = "white";
        } else {
            details.style.backgroundColor = "white";
            details.style.color = "black";
        }
    });
});
