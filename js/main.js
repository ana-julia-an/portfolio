const EMAIL = 'anajandrade2007@gmail.com';
const raiz = document.documentElement;

const botaoTema = document.getElementById('tema');
function iconeTema() {
  if (!botaoTema) return;
  botaoTema.firstElementChild.className = raiz.dataset.bsTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}
if (botaoTema) {
  botaoTema.addEventListener('click', () => {
    const novo = raiz.dataset.bsTheme === 'dark' ? 'light' : 'dark';
    raiz.dataset.bsTheme = novo;
    try { localStorage.setItem('tema', novo); } catch (e) {}
    iconeTema();
  });
  iconeTema();
}

const botaoEmail = document.getElementById('copiarEmail');
if (botaoEmail) {
  botaoEmail.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(EMAIL); } catch (e) {}
    bootstrap.Toast.getOrCreateInstance(document.getElementById('aviso')).show();
  });
}

const grade = document.getElementById('grade-voluntariado');
if (grade) {
  const conteudo = grade.innerHTML;
  grade.innerHTML = [1, 2].map(() => `
    <div class="col-md-6"><div class="card h-100" aria-hidden="true">
      <div class="ratio ratio-16x9 placeholder-glow"><span class="placeholder w-100 h-100"></span></div>
      <div class="card-body placeholder-glow">
        <span class="placeholder col-6 mb-2"></span><span class="placeholder col-12"></span><span class="placeholder col-8"></span>
      </div></div></div>`).join('');
  setTimeout(() => { grade.innerHTML = conteudo; }, 700);
}
