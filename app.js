/* ====================================================
   APP.JS — Portfolio Alondra Peralta

   1. Slider principal (6 secciones)
   2. Carrusel de proyectos (slide 5 = índice 4)
   3. Hint de navegación
   4. Teclado ← →
   5. Swipe táctil
   ==================================================== */


/* ====================================================
   1. SLIDER PRINCIPAL
   ==================================================== */
const track     = document.getElementById('track');
const btnPrev   = document.getElementById('btnPrev');
const btnNext   = document.getElementById('btnNext');
const dotsCnt   = document.getElementById('navDots');
const cAct      = document.getElementById('cAct');
const cTot      = document.getElementById('cTot');
const hint      = document.getElementById('hint');

const slides    = document.querySelectorAll('.slide');
const total     = slides.length;

let actual   = 0;
let animando = false;

function crearPuntos() {
  dotsCnt.innerHTML = '';
  cTot.textContent  = String(total).padStart(2, '0');

  for (let i = 0; i < total; i++) {
    const b = document.createElement('button');
    b.className = 'dot-nav';
    b.setAttribute('aria-label', `Ir a sección ${i + 1}`);
    b.addEventListener('click', () => irA(i));
    dotsCnt.appendChild(b);
  }
  actualizarUI();
}

function irA(i) {
  if (animando || i < 0 || i >= total) return;
  animando = true;
  actual   = i;
  track.style.transform = `translateX(-${actual * 100}vw)`;
  actualizarUI();
  setTimeout(() => { animando = false; }, 900);
}

function sig() { if (actual < total - 1) irA(actual + 1); }
function ant() { if (actual > 0)         irA(actual - 1); }

function actualizarUI() {
  dotsCnt.querySelectorAll('.dot-nav').forEach((d, i) => {
    d.classList.toggle('activo', i === actual);
  });
  cAct.textContent = String(actual + 1).padStart(2, '0');
  btnPrev.disabled = actual === 0;
  btnNext.disabled = actual === total - 1;
}

btnPrev.addEventListener('click', ant);
btnNext.addEventListener('click', sig);


/* ====================================================
   2. CARRUSEL DE PROYECTOS
   ==================================================== */
const proyTrack = document.getElementById('proyTrack');
const proyPrev  = document.getElementById('proyPrev');
const proyNext  = document.getElementById('proyNext');
const proyDots  = document.getElementById('proyDots');

const proyCards = proyTrack.querySelectorAll('.pcard');
const totalProy = proyCards.length;

let proyAct  = 0;
let proyAnim = false;

function crearPuntosProyectos() {
  proyDots.innerHTML = '';
  for (let i = 0; i < totalProy; i++) {
    const b = document.createElement('button');
    b.className = 'pdot';
    b.setAttribute('aria-label', `Proyecto ${i + 1}`);
    b.addEventListener('click', () => irAProy(i));
    proyDots.appendChild(b);
  }
  actualizarProy();
}

function irAProy(i) {
  if (proyAnim || i < 0 || i >= totalProy) return;
  proyAnim = true;
  proyAct  = i;
  proyTrack.style.transform = `translateX(-${proyAct * 100}%)`;
  actualizarProy();
  setTimeout(() => { proyAnim = false; }, 600);
}

function sigProy() { irAProy(proyAct < totalProy - 1 ? proyAct + 1 : 0); }
function antProy() { irAProy(proyAct > 0 ? proyAct - 1 : totalProy - 1); }

function actualizarProy() {
  proyDots.querySelectorAll('.pdot').forEach((d, i) => {
    d.classList.toggle('activo', i === proyAct);
  });
}

proyPrev.addEventListener('click', antProy);
proyNext.addEventListener('click', sigProy);


/* ====================================================
   3. HINT — desaparece a los 4 segundos
   ==================================================== */
setTimeout(() => hint.classList.add('oculto'), 4000);


/* ====================================================
   4. TECLADO
   En el slide de proyectos (índice 4):
     ← → controlan el carrusel interno
   En el resto:
     ← → cambian de sección
   ==================================================== */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') actual === 4 ? sigProy() : sig();
  if (e.key === 'ArrowLeft')  actual === 4 ? antProy() : ant();
});


/* ====================================================
   5. SWIPE TÁCTIL
   ==================================================== */
let tX = 0, tY = 0;

document.addEventListener('touchstart', e => {
  tX = e.touches[0].clientX;
  tY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', e => {
  const dx = tX - e.changedTouches[0].clientX;
  const dy = tY - e.changedTouches[0].clientY;

  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 45) {
    if (dx > 0) actual === 4 ? sigProy() : sig();
    else        actual === 4 ? antProy() : ant();
  }
}, { passive: true });


/* ====================================================
   INICIO
   ==================================================== */
crearPuntos();
crearPuntosProyectos();
