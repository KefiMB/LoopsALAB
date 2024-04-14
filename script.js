console.log("Homework")

// Part 1
let a = 1

while(a <= 100) {
  console.log(a)
  a++ // afterthought
}
console.log("===============================")

for (let i = 1; i < 100; i++) {
    if (i % 15 == 0) 
    console.log("FizzBuzz");
    else if (i % 3 == 0) 
    console.log("Fizz");
    else if (i % 5 == 0)
     console.log("Buzz");
    else console.log(i);
}
    
console.log("===============================")

// Part 2
const n = 5;
const isPrime = (n) => {
   let sqrtnum = Math.floor(Math.sqrt(n));
   let prime = n !== 1;
   for(let i = 2; i < sqrtnum + 1; i++){
      if(n % i === 0){
         prime = false;
         break;
      };
   };
   return prime;
}
const nextPrime = (n = 1) => {
   while(!isPrime(++n)){
   };
   return n;
};
console.log(nextPrime(n));

if (n === 4){
    console.log(`5`);
}
else if (n === 5){
    console.log(`7`);
}
else if (n === 9){
    console.log(`11`)
}