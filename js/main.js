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

const heroImg1 = document.querySelector(".hero-section--image img:first-child");
const heroImg2 = document.querySelector(".hero-section--image img:last-child");
const heroSection = document.querySelector(".hero-section--image");

if (window.innerHeight > 768) {
    heroSection.addEventListener("mouseenter", () => {
        heroImg1.style.zIndex = 1;
        heroImg1.style.transform = "rotate(5deg) scale(0.9)";

        heroImg2.style.zIndex = 2;
        heroImg2.style.transform = "rotate(-5deg) scale(1)";
    });

    heroSection.addEventListener("mouseleave", () => {
        heroImg1.style.zIndex = 2;
        heroImg1.style.transform = "rotate(-2deg) scale(1)";

        heroImg2.style.zIndex = 1;
        heroImg2.style.transform = "rotate(5deg) scale(0.95)";
    });
}

const input = document.querySelector(".budgeInput");

input.addEventListener("input", () => {
    // Remove tudo que não for número
    let budgeInput = input.value.replace(/\D/g, "");

    if (budgeInput) {
        let valor = (parseInt(budgeInput) / 100).toFixed(2);

        input.value = "$" + valor;
    } else {
        input.value = "";
    }
});
