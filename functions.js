function sayHello () {
    console.log('Hello world!')
} 
//sayHello()// calling the function

function basicAddition() {
    let firstName = 'John '
    let lastName = 'Gallion'//these variables only exist in current function
    console.log(firstName + lastName)// string concatentation- adds strings together
}

function appGreeting(fName, lName) {
    console.log('Hello', fName, lName)
}
// basicAddition()

// values passed through a function are called arguments
//appGreeting('John', 'Gallion')
//appGreeting('Leah', 'Gallion')

function calculateArea(length, width) {
    return length * width // return sends the value to the caller
}

function calculatecircumference(radius) {
    return radius * radius
}


let area =calculateArea(6, 4)
//console.log('The area is :', area)

let circumference = calculatecircumference(7)
//console.log('The circumference is :', circumference)


let vanilla = 1
let chocolate = 1.50
let strawberry = 2
let pistachio = 2.50
let caramel = 1.25
let peach = 1.75


function calcPrice (flavor1, flavor2) {
    return flavor1 + flavor2
}

let total = calcPrice(vanilla, strawberry)

//console.log('Your total today is $',total)
function printLine () {
let numberLine = []
// populates numberLine array with numbers 1-100
for ( a = 1; a <= 100; a++) {
    numberLine.push(a)
}

    for(let i = 0; i < 100; i++) {
//checks if number is a mutiple of 3&5 if true it will print FIZZBUZZ
      if ((numberLine[i] %3 == 0) && (numberLine[i] %5 == 0)) {
            console.log('FIZZBUZZ')
//checks if number is a mutiple of 3 if true it will print FIZZ
    } if (numberLine[i] %3 === 0) {
        console.log('FIZZ')
//checks if number is a mutiple of 5 if true it will print BUZZ
    } else if (numberLine[i] %5 === 0){
       console.log('BUZZ')
//if none of the above conditions are met it will print the number
    } else {
        console.log(numberLine[i])
    }
}
}
printLine()