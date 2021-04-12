В этом задании нужно будет сверстать много всяких маленьких штук.

1. + В директории `designs` есть файлы разных логотипов, их названия начинаются с `logo`. Выбери из них 2 и сверстай их так, чтобы каждый из них вписывался в квадрат со стороной `100px`. Верстать в файле `index.html`, стили писать в `styles.css`.

Для выполнения этого задания могут оказаться полезными свойства:

- `overflow` (определяет что делать с вылезающими за границу элементами, https://webref.ru/css/overflow),
- `transform` (может делать разные трансформации с элементом, в частности логотипы используют методы `rotate` и `skew`, https://developer.mozilla.org/en-US/docs/Web/CSS/transform).

2. + Сверстай модальное окно (еще его называют лайтбокс).

Пример модального окна находится в директории `designs` в файле `lightbox.jpg`. Модальное окно должно быть таким:

- у него должна быть фиксированная ширина (можешь выбрать сам, например, 640px — хороший размер),
- высота должна подстраиваться под контент,
- размещаться должно ровно посередине экрана,
- под окном и над контентом страницы должен располагаться оверлей — затемненный полупрозрачный фон,
- справа сверху в модальном окне должна быть кнопка с крестиком закрытия.

3. Сверстай прогресс-бар.

Пример находится в директории `designs`, файл `progress.jpg`. Размести его в модальном окне.

Прогресс бар должен быть таким:

- основной цвет прогресс-бара — серый (какой угодно серый), а цвет, показывающий прогресс — красный,
- по центру должна быть надпись, например, "Loading...",
- буквы надписи, которые на сером фоне, должны быть написаны черным, а те буквы, которые на красном фоне
  должны быть белыми.

4. Оживи прогресс-бар при помощи js.

В файле `index.js` напиши скрипт, который будет заполнять в течении трех секунд этот прогресс-бар.

Для выбора элемента на странице используй метод `document.querySelector()`, в который можно передать любой селектор, такой же, как в CSS. Для изменения стилей у выбранного элемента, воспользуйся полем `style` у элемента, в котором можно описать новые стили. Пример использования обоих методов есть в файле `index.js`.

В течении трех секунд прогресс бар должен постепенно закрашиваться, переходя из состояния 0% красного цвета в состояние 100% красного цвета. Реши самостоятельно сколько нужно сделать кадров, чтобы это было плавно.

5. \* Сделай в модальном окне раскрывающиеся блоки, которые называются "аккордеон".

Это несколько блоков, при нажатии на которые открывается дополнительный блок с текстом.

Пример находится в файле `designs/accordeon.png`.

Сделай не меньше трех блоков, тексты для них можешь генерировать, например, на [Яндекс.Рефератах](https://yandex.ru/referats/).

Сделай так, чтобы открытие этих блоков работало без js. Только при помощи CSS.

Подсказка: для этого пригодится вот этот псевдокласс: [`:checked`](https://webref.ru/css/checked)
