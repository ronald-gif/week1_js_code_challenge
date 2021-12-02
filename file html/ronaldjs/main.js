let firstName, secondName, age, areaOfResidence, course;
firstName = "Ronald";
secondName = "Biyinzika";
age = 23;
areaOfResidence = "Makindye";
course = "Digital programing";
console.log("my name is " + firstName + " " + secondName + " and am " + age + " years old " + " I live in " + areaOfResidence + " and i do " + course);

// javascript program to print the number of letters in my name
 let numberOFletters = "RonaldBiyinzika";
 console.log(numberOFletters.length);

//  product, sum, division of numbers
let num1 = 10;
let num2 = 15;
let num3 = 20;
let results = num1 * num2 * num3;
console.log(results);

// sum of 5 numbers
const numb1 = 10;
const numb2 = 10;
const numb3 = 10;
const numb4 = 10;
const numb5 = 10;
const sum = numb1 + numb2 + numb3 + numb4 + numb5;
console.log(sum);

// division of 2 numbers
let firstNumber = 100;
let secondNumber = 5;
let answer = firstNumber / secondNumber;
console.log(answer);

// age one is allowed to take alcohol

var ageAllowed = prompt("enter your age");

function someOneAge(){
    if(ageAllowed < 18){

        document.write("Alcohol is not allowed to persons under the age of 18");
    }else{

        document.write("Execessive consumption of alcohol is harmful to your health drink responsively");
    };
};

someOneAge();



// Grading system

var math = prompt("Math: ");
var english = prompt("English: ");
var SocialStudies = prompt("S.S.T: ");
var science = prompt("science: ");
  

var average = parseInt(math) + parseInt(english) + parseInt(SocialStudies) + parseInt(science);

var finalAverage = parseInt(average) / 4

document.write("Total: " + average);
document.write("<br>");
 document.write("<br>");

document.write("Average: " +  finalAverage);
document.write("<br>");
document.write("<br>");


function grades(){
    if(finalAverage >= 75){
        document.write("First grade");

    }else if(finalAverage >= 65 ){
        document.write("second grade");

    }else if(finalAverage >= 50){
        document.write("Third grade");

    }else if(finalAverage >= 40){
        document.write("Fourth grade");

    }else{
        document.write("grade U");
    };
};

grades();

// Array of letters

var arrayOfLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
console.log(arrayOfLetters.length);

console.log(arrayOfLetters.indexOf("C"));
console.log(arrayOfLetters.indexOf("F"));
console.log(arrayOfLetters.indexOf("Y"));
 
for(var i = 0; i < arrayOfLetters.length; i++){
console.log(arrayOfLetters[i]);
}

// Array of numbers

var arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10]
console.log(arrayOfNumbers.length);

console.log(arrayOfNumbers.indexOf(2))
console.log(arrayOfNumbers.indexOf(4))
console.log(arrayOfNumbers.indexOf(6))
console.log(arrayOfNumbers.indexOf(9))

for(var numberOfArray = 0; numberOfArray < arrayOfNumbers.length; numberOfArray++){
console.log(arrayOfNumbers[numberOfArray])
}