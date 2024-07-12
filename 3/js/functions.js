//1. Функция для проверки длины строки.
// 1 ринимает строку, которую нужно проверить, и максимальную длину
// 2 возвращает true, если строка меньше или равна указанной длине
// 3 возвращает false, если строка длиннее

const stringLength = (string, length) => string.length <= length;

// Строка короче 20 символов
stringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
stringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
stringLength('проверяемая строка', 10); // false


//2. 1 Функция для проверки, является ли строка палиндромом.
// 2 (доп) пробелы не учитываются

const isPalindrom = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  let stringNew = '';
  for (let i = string.length - 1; i >= 0; i--) {
    stringNew += string[i];
  }
  if (string === stringNew) {
    return true;
  }
  return false;
};

// Строка является палиндромом
isPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrom('ДовОд'); // true
// Это не палиндром
isPalindrom('Кекс'); // false
// Это палиндром
isPalindrom('Лёша на полке клопа нашёл '); // true


// 3. 1 Функция принимает строку
// 2 извлекает содержащиеся в ней цифры от 0 до 9
// 3 возвращает их в виде целого положительного числа
// 4 Если в строке нет ни одной цифры, функция должна вернуть NaN
// 5 (доп) предусмотрите случай, когда вместо строки приходит число
// 6 возвращать функция по-прежнему должна только целые положительные числа

const isNumber = (string) => {
  string = string.toString();
  let stringNew = '';
  for (let i = 0; i < string.length; i++) {
    // console.log(string);
    if (parseInt(string[i], 10) >= 0) {
      stringNew += string[i];
    }
  }
  return parseInt(stringNew, 10);
};

isNumber('2023 год'); // 2023
isNumber('ECMAScript 2022'); // 2022
isNumber('1 кефир, 0.5 батона'); // 105
isNumber('агент 007'); // 7
isNumber('а я томат'); // NaN


isNumber(2023); // 2023
isNumber(-1); // 1
isNumber(1.5); // 15
