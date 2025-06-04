// Inicializa AOS
AOS.init({
  duration: 800,
  once: true,
});

// Inicializa Swiper para testimonios
const swiper = new Swiper('.mySwiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// Countdown
const countdownDate = new Date('2025-12-01T09:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    document.getElementById('cuenta-regresiva').innerHTML = '<h2>¡El evento comenzó!</h2>';
    clearInterval(countdownInterval);
    return;
  }

  const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('dias').textContent = String(dias).padStart(2, '0');
  document.getElementById('horas').textContent = String(horas).padStart(2, '0');
  document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
  document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Botón subir arriba
const btnUp = document.getElementById('btn-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    btnUp.classList.add('show');
  } else {
    btnUp.classList.remove('show');
  }
});

btnUp.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Toggle modo oscuro
const toggleThemeBtn = document.getElementById('toggle-theme');
const body = document.body;

// Detecta tema preferido al cargar
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (userPrefersDark) {
  body.classList.remove('light');
} else {
  body.classList.add('light');
}

toggleThemeBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  // Cambiar icono
  if (body.classList.contains('light')) {
    toggleThemeBtn.textContent = '☀️';
  } else {
    toggleThemeBtn.textContent = '🌙';
  }
});

const btnTheme = document.getElementById('toggle-theme');
btnTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
