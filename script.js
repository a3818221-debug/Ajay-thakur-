// Simple animation + helpers
document.addEventListener("DOMContentLoaded", () => {
  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => en.isIntersecting && en.target.classList.add("show"));
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  // Testimonials auto-rotate
  const slides = Array.from(document.querySelectorAll(".slide"));
  let idx = 0;
  setInterval(() => {
    if (!slides.length) return;
    slides[idx].classList.remove("active");
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add("active");
  }, 3500);

  // Year
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();

  // Lead form -> WhatsApp
  const WA_NUMBER = "916398538328";
  const form = document.getElementById("leadForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const goals = document.getElementById("goals").value.trim();
      const msg = `New Team Lead%0AName: ${encodeURIComponent(name)}%0AWhatsApp: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email || "—")}%0AGoals: ${encodeURIComponent(goals || "—")}`;
      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    });
  }

  console.log("Website loaded for Ajay Thakur - Network Marketing Expert (HD Infographic enabled).");
});
