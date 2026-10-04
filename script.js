const observer = new IntersectionObserver((entries) => {
  // Filtramos solo los que están entrando
  const visibles = entries.filter(e => e.isIntersecting);

  visibles.forEach((entry, i) => {
    // Delay relativo solo dentro de este grupo
    entry.target.style.transitionDelay = `${i * 0.15}s`;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target); // opcional: dejar de observar
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade').forEach(el => observer.observe(el));

const canciones = [
    {
        titulo: "Start Song",
        artista: "Giga-p",
        archivo: "audio/bka.mp3"
    }
];

let actual = 0;



const audio = document.getElementById("audio");
const titulo = document.getElementById("titulo");
const arti = document.getElementById("arti");

function cargarCancion() {
    audio.src = canciones[actual].archivo;
    titulo.textContent = canciones[actual].titulo;
    arti.textContent = canciones[actual].artista;
}

function reproducir() {
    audio.play();
}

function siguiente() {
    actual++;

    if (actual >= canciones.length) {
        actual = 0;
    }

    cargarCancion();
    reproducir();
}

function anterior() {
    actual--;

    if (actual < 0) {
        actual = canciones.length - 1;
    }

    cargarCancion();
    reproducir();
}

audio.addEventListener("ended", siguiente);

cargarCancion();