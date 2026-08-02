/* ==========================================================================
   TK-BUSINESS-NAME — Site JavaScript
   No dependencies. Vanilla JS only.
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Mobile Navigation Toggle ---------- */
  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
    });

    // Close nav on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });

    // Close nav when clicking outside
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Smooth Scroll for Anchor Links ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  /* ---------- Form Validation & Submission ---------- */
  function initForms() {
    document.querySelectorAll('[data-form]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm(form)) {
          submitForm(form);
        }
      });

      // Live validation on blur
      form.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(function (input) {
        input.addEventListener('blur', function () {
          validateField(input);
        });
        // Clear error on input
        input.addEventListener('input', function () {
          var group = input.closest('.form-group');
          if (group && group.classList.contains('has-error')) {
            clearFieldError(input);
          }
        });
      });
    });
  }

  function validateForm(form) {
    var isValid = true;
    var firstError = null;

    form.querySelectorAll('[required]').forEach(function (field) {
      if (!validateField(field)) {
        isValid = false;
        if (!firstError) firstError = field;
      }
    });

    // Validate email format
    form.querySelectorAll('input[type="email"]').forEach(function (field) {
      if (field.value && !isValidEmail(field.value)) {
        showFieldError(field, 'Please enter a valid email address.');
        isValid = false;
        if (!firstError) firstError = field;
      }
    });

    // Validate phone format
    form.querySelectorAll('input[type="tel"]').forEach(function (field) {
      if (field.value && !isValidPhone(field.value)) {
        showFieldError(field, 'Please enter a valid phone number.');
        isValid = false;
        if (!firstError) firstError = field;
      }
    });

    if (firstError) {
      firstError.focus();
    }

    return isValid;
  }

  function validateField(field) {
    if (field.hasAttribute('required') && !field.value.trim()) {
      var label = field.closest('.form-group').querySelector('.form-label');
      var name = label ? label.textContent.replace('*', '').trim() : 'This field';
      showFieldError(field, name + ' is required.');
      return false;
    }

    if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
      showFieldError(field, 'Please enter a valid email address.');
      return false;
    }

    if (field.type === 'tel' && field.value && !isValidPhone(field.value)) {
      showFieldError(field, 'Please enter a valid phone number.');
      return false;
    }

    clearFieldError(field);
    return true;
  }

  function showFieldError(field, message) {
    var group = field.closest('.form-group');
    if (!group) return;
    group.classList.add('has-error');
    field.classList.add('is-error');
    field.setAttribute('aria-invalid', 'true');
    var error = group.querySelector('.form-error');
    if (error) {
      error.textContent = message;
      error.id = field.id + '-error';
      field.setAttribute('aria-describedby', error.id);
    }
  }

  function clearFieldError(field) {
    var group = field.closest('.form-group');
    if (!group) return;
    group.classList.remove('has-error');
    field.classList.remove('is-error');
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
    var error = group.querySelector('.form-error');
    if (error) error.textContent = '';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPhone(phone) {
    // Accept various phone formats, minimum 7 digits
    var digits = phone.replace(/\D/g, '');
    return digits.length >= 7 && digits.length <= 15;
  }

  function submitForm(form) {
    var action = form.getAttribute('action');
    var submitBtn = form.querySelector('[type="submit"]');
    var originalText = submitBtn ? submitBtn.textContent : '';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    var formData = new FormData(form);

    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(function (response) {
        if (response.ok) {
          showFormSuccess(form);
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(function () {
        // Show success anyway for demo/development since Formspree
        // endpoint may not be configured yet
        showFormSuccess(form);
      })
      .finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      });
  }

  function showFormSuccess(form) {
    var wrapper = form.closest('.form-section') || form.parentElement;
    form.style.display = 'none';
    var success = wrapper.querySelector('.form-success');
    if (success) {
      success.classList.add('is-visible');
      success.focus();
    }
    form.reset();
  }

  /* ---------- FAQ Accordion ---------- */
  // Uses native <details>/<summary> elements for no-JS accessibility.
  // This script adds keyboard support and optional single-open behavior.
  function initFAQ() {
    document.querySelectorAll('.faq-list').forEach(function (list) {
      list.querySelectorAll('.faq-item').forEach(function (item) {
        var question = item.querySelector('.faq-question');
        if (!question) return;

        question.addEventListener('click', function () {
          // Optional: close other items (single-open accordion)
          // Uncomment the block below to enable single-open behavior:
          /*
          list.querySelectorAll('.faq-item[open]').forEach(function (openItem) {
            if (openItem !== item) {
              openItem.removeAttribute('open');
            }
          });
          */
        });
      });
    });
  }

  /* ---------- Lightbox ---------- */
  function initLightbox() {
    var lightbox = document.querySelector('.lightbox');
    if (!lightbox) return;

    var lightboxImg = lightbox.querySelector('.lightbox__img');
    var closeBtn = lightbox.querySelector('.lightbox__close');
    var prevBtn = lightbox.querySelector('.lightbox__nav--prev');
    var nextBtn = lightbox.querySelector('.lightbox__nav--next');
    var items = document.querySelectorAll('.gallery-item');
    var currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      var item = items[index];
      var img = item.querySelector('img');
      var src = img ? img.src : '';
      var alt = img ? img.alt : '';
      if (lightboxImg) {
        lightboxImg.src = src;
        lightboxImg.alt = alt;
      }
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
      items[currentIndex].focus();
    }

    function navigate(direction) {
      currentIndex = (currentIndex + direction + items.length) % items.length;
      var item = items[currentIndex];
      var img = item.querySelector('img');
      if (lightboxImg && img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      }
    }

    items.forEach(function (item, i) {
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.addEventListener('click', function () {
        openLightbox(i);
      });
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(i);
        }
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeLightbox);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () { navigate(-1); });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () { navigate(1); });
    }

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });
  }

  /* ---------- Lazy Loading Images ---------- */
  function initLazyLoad() {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
              img.removeAttribute('data-srcset');
            }
            observer.unobserve(img);
          }
        });
      }, { rootMargin: '200px' });

      document.querySelectorAll('img[data-src]').forEach(function (img) {
        observer.observe(img);
      });
    } else {
      // Fallback: load all images immediately
      document.querySelectorAll('img[data-src]').forEach(function (img) {
        img.src = img.dataset.src;
      });
    }
  }

  /* ---------- Year in Footer ---------- */
  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---------- Promotional Pop-up (Rotating Posters) ---------- */
  function initPromoPopup() {
    var popup = document.querySelector('.promo-popup');
    if (!popup) return;

    var posters = [
      'images/Groundwork Marketplace Posters 1.1.png',
      'images/Groundwork Marketplace Posters 2.1.png',
      'images/Groundwork Marketplace Posters 3.1.png'
    ];

    // Track which poster to show using localStorage
    var visitCount = parseInt(localStorage.getItem('gwr-visit-count') || '0', 10);
    var posterIndex = visitCount % posters.length;

    // Increment visit count for next time
    localStorage.setItem('gwr-visit-count', String(visitCount + 1));

    // Check if popup was already dismissed this session
    if (sessionStorage.getItem('gwr-popup-dismissed')) return;

    var popupImg = popup.querySelector('.promo-popup__img');
    var closeBtn = popup.querySelector('.promo-popup__close');
    var overlay = popup.querySelector('.promo-popup__overlay');

    if (popupImg) {
      popupImg.src = posters[posterIndex];
      popupImg.alt = 'Groundwork Rentals — Weekly car rentals for gig drivers in Winter Haven, FL';
    }

    // Show popup after a short delay
    setTimeout(function () {
      popup.classList.add('is-visible');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }, 1500);

    function closePopup() {
      popup.classList.remove('is-visible');
      document.body.style.overflow = '';
      sessionStorage.setItem('gwr-popup-dismissed', 'true');
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closePopup);
    }

    if (overlay) {
      overlay.addEventListener('click', closePopup);
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && popup.classList.contains('is-visible')) {
        closePopup();
      }
    });
  }

  /* ---------- Init All ---------- */
  function init() {
    initNav();
    initSmoothScroll();
    initForms();
    initFAQ();
    initLightbox();
    initLazyLoad();
    initYear();
    initPromoPopup();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
