// ── CURTAIN TRANSITION ──
function navigateTo(href) {
  const curtain = document.getElementById('curtain');
  curtain.classList.add('covering');
  setTimeout(() => { window.location.href = href; }, 450);
}

document.querySelectorAll('a[data-page]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(a.href);
  });
});

// ── ON LOAD: reveal curtain out ──
window.addEventListener('load', () => {
  const curtain = document.getElementById('curtain');
  curtain.style.transform = 'translateY(0)';
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
  }
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      curtain.style.transform = '';
      curtain.classList.add('revealing');
    });
  });
});

// ── NAV SCROLL ──
const nav = document.getElementById('nav');
function updateNav() {
  nav.classList.toggle('solid', window.scrollY > 60);
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ── CURSOR ──
const cur = document.getElementById('cursor');
let cx = 0, cy = 0, tx = 0, ty = 0;
document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
function animCursor() {
  cx += (tx - cx) * .14;
  cy += (ty - cy) * .14;
  cur.style.left = cx + 'px';
  cur.style.top  = cy + 'px';
  requestAnimationFrame(animCursor);
}
animCursor();
document.querySelectorAll('a,button,.prop-card').forEach(el => {
  el.addEventListener('mouseenter', () => cur.classList.add('hover'));
  el.addEventListener('mouseleave', () => cur.classList.remove('hover'));
});

// ── SCROLL REVEAL ──
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));

// ── ACTIVE NAV LINK ──
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-center a, .mobile-menu a[data-page]').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path || (path === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ── MOBILE MENU ──
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (navToggle && mobileMenu) {
  const closeMobileMenu = () => {
    mobileMenu.classList.remove('open');
    navToggle.classList.remove('open');
    document.body.style.overflow = '';
  };
  navToggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open', isOpen);
    navToggle.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileMenu(); });
}

// ── LANG SELECTOR ──
if (typeof initI18n === 'function') initI18n();
