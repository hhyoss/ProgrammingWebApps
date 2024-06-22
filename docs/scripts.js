document.addEventListener('DOMContentLoaded', () => {
    let username = localStorage.getItem('username');
    if (!username) {
        username = prompt('Как вас зовут?:');
        localStorage.setItem('username', username);
    }
    const userGreeting = document.getElementById('user-greeting');
    userGreeting.textContent = `Привет, ${username}!`;

    const overlay = document.getElementById('overlay');
    const today = new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
    overlay.innerHTML = `<p>Привет, ${username}!</p><p>Сегодня ${today}</p><p>Нажмите на любое место, чтобы продолжить</p>`;
});

function task0() {
    let myVar = prompt("Введите значение для переменной myVar:");
    if (!isNaN(myVar) && myVar !== null && myVar !== "") {
        myVar = Number(myVar);
        alert(`Переменная myVar - число: ${myVar}`);
    } else if (myVar.toLowerCase() === "true" || myVar.toLowerCase() === "false") {
        myVar = (myVar.toLowerCase() === "true");
        alert(`Переменная myVar - булево значение: ${myVar}`);
    } else {
        alert(`Переменная myVar - строка: ${myVar}`);
    }
}

function task1() {
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
}

function task2() {
    let output = "";
    for (let i = 1; i <= 40; i++) {
        output += i + " ";
    }
    alert(output);
}

function task3() {
    setInterval(() => {
        alert("Это вирусная страница! Закройте вкладку!");
    }, 10000);
}

function task4() {
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
}

function task5() {
    let output = "";
    for (let n = 8; n <= 20; n += 2) {
        output += n + " ";
    }
    alert(output);
}

function task6() {
    let output = "";
    for (let m = 1; m <= 7; m++) {
        if (m % 2 !== 0 && m !== 5) {
            output += m + " ";
        }
    }
    alert(output);
}

function taskArray() {
    let output = "";
    let array1 = [1, 2, 3, 4, 5];
    let array2 = new Array(6, 7, 8, 9, 10);
    let array3 = Array.of(11, 12, 13, 14, 15);

    output += `array1: ${array1.join(", ")}\n`;
    output += `array2: ${array2.join(", ")}\n`;
    output += `array3: ${array3.join(", ")}\n`;

    array1[4] = 50;
    output += `Новый пятый элемент array1: ${array1[4]}\n`;

    output += `array1: ${array1.join(", ")} (Длина: ${array1.length})\n`;

    for (let i = 0; i < array1.length; i++) {
        output += array1[i] + " ";
    }
    output += "\n";

    let array4 = [16, 17, 18];
    let array5 = [19, 20, 21];
    output += `array4: ${array4.join(", ")}\n`;
    output += `array5: ${array5.join(", ")}\n`;

    let combinedArray = array4.concat(array5);
    output += `combinedArray: ${combinedArray.join(", ")}\n`;

    let removedElement = combinedArray.pop();
    output += `Удален последний элемент объединенного массива: ${removedElement}\n`;
    output += `combinedArray: ${combinedArray.join(", ")}\n`;

    removedElement = combinedArray.pop();
    output += `Удален последний элемент объединенного массива: ${removedElement}\n`;
    output += `combinedArray: ${combinedArray.join(", ")}\n`;

    combinedArray.unshift(22);
    output += `combinedArray после добавления элемента в начало: ${combinedArray.join(", ")}\n`;

    let today = new Date();
    output += `Сегодняшняя дата: ${today}\n`;

    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = today.toLocaleDateString('ru-RU', options);
    output += `Сегодняшняя дата в формате: ${formattedDate}\n`;

    function multiplyRandomNumbers() {
        let num1 = Math.floor(Math.random() * 51);
        let num2 = Math.floor(Math.random() * 51);
        return num1 * num2;
    }

    let product = multiplyRandomNumbers();
    output += `Произведение двух случайных чисел от 0 до 50: ${product}\n`;

    alert(output);
}

function startQuiz() {
    const questions = [
        {
            question: "Что такое JavaScript?",
            options: ["Язык программирования", "Стиль оформления", "Система управления базами данных", "Операционная система"],
            answer: "Язык программирования"
        },
        {
            question: "Как объявить переменную в JavaScript?",
            options: ["var", "let", "const", "Все ответы верны"],
            answer: "Все ответы верны"
        },
        {
            question: "Что такое массив?",
            options: ["Тип данных для хранения значений", "Функция", "Оператор", "Объект"],
            answer: "Тип данных для хранения значений"
        },
        {
            question: "Какой метод используется для добавления элементов в конец массива?",
            options: ["push", "pop", "shift", "unshift"],
            answer: "push"
        },
        {
            question: "Что возвращает метод `Math.random()`?",
            options: ["Случайное число от 0 до 1", "Случайное целое число", "Число Пи", "Ничего"],
            answer: "Случайное число от 0 до 1"
        },
        {
            question: "Как можно вывести сообщение на экран?",
            options: ["console.log()", "alert()", "document.write()", "Все ответы верны"],
            answer: "Все ответы верны"
        },
        {
            question: "Что такое DOM?",
            options: ["Объектная модель документа", "Объектное хранилище данных", "Среда выполнения JavaScript", "Протокол передачи данных"],
            answer: "Документальный объектный модель"
        },
        {
            question: "Как проверить тип переменной?",
            options: ["typeof", "type", "checkType", "typeofVar"],
            answer: "typeof"
        },
        {
            question: "Как создать функцию в JavaScript?",
            options: ["function myFunction() {}", "let myFunction = function() {}", "const myFunction = () => {}", "Все ответы верны"],
            answer: "Все ответы верны"
        },
        {
            question: "Какое ключевое слово используется для создания переменной, доступной только в блоке кода?",
            options: ["let", "var", "const", "static"],
            answer: "let"
        }
    ];

    let quizContainer = document.getElementById('quiz-container');
    let quizResult = document.getElementById('quiz-result');
    quizContainer.innerHTML = "";
    quizResult.innerHTML = "";

    let userAnswers = [];

    questions.forEach((q, index) => {
        let questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${q.question}</p>`;
        q.options.forEach(option => {
            let optionElement = document.createElement('label');
            optionElement.innerHTML = `<input type="radio" name="question${index}" value="${option}"> ${option}`;
            questionElement.appendChild(optionElement);
            questionElement.appendChild(document.createElement('br'));
        });
        quizContainer.appendChild(questionElement);
    });

    let submitButton = document.createElement('button');
    submitButton.innerText = "Проверить ответы";
    submitButton.onclick = () => {
        quizResult.innerHTML = "";
        let correctAnswers = 0;
        userAnswers = [];

        questions.forEach((q, index) => {
            let userAnswer = document.querySelector(`input[name="question${index}"]:checked`);
            if (userAnswer) {
                userAnswers.push(userAnswer.value);
                if (userAnswer.value === q.answer) {
                    correctAnswers++;
                }
            } else {
                userAnswers.push(null);
            }
        });

        quizResult.innerHTML = `<p>Ваш результат: ${correctAnswers} из ${questions.length}</p>`;
        questions.forEach((q, index) => {
            let result = userAnswers[index] === q.answer ? "верно" : `неверно, правильный ответ: ${q.answer}`;
            quizResult.innerHTML += `<p>${index + 1}. ${q.question} - ваш ответ: ${userAnswers[index]} (${result})</p>`;
        });
    };
    quizContainer.appendChild(submitButton);
}

function showOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
}

function hideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}
