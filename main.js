// conditionals


// 1. check your math
// sum of 1 and 1 greater than 5?
if (1 + 1 > 5) {
    console.log("True fact!")
} else {
    console.log("False!")
}

// product of 4 and 5 less than our equal to 20?
if (4 * 5 <= 20) {
    console.log("True fact!")
} else {
    console.log("False!")
}

// difference between 6 and 2 greater than or equal to 0?
if (6 - 2 >= 0) {
    console.log("True fact!") 
} else {
    console.log("False!")
}

// 2. dog people vs cat people 
// 2a.
const likesDogs = true;
if (likesDogs === true) {
    console.log("You're a dog person!")
} else {
    console.log("You're a cat person!")
}

// 3. greetings 
const gabriellePerson = {
    language: "English",
    name: "Gabrielle"
}

if (gabriellePerson.language === "English") {
    console.log(`Hello, ${gabriellePerson.name}!`);
} else if (gabriellePerson.language === "Spanish") {
    console.log(`Hola, ${gabriellePerson.name}!`);
} else if (gabriellePerson.language === "French") {
    console.log(`Bonjour, ${gabriellePerson.name}!`);
} 

// 4. student grades 
const grade = 95;

if (grade >= 0 && grade <= 69) {
    console.log("You got an F!")
} else if (grade >= 70 && grade <= 76) {
    console.log("You got a D!")
} else if (grade >=77 && grade <= 84) {
    console.log("You got a C!")
} else if (grade >=84 && grade <=92) {
    console.log("You got a B!") 
} else if (grade >=93 && grade <=100) {
    console.log("You got an A!")
}