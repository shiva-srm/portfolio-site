// Simple contact form validation
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});

// Theme toggle with persistence
(function() {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var stored = localStorage.getItem('theme');
  if (stored === 'light') {
    root.setAttribute('data-theme', 'light');
    if (toggle) { toggle.setAttribute('aria-pressed', 'true'); toggle.textContent = '🌞'; }
  }
  if (toggle) {
    toggle.addEventListener('click', function() {
      var isLight = root.getAttribute('data-theme') === 'light';
      if (isLight) {
        root.removeAttribute('data-theme');
        localStorage.removeItem('theme');
        toggle.setAttribute('aria-pressed', 'false');
        toggle.textContent = '🌙';
      } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggle.setAttribute('aria-pressed', 'true');
        toggle.textContent = '🌞';
      }
    });
  }
})();

// Back to top smooth anchor
(function() {
  var back = document.querySelector('.back-to-top');
  if (!back) return;
  back.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();