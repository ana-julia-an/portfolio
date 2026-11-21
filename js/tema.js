(function () {
  var tema;
  try { tema = localStorage.getItem('tema'); } catch (e) {}
  if (!tema) tema = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-bs-theme', tema);
})();
