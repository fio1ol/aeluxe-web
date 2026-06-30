// ============================
// AELUXE — Script
// ============================

// Product detail data
const products = {
  "galaxy-details": {
    name: "GALAXY",
    tagline: "The Essence of Cosmic Mystery",
    top: "Mint Leaves, Italian Lemon, Green Apple",
    middle: "Tonka Bean, Ambroxan, Geranium Flower",
    base: "Vanilla, Cedarwood, Oakmoss",
    suitable: "Pria, aktivitas malam",
    longevity: "Extra High (14h+)",
    size: "50ml"
  },
  "hanna-details": {
    name: "HANNA",
    tagline: "Floral Grace in Liquid Form",
    top: "Sicilian Mandarin",
    middle: "Grasse Rose, Damask Rose",
    base: "White Musk ",
    suitable: "Wanita, harian & formal",
    longevity: "High (12h+)",
    size: "50ml"
  }
};

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => mobileMenu.classList.add("active"));
closeBtn?.addEventListener("click", () => mobileMenu.classList.remove("active"));
mobileMenu?.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => mobileMenu.classList.remove("active"))
);

// Product modal
const modal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".detail-trigger").forEach(btn => {
  btn.addEventListener("click", () => {
    const data = products[btn.dataset.target];
    if (!data) return;
    modalContent.innerHTML = `
      <h3>${data.name}</h3>
      <p class="tagline">${data.tagline}</p>
      <div class="note-row">
        <p class="note-label">Top Notes</p>
        <p>${data.top}</p>
      </div>
      <div class="note-row">
        <p class="note-label">Middle Notes</p>
        <p>${data.middle}</p>
      </div>
      <div class="note-row">
        <p class="note-label">Base Notes</p>
        <p>${data.base}</p>
      </div>
      <div class="modal-meta">
        <div>
          <p class="note-label">Suitable For</p>
          <p>${data.suitable}</p>
        </div>
        <div>
          <p class="note-label">Longevity</p>
          <p>${data.longevity}</p>
        </div>
        <div>
          <p class="note-label">Bottle Size</p>
          <p>${data.size}</p>
        </div>
      </div>
    `;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closeProductModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}
closeModal?.addEventListener("click", closeProductModal);
modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeProductModal();
});

// FAQ accordion
document.querySelectorAll(".faq-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const item = toggle.closest(".faq-item");
    const answer = item.querySelector(".faq-answer");
    const isOpen = item.classList.contains("open");

    document.querySelectorAll(".faq-item.open").forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-answer").style.maxHeight = null;
      }
    });

    if (isOpen) {
      item.classList.remove("open");
      answer.style.maxHeight = null;
    } else {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Navbar shrink + back to top visibility on scroll
const navbar = document.getElementById("navbar");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 60;
  navbar.style.padding = scrolled ? "0" : "";
  backToTop.classList.toggle("show", window.scrollY > 500);
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});