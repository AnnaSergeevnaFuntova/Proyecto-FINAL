document.addEventListener("DOMContentLoaded", function () {
    // Obtener la lista de categorías y eventos
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => {
        // Manejar los datos de categorías y eventos
        const categoriesSection = document.getElementById("categories");
        data.forEach(category => {
          const categoryCard = createCategoryCard(category);
          categoriesSection.appendChild(categoryCard);
  
          // Iterar sobre los eventos de la categoría
          category.events.forEach(event => {
            const eventCard = createEventCard(event);
            categoryCard.appendChild(eventCard);
          });
        });
      })
      .catch(error => {
        console.error('Error al obtener datos de la API:', error);
      });
  });
  
  function createCategoryCard(category) {
    const card = document.createElement("div");
    card.classList.add("category-card");
  
    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = category.name;
  
    card.appendChild(categoryTitle);
  
    return card;
  }
  
  function createEventCard(event) {
    const card = document.createElement("div");
    card.classList.add("event-card");
  
    const image = document.createElement("img");
    image.src = event.image;
    image.alt = event.title;
  
    const title = document.createElement("h3");
    title.textContent = event.title;
  
    const description = document.createElement("p");
    description.textContent = event.description;
  
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
  
    // Añadir propiedades adicionales si están definidas en el evento
    if (event.type) {
      const type = document.createElement("p");
      type.textContent = `Type: ${event.type}`;
      card.appendChild(type);
    }
  
    if (event.location) {
      const location = document.createElement("p");
      location.textContent = `Location: ${event.location}`;
      card.appendChild(location);
    }
  
    if (event.date) {
      const date = document.createElement("p");
      date.textContent = `Date: ${event.date}`;
      card.appendChild(date);
    }
  
    return card;
  }
