// ! Sting

// document.getElementById("string").innerHTML = "Hello World"

let string = "Hello World"

document.getElementById('string').innerHTML = string;

// ! function

function myFunction(p1, p2) {
  return p1 * p2
}

let result = myFunction(4, 2)
document.getElementById("functionMultilication").innerHTML = result

function write() {
  return (
    `
    <h1>Hello World</h1> <p>This is a paragraph</p>
    `
  )
}
document.getElementById("writeHTML").innerHTML = write()

// ! object

const data = {
  fName: "John",
  lName: "Doe",
  age: 26
}

// document.getElementById("detail").innerHTML = "My name is " + data.fName + " " + data.lName + "<br>" + `my age is ${data.age}`
document.getElementById("detail").innerHTML = `My name ${data.fName} ${data.lName}`

console.log(data.fName.length);