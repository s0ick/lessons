'use strict';

const arr = ['564', '220', '1892', '432', '742', '113', '4895'];
let temp;

for(let i = 0; i < arr.length; i++) {
  temp = Number(arr[i].split('', 1));
  if (temp === 2 || temp === 4){
    console.log(arr[i]);
  }
}

for (let i = 2; i <= 100; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j) continue;
    count += 1;
  }
  if (count === 2) console.log(`Делители числа ${i}: 1 и ${i}`);
}

  