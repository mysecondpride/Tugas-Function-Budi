// let fibonChecker = (index) => {
//   let fibo = [];
//   index == 1 ? fibo.push(1) : fibo.push(2);
//   return fibo;
// };
// console.log(fibonChecker(1));

let fibonaci = (n) => {
  let show = [1, 1];
  if (n == 1 || n == 2) {
    for (let i = n - 1; i < n; i++) {
      return show[i];
    }
  } else if (n >= 3) {
    for (let i = 2; i < n; i++) {
      show.push(show[i - 2] + show[i - 1]);
    }
    return show[n - 1];
    console.log(show[n]);
  }
};

// gaes sampe baris 17 aja ya, masalahnya lanjutannya rumusnya gak seperti itu juga gaes, tapi dari di atas sudah terang cluenya

let fibon = fibonaci(10);
console.log(fibon);

let polindromeChecker = (myPolindrome) => {
  let semangat = myPolindrome.split("");
  let rev = semangat.reverse();
  rev === semangat ? console.log("yes") : console.log("No");
};

console.log(polindromeChecker("aca"));
