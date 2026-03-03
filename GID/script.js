// Ano no footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menu mobile
const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".nav--mobile");

function setMenu(open) {
  if (!burger || !mobileNav) return;
  burger.setAttribute("aria-expanded", open ? "true" : "false");
  mobileNav.style.display = open ? "flex" : "none";
}

if (burger) {
  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) setMenu(false);
});

// Scroll suave + fecha menu mobile
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenu(false);
  });
});

// Reveal on scroll
const revealTargets = document.querySelectorAll(
  ".section, .card, .panel, .aside, .cta, .footer, .hero__frame, .impactWrap__top, .about-card, .point, .testimonial-card"
);

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal--on");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => {
  el.classList.add("reveal");
  io.observe(el);
});

// Feedback do formulário mailto
const form = document.querySelector('.form-vertical');
if (form) {
  form.addEventListener('submit', function (e) {
    // Não previne o default para permitir o mailto funcionar
    const nome = this.querySelector('input[name="Nome"]').value;
    if (nome) {
      alert(`Obrigado ${nome}! Seu e-mail será aberto para enviar mensagem para contato@gidiversity.com.br`);
    }
  });
}

// Destaque no menu ativo durante scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 300)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
