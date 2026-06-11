document.addEventListener("DOMContentLoaded", () => {
  // Menu hamburger
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".nav-list");
  if (hamburger && navbar) {
    hamburger.addEventListener("click", () =>
      navbar.classList.toggle("active"),
    );
    navbar.addEventListener("mouseleave", () =>
      navbar.classList.remove("active"),
    );
  }

  // Formulaire de connexion
  const connexionBtn = document.getElementById("connexion");
  const closeBtn = document.querySelector(".close");
  const form = document.querySelector(".form");
  const blureElements = document.querySelectorAll(".blure");
  if (connexionBtn && closeBtn && form) {
    connexionBtn.addEventListener("click", () => {
      form.classList.add("active");
      blureElements.forEach((el) => el.classList.add("act"));
    });
    closeBtn.addEventListener("click", () => {
      form.classList.remove("active");
      blureElements.forEach((el) => el.classList.remove("act"));
    });
  }

  // Validation de connexion (simulée)
  const formConnexion = document.getElementById("formConnexion");
  if (formConnexion) {
    formConnexion.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("name").value.trim();
      const pwd = document.getElementById("password").value;
      const errorDiv = document.querySelector(".error-message");
      if (!user || !pwd) {
        errorDiv.textContent = "Veuillez remplir tous les champs.";
        return;
      }
      if (pwd.length < 6) {
        errorDiv.textContent =
          "Le mot de passe doit comporter au moins 6 caractères.";
        return;
      }
      errorDiv.textContent = "";
      window.location.href = "/membre.html";
    });
  }

  // Slider d'images (chemins absolus)
  const slideImg = document.getElementById("slide");
  if (slideImg) {
    const slides = [
      "./assets/image1.jpg",
      "./assets/image2.webp",
      "./assets/image3.jpg",
      "./assets/image4.webp",
    ];
    let num = 0;
    window.changeSlide = function (sens) {
      slideImg.style.opacity = "0";
      setTimeout(() => {
        num = (num + sens + slides.length) % slides.length;
        slideImg.src = slides[num];
        slideImg.style.opacity = "1";
      }, 300);
    };
   // setInterval(() => changeSlide(1), 4000);
  }

  // Déconnexion sur la page membre
  const deconnexionBtn = document.getElementById("deconnexion");
  if (deconnexionBtn) {
    deconnexionBtn.addEventListener("click", () => {
      window.location.href = "./index.html";
    });
  }
});

/*
const blures = document.querySelectorAll(".blure");
const form = document.querySelector(".form");
const form2 = document.querySelector(".form2");
const inscription = document.getElementById("inscription");
const connexion = document.getElementById("connexion");
const closess = document.querySelectorAll(".close");

inscription.addEventListener("click", () => {
  if (form2) {
    form2.classList.remove("active");
  }
  form.classList.toggle("active");
  blures.forEach((blure) => {
    blure.classList.add("filter");
  });
});

connexion.addEventListener("click", () => {
  if (form) {
    form.classList.remove("active");
  }
  form2.classList.toggle("active");

  blures.forEach((blure) => {
    blure.classList.add("filter");
  });
});

closess.forEach((closes) => {
  closes.addEventListener("click", () => {
    form.classList.remove("active");
  });
});

closess.forEach((closes) => {
  closes.addEventListener("click", () => {
    form2.classList.remove("active");
  });
});

closess.forEach((closes) => {
  closes.addEventListener("click", () => {
    blures.forEach((blure) => {
      blure.classList.remove("filter");
    });
  });
});

inscription.addEventListener("click", () => {
  console.log("bravo2");
});

connexion.addEventListener("click", () => {
  console.log("bravo3");
});

*/
