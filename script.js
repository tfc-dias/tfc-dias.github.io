/**
 * Swiss Modernist Editorial Portfolio Scripts
 * Tomás Dias — Software Developer & MSc in Computer Science
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Live Lisbon Time Clock (Swiss Precision)
  const timeElement = document.getElementById('local-time');
  function updateLisbonTime() {
    if (!timeElement) return;
    const now = new Date();
    const options = {
      timeZone: 'Europe/Lisbon',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);
    timeElement.textContent = `${timeString} LISBON`;
  }
  updateLisbonTime();
  setInterval(updateLisbonTime, 1000);

  // 2. Dark / Light Theme Toggle with LocalStorage
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Check saved theme or OS preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    htmlElement.setAttribute('data-theme', 'dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // 3. Email Copy / Click Action
  const emailLink = document.getElementById('email-link');
  if (emailLink) {
    emailLink.addEventListener('click', (e) => {
      const emailText = emailLink.querySelector('.email-text')?.textContent.trim();
      if (emailText && !emailText.includes('example.com') && navigator.clipboard) {
        navigator.clipboard.writeText(emailText).catch(() => {});
      }
    });
  }

  // 4. Interactive Typographic Archive Accordion (Index Drawer)
  const archiveItems = document.querySelectorAll('.archive-item');
  archiveItems.forEach(item => {
    const trigger = item.querySelector('.archive-row');
    if (!trigger) return;

    function toggleAccordion() {
      const isExpanded = item.classList.contains('is-expanded');
      item.classList.toggle('is-expanded');
      trigger.setAttribute('aria-expanded', String(!isExpanded));

      const icon = item.querySelector('.toggle-icon');
      if (icon) {
        icon.textContent = !isExpanded ? '[ − ]' : '[ + ]';
      }
    }

    trigger.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      toggleAccordion();
    });

    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleAccordion();
      }
    });
  });

  // 5. Swiss Inks Palette Switcher (Bauhaus Triad)
  const inkDots = document.querySelectorAll('.ink-dot');
  const validInks = ['ultramarine', 'vermillion', 'amber'];
  let savedInk = localStorage.getItem('swiss-ink');
  if (!validInks.includes(savedInk)) {
    savedInk = 'ultramarine';
  }

  function applyInk(inkName) {
    if (!validInks.includes(inkName)) inkName = 'ultramarine';
    if (inkName === 'ultramarine') {
      htmlElement.removeAttribute('data-ink');
    } else {
      htmlElement.setAttribute('data-ink', inkName);
    }
    localStorage.setItem('swiss-ink', inkName);
    inkDots.forEach(dot => {
      dot.classList.toggle('is-active', dot.getAttribute('data-ink') === inkName);
    });
  }

  applyInk(savedInk);

  inkDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const ink = dot.getAttribute('data-ink');
      if (ink) applyInk(ink);
    });
  });

});
