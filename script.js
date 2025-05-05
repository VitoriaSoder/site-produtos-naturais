document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const nav = document.querySelector(".nav");
  const navList = document.querySelector(".nav-list");
  const faqQuestions = document.querySelectorAll(".faq-question");
  const productCards = document.querySelectorAll(".product-card");

  if (mobileMenuIcon) {
    mobileMenuIcon.addEventListener("click", () => {
      nav.classList.toggle("active");
      mobileMenuIcon.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll(".nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      mobileMenuIcon.classList.remove("active");
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // Remove testimonial slider auto-advance since all testimonials are visible
  const testimonials = document.querySelectorAll(".testimonial");

  // FAQ Accordion
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
      const faqAnswer = question.nextElementSibling;
      const faqIcon = question.querySelector(".faq-icon i");

      // Toggle active class
      faqItem.classList.toggle("active");

      // Toggle display of answer
      if (faqItem.classList.contains("active")) {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
        faqIcon.classList.remove("fa-plus");
        faqIcon.classList.add("fa-minus");
      } else {
        faqAnswer.style.maxHeight = "0";
        faqIcon.classList.remove("fa-minus");
        faqIcon.classList.add("fa-plus");
      }
    });
  });

  // Newsletter Form Submission
  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (email) {
        // Here you would normally send the email to your server
        // For demo purposes, we'll just show an alert
        alert(`Obrigado por se inscrever com o email: ${email}`);
        emailInput.value = "";
      }
    });
  }

  // Initialize FAQ answers to be hidden
  document.querySelectorAll(".faq-answer").forEach((answer) => {
    answer.style.maxHeight = "0";
    answer.style.overflow = "hidden";
    answer.style.transition = "max-height 0.3s ease-out";
  });

  // Add sticky header on scroll
  const header = document.querySelector(".header");
  const heroSection = document.querySelector(".hero");

  if (header && heroSection) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > heroSection.offsetHeight - 100) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  }

  // Add animation to product cards on scroll
  function checkScroll() {
    productCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight - 100) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  }

  // Initialize product cards
  productCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Check scroll position on load and scroll
  window.addEventListener("load", checkScroll);
  window.addEventListener("scroll", checkScroll);

  // Add to cart functionality (simple animation)
  const addButtons = document.querySelectorAll(".btn-secondary");

  addButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Visual feedback
      this.textContent = "Adicionado ✓";
      this.style.backgroundColor = "var(--primary-color)";
      this.style.color = "white";

      // Reset after 2 seconds
      setTimeout(() => {
        this.textContent = "Adicionar";
        this.style.backgroundColor = "transparent";
        this.style.color = "var(--primary-color)";
      }, 2000);
    });
  });

  // Animate elements on scroll
  const animateOnScroll = (elements, className) => {
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (elementPosition < screenPosition) {
        element.classList.add(className);
      }
    });
  };

  // Apply animations to testimonials and blog cards
  const blogCards = document.querySelectorAll(".blog-card");

  // Initialize with opacity 0
  blogCards.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Function to check and animate elements
  function animateElements() {
    const elements = [...testimonials, ...blogCards];

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Check on load and scroll
  window.addEventListener("load", animateElements);
  window.addEventListener("scroll", animateElements);

  // Products Category Filter
  const tabButtons = document.querySelectorAll(".tab-btn");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const category = button.getAttribute("data-category");

      // Show/hide products based on category
      productCards.forEach((card) => {
        if (
          category === "all" ||
          card.getAttribute("data-category") === category
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Bestsellers controls - just update control buttons styling
  const prevButton = document.getElementById("prev-bestseller");
  const nextButton = document.getElementById("next-bestseller");

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      alert(
        "Navegação em grid não requer carrossel. Esta funcionalidade será implementada em uma versão futura."
      );
    });

    nextButton.addEventListener("click", () => {
      alert(
        "Navegação em grid não requer carrossel. Esta funcionalidade será implementada em uma versão futura."
      );
    });
  }

  // FAQ accordion
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains("active");

      // Close all FAQ items
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
      });

      // Toggle the clicked item
      if (!isActive) {
        faqItem.classList.add("active");
      }

      // Toggle icon
      document.querySelectorAll(".faq-icon").forEach((icon) => {
        icon.innerHTML = '<i class="fas fa-plus"></i>';
      });

      if (!isActive) {
        question.querySelector(".faq-icon").innerHTML =
          '<i class="fas fa-minus"></i>';
      }
    });
  });

  // Add animation to hero buttons
  const heroButtons = document.querySelectorAll(".hero-buttons .btn");

  // Animate hero buttons on page load
  heroButtons.forEach((button, index) => {
    setTimeout(() => {
      button.classList.add("animate-in");
    }, 500 + index * 200);

    // Add pulse animation on hover
    button.addEventListener("mouseenter", () => {
      button.classList.add("pulse");
    });

    button.addEventListener("mouseleave", () => {
      setTimeout(() => {
        button.classList.remove("pulse");
      }, 300);
    });

    // Add click effect
    button.addEventListener("click", (e) => {
      const x = e.clientX - button.getBoundingClientRect().left;
      const y = e.clientY - button.getBoundingClientRect().top;

      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";

      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});
