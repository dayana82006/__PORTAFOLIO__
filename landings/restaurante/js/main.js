(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#nav-principal");
  const form = document.querySelector("#form-reserva");
  const status = document.querySelector("#form-status");
  const dateInput = document.querySelector("#fecha");

  /* Mobile nav */
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Abrir menú" : "Cerrar menú");
      nav.classList.toggle("is-open", !open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menú");
        nav.classList.remove("is-open");
      });
    });
  }

  /* Soft header contrast when leaving hero */
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Reveal on view */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* Min date = today */
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  /* Reservation form (demo) */
  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.classList.remove("is-error");

      if (!form.checkValidity()) {
        status.textContent = "Revisa los campos obligatorios.";
        status.classList.add("is-error");
        form.reportValidity();
        return;
      }

      const data = new FormData(form);
      const nombre = String(data.get("nombre") || "").trim();
      const fecha = data.get("fecha");
      const hora = data.get("hora");

      status.textContent = `Gracias, ${nombre}. Pedimos mesa para el ${fecha} a las ${hora}. Te escribimos pronto.`;
      form.reset();
      if (dateInput) {
        const today = new Date();
        dateInput.min = today.toISOString().slice(0, 10);
      }
    });
  }
})();
