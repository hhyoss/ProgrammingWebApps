let outputDiv = document.getElementById('output');

// Задание 1
outputDiv.innerHTML += "<h2>Задание 1</h2>";
let array1 = [1, 2, 3, 4, 5];
let array2 = new Array(6, 7, 8, 9, 10);
let array3 = Array.of(11, 12, 13, 14, 15);

outputDiv.innerHTML += `<p>array1: ${array1.join(", ")}</p>`;
outputDiv.innerHTML += `<p>array2: ${array2.join(", ")}</p>`;
outputDiv.innerHTML += `<p>array3: ${array3.join(", ")}</p>`;

// Задание 2
outputDiv.innerHTML += "<h2>Задание 2</h2>";
outputDiv.innerHTML += `<p>Пятый элемент array1: ${array1[4]}</p>`;
array1[4] = 50;
outputDiv.innerHTML += `<p>Новый пятый элемент array1: ${array1[4]}</p>`;

// Задание 3
outputDiv.innerHTML += "<h2>Задание 3</h2>";
outputDiv.innerHTML += `<p data-length="Длина массива array1: ${array1.length}">array1: ${array1.join(", ")}</p>`;

// Задание 4
outputDiv.innerHTML += "<h2>Задание 4</h2>";
outputDiv.innerHTML += "<h3>Элементы array1</h3><p>";
for (let i = 0; i < array1.length; i++) {
    outputDiv.innerHTML += array1[i] + " ";
}
outputDiv.innerHTML += "</p>";

// Задание 5
outputDiv.innerHTML += "<h2>Задание 5</h2>";
let array4 = [16, 17, 18];
let array5 = [19, 20, 21];

outputDiv.innerHTML += "<h3>Массивы до объединения</h3>";
outputDiv.innerHTML += `<p>array4: ${array4.join(", ")}</p>`;
outputDiv.innerHTML += `<p>array5: ${array5.join(", ")}</p>`;

let combinedArray = array4.concat(array5);

outputDiv.innerHTML += "<h3>Объединенный массив</h3><p>";
outputDiv.innerHTML += combinedArray.join(", ");
outputDiv.innerHTML += "</p>";

// Задание 6
outputDiv.innerHTML += "<h2>Задание 6</h2>";
outputDiv.innerHTML += `<p>Массив до удаления последнего элемента: ${combinedArray.join(", ")}</p>`;
let removedElement = combinedArray.pop();
outputDiv.innerHTML += `<p>Удален последний элемент объединенного массива: ${removedElement}</p>`;
outputDiv.innerHTML += `<p>Массив после удаления последнего элемента: ${combinedArray.join(", ")}</p>`;

// Задание 7
outputDiv.innerHTML += "<h2>Задание 7</h2>";
outputDiv.innerHTML += `<p>Массив до удаления последнего элемента: ${combinedArray.join(", ")}</p>`;
removedElement = combinedArray.pop();
outputDiv.innerHTML += `<p>Удален последний элемент объединенного массива: ${removedElement}</p>`;
outputDiv.innerHTML += `<p>Массив после удаления последнего элемента: ${combinedArray.join(", ")}</p>`;

// Задание 8
outputDiv.innerHTML += "<h2>Задание 8</h2>";
outputDiv.innerHTML += `<p>Массив до добавления элемента в начало: ${combinedArray.join(", ")}</p>`;
combinedArray.unshift(22);
outputDiv.innerHTML += `<p>Массив после добавления элемента в начало: ${combinedArray.join(", ")}</p>`;

// Задание 9
outputDiv.innerHTML += "<h2>Задание 9</h2>";
let today = new Date();
outputDiv.innerHTML += `<p>Сегодняшняя дата: ${today}</p>`;

// Задание 10
outputDiv.innerHTML += "<h2>Задание 10</h2>";
let options = { year: 'numeric', month: 'long', day: 'numeric' };
let formattedDate = today.toLocaleDateString('ru-RU', options);
outputDiv.innerHTML += `<p>Сегодняшняя дата в формате: ${formattedDate}</p>`;

// Задание 11
outputDiv.innerHTML += "<h2>Задание 11</h2>";
function multiplyRandomNumbers() {
    let num1 = Math.floor(Math.random() * 51);
    let num2 = Math.floor(Math.random() * 51);
    return num1 * num2;
}

let product = multiplyRandomNumbers();
outputDiv.innerHTML += `<p>Произведение двух случайных чисел от 0 до 50: ${product}</p>`;
