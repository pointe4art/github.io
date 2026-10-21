/**
 * Pointe4Art Main Application Script
 * Renders organization info, event sections, category filters, and lightbox viewer.
 */

(function () {
  "use strict";

  const siteData = window.SITE_DATA;
  if (!siteData) return;

  // Lightbox state
  let activeEventImages = [];
  let activeEventTitle = "";
  let currentImageIndex = 0;

  // DOM Elements
  const eventsContainer = document.getElementById("events-container");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const primaryNav = document.getElementById("primary-nav");

  // Lightbox DOM Elements
  const lightbox = document.getElementById("lightbox");
  const lightboxBackdrop = document.getElementById("lightbox-backdrop");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxEventTitle = document.getElementById("lightbox-event-title");
  const lightboxCounter = document.getElementById("lightbox-counter");

  /**
   * Populate organization text and contact details from window.SITE_DATA
   */
  function populateOrganizationDetails() {
    const { organization, contact } = siteData;

    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el && text) el.textContent = text;
    };

    setText("org-name", organization.name);
    setText("org-tagline", organization.tagline);
    setText("org-status-badge", organization.statusBadge);
    setText("hero-title", organization.name);
    setText("mission-text", organization.mission);
    setText("community-description", organization.communityDescription);
    setText("footer-org-name", organization.name);
    setText("footer-nonprofit-status", organization.nonprofitLegal);
    setText("copyright-org", organization.name);
    setText("current-year", String(new Date().getFullYear()));

    if (contact) {
      setText("contact-address", contact.address);
      setText("contact-mailing", contact.mailingAddress);

      const emailEl = document.getElementById("contact-email");
      if (emailEl && contact.email) {
        emailEl.textContent = contact.email;
        emailEl.href = `mailto:${contact.email}`;
      }

      const phoneEl = document.getElementById("contact-phone");
      if (phoneEl && contact.phone) {
        phoneEl.textContent = contact.phone;
        const cleanPhone = contact.phone.replace(/[^+\d]/g, "");
        phoneEl.href = `tel:${cleanPhone}`;
      }
    }
  }

  /**
   * Render event sections filtered by category
   * @param {string} category - "all" | "exhibition" | "camp" | "community"
   */
  function renderEvents(category = "all") {
    if (!eventsContainer) return;

    const filteredEvents =
      category === "all"
        ? siteData.events
        : siteData.events.filter((ev) => ev.category === category);

    eventsContainer.innerHTML = "";

    filteredEvents.forEach((eventItem) => {
      const sectionEl = document.createElement("article");
      sectionEl.className = "event-section";
      sectionEl.id = eventItem.id;

      const headerEl = document.createElement("header");
      headerEl.className = "event-header";

      const metaRow = document.createElement("div");
      metaRow.className = "event-meta-row";

      const tagSpan = document.createElement("span");
      tagSpan.className = "event-tag";
      tagSpan.textContent = eventItem.categoryLabel || eventItem.category;
      metaRow.appendChild(tagSpan);

      if (eventItem.date) {
        const dateSpan = document.createElement("span");
        dateSpan.className = "event-date";
        dateSpan.textContent = eventItem.date;
        metaRow.appendChild(dateSpan);
      }

      const titleEl = document.createElement("h3");
      titleEl.className = "event-title";
      titleEl.textContent = eventItem.title;

      headerEl.appendChild(metaRow);
      headerEl.appendChild(titleEl);

      if (eventItem.description) {
        const descEl = document.createElement("p");
        descEl.className = "event-description";
        descEl.textContent = eventItem.description;
        headerEl.appendChild(descEl);
      }

      const galleryGrid = document.createElement("div");
      galleryGrid.className = "event-gallery";

      (eventItem.images || []).forEach((imgObj, index) => {
        const card = document.createElement("div");
        card.className = "gallery-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute(
          "aria-label",
          `View photo: ${imgObj.caption || eventItem.title}`
        );

        const img = document.createElement("img");
        img.src = imgObj.src;
        img.alt = imgObj.caption || eventItem.title;
        img.loading = "lazy";

        const overlay = document.createElement("div");
        overlay.className = "gallery-card-overlay";

        const caption = document.createElement("span");
        caption.className = "gallery-card-caption";
        caption.textContent = imgObj.caption || "";

        const zoomBadge = document.createElement("span");
        zoomBadge.className = "gallery-card-zoom";
        zoomBadge.setAttribute("aria-hidden", "true");
        zoomBadge.innerHTML = "&#128269;";

        overlay.appendChild(caption);
        card.appendChild(img);
        card.appendChild(overlay);
        card.appendChild(zoomBadge);

        const openHandler = () => {
          openLightbox(eventItem.title, eventItem.images, index);
        };

        card.addEventListener("click", openHandler);
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openHandler();
          }
        });

        galleryGrid.appendChild(card);
      });

      sectionEl.appendChild(headerEl);
      sectionEl.appendChild(galleryGrid);
      eventsContainer.appendChild(sectionEl);
    });
  }

  /**
   * Category filter button handlers
   */
  function initFilters() {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category") || "all";
        setActiveFilter(category);
      });
    });

    // Footer shortcut links with data-filter-trigger
    document.querySelectorAll("[data-filter-trigger]").forEach((link) => {
      link.addEventListener("click", () => {
        const category = link.getAttribute("data-filter-trigger");
        if (category) setActiveFilter(category);
      });
    });
  }

  function setActiveFilter(category) {
    filterButtons.forEach((btn) => {
      const isMatch = btn.getAttribute("data-category") === category;
      btn.classList.toggle("active", isMatch);
      btn.setAttribute("aria-selected", isMatch ? "true" : "false");
    });
    renderEvents(category);
  }

  /**
   * Lightbox controls
   */
  function openLightbox(eventTitle, images, startIndex) {
    if (!images || !images.length) return;
    activeEventTitle = eventTitle;
    activeEventImages = images;
    currentImageIndex = startIndex;

    updateLightboxSlide();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function showPrevSlide() {
    if (!activeEventImages.length) return;
    currentImageIndex =
      (currentImageIndex - 1 + activeEventImages.length) %
      activeEventImages.length;
    updateLightboxSlide();
  }

  function showNextSlide() {
    if (!activeEventImages.length) return;
    currentImageIndex = (currentImageIndex + 1) % activeEventImages.length;
    updateLightboxSlide();
  }

  function updateLightboxSlide() {
    const item = activeEventImages[currentImageIndex];
    if (!item) return;

    lightboxImage.src = item.src;
    lightboxImage.alt = item.caption || activeEventTitle;
    lightboxCaption.textContent = item.caption || "";
    lightboxEventTitle.textContent = activeEventTitle;
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${activeEventImages.length}`;
  }

  function initLightboxEvents() {
    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    if (lightboxBackdrop)
      lightboxBackdrop.addEventListener("click", closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener("click", showPrevSlide);
    if (lightboxNext) lightboxNext.addEventListener("click", showNextSlide);

    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrevSlide();
      if (e.key === "ArrowRight") showNextSlide();
    });
  }

  /**
   * Mobile menu toggle
   */
  function initMobileMenu() {
    if (!mobileMenuToggle || !primaryNav) return;

    mobileMenuToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("is-open");
      mobileMenuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    primaryNav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("is-open");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Initialize application
  populateOrganizationDetails();
  renderEvents("all");
  initFilters();
  initLightboxEvents();
  initMobileMenu();
})();
