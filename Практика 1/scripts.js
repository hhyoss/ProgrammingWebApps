// Задание 0
let userInput = prompt("Введите значение для переменной userInput:");
let outputDiv = document.getElementById('output');

if (userInput !== null && userInput !== "") {
    if (!isNaN(userInput)) {
        userInput = Number(userInput);
        outputDiv.innerHTML += "<p>Переменная userInput - число.</p>";
    } else if (userInput.toLowerCase() === "true" || userInput.toLowerCase() === "false") {
        outputDiv.innerHTML += "<p>Переменная userInput - булево значение.</p>";
    } else {
        outputDiv.innerHTML += "<p>Переменная userInput - строка.</p>";
    }
} else {
    outputDiv.innerHTML += "<p>Переменная userInput - другое.</p>";
}

// Задание 1
let zodiac = prompt("Введите ваш знак зодиака:");
switch (zodiac.toLowerCase()) {
    case 'овен':
        alert("Привет, Овен!");
        break;
    case 'телец':
        alert("Привет, Телец!");
        break;
    case 'близнецы':
        alert("Привет, Близнецы!");
        break;
    case 'рак':
        alert("Привет, Рак!");
        break;
    case 'лев':
        alert("Привет, Лев!");
        break;
    case 'дева':
        alert("Привет, Дева!");
        break;
    case 'весы':
        alert("Привет, Весы!");
        break;
    case 'скорпион':
        alert("Привет, Скорпион!");
        break;
    case 'стрелец':
        alert("Привет, Стрелец!");
        break;
    case 'козерог':
        alert("Привет, Козерог!");
        break;
    case 'водолей':
        alert("Привет, Водолей!");
        break;
    case 'рыбы':
        alert("Привет, Рыбы!");
        break;
    default:
        alert("Привет, Незнакомец!");
        break;
}


// Задание 2
// Цикл for
outputDiv.innerHTML += "<h2>Цикл for</h2><p>";
for (let i = 1; i <= 40; i++) {
    outputDiv.innerHTML += i + " ";
}
outputDiv.innerHTML += "</p>";

// Цикл while
outputDiv.innerHTML += "<h2>Цикл while</h2><p>";
let j = 1;
while (j <= 40) {
    outputDiv.innerHTML += j + " ";
    j++;
}
outputDiv.innerHTML += "</p>";

// Цикл do-while
outputDiv.innerHTML += "<h2>Цикл do-while</h2><p>";
let k = 1;
do {
    outputDiv.innerHTML += k + " ";
    k++;
} while (k <= 40);
outputDiv.innerHTML += "</p>";

// Задание 3
setInterval(() => {
    alert("Это вирусная страница! Закройте вкладку!");
}, 10000);

// Задание 4
function askNumber() {
    let userNumber = prompt("Введите любое число больше 5:");
    if (userNumber === null) {
        return;
    }
    userNumber = Number(userNumber);
    if (!isNaN(userNumber) && userNumber > 5) {
        alert("Поздравляем, вы ввели правильное число!");
    } else {
        askNumber();
    }
}
askNumber();

// Задание 5
outputDiv.innerHTML += "<h2>Четные числа от 8 до 20</h2><p>";
for (let n = 8; n <= 20; n += 2) {
    outputDiv.innerHTML += n + " ";
}
outputDiv.innerHTML += "</p>";

// Задание 6
outputDiv.innerHTML += "<h2>Нечетные числа от 1 до 7 (пропуская 5)</h2><p>";
for (let m = 1; m <= 7; m++) {
    if (m % 2 !== 0 && m !== 5) {
        outputDiv.innerHTML += m + " ";
    }
}
outputDiv.innerHTML += "</p>";
