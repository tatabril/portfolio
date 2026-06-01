# Portfolio Showcase - React front-end developer

## Tech Stack

- React 18 (Hooks, Context API)
- Tailwind CSS v3
- Vite 6
- Radix UI (Primitives) + Framer Motion (анимации)
- Zod + React Hook Form

## Project Structure - Modular Monolith

## 📂 Структура проекта

```text
src/
├── app/                # Инициализация (провайдеры, глобальные стили, роутинг)
├── modules/            # Изолированные бизнес-модули
│   ├── projects/       # Витрина работ (логика + UI)
│   ├── skills/         # Стек технологий
│   └── contact-form/   # Форма обратной связи
├── pages/              # Композиционные слои (страницы сайта)
├── shared/             # Переиспользуемый фундамент
│   ├── ui/             # UI-kit (Button, Input, Modal)
│   ├── hooks/          # Общие React-хуки
│   └── lib/            # Утилиты и хелперы
└── main.tsx            # Точка входа
```

## Getting Started

### Клонировать репозиторий

`git clone https://github.com/tatabril/portfolio.git`

### Установить зависимости

`npm i `

### Запустить поект

`npm run dev`

## Decision Log
