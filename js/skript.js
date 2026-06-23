/* =========================================================
   STRNADEL MOTORSPORT — interakce
   ========================================================= */
(function () {
  'use strict';

  /* ---- Mobilní navigace ---- */
  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      var otevreno = nav.classList.toggle('je-otevrena');
      hamburger.setAttribute('aria-expanded', otevreno ? 'true' : 'false');
    });
    // Po kliknutí na odkaz menu zavřít
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('je-otevrena');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Aktuální rok v patičce ---- */
  var rok = document.querySelector('[data-rok]');
  if (rok) { rok.textContent = new Date().getFullYear(); }

  /* ---- Odhalení prvků při scrollu ---- */
  var prvky = document.querySelectorAll('.reveal');
  if (prvky.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (zaznamy) {
      zaznamy.forEach(function (z) {
        if (z.isIntersecting) {
          z.target.classList.add('je-videt');
          io.unobserve(z.target);
        }
      });
    }, { threshold: 0.12 });
    prvky.forEach(function (p) { io.observe(p); });
  } else {
    prvky.forEach(function (p) { p.classList.add('je-videt'); });
  }

  /* ---- Lightbox pro galerii ---- */
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var obrazek = lightbox.querySelector('img');
    var zavrit = lightbox.querySelector('.lightbox__zavrit');

    function otevri(src, alt) {
      obrazek.src = src;
      obrazek.alt = alt || '';
      lightbox.classList.add('je-otevreny');
      document.body.style.overflow = 'hidden';
    }
    function zavri() {
      lightbox.classList.remove('je-otevreny');
      document.body.style.overflow = '';
      obrazek.removeAttribute('src');
    }

    document.querySelectorAll('[data-lightbox]').forEach(function (el) {
      var img = el.querySelector('img');
      el.addEventListener('click', function () {
        // Otevřít jen pokud je skutečná fotka načtená (ne placeholder)
        if (img && img.getAttribute('src') && img.style.display !== 'none') {
          otevri(img.getAttribute('src'), img.getAttribute('alt'));
        }
      });
    });

    zavrit.addEventListener('click', zavri);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) { zavri(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { zavri(); }
    });
  }
})();
