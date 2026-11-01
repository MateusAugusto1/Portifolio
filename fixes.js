/* Small resilient enhancements: safe text selection, no extra dependencies. */
(() => {
  const root = document.documentElement;
  // Hide a stale interactive link in old browsers rather than send visitors to '#'.
  const dialogLink = document.getElementById('dialog-link');
  if (dialogLink) dialogLink.addEventListener('click', e => {
    if (dialogLink.hidden || dialogLink.getAttribute('href') === '#') e.preventDefault();
  });

  // Restore navigation if viewport changes from mobile to desktop.
  const menu = document.getElementById('nav-menu');
  const toggle = document.getElementById('menu-toggle');
  if (menu && toggle) window.addEventListener('resize', () => {
    if (window.innerWidth > 920 && menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }, {passive:true});

  // Better fallback for insecure/file:// contexts where the clipboard API may not exist.
  const copy = document.getElementById('copy-email');
  if (copy && !navigator.clipboard?.writeText) {
    copy.addEventListener('click', () => {
      const t = document.createElement('textarea');
      t.value = 'amateus593@gmail.com'; t.setAttribute('readonly','');
      t.style.position = 'fixed'; t.style.left = '-9999px';
      document.body.appendChild(t); t.select();
      try {
        if (document.execCommand('copy')) {
          document.getElementById('copy-status').textContent = root.lang.startsWith('en') ? 'Email copied.' : 'E-mail copiado.';
          copy.querySelector('[data-i18n]').textContent = root.lang.startsWith('en') ? 'Email copied' : 'E-mail copiado';
        }
      } catch { /* mailto remains available */ }
      t.remove();
    });
  }
})();
