/**
 * Решение для динамического изменения цвета у HTML элементов
 * 
 * Данная библиотека предполагает, что источник цвета содержит
 * идентификатор "#source-{$className}". 
 * Где $className - это название класса у элементов, 
 * которые будут изменяться.
 * 
 * Пример, источник цвета определен как:
 *      ```html
 *      <input type="text" id="source-element">
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
    let id = document.body.innerHTML.match(/\id="source-\w+"/ig)[0];
    id = id.replace(/id="/, "");
    return id.substr(0, id.length - 1);
};

/**
 * Получение HTML элемента источника цвета
 */
const getSource = () => {
    let idSource;
    if (!(idSource = findIdSource())) return false;

    let sourceColor = $(`#${idSource}`);
    console.log(sourceColor.val());
};