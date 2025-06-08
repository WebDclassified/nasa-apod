# 🌌 NASA APOD Viewer

A simple, React‐based web app using Vite to display NASA’s “Astronomy Picture of the Day” (APOD) with minimal setup and clean UI.

Live demo: [https://nasa-apod-six-peach.vercel.app](https://nasa-apod-six-peach.vercel.app) (if deployed)

---

## ⚙️ Features

- Fetches daily APOD media (image or video).
- Displays title, date, media, and explanation.
- Lightweight React + Vite setup.
- ESLint configured for better code quality.
- Supports HD images where available.

---

## 🚀 Project Structure

/
├─ public/ # Static assets
│ └─ ...
├─ src/ # React source code
│ ├─ components/ # Reusable UI components
│ ├─ App.jsx # Main app
│ ├─ index.jsx # React entry point
│ └─ styles.css # App styling
├─ .env # Stores API key (gitignored)
├─ .gitignore
├─ package.json
├─ vite.config.js
└─ eslint.config.js
