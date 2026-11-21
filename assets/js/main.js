/**
 * Elevencia Learning - Main UI & Interactivity Script
 * Part of Torche Education (elevencia.torche.app)
 */
(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    }
    return document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    const selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  const navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    const position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      const section = select(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scroll to an element with header offset
   */
  const scrollto = (el) => {
    const target = select(el);
    if (!target) return;
    const header = select("#header");
    let offset = header ? header.offsetHeight : 70;
    if (header && !header.classList.contains("header-scrolled")) {
      offset -= 10;
    }
    const elementPos = target.offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Header scrolled state
   */
  const selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 80) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  const backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Preloader removal
   */
  const preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function () {
    const navbar = select("#navbar");
    if (!navbar) return;
    navbar.classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      const navbar = select("#navbar");
      if (navbar && navbar.classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Smooth scroll for .scrollto links on same page
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (this.hash && select(this.hash)) {
        e.preventDefault();
        const navbar = select("#navbar");
        if (navbar && navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          const navbarToggle = select(".mobile-nav-toggle");
          if (navbarToggle) {
            navbarToggle.classList.toggle("bi-list");
            navbarToggle.classList.toggle("bi-x");
          }
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with offset on page load with hash links
   */
  window.addEventListener("load", () => {
    if (window.location.hash && select(window.location.hash)) {
      scrollto(window.location.hash);
    }
  });

  /**
   * Course Catalogue Isotope Filter & Live Search
   */
  window.addEventListener("load", () => {
    const coursesContainer = select(".courses-container");
    if (coursesContainer && typeof Isotope !== "undefined") {
      let activeCategory = "*";
      let searchQuery = "";

      const applyHashFilter = () => {
        const hash = window.location.hash.replace("#", "").toLowerCase();
        if (hash === "igcse") activeCategory = ".filter-igcse";
        else if (hash === "alevel") activeCategory = ".filter-alevel";
        else if (hash === "languages") activeCategory = ".filter-language";
      };
      applyHashFilter();

      const coursesIsotope = new Isotope(coursesContainer, {
        itemSelector: ".courses-items",
        layoutMode: "fitRows",
        filter: function (itemElem) {
          const matchesCat = activeCategory === "*" || itemElem.matches(activeCategory);
          const text = itemElem.textContent.toLowerCase();
          const matchesSearch = !searchQuery || text.includes(searchQuery);
          return matchesCat && matchesSearch;
        },
      });

      const courseFilters = select(".courses-filters li", true);
      if (activeCategory !== "*") {
        courseFilters.forEach((el) => {
          el.classList.toggle("filter-active", el.getAttribute("data-filter") === activeCategory);
        });
      }

      on(
        "click",
        ".courses-filters li",
        function (e) {
          e.preventDefault();
          courseFilters.forEach((el) => el.classList.remove("filter-active"));
          this.classList.add("filter-active");
          activeCategory = this.getAttribute("data-filter") || "*";
          coursesIsotope.arrange();
          const visibleCount = coursesIsotope.filteredItems.length;
          const emptyMsg = select("#courses-empty-state");
          if (emptyMsg) {
            emptyMsg.classList.toggle("d-none", visibleCount > 0);
          }
          if (typeof AOS !== "undefined") AOS.refresh();
        },
        true
      );

      const searchInput = select("#course-search-input");
      if (searchInput) {
        searchInput.addEventListener("input", (e) => {
          searchQuery = e.target.value.trim().toLowerCase();
          coursesIsotope.arrange();
          const emptyMsg = select("#courses-empty-state");
          if (emptyMsg) {
            emptyMsg.classList.toggle("d-none", coursesIsotope.filteredItems.length > 0);
          }
        });
      }
    }
  });

  /**
   * Testimonials Swiper
   */
  if (typeof Swiper !== "undefined" && select(".testimonials-slider")) {
    new Swiper(".testimonials-slider", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      spaceBetween: 24,
      breakpoints: {
        992: {
          slidesPerView: 2,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  }

  /**
   * Initiate GLightbox if present
   */
  if (typeof GLightbox !== "undefined") {
    GLightbox({ selector: ".portfolio-lightbox" });
  }

  /**
   * Animation on scroll & PureCounter
   */
  window.addEventListener("load", () => {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }
    if (typeof PureCounter !== "undefined") {
      new PureCounter();
    }
  });

  /**
   * Interactive Registration Form Builder (registration.html)
   */
  window.addEventListener("DOMContentLoaded", () => {
    const regForm = select("#elevencia-registration-form");
    if (!regForm) return;

    const params = new URLSearchParams(window.location.search);
    const courseParam = params.get("course");
    const packageParam = params.get("package");

    const courseSelect = select("#reg-course");
    const curriculumSelect = select("#reg-curriculum");
    const packageSelect = select("#reg-package");

    if (courseParam && courseSelect) {
      const matchingOpt = [...courseSelect.options].find((o) => o.value === courseParam);
      if (matchingOpt) {
        courseSelect.value = courseParam;
        if (curriculumSelect) {
          if (courseParam.startsWith("igcse-")) curriculumSelect.value = "Cambridge IGCSE";
          else if (courseParam.startsWith("alevel-")) curriculumSelect.value = "Cambridge AS & A-Level";
          else curriculumSelect.value = "Global Languages (English / Mandarin)";
        }
      }
    }

    if (packageParam && packageSelect) {
      const pkgMap = {
        "small-group": "Small Group Class (2-5 Students)",
        "private-1on1": "1-on-1 Private Tutoring",
        "exam-prep-bundle": "Intensive Exam Prep Package (8 Sessions)",
      };
      if (pkgMap[packageParam]) {
        packageSelect.value = pkgMap[packageParam];
      }
    }

    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const studentName = (select("#reg-name")?.value || "").trim();
      const role = select("#reg-role")?.value || "Student";
      const contact = (select("#reg-contact")?.value || "").trim();
      const schoolGrade = (select("#reg-grade")?.value || "").trim();
      const curriculum = select("#reg-curriculum")?.value || "";
      const courseOption = courseSelect ? courseSelect.options[courseSelect.selectedIndex]?.text : "";
      const pkg = packageSelect ? packageSelect.value : "";
      const format = select("#reg-format")?.value || "Lecturing & Concept Mastery";
      const schedule = (select("#reg-schedule")?.value || "").trim() || "Flexible / To be discussed";
      const notes = (select("#reg-notes")?.value || "").trim() || "-";

      const message = [
        "Hello Elevencia Learning (Torche Education) Team!",
        "I would like to register / consult for a High School tutoring class:",
        "",
        `*Name:* ${studentName} (${role})`,
        `*Email / WhatsApp:* ${contact}`,
        `*School & Grade:* ${schoolGrade}`,
        `*Curriculum Track:* ${curriculum}`,
        `*Subject / Course:* ${courseOption}`,
        `*Class Package:* ${pkg}`,
        `*Session Focus:* ${format}`,
        `*Preferred Schedule:* ${schedule}`,
        `*Topics / Goals:* ${notes}`,
      ].join("\n");

      const waUrl = `https://wa.me/6285155216117?text=${encodeURIComponent(message)}`;
      const previewBox = select("#wa-preview-box");
      const previewText = select("#wa-preview-text");
      const previewLink = select("#wa-direct-link");

      if (previewBox && previewText && previewLink) {
        previewText.textContent = message;
        previewLink.href = waUrl;
        previewBox.classList.remove("d-none");
      }

      window.open(waUrl, "_blank", "noopener");
    });
  });
})();

/**
 * Auto-scroll for Course Details vertical tabs on mobile/desktop
 */
function autoScrollCoursesDetails() {
  const element = document.getElementById("the-detail-of-course");
  if (!element) return;
  const navbarOffset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
