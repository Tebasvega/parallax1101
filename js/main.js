// Elementos del parallax de inicio
const mountainBlue = document.querySelector("#mountain-blue");
const mountainRed = document.querySelector("#mountain-red");
const treesLeft = document.querySelector("#trees-left");
const treesBottom = document.querySelector("#trees-bottom");
const man = document.querySelector("#man");
const plants = document.querySelector("#plants");

// Elementos del Header
const header = document.querySelector("#header");

// Animación de Parallax y Header
window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    // Fondo del header cambia al bajar
    if (scroll > 50) {
        header.style.backgroundColor = "rgba(44, 62, 80, 0.95)";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
    } else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }

    // Efecto parallax restringido solo al Hero Section para mejor rendimiento
    if (scroll < window.innerHeight) {
        mountainBlue.style.transform = `translateX(${scroll * 1}px)`;
        mountainRed.style.transform = `translateX(${scroll * 0.5}px)`;
        treesLeft.style.transform = `translate(${scroll * -1}px, ${scroll * 1}px)`;
        treesBottom.style.transform = `translateX(${scroll * -1}px)`;
        man.style.transform = `translateX(${scroll * -0.5}px)`;
        plants.style.transform = `translateX(${scroll * -1}px)`;
    }
});

// Simulador de envío de formulario de contacto
const formularios = document.querySelectorAll('form');
formularios.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita recargar la página
        alert("¡Información enviada con éxito! Nos pondremos en contacto pronto.");
        form.reset(); // Limpia los campos
    });
});