// TODO: Activity 1 : Print numbers from 1 to 10 using for loop, while loop
/* for (let i = 1; i <= 10; i++) {
  console.log(i);
} */

// Print numbers from 1 to 10 using while loop
/* let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
} */

// Mutiplication Table
/* for (let i = 1; i <= 10; i++) {
  console.log(`${5} * ${i} = ${5 * i} `);
} */

// TODO: Activity 2 : Calculate the sum for 1-10 using while loop
/* let sum = 0;
let i = 0;
while (i <= 10) {
  sum = sum + i;
  i++;
}
console.log("Sum is " + sum); */

// Print numbers from 10 to 1 using for loop, while loop
/* let n = 10;
while (n >= 1) {
  console.log(n);
  n--;
} */

// TODO: Activity 3
// Print Number from 1 to 5 using a do...while loop
/* let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5); */

// Program to calculate Factorial of a number using a do...while loop
/* const factorial = (n) => {
  let result = 1;
  let i = n;

  do {
    result = result * i;
    i--;
  } while (i > 0);

  return result;
};

console.log(factorial(5));
 */

// TODO: Activity 4 Print a pattern using nested loop

/* for (i = 1; i <= 5; i++) {
  let star = "*";
  console.log(star.repeat(i));
} */

/* function printLeftAngledTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let output = "";
    for (let j = 1; j <= i; j++) {
      output = output + "*";
    }
    console.log(output);
  }
}

printLeftAngledTriangle(5); */

// TODO: Activity 5 Print 1 to 10 , skip 5 using continue
/* for (i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
} */

/* for (i = 1; i < 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
 */