'use strict';

const arr = ['564', '220', '1892', '432', '742', '113', '4895'];

const searchArray = arr.filter(function(item){
  return item[0] === '2' || item[0] === '4';
});
console.log(searchArray);

for (let i = 2; i <= 100; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j) continue;
    count += 1;
  }
  if (count === 2) console.log(`Делители числа ${i}: 1 и ${i}`);
}

  