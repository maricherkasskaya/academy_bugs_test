<h1 align="center">Проект по автоматизации тестирования UI для проекта AcademyBugs.com </h1> 

## Содержание
+ [Описание](#Описание)
+ [Технологии и инструменты](#Технологии-и-инструменты)
+ [Тест-кейсы](#Тест-кейсы)
+ [Настройка окружения](#Настройка-окружения)
+ [Запуск тестов и генерация отчетов](#Запуск-тестов-и-генерация-отчетов)
+ [Cборка тестов в Jenkins](#Cборка-тестов-в-Jenkins)
+ [Интеграция с Allure Report](#интеграция-с-allure-report)
    + [Диаграммы прохождения тестов](#Диаграммы-прохождения-тестов)
    + [Развернутый результат прохождения тестов](#Развернутый-результат-прохождения-тестов)
+ [Интеграция с Allure TestOps](#Интеграция-с-Allure-TestOps)
+ [Уведомления в Telegram с использованием бота](#Уведомления-в-Telegram-с-использованием-бота)

## Описание
API Challenges — это практический тестовый сайт, который позволяет получить базовые знания о том, что такое ошибки, их разных типах и как их находить.

На ресурсе представлен фиктивный сайт e-commerce с заложенными внутри ошибками. Как только пользователь обнаруживает ошибку, открывается пример отчёта со всей необходимой информацией.
______
## Технологии и инструменты
<div align="center">
  <img src="https://github.com/devicons/devicon/blob/master/icons/playwright/playwright-original.svg" title="Playwright" **alt="Playwright" width="40" height="40"/>
  <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2hhc3JqaDgyN3JibTdnaG5najE5bGthcWw3YWpiZmtjNDNyNW9leCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SvFocn0wNMx0iv2rYz/giphy.gif" width="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/playwright/playwright-original.svg" title="Playwright" **alt="Playwright" width="40" height="40"/>
  <img src="https://github.com/allure-framework/allure2/blob/main/.idea/icon.png" title="Allure Report" **alt="Allure Report" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/jenkins/jenkins-original.svg" title="Jenkins" **alt="Jenkins" width="40" height="40"/>
  <img src="https://softfinder.ru/upload/styles/logo/public/logo/logo-2605.png?itok=vqVq1c7j" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg" title="Git" **alt="Git" width="40" height="40"/>
  <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDdrcXF4am14YWVxeGp4MnJmMThjOThpcjQ5Zm50bXc3dHRyaXY5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif" title="GitHub" **alt="GitHub" width="40" height="40"/>
  <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWVleDFxZzBoZThhd2dxZXI3MXFycm82MTBiczJnYmdqaDJ0eXRhbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ZcdZ7ldgeIhfesqA6E/giphy.gif" width="40" height="40"/>
</div>
Автотесты для данного проекта написаны на языке <code>JavaScript</code> с использованием фреймворка <code>Playwright</code>. При проектировании тестов применён паттерн PageObject.

Произведена настройка CI <code>GitHub Actions</code> и <code>Jenkins</code>. Настроена интеграция с системой тест-менеджмента <code>Allure TestOps</code>, и генерация отчетов в <code>Allure</code> для визуализации результатов прогона.

После прогона тестов в <code>Telegram бот</code>, отправляется сообщение с информацией о прошедшем прогоне
_____
## Тест-кейсы

  - Отображение ошибки пагинации
  - Отображение ошибки фильтра по цене
  - Отображение ошибки описания в карточке товара
  - Отображение ошибки при смене валюты в карточке товара
  - Отображение ошибки при переходе в карточку товара из блока горячее предложение
  - Отображение ошибки общей стоимости товара в корзине
  - Отображение ошибки при увеличении количества товара
_____
## Настройка окружения

В качестве настройки окружения нужно установить Playwright и зависимости с помощью команд

```
npm install
npx playwright install --with-deps
```
____
## Запуск тестов и генерация отчетов
Для локального запуска тестов воспользоваться командой

```
npm run test
```

### Генерация отчетов Allure 

Для локальной генерации отчетов Allure
```
npm run allure
```
_____
## Cборка тестов в <b><a target="_blank" href="https://jenkins.autotests.cloud/job/001-maricherkasskaya-jsPlaywrightFinalProjectUI/">Jenkins</a></b>
Для доступа в <code>Jenkins</code> потребуется пройти регистрацию на платформе [Jenkins](https://jenkins.autotests.cloud/). Для запуска сборки необходимо нажать кнопку <code>Build now</code>.

<img src="/media/Jenkins_UI.png">

После завершения сборки в разделе <code>Build History</code> напротив номера сборки появятся значки <code>Allure Report</code>, при клике на которые откроется страница с детализированным HTML-отчетом, где можно ознакомиться с результатами сборки в удобном формате.
_____
## Интеграция с <b><a target="_blank" href="https://jenkins.autotests.cloud/job/001-maricherkasskaya-jsPlaywrightFinalProjectUI/5/allure/">Allure report</a></b>
#### Диаграммы прохождения тестов
`ALLURE REPORT` - отображает дату и время теста, общее количество запущенных тестов, а также диаграмму с процентом и количеством успешных, упавших и сломавшихся в процессе выполнения тестов <br/>
`TREND` - отображает тенденцию выполнения тестов для всех запусков <br/>
`SUITES` - отображает распределение тестов по сьютам <br/>

<img src="/media/allure_overview_UI.png">

#### Развернутый результат прохождения тестов:
Содержит:
- Общий список тестов
- Содержание теста
<img src="/media/allure_UI.png">

______
## Интеграция с <b><a target="_blank" href="https://allure.autotests.cloud/project/4526/dashboards">Allure TestOps</a></b>

Диаграммы прохождения тестов
<img src="/media/TestOps_dashboard_UI.png">

Хранение тестов
<img src="/media/TestOps_test_UI.png">

_______
## Уведомления в Telegram с использованием бота

После завершения сборки, бот, созданный в <code>Telegram</code>, автоматически обрабатывает данные и отправляет сообщение с отчетом о результате тестирования в чат.
<img src="/media/telegram_UI.png">