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

function createEventCard(event) {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    const image = document.createElement("img");
    image.src = event.image;
    image.alt = event.title;

    const title = document.createElement("h3");
    title.textContent = event.title;

    const eventType = document.createElement("p");
    eventType.textContent = `Tipo: ${event.type}`;

    const dateTime = document.createElement("p");
    dateTime.textContent = `Fecha/Hora: ${event.date} ${event.time}`;

    const maxParticipants = document.createElement("p");
    maxParticipants.textContent = `Máximo de participantes: ${event.maxParticipants}`;

    const description = document.createElement("p");
    description.textContent = event.description;

    eventCard.appendChild(image);
    eventCard.appendChild(title);
    eventCard.appendChild(eventType);
    eventCard.appendChild(dateTime);
    eventCard.appendChild(maxParticipants);
    eventCard.appendChild(description);

    return eventCard;
}
