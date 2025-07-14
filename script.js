// Переменная для хранения прошедшего времени в миллисекундах
let mseconds = 0;

// Переменная для хранения ID таймера (чтобы его можно было остановить)
let timerID = null;
mseconds= Number(localStorage.getItem('mseconds')) || 0;
updateDisaplay();
// Функция форматирует миллисекунды в строку вида "мм:сс.сс"
function formatms(ms) {
  const totalSeconds = Math.floor(ms / 1000); // Получаем общее количество полных секунд
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0'); // Минуты: целое деление на 60 + добавляем ведущий 0
  const seconds = String(totalSeconds % 60).padStart(2, '0'); // Секунды: остаток от деления на 60 + ведущий 0
  const centiseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0'); // Сотые секунды: остаток от 1000 / 10 + ведущий 0
  return `${minutes}:${seconds}.${centiseconds}`; // Финальный формат: "мм:сс.сс"
}

// Обновляет отображение времени на экране (в элементе с id="display")
function updateDisaplay() {
  document.getElementById("display").textContent = formatms(mseconds);
}

// Увеличивает время на 10 миллисекунд и обновляет экран
function tick() {
  mseconds += 10;
  updateDisaplay();
  localStorage.setItem('mseconds', mseconds)
}

// Запускает таймер, если он ещё не запущен
function start() {
  if (timerID === null) { // Проверяем, что таймер ещё не запущен
    timerID = setInterval(tick, 10); // Каждые 10мс вызываем tick()
  }
}

// Останавливает таймер
function pause() {
  clearInterval(timerID); // Останавливаем setInterval
  timerID = null; // Сбрасываем ID, чтобы можно было запустить снова
}

// Сбрасывает таймер и обновляет экран
function reset() {
  localStorage.removeItem('mseconds');
  pause();        // Останавливаем таймер
  mseconds = 0;   // Обнуляем счётчик времени
  updateDisaplay(); // Показываем "00:00.00" на экране
}
