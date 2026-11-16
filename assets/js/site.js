(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  // Contact form uses the visitor's email app; no backend or paid service required.
  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(contactForm);
      const recipient = contactForm.dataset.recipient || 'your.email@example.com';
      const subject = encodeURIComponent(`Portfolio inquiry: ${data.get('name') || 'New message'}`);
      const body = encodeURIComponent(
        `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
      );
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }
})();