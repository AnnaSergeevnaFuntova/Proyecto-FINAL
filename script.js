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

  // Agregar evento al botón BUSCAR
  const buscarButton = document.getElementById("buscarButton");
  buscarButton.addEventListener("click", buscarEventos);

  // Event listener para el botón de contacto
  document.getElementById("contactoButton").addEventListener("click", function () {
    openContactModal();
  });

  // Event listener para el botón de registro
  document.getElementById("registroButton").addEventListener("click", function () {
    alert("Haz clic en REGISTRO. Aquí puedes poner el código para mostrar la ventana de registro.");
  });

  // Event listener para cerrar el modal
  document.getElementById("closeModal").addEventListener("click", function () {
    closeModal("contactModal");
    closeModal("registroModal");
  });

  // Event listener para enviar el formulario
  document.getElementById("submitBtn").addEventListener("click", function () {
    submitForm();
  });
});

// Logo para volver a la pagina principal
document.addEventListener("DOMContentLoaded", function () {
  const logoContainer = document.getElementById("logoContainer");

  logoContainer.addEventListener("click", function (event) {
    event.preventDefault();
    goToHomePage(); // Llamada a la función para redirigir a la página principal
  });

  // Función para redirigir a la página de inicio
  function goToHomePage() {
    window.location.href = "index.html"; // Cambia la URL según la estructura de tu proyecto
  }
});

// Modales
function openContactModal() {
  const contactoButton = document.getElementById("contactoButton");
  const modal = document.getElementById("contactModal");

  // Obtén las coordenadas del botón
  const rect = contactoButton.getBoundingClientRect();

  // Calcula la posición para el modal
  const topPosition = rect.bottom + window.scrollY + 10; // 10 es el espacio entre el botón y el modal
  const leftPosition = rect.left + window.scrollX;

  // Establece la posición del modal
  modal.style.top = `${topPosition}px`;
  modal.style.left = `${leftPosition}px`;

  // Muestra el modal
  modal.style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function submitForm() {
  // Aquí puedes agregar la lógica para enviar el formulario
  alert("Formulario enviado");
  closeModal("contactModal");
  closeModal("registroModal");
}

// Buscador de eventos
function buscarEventos() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();

  // Obtener todas las tarjetas de eventos
  const eventCards = document.querySelectorAll('.event-card');

  // Filtrar tarjetas de eventos según el texto de búsqueda
  eventCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();

    if (title.includes(searchText) || description.includes(searchText)) {
      card.style.display = 'block';  // Mostrar la tarjeta si coincide
    } else {
      card.style.display = 'none';   // Ocultar la tarjeta si no coincide
    }
  });
}

// Fizualizacion de los eventos
function createCategoryCard(category) {
  const card = document.createElement("div");
  card.classList.add("category-card");

  const categoryTitle = document.createElement("h2");
  categoryTitle.textContent = category.name;

  card.appendChild(categoryTitle);

  return card;
}

function createEventCard(event, index) {
  const cardId = `eventCard_${index}`;

  const card = document.createElement("div");
  card.classList.add("event-card");
  card.id = cardId;

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
    type.textContent = `Tipo: ${event.type}`;
    card.appendChild(type);
  }

  if (event.location) {
    const location = document.createElement("p");
    location.textContent = `Donde: ${event.location}`;
    card.appendChild(location);
  }

  if (event.date) {
    const date = document.createElement("p");
    date.textContent = `Cuando: ${event.date}`;
    card.appendChild(date);
  }

  if (event.type) {
    card.setAttribute('data-category', event.type.toLowerCase());
  }

  // Agregar el event listener para ampliar al hacer clic
  card.addEventListener("click", function () {
    mostrarInformacionDetallada(cardId);
  });

  return card;
}

// Mostrar eventos por categoria
function mostrarEventos(tipo) {
  // Obtener todas las tarjetas de eventos
  const eventCards = document.querySelectorAll('.event-card');

  // Establecer el estilo de visualización para todas las tarjetas
  eventCards.forEach(card => {
    card.style.display = 'none';
  });

  // Mostrar solo las tarjetas que coincidan con el tipo seleccionado
  eventCards.forEach(card => {
    const eventType = card.getAttribute('data-category').toLowerCase();
    if (eventType === tipo.toLowerCase()) {
      card.style.display = 'inline-block';
    }
  });
}