/**
 * Cinderwell Heating & Cooling — demo site JS
 * Mobile nav + client-side lead form (no backend)
 */
(function () {
  "use strict";

  // Year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile menu
  var toggle = document.getElementById("menuToggle");
  var mobileNav = document.getElementById("mobileNav");

  function closeMenu() {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    mobileNav.hidden = true;
  }

  function openMenu() {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    mobileNav.hidden = false;
  }

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      if (open) closeMenu();
      else openMenu();
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 768px)").matches) closeMenu();
    });
  }

  // Lead form
  var form = document.getElementById("leadForm");
  var success = document.getElementById("formSuccess");
  var resetBtn = document.getElementById("resetForm");

  var fields = {
    name: {
      el: document.getElementById("name"),
      errorEl: document.getElementById("nameError"),
      validate: function (v) {
        if (!v.trim()) return "Please enter your name.";
        if (v.trim().length < 2) return "Name looks too short.";
        return "";
      },
    },
    phone: {
      el: document.getElementById("phone"),
      errorEl: document.getElementById("phoneError"),
      validate: function (v) {
        var digits = v.replace(/\D/g, "");
        if (!v.trim()) return "Please enter a phone number.";
        if (digits.length < 10) return "Enter a valid 10-digit phone number.";
        return "";
      },
    },
    service: {
      el: document.getElementById("service"),
      errorEl: document.getElementById("serviceError"),
      validate: function (v) {
        if (!v) return "Please select a service.";
        return "";
      },
    },
    time: {
      el: document.getElementById("time"),
      errorEl: document.getElementById("timeError"),
      validate: function (v) {
        if (!v) return "Please select a preferred time.";
        return "";
      },
    },
  };

  function setError(field, message) {
    if (!field.el || !field.errorEl) return;
    if (message) {
      field.el.classList.add("is-invalid");
      field.el.setAttribute("aria-invalid", "true");
      field.errorEl.textContent = message;
      field.errorEl.hidden = false;
    } else {
      field.el.classList.remove("is-invalid");
      field.el.removeAttribute("aria-invalid");
      field.errorEl.textContent = "";
      field.errorEl.hidden = true;
    }
  }

  function validateField(key) {
    var field = fields[key];
    if (!field || !field.el) return true;
    var message = field.validate(field.el.value);
    setError(field, message);
    return !message;
  }

  function validateAll() {
    var ok = true;
    Object.keys(fields).forEach(function (key) {
      if (!validateField(key)) ok = false;
    });
    return ok;
  }

  Object.keys(fields).forEach(function (key) {
    var field = fields[key];
    if (!field.el) return;
    var eventName = field.el.tagName === "SELECT" ? "change" : "blur";
    field.el.addEventListener(eventName, function () {
      validateField(key);
    });
    field.el.addEventListener("input", function () {
      if (field.el.classList.contains("is-invalid")) validateField(key);
    });
  });

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validateAll()) {
        var firstInvalid = form.querySelector(".is-invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Demo only — no network request
      form.hidden = true;
      if (success) {
        success.hidden = false;
        success.setAttribute("tabindex", "-1");
        success.focus();
      }
    });
  }

  if (resetBtn && form && success) {
    resetBtn.addEventListener("click", function () {
      form.reset();
      Object.keys(fields).forEach(function (key) {
        setError(fields[key], "");
      });
      success.hidden = true;
      form.hidden = false;
      var nameInput = fields.name.el;
      if (nameInput) nameInput.focus();
    });
  }
})();
