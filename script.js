// Basic nav toggle and light scroll effects
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("open");
      const isOpen = navList.classList.contains("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });

    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("open");
        navToggle.setAttribute("aria-expanded", false);
      });
    });
  }

  const revealItems = document.querySelectorAll("[data-reveal]");
  const reveal = () => {
    const trigger = window.innerHeight * 0.9;
    revealItems.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < trigger) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };
  reveal();
  window.addEventListener("scroll", reveal, { passive: true });

  function fakeSubmit(formId, successText) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector("button[type='submit']");
      const original = btn.textContent;
      btn.textContent = "Sending...";
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = successText;
        form.reset();
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
        }, 1700);
      }, 1100);
    });
  }

  fakeSubmit("contact-form", "Message sent");
  fakeSubmit("career-form", "Application sent");
  fakeSubmit("newsletter-form", "Subscribed");
});

