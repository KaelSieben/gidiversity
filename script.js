// ===============================
// TOAST
// ===============================
function showToast(message, type = "success") {

  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.className = "";
  toast.classList.add(type);
  toast.innerText = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

}


// ===============================
// ANO NO FOOTER
// ===============================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();


// ===============================
// MENU MOBILE
// ===============================
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


// ===============================
// SCROLL SUAVE + FECHAR MENU
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(a => {

  a.addEventListener("click", (e) => {

    const href = a.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    setMenu(false);

  });

});


// ===============================
// REVEAL ANIMATION
// ===============================
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


// ===============================
// FORMULÁRIO EMAILJS
// ===============================
const form = document.querySelector(".form-vertical");
let lastSubmit = 0;

if (form) {

  emailjs.init("NiOzsRcTQj3LePcT-");

  const button = form.querySelector("button");

  form.addEventListener("submit", async function (e) {

    e.preventDefault();


    // ===============================
    // BLOQUEIO DE DOMÍNIO
    // ===============================
    const allowedDomains = [
      "gidiversity.com.br",
      "www.gidiversity.com.br",
      "gidiversity.vercel.app",
      "gidiversity.netlify.app",
    ];

    if (!allowedDomains.includes(window.location.hostname)) {

      console.warn("Envio bloqueado: domínio não autorizado.");
      return;

    }


    // ===============================
    // HONEYPOT ANTI-SPAM
    // ===============================
    if (form.website.value !== "") return;


    // ===============================
    // RATE LIMIT (10s)
    // ===============================
    const now = Date.now();
    if (now - lastSubmit < 10000) return;
    lastSubmit = now;


    // ===============================
    // CAPTURA DOS CAMPOS
    // ===============================
    const nome = form.querySelector('input[name="Nome"]').value.trim();
    const email = form.querySelector('input[name="Email"]').value.trim();
    const perfil = form.querySelector('select[name="Perfil"]').value;


    const params = {
      nome: nome,
      email: email,
      perfil: perfil,
      time: new Date().toLocaleString("pt-BR")
    };


    // ===============================
    // SPINNER BOTÃO
    // ===============================
    const originalText = button.innerHTML;

    button.disabled = true;
    button.innerHTML = `
      <span class="btn-loader"></span>
      Enviando...
    `;


    try {

      await emailjs.send(
        "service_tyo3o93",
        "template_ig7dal4",
        params
      );

      showToast("Mensagem enviada com sucesso.", "success");
      form.reset();

    } catch (error) {

      console.error(error);
      showToast("Erro ao enviar mensagem.", "error");

    }


    button.disabled = false;
    button.innerHTML = originalText;

  });

}


// ===============================
// MENU ATIVO DURANTE SCROLL
// ===============================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

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