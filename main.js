'use strict';

const arr = ['564', '220', '1892', '432', '742', '113', '4895'];
let temp;

for(let i = 0; i < arr.length; i++) {
  temp = Number(arr[i].split('', 1));
  if (temp === 2 || temp === 4){
    console.log(arr[i]);
  }
}