document.addEventListener("DOMContentLoaded", function () {
    // Obtener la lista de eventos
    fetch("http://localhost:3000/events")
        .then(response => response.json())
        .then(data => {
            // Manejar los datos de eventos
            const eventListSection = document.getElementById("event-list");
            data.forEach(event => {
                const eventCard = createEventCard(event);
                eventListSection.appendChild(eventCard);
            });
        });

    // Manejar clic en las categorías
    const categories = document.querySelectorAll(".category");
    categories.forEach(category => {
        category.addEventListener("click", function () {
            const selectedCategory = this.getAttribute("data-category");
            // Lógica para filtrar eventos por categoría
            // Puedes usar fetch nuevamente para obtener eventos filtrados por categoría
        });
    });

    // Lógica para buscar eventos por nombre
    const searchInput = document.getElementById("eventName");
    searchInput.addEventListener("input", function () {
        const searchTerm = this.value;
        // Lógica para filtrar eventos por nombre
        // Puedes usar fetch nuevamente para obtener eventos filtrados por nombre
    });
});

fetch("http://localhost:3000/policeLine")
.then((package) => package.json())