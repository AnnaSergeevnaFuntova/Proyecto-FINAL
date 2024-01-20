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


  document.addEventListener("DOMContentLoaded", function() {
    // Event listener para el botón de contacto
    document.getElementById("contactoButton").addEventListener("click", function () {
        openModal();
    });


  

    // Event listener para el botón de contacto
    document.getElementById("contactoButton").addEventListener("click", function () {
      openModal();
  });

  // Event listener para el botón de registro
  document.getElementById("registroButton").addEventListener("click", function () {
      alert("Haz clic en REGISTRO. Aquí puedes poner el código para mostrar la ventana de registro.");
  });

  // Event listener para cerrar el modal
  document.getElementById("closeModal").addEventListener("click", function () {
      closeModal();
  });

  // Event listener para enviar el formulario
  document.getElementById("submitBtn").addEventListener("click", function () {
      submitForm();
  });

  // Función para cerrar el modal
  function closeModal() {
      document.getElementById("contactModal").style.display = "none";
  }

  // Función para mostrar el modal debajo del botón
  function openModal() {
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

  // Función para enviar el formulario
  function submitForm() {
      // Obtén los valores de los campos de contacto
      const nombre = document.getElementById("nombre").value;
      const telefono = document.getElementById("telefono").value;
      const email = document.getElementById("email").value;
      const codigoPostal = document.getElementById("codigoPostal").value;

      // Aquí puedes realizar acciones con los valores, como enviarlos a un servidor

      // Cierra el modal después de enviar el formulario
      closeModal();
  }
});


