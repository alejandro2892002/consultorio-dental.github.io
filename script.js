document.addEventListener("DOMContentLoaded", function() {
    let servicios = document.querySelectorAll(".servicio");
    let currentIndex = 0;

    const audioElement = document.getElementById("audio");

    function showService(index) {
        servicios.forEach((serv, i) => {
            serv.classList.toggle("activo", i === index);
        });
    }

    function playAudio(serviceElement) {
        // Obtener la ruta del archivo de audio desde el atributo 'data-audio'
        const audioSrc = serviceElement.getAttribute("data-audio");

        // Si el audio que se va a reproducir es el mismo que el actual y ya está en reproducción, pausarlo
        if (audioElement.src.includes(audioSrc)) {
            if (audioElement.paused) {
                // Reproducir el audio si está pausado
                audioElement.play();
            } else {
                // Pausar el audio si ya está en reproducción
                audioElement.pause();
            }
        } else {
            // Asignar la nueva ruta del archivo de audio al elemento de audio
            audioElement.src = audioSrc;

            // Reproducir el audio
            audioElement.play();
        }
    }

    // Añadir un evento de clic a cada servicio para reproducir o pausar el audio correspondiente
    servicios.forEach(servicio => {
        servicio.addEventListener("click", function() {
            playAudio(servicio);
        });
    });

    document.getElementById("prevServicio").addEventListener("click", function() {
        currentIndex = (currentIndex === 0) ? servicios.length - 1 : currentIndex - 1;
        showService(currentIndex);
    });

    document.getElementById("nextServicio").addEventListener("click", function() {
        currentIndex = (currentIndex === servicios.length - 1) ? 0 : currentIndex + 1;
        showService(currentIndex);
    });

    // Mostrar el primer servicio
    showService(currentIndex);
});
