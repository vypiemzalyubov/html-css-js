// Закомментируйте часть кода так, чтобы программа выводила только предложение "Столица Гондураса - Тегусигальпа".

console.log("Столица Гондураса - Тегусигальпа");
/*
console.log("Столица Никарагуа - Манагуа");
console.log("Столица Коста-Рики - Сан-Хосе");
*/

// Выведите слово "JavaScript" и напишите однострочный комментарий, объясняющий написанную вами инструкцию.

console.log("JavaScript"); // вывод JavaScript в консоль

// Выведите слово "Погружение" и напишите многострочный комментарий, объясняющий написанную вами инструкцию.

console.log("Погружение");
/*
вывод слова Погружение в консоль
=)
*/

// Выведите слово "Java". Затем, выведите слово "Script" на новой строке. Добавьте многострочный комментарий, объясняющий ваш код.

console.log("Java");
console.log("Script");
/*
Java - это
Джава или Ява?
*/

// Дополните код так, чтобы программа выводила сумму значений переменных num1, num2 и num3.

let num1 = 180;
let num2 = 100;
let num3 = 120;
console.log(num1 + num2 + num3);

// Дополните код так, чтобы программа выводила значения переменных num1, num2 и num3 в заявленном порядке (см. Sample Output) через пробел.

let num1 = 180;
let num2 = 100;
let num3 = 120;
console.log(num2, num3, num1);

// Создайте константу с корректным именем и присвойте ей значение «Светлана». Выведите значение константы.

const name = "Светлана";
console.log(name);

// 1. Создайте переменную age и присвойте ей значение 96
// 2. Выведите переменную age
// 3. Выведите сообщение «Прошел год»
// 4. Присвойте переменной age значение 97
// 5. Выведите переменную age

let age = 96;
console.log(age);
console.log("Прошел год");
age = 97;
console.log(age);

// Создайте две переменные source и destination. Присвойте переменной source значение "sigma". Затем скопируйте значение переменной source в переменную destination.
// Измените значение source на "delta". Выведите значениe source, a затем значение destination с новой строки.

let source = "sigma";
let destination = source;
source = "delta";
console.log(source);
console.log(destination);

// Данная программа должна принимать от пользователя число и выводить его значение, увеличенное на 5, но из-за невнимательности разработчика программа работает некорректно.
// Исправьте код так, чтобы переменной prod присвоились данные типа Число, а не типа Строка.

let prod = Number(prompt());
console.log(prod + 5);

// Запросите у пользователя любое слово и присвойте его константе. Выведите значение константы.

const word = prompt();
console.log(word);

// Запросите у пользователя два числа. Затем выведите эти два числа через пробел.

let x = +prompt();
let y = +prompt();
console.log(x, y);

// Запросите у пользователя слово и присвойте его переменной word1. Затем запросите второе слово и присвойте переменной word2.
// Выведите сначала второе слово, а затем первое с новой строки.

let word1 = prompt();
let word2 = prompt();
console.log(word2);
console.log(word1);

// Запросите у пользователя три числа. Затем выведите сумму этих трех чисел.

let x = +prompt();
let y = +prompt();
let z = +prompt();
console.log(x + y + z);

// Вам нужно вычислить объем сундука. Попросите пользователя ввести высоту, ширину и длину сундука и вычислите его объем по формуле высота * ширина * длина.
// Выведите результат.

const height = Number(prompt("Введите высоту сундука:"));
const width = Number(prompt("Введите ширину сундука:"));
const length = Number(prompt("Введите длину сундука:"));
console.log(height * width * length);

// Запросите у пользователя число а и число b. Вычислите результат возведения числа a в степень b и выведите результат.

let a = +prompt();
let b = +prompt();
console.log(a ** b);

// Ваша компания занимается производством картофельных чипсов. Напишите программу для расчета стоимости партии чипсов.
// Первым делом, запросите у пользователя количество упаковок чипсов, которое они хотели бы приобрести.
// Затем, вычислите стоимость заказа, учитывая, что одна пачка чипсов стоит 110 рублей. Выведите результат.

let quantity = +prompt();
console.log("Стоимость партии чипсов:", quantity * 110, "рублей");

// Запросите у пользователя число. Вычислите остаток от деления этого числа на 4 и выведите результат.

console.log(+prompt() % 4);

// Запросите у пользователя два числа, вычислите среднее арифметическое этих чисел и выведите результат.

console.log(`Среднее арифметическое = ${(+prompt() + +prompt()) / 2}`);

// Запросите у пользователя число. Выведите последнюю цифру данного числа, используя математический оператор.

console.log(+prompt() % 10);

// Запросите у пользователя число x, а затем число y. Проверьте является ли х больше чем у. Выведите результат проверки (true или false).

console.log(+prompt() > +prompt());

// Запросите у пользователя число x, а затем число y. Проверьте x и у на строгое неравенство. Выведите результат проверки (true или false).

console.log(+prompt() !== +prompt());

// Запросите у пользователя число x, затем число y, а затем число z. Проверьте сумму x и y на строгое равенство с суммой y и z.
// Выведите результат проверки (true или false).

let x = +prompt();
let y = +prompt();
let z = +prompt();
console.log(x + y === y + z);

// Запросите у пользователя число a, а затем число b. 
// Проверьте является ли число а меньше числа b и присвойте результат проверки константе isLess. Выведите значение константы isLess.

let a = +prompt();
let b = +prompt();
const isLess = a < b;
console.log(isLess);

// Вставьте вместо троеточия логический оператор так, чтобы константе logic было присвоено значение true.

const logic = false && 5 > 9 || 18 == "18"; 
console.log(logic);