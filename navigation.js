document.querySelectorAll('.site-nav').forEach((nav) => {
  const button = nav.querySelector('.nav-toggle');
  const menu = nav.querySelector('.site-menu');
  const mobile = window.matchMedia('(max-width: 760px)');
  const closeMenu = () => button.setAttribute('aria-expanded', 'false');
  function updateLayout() {
    if (!mobile.matches && document.activeElement === button) nav.querySelector('.site-brand').focus();
    button.hidden = !mobile.matches;
    closeMenu();
  }
  document.addEventListener("click", (event) => {
  if (mobile.matches && !nav.contains(event.target)) {
    closeMenu();
  }
  });
  button.addEventListener('click', () => {
    button.setAttribute('aria-expanded', String(button.getAttribute('aria-expanded') !== 'true'));
  });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  nav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobile.matches && button.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      button.focus();
    }
  });
  mobile.addEventListener('change', updateLayout);
  nav.classList.add('nav-ready');
  updateLayout();
});
