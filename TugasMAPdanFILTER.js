let salary = [9100000, 9800000, 9500000, 10300000, 9300000];

let yukFiltFee = (cb, arr) => {
  newArr = cb(arr);
  return newArr;
};

let input = yukFiltFee((element) => {
  let tampung = element.filter((el) => {
    return el - el * 0.05 >= 9000000;
  });

  return tampung;
}, salary);

console.log(input);

// let fiboChecker = (input) => {
//   let fibon = for
// };

// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }
// console.log(sum);

//Latihan menghitung data array

let sum = 0;
const numbers = [65, 44, 12, 4];
let store = numbers.forEach((item) => {
  sum += item;
  return sum;
});

console.log(sum);

let nomor = [65, 44, 12, 4];
nomor.forEach(myFunction);
function myFunction(item, index, arr) {
  arr[2] = item * 10;
  return arr[2];
}

console.log(nomor);
