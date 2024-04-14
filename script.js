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
const num = 11;
const isPrime = (num) => {
   let sqrtnum = Math.floor(Math.sqrt(num));
   let prime = num !== 1;
   for(let i = 2; i < sqrtnum + 1; i++){
      if(num % i === 0){
         prime = false;
         break;
      };
   };
   return prime;
}
const nextPrime = (num = 1) => {
   while(!isPrime(++num)){
   };
   return num;
};
console.log(nextPrime(num));