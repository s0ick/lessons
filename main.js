let num = 266219;
let size = 0;
let composition = 1;

size = String(num).length;

for(let i = 0; i < size; i++) {
  composition *= (num % 10);
  num = Math.trunc(num / 10);
}
console.log(composition);

composition = composition ** 3;

