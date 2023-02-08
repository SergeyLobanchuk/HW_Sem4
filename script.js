// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число count = 0;

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element == 0) {
//         console.log(`${element} - это ноль`);
//     } else
//         if (element % 2 == 0) {
//             console.log(`${element} -  чётное `);
//         } else console.log(`${element} - не чётное `);

// }


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]



// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// const myArray = arr.splice(3, 2); // myArray = [4,5]
// console.log(arr);



// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// function getArray(size) {
//     const arr = [];
//     let arrSum = 0;
//     for (let index = 0; index < size; index++) {
//         arr.push(Math.round(Math.random() * 10));
//         arrSum += arr[index];
//     }
//     console.log(arr);
//     console.log(arrSum);
// }
// getArray(5);



//2 , 3.
// const arr = [];
// let size = 5;
// for (let index = 0; index < size; index++) {
//     arr.push(Math.round(Math.random() * 10));
// }
// console.log(arr);
// function minNumber(arr) {
//     let min = arr[0];
//     let num = NaN;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         if (arr[i] == 3) {
//             num = arr[i];
//         }
//     } console.log(`min = ${min}`);
//     console.log(num);
// }
// minNumber(arr);







// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx