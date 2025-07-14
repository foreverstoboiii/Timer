# ⏱️ 2090 Stopwatch — Minimalist Timer with LocalStorage

A sleek, futuristic stopwatch built with **Vanilla JavaScript**, **Tailwind CSS**, and **HTML** — inspired by high-end AR interface design of the year 2090. The timer saves its state using `localStorage`, so it remembers the time even if you refresh the page.

---

## 🚀 Features

- ⏳ Start / Pause / Reset controls
- 💾 Persistent time tracking using `localStorage`
- 🎨 Futuristic "glassmorphism" design (Tailwind CSS + backdrop blur)
- ⚡ Real-time precision updates every 10 milliseconds
- 📱 Fully responsive — works perfectly on mobile and desktop

---

## 🧠 How It Works

- `mseconds` stores the total elapsed time in milliseconds.
- `setInterval(tick, 10)` updates the timer every 10 ms.
- `formatms()` converts the raw time into the format `MM:SS.CS`.
- Each tick saves the current time in `localStorage`.
- When the page loads, the timer restores the last saved time.

---

## 🛠️ Built With

- ⚙️ Vanilla JavaScript (no libraries/frameworks)
- 💨 [Tailwind CSS CDN](https://tailwindcss.com/docs/installation/play-cdn)
- 🧠 HTML5
- 🌐 `localStorage` for persistent data

---

## 🖼️ Screenshot

![Stopwatch Screenshot](screenshot.png) <!-- Add your screenshot here -->

---

---

## 📦 How to Use

1. Clone or download this repository:

```bash
git clone https://github.com/your-username/2090-stopwatch.git
```

👨‍💻 Author
Built with ❤️ by FOREVER
GitHub: @foreverstoboiii

