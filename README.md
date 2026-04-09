# Portfolio Showcase - React front-end developer

## Tech Stack
- React 18 (Hooks, Context API)
- Tailwind CSS v4
- Vite 6
- TanStack Query
- Radix UI (Primitives) + Framer Motion (анимации)
- Zod + React Hook Form

## Project Structure - Modular Monolith
src
   ├── app            // Точка сборки, глобальные стили и роутинг     
   ├── modules        // Модули
   │   ├── contact
   │   ...
   │   └── skills
   ├── pages          // Страницы приложения 
   └── shared
       ├── assets     // Общие картинки
       ├── hooks      // Общие хуки 
       ├── lib        // Утилиты и хелперы
       └── ui         // Stateless компоненты

## Getting Started

### Клонировать репозиторий
```git clone <url>```

### Установить зависимости
```npm i ```

### Запустить поект
```npm run dev```

## Decision Log



