const num = 266219;
let numString = num.toString().split('');

let composition = (numString.reduce(function(sum, current) {
  return sum * (current * 1);
}, 1));
console.log(composition);

composition = composition ** 3;
console.log(composition .toString().substr(0, 2));