/**
 * Решение для динамического изменения цвета у HTML элементов
 * 
 * Данная библиотека предполагает, что источник цвета содержит
 * класс "#source-{$className}". 
 * Где $className - это название класса у элементов, 
 * которые будут изменяться.
 * 
 * Пример, источник цвета определен как:
 *      ```html
 *      <input type="text" class="source-element">
 *      ```
 * 
 * Тогда, элементы, которые должны изменяться, должны выглядить
 * следующем образом:
 *      ```html
 *      <header class="element"></header>
 *      <div class="element">Element one</div>
 *      <footer class="element"></footer>
 *      ```
 * 
 * Цвет должен задаваться в формате HEX
 * По стандарту, у элемента, помеченного как изменяемый, меняется
 * цвет фона, чтобы менять цвет текста внутри, необходимо 
 * указать для элемента следующий атрбиут: data-switch-text
 * 
 * Пример:
 *      ```html
 *      <div class="element" data-switch-text="true">Element</div>
 *      ```
 */

/**
 * Поиск HTML элемента источника цвета
 */
const findIdSource = () => {
    let id = document.body.innerHTML.match(/class="source-\w+"/ig)[0];
    id = id.replace(/class="/, "");
    return id.substr(0, id.length - 1);
};

/**
 * Получение HTML элемента источника цвета
 */
const getSource = () => {
    let idSource;
    if (!(idSource = findIdSource())) return false;

    return $(`.${idSource}`);
};

/**
 * Получение HTML элементов, которым необходимо поменять цвет
 */
const getSwitchElements = () => {
    let classNameOfSwitchElements = findIdSource().replace(/\w+-/, '');;
    return $(`.${classNameOfSwitchElements}`);
}

const changeColor = (element, hexColor) => {
    if (hexColor) {
        $(element).css('background', hexColor);
        if ($(element).attr('fill')) $(element).attr('fill', hexColor);
    }
    return;
}

/**
 * HTML элемент, источник цвета
 */
let sourceElement = getSource();
/**
 * HTML элементы, которые должны изменять цвет
 */
let switchElements = getSwitchElements();

const eventHandler = (event) => {
    hexColor = sourceElement.val() ? sourceElement.val() : sourceElement.html();

    switchElements.filter((element) => {
        changeColor(switchElements[element], hexColor);
    });
}

sourceElement.on('DOMSubtreeModified', eventHandler);