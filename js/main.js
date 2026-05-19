/* ============================================================
   SCROLL REVEAL — Intersection Observer (redmotion skill)
   ============================================================ */
(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal, .reveal--fade, .reveal--heading, .reveal--scale, .reveal--slide-left, .reveal--slide-right')
      .forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal--fade, .reveal--heading, .reveal--scale, .reveal--slide-left, .reveal--slide-right')
    .forEach(el => observer.observe(el));
})();

/* ============================================================
   HERO PARALLAX (redmotion skill)
   ============================================================ */
(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const img = document.querySelector('#hero .hero__bg picture img');
  if (!img) return;

  let ticking = false;

  function updateParallax() {
    img.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
})();

/* ============================================================
   NAV — scroll class + transparent-to-cream transition
   ============================================================ */
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;

  function syncNav() {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
  }

  window.addEventListener('scroll', syncNav, { passive: true });
  syncNav();
})();

/* ============================================================
   MOBILE NAV TOGGLE — with focus trap + Escape key
   ============================================================ */
(function () {
  const nav        = document.getElementById('nav');
  const toggle     = document.querySelector('.nav__toggle');
  const mobileMenu = document.getElementById('nav-mobile');
  if (!toggle || !mobileMenu) return;

  const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function getFocusables() {
    return Array.from(mobileMenu.querySelectorAll(FOCUSABLE));
  }

  function openMenu() {
    mobileMenu.classList.add('nav__links-center--open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    const closeLabel = translations[getLang()]?.['nav.close'];
    if (closeLabel) toggle.setAttribute('aria-label', closeLabel);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const first = getFocusables()[0];
      if (first) first.focus();
    }, 50);
  }

  function closeMenu() {
    mobileMenu.classList.remove('nav__links-center--open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    const openLabel = translations[getLang()]?.['nav.open'];
    if (openLabel) toggle.setAttribute('aria-label', openLabel);
    document.body.style.overflow = '';
    toggle.focus();
  }

  toggle.addEventListener('click', () => {
    if (toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    } else {
      openMenu();
    }
  });

  /* Close button inside the overlay */
  const closeBtn = mobileMenu.querySelector('.nav__close');
  closeBtn?.addEventListener('click', closeMenu);

  /* Close when any nav link is tapped */
  mobileMenu.addEventListener('click', e => {
    if (e.target.closest('a')) closeMenu();
  });

  /* Escape key closes */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('nav__links-center--open')) {
      closeMenu();
    }
  });

  /* Focus trap */
  mobileMenu.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const focusables = getFocusables();
    if (!focusables.length) return;
    const first = focusables[0];
    const last  = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();

/* ============================================================
   SMOOTH SCROLL — custom JS (not CSS scroll-behavior)
   ============================================================ */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ============================================================
   MENU TABS — keyboard accessible + fixed-height container
   ============================================================ */
(function () {
  const tabList   = document.querySelector('[role="tablist"]');
  if (!tabList) return;

  const container = document.querySelector('.menu__panels');
  const tabs      = Array.from(tabList.querySelectorAll('[role="tab"]'));
  const panels    = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));

  function activateTab(tab) {
    tabs.forEach(t => {
      t.classList.remove('menu__tab--active');
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });
    panels.forEach(p => { if (p) p.classList.add('menu__panel--hidden'); });

    tab.classList.add('menu__tab--active');
    tab.setAttribute('aria-selected', 'true');
    tab.removeAttribute('tabindex');

    const panel = document.getElementById(tab.getAttribute('aria-controls'));
    if (panel) panel.classList.remove('menu__panel--hidden');
  }

  function setContainerHeight() {
    if (!container) return;
    // All panels are position:absolute so scrollHeight is measurable regardless of opacity
    const saved = panels.map(p => p && p.classList.contains('menu__panel--hidden'));
    panels.forEach(p => { if (p) p.classList.remove('menu__panel--hidden'); });

    const maxH = panels.reduce((max, p) => p ? Math.max(max, p.scrollHeight) : max, 0);

    panels.forEach((p, i) => { if (p && saved[i]) p.classList.add('menu__panel--hidden'); });

    if (maxH > 0) container.style.height = maxH + 'px';
  }

  tabList.addEventListener('click', e => {
    const tab = e.target.closest('[role="tab"]');
    if (tab) activateTab(tab);
  });

  tabList.addEventListener('keydown', e => {
    const current = document.activeElement;
    if (!tabs.includes(current)) return;
    const idx = tabs.indexOf(current);
    let next;
    if (e.key === 'ArrowRight')     next = tabs[(idx + 1) % tabs.length];
    else if (e.key === 'ArrowLeft') next = tabs[(idx - 1 + tabs.length) % tabs.length];
    else if (e.key === 'Home')      next = tabs[0];
    else if (e.key === 'End')       next = tabs[tabs.length - 1];
    if (next) {
      e.preventDefault();
      activateTab(next);
      next.focus();
    }
  });

  tabs.forEach((t, i) => { if (i !== 0) t.setAttribute('tabindex', '-1'); });

  // Measure on load; recalculate on resize (debounced)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setContainerHeight);
  } else {
    setContainerHeight();
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setContainerHeight, 150);
  }, { passive: true });
})();

/* ============================================================
   GOOGLE ANALYTICS 4 — conditional loader
   ============================================================ */
function loadAnalytics() {
  const id = window.GA_MEASUREMENT_ID;
  if (!id || id === 'G-XXXXXXXXXX') return;

  const s = document.createElement('script');
  s.src   = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  s.async = true;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id);
}

/* ============================================================
   COOKIE CONSENT
   ============================================================ */
(function () {
  const CONSENT_KEY  = 'cookie_consent';
  const banner       = document.getElementById('cookie-banner');
  const btnAccept    = document.getElementById('cookie-accept');
  const btnNecessary = document.getElementById('cookie-necessary');

  function applyConsent(value) {
    localStorage.setItem(CONSENT_KEY, value);
    if (banner) banner.hidden = true;
    if (value === 'accepted') loadAnalytics();
  }

  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === 'accepted') {
    loadAnalytics();
  } else if (!stored && banner) {
    setTimeout(() => { banner.hidden = false; btnAccept?.focus(); }, 800);
  }

  btnAccept?.addEventListener('click',    () => applyConsent('accepted'));
  btnNecessary?.addEventListener('click', () => applyConsent('necessary'));
})();

/* ============================================================
   LOADING SCREEN
   ============================================================ */
(function () {
  const loader = document.getElementById('loader');
  if (!loader) return;

  function dismiss() {
    loader.classList.add('loader--hidden');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
  }

  if (sessionStorage.getItem('sn_visited')) {
    loader.remove();
  } else {
    sessionStorage.setItem('sn_visited', '1');
    if (document.readyState === 'complete') {
      setTimeout(dismiss, 700);
    } else {
      window.addEventListener('load', () => setTimeout(dismiss, 700), { once: true });
    }
  }
})();

/* ============================================================
   BACK TO TOP
   ============================================================ */
(function () {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  function sync() {
    btn.classList.toggle('back-to-top--visible', window.scrollY > 400);
  }

  window.addEventListener('scroll', sync, { passive: true });
  sync();

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ============================================================
   GALLERY — lazy load + optional lightbox placeholder
   ============================================================ */
(function () {
  /* Images already have loading="lazy" in HTML.
     This adds graceful fade-in once loaded. */
  document.querySelectorAll('.gallery-item img').forEach(img => {
    if (img.complete) return;
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.4s ease';
    img.addEventListener('load', () => { img.style.opacity = '1'; }, { once: true });
  });
})();

/* ============================================================
   LENIS SMOOTH SCROLL
   ============================================================ */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
})();
