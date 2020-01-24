let num = 266219;
let sum = 1;

num = num.toString().split('');

num.forEach(function(item){
  sum *= item;
});
console.log(sum);

sum = sum ** 3;
console.log(sum.toString().substring(0, 2));
