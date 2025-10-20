/* ========================================
   Floating Beach Panabo City - JavaScript
   ======================================== */

// ========================================
// Performance: Debounce Function
// ========================================

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// ========================================
// Hamburger Menu Toggle
// ========================================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ========================================
// Smooth Scroll to Section
// ========================================

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// ========================================
// Gallery Lightbox
// ========================================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.querySelector(".lightbox-image");

function openLightbox(imageSrc) {
  lightbox.classList.add("active");
  lightboxImage.src = imageSrc;
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto"; // Allow scrolling
}

// Close lightbox when clicking outside the image
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

// Close lightbox on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox && lightbox.classList.contains("active")) {
    closeLightbox();
  }
});

// ========================================
// Contact Form Validation & Submission
// ========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

function handleFormSubmit(event) {
  if (!event) return;
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const message = document.getElementById("message")?.value.trim();

  // Reset previous messages
  if (formMessage) {
    formMessage.textContent = "";
    formMessage.className = "form-message";
  }

  // Validation checks
  if (!name) {
    showFormMessage("Please enter your full name.", "error");
    return;
  }

  if (!email) {
    showFormMessage("Please enter your email address.", "error");
    return;
  }

  // Email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showFormMessage("Please enter a valid email address.", "error");
    return;
  }

  if (!message) {
    showFormMessage("Please enter your message.", "error");
    return;
  }

  if (message.length < 10) {
    showFormMessage("Message must be at least 10 characters long.", "error");
    return;
  }

  // If all validation passes
  showFormMessage(
    "✓ Thank you for your message! We'll get back to you soon.",
    "success"
  );

  // Reset form
  contactForm?.reset();

  // Auto-hide success message after 5 seconds
  setTimeout(() => {
    if (formMessage) formMessage.className = "form-message";
  }, 5000);
}

function showFormMessage(message, type) {
  if (formMessage) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
  }
}

// ========================================
// Fade-in Animation on Scroll
// ========================================

function observeElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all fade-in-on-scroll elements
  const elementsToObserve = document.querySelectorAll(".fade-in-on-scroll");
  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });
}

// Initialize observer when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  observeElements();
  lazyLoadImages();
  initActiveNavigation();
  initStickyNav();
});

// ========================================
// Hero fade-in animation (immediate)
// ========================================

window.addEventListener("load", () => {
  const fadeInElements = document.querySelectorAll(".fade-in");
  fadeInElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = "1";
    }, index * 100);
  });
});

// ========================================
// Sticky Navigation Effects (Optimized)
// ========================================

let lastScrollTop = 0;
let ticking = false;
const navbar = document.querySelector(".navbar");

function updateStickyNav() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (navbar) {
    if (scrollTop > 50) {
      navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
    } else {
      navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
    }
  }

  lastScrollTop = scrollTop;
  ticking = false;
}

function initStickyNav() {
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateStickyNav);
      ticking = true;
    }
  });
}

// ========================================
// Active Navigation Link on Scroll (Optimized)
// ========================================

function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === currentSection) {
      link.style.color = "var(--primary-ocean)";
    } else {
      link.style.color = "var(--text-dark)";
    }
  });
}

function initActiveNavigation() {
  window.addEventListener("scroll", debounce(updateActiveNav, 50), {
    passive: true,
  });
}

// ========================================
// Lazy Loading Images
// ========================================

function lazyLoadImages() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
          }
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img.lazy").forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

// ========================================
// Mobile Menu Auto-close on Resize
// ========================================

window.addEventListener(
  "resize",
  debounce(() => {
    if (window.innerWidth > 768 && navMenu) {
      navMenu.classList.remove("active");
    }
  }, 150),
  { passive: true }
);

// ========================================
// Initialization Log
// ========================================

console.log("✓ Floating Beach Website Initialized Successfully!");
console.log("© 2025 Floating Beach Panabo City");
