## Лабораторная работа №20. Работа с DOM и событиями в JavaScript
### Кузьмина Диана Александровна
### ИСП-232
### 20.03.2026
___
Изучали работу с кнопками в джаве скрипте, норм ¯\_(ツ)_/¯
___
|Концепция| C# (WinForms) | Самостоятельное 
|---|---|---|
|Найти элемент |Button myButton = this.Controls["myButton"]| const myButton = document.getElementById("myButton")|
|Изменить текст |label1.Text = "Новый текст" | label.textContent = "Новый текст"|
Добавить обработчик| button1.Click += HandleClick |button.addEventListener("click", handleClick)
Создать элемент|Button btn = new Button() |const btn = document.createElement("button")
Добавить в контейнер  |panel1.Controls.Add(btn) | panel.appendChild(btn)
Скрыть элемент| button1.Visible = false|button.style.display = "none"
___
#### Преимущества DOM перед WinForms:
- Кроссплатформенность (работает везде)
- Не нужна установка приложения
- Легко обновлять (обновил файлы — всё работает)
- Современные UI (CSS, анимации)
#### Преимущества WinForms перед DOM:
- Визуальный дизайнер (drag & drop)
- Ошибки на этапе компиляции
- Интеграция с Windows API
- Более понятная структура
**Вывод:** DOM и WinForms решают схожие задачи, но разными подходами