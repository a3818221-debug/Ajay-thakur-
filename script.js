// --- SETTINGS (edit these two lines only) ---
const WA_NUMBER = "919999999999";        // your WhatsApp number (no +)
const CALL_NUMBER = "+919999999999";     // your call number with +country
// -------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // Put numbers in links from settings
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a=>{
    a.href = `https://wa.me/${WA_NUMBER}`;
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(a=>{
    a.href = `tel:${CALL_NUMBER}`;
  });

  // Year in footer
  const y = document.getElementById("yr");
  if (y) y.textContent = new Date().getFullYear();

  // Reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add("show"); io.unobserve(en.target); }
    });
  }, {threshold: .15});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

  // Counters
  const counters = document.querySelectorAll(".metric strong");
  const cout = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(!en.isIntersecting) return;
      const el = en.target;
      const end = parseInt(el.dataset.count,10);
      let cur = 0;
      const dur = 900 + Math.random()*600;
      const t0 = performance.now();
      function step(t){
        const p = Math.min(1, (t - t0) / dur);
        cur = Math.floor(end * (0.1 + 0.9*p*p));
        el.textContent = cur.toLocaleString();
        if(p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      cout.unobserve(el);
    });
  }, {threshold:.6});
  counters.forEach(c=>cout.observe(c));

  // Testimonials slider
  const slides = Array.from(document.querySelectorAll(".slide"));
  let idx = 0;
  setInterval(()=>{
    if(!slides.length) return;
    slides[idx].classList.remove("active");
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add("active");
  }, 3800);

  console.log("Premium site loaded for Ajay Thakur.");
});
