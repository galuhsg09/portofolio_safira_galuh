/* ======================================================
   FORM KONTAK: validasi sederhana + notifikasi terkirim
   (belum terhubung ke email/server sungguhan, baru simulasi)
====================================================== */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // biar halaman tidak reload

    // catatan: pakai id (#name, #email, #message), bukan placeholder,
    // soalnya teks placeholder di form ini "Nama lengkap" / "nama@email.com" / "Tulis pesan Anda"
    const nama = form.querySelector("#name").value;
    const email = form.querySelector("#email").value;
    const pesan = form.querySelector("#message").value;

    if (nama && email && pesan) {
      alert("Terima kasih, " + nama + "! Pesan kamu sudah terkirim ✅");
      form.reset(); // kosongkan form setelah terkirim
    } else {
      alert("Harap isi semua field sebelum mengirim 🚀");
    }
  });
});

/* ======================================================
   NAV MOBILE: buka/tutup menu hamburger di layar HP
====================================================== */
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
});

// tutup menu otomatis kalau salah satu link nav diklik
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", false);
  });
});

/* ======================================================
   SCROLLSPY: nandain menu navbar yang aktif otomatis
   sesuai section yang lagi dilihat (garis bawah kuning)
====================================================== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

const setActive = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + id);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  },
  { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
);

sections.forEach((section) => observer.observe(section));