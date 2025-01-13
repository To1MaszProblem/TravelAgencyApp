const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".feature__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".package__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const destinations = [
    { name: "Paryż", location: "Francja", type: "Romantyczna" },
    { name: "Tokio", location: "Japonia", type: "Kulturalna" },
    { name: "Nowy Jork", location: "USA", type: "Miejska" },
    { name: "Santorini", location: "Grecja", type: "Plażowa" },
    { name: "Machu Picchu", location: "Peru", type: "Przygodowa" },
  ];

  const destinationInput = document.getElementById("destination-input");
  const locationInput = document.getElementById("location-input");
  const typeInput = document.getElementById("type-input");

  const destinationSuggestions = document.getElementById("destination-suggestions");
  const locationSuggestions = document.getElementById("location-suggestions");
  const typeSuggestions = document.getElementById("type-suggestions");

  function showSuggestions(input, suggestionsBox, dataKey) {
    const query = input.value.toLowerCase();
    if (query === "") {
      suggestionsBox.style.display = "none";
      return;
    }

    const filtered = [...new Set(destinations.map(dest => dest[dataKey]).filter(item => item.toLowerCase().includes(query)))];
    suggestionsBox.innerHTML = "";
    filtered.forEach(item => {
      const suggestion = document.createElement("div");
      suggestion.textContent = item;
      suggestion.addEventListener("click", () => {
        input.value = item;
        suggestionsBox.style.display = "none";
      });
      suggestionsBox.appendChild(suggestion);
    });
    suggestionsBox.style.display = filtered.length ? "block" : "none";
  }

  destinationInput.addEventListener("input", () => {
    showSuggestions(destinationInput, destinationSuggestions, "name");
  });

  locationInput.addEventListener("input", () => {
    showSuggestions(locationInput, locationSuggestions, "location");
  });

  typeInput.addEventListener("input", () => {
    showSuggestions(typeInput, typeSuggestions, "type");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".input__group")) {
      destinationSuggestions.style.display = "none";
      locationSuggestions.style.display = "none";
      typeSuggestions.style.display = "none";
    }
  });
});