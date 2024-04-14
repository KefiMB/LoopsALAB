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
    