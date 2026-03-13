# Selectel Frontend Test Assignment

Тестовое задание на позицию Frontend-разработчика.  
Мини-приложение из двух страниц с интерактивным меню и реактивным состоянием.

🔗 **[Открыть на GitHub Pages](https://viktorcherepanov.github.io/selectel-testovoe/)**

---

## Стек технологий

- **Angular 19** (Standalone Components, Signals, Zoneless)
- **TypeScript** (strict mode)
- **HTML / SCSS**
- **Pico CSS**

## Архитектура

- Feature-based структура папок
- Реактивный стейт через `signal` и `computed`
- Lazy loading для всех роутов
- Вся бизнес-логика вынесена в `MenuService`

## Страницы

- **/** — страница приветствия со ссылкой на меню
- **/menu** — три группы меню с чекбоксами; заголовок показывает активную группу, количество выбранных элементов и их суммарное значение

## Запуск локально

1. Клонировать репозиторий

```bash
git clone https://github.com/ViktorCherepanov/selectel-testovoe.git
```

2. Установить зависимости

```bash
npm install
```

3. Запустить dev-сервер

```bash
ng serve
```
