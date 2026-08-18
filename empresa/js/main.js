(() => {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#nav-principal");
  const year = document.querySelector("[data-year]");
  const progress = document.querySelector("[data-progress]");
  const navLinks = [...document.querySelectorAll("[data-nav]")];
  const sections = [...document.querySelectorAll("[data-section]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (year) year.textContent = String(new Date().getFullYear());

  /* Header + progress + hide on scroll down */
  let lastY = window.scrollY;
  let ticking = false;

  const updateChrome = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, y / max) : 0;

    if (header) {
      header.classList.toggle("is-scrolled", y > 12);
      if (!reduceMotion && y > 140) {
        header.classList.toggle("is-hidden", y > lastY + 4);
        if (y < lastY - 4) header.classList.remove("is-hidden");
      } else {
        header.classList.remove("is-hidden");
      }
    }

    if (progress) progress.style.width = `${ratio * 100}%`;
    lastY = y;
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateChrome);
  };

  updateChrome();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile nav */
  if (toggle && nav) {
    const closeNav = () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-label", "Abrir menú");
    };

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
      toggle.setAttribute("aria-label", open ? "Abrir menú" : "Cerrar menú");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  /* Smooth anchor offset for fixed header */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
      history.pushState(null, "", id);
    });
  });

  /* Section spy for nav */
  const setActive = (id) => {
    navLinks.forEach((link) => {
      const match = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", match);
    });
  };

  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id && visible.target.id !== "inicio") {
          setActive(visible.target.id);
        }
        if (visible?.target?.id === "inicio") {
          navLinks.forEach((link) => link.classList.remove("is-active"));
        }
      },
      { threshold: [0.25, 0.45, 0.6], rootMargin: "-20% 0px -45% 0px" }
    );
    sections.forEach((section) => spy.observe(section));
  }

  /* Reveal on scroll */
  if (!reduceMotion && "IntersectionObserver" in window) {
    const revealer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => revealer.observe(el));
  } else {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
  }

  /* Subtle parallax */
  if (!reduceMotion) {
    const parallaxEls = [...document.querySelectorAll("[data-parallax]")];
    let parallaxTick = false;

    const updateParallax = () => {
      const y = window.scrollY;
      parallaxEls.forEach((el) => {
        const factor = Number(el.getAttribute("data-parallax") || 0);
        el.style.transform = `translate3d(0, ${y * factor}px, 0)`;
      });
      parallaxTick = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (parallaxTick) return;
        parallaxTick = true;
        requestAnimationFrame(updateParallax);
      },
      { passive: true }
    );
  }

  /* Magnetic buttons */
  if (!reduceMotion) {
    document.querySelectorAll("[data-magnetic]").forEach((btn) => {
      const strength = 10;

      btn.addEventListener("pointermove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x / strength}px, ${y / strength - 2}px)`;
      });

      btn.addEventListener("pointerleave", () => {
        btn.style.transform = "";
      });
    });
  }

  /* Template category filter */
  const chips = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll(".template-card")];
  const empty = document.querySelector("[data-filter-empty]");

  const applyFilter = (filter) => {
    let visible = 0;
    cards.forEach((card) => {
      const cats = (card.getAttribute("data-category") || "").split(/\s+/);
      const show = filter === "all" || cats.includes(filter);
      card.classList.toggle("is-hidden", !show);
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible > 0;
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      applyFilter(chip.getAttribute("data-filter") || "all");
      const grid = document.querySelector("[data-template-grid]");
      if (grid) {
        grid.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
      }
    });
  });
})();
