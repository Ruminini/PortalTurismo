document.addEventListener("DOMContentLoaded", function () {
    // Aquí puedes usar AJAX o Fetch para cargar datos dinámicamente desde un servidor.
    // Por ahora, utilizaremos datos estáticos como ejemplo.

    // Datos de eventos
    const eventsData = [
        {
          titulo: "Concierto en el Parque",
          informacion: "Disfruta de una tarde de música en vivo con bandas locales.",
          ubicacion: "Parque Central",
          hora: "18:00"
        },
        {
          titulo: "Exposición de Arte Moderno",
          informacion: "Descubre las últimas obras de artistas contemporáneos.",
          ubicacion: "Galería de Arte Municipal",
          hora: "19:30"
        },
        {
          titulo: "Charla sobre Sostenibilidad",
          informacion: "Conoce las prácticas sostenibles para un futuro mejor.",
          ubicacion: "Centro Comunitario",
          hora: "16:00"
        },
        {
          titulo: "Feria de Comida Internacional",
          informacion: "Explora sabores de todo el mundo en un solo lugar.",
          ubicacion: "Plaza Gastronómica",
          hora: "20:00"
        },
        {
          titulo: "Taller de Fotografía",
          informacion: "Aprende técnicas y consejos de fotografía con profesionales.",
          ubicacion: "Escuela de Artes Visuales",
          hora: "15:00"
        }
      ];

    // Datos de lugares
    const placesData = [
        {
          resumen: "Museo de Arte Moderno",
          descripcion: "Explora obras fascinantes de artistas contemporáneos en este museo de renombre.",
          foto: "https://dummyimage.com/120.png?text=Sitio%20interes"
        },
        {
          resumen: "Jardín Botánico",
          descripcion: "Sumérgete en la belleza de la flora mundial en este tranquilo jardín botánico.",
          foto: "https://dummyimage.com/120.png?text=Sitio%20interes"
        },
        {
          resumen: "Mirador Panorámico",
          descripcion: "Disfruta de impresionantes vistas panorámicas desde este mirador en lo alto de la ciudad.",
          foto: "https://dummyimage.com/120.png?text=Sitio%20interes"
        },
        {
          resumen: "Teatro Histórico",
          descripcion: "Sumérgete en la historia en este teatro antiguo que ha sido escenario de innumerables actuaciones.",
          foto: "https://dummyimage.com/120.png?text=Sitio%20interes"
        },
        {
          resumen: "Mercado Tradicional",
          descripcion: "Explora los sabores y colores locales en este bullicioso mercado tradicional.",
          foto: "https://dummyimage.com/120.png?text=Sitio%20interes"
        }
      ]
      ;

    // Función para mostrar eventos
    function renderEvents() {
        const eventsSection = document.getElementById("events");

        eventsData.forEach(event => {
            const eventElement = document.createElement("div");
            eventElement.classList.add("event");
            eventElement.innerHTML = `<p><strong>${event.titulo}</strong></p>
                                      <p>${event.informacion}</p>
                                      <p><em>${event.ubicacion}</em></p>
                                      <p>${event.hora}</p>`;
            eventsSection.appendChild(eventElement);
        });
    }

    // Función para mostrar lugares
    function renderPlaces() {
        const placesSection = document.getElementById("places");

        placesData.forEach(place => {
            const placeElement = document.createElement("div");
            placeElement.classList.add("place");
            placeElement.innerHTML = `<img src="${place.foto}" alt="${place.resumen}">
                                      <aside><h2>${place.resumen}</h2>
                                      <p>${place.descripcion}</p></aside>`;
            placesSection.appendChild(placeElement);
        });
    }

    // Llama a las funciones para mostrar eventos y lugares
    renderEvents();
    renderPlaces();
});