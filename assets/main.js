// ==================================
// ANO AUTOMÁTICO NO FOOTER
// ==================================

const year = document.getElementById("currentyear");

if (year) {

    year.textContent = new Date().getFullYear();

}


// ==================================
// SOMBRA NO HEADER AO FAZER SCROLL
// ==================================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (header) {

        if (window.scrollY > 50) {

            header.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.1)";

        } else {

            header.style.boxShadow = "none";

        }

    }

});


// ==================================
// ANIMAÇÃO HERO
// ==================================

window.addEventListener("load", () => {

    const heroText = document.querySelector(".hero-content, .page-header");

    if (heroText) {

        heroText.style.opacity = "0";

        heroText.style.transform =
        "translateY(20px)";


        setTimeout(() => {

            heroText.style.transition =
            "1s ease";

            heroText.style.opacity = "1";

            heroText.style.transform =
            "translateY(0)";

        },200);

    }

});