let x = 5
let y = 10

console.log(x + y);

let fName = "John"
let lName = "Doe"

console.log(fName + ' ' + lName);

// Block Scope

{
  let x = 2;

  console.log(x);
}

{
  let x = "Hello World"

  console.log(x);
}

console.log(x);

let fullName
fullName = "John Doe"

console.log(fullName);

let firstValue = 4
let secondValue = 2

console.log(firstValue ** secondValue);

{
  let x = 5

  console.log( typeof x );
}