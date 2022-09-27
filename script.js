const persons = [
    { firstName: 'Kim', lastName: 'Olsson', Age: 36 },
    { firstName: 'William', lastName: 'Ekdahl', Age: 7 },
    { firstName: 'Tuva', lastName: 'Lönn', Age: 4 },
    { firstName: 'Louise', lastName: 'Windle', Age: 39 },
    { firstName: 'Susanne', lastName: 'Olsson', Age: 62 },
]

// FOR - Loopar ett visst antal gånger
// FOR OF - Loopa igenom en hel array
console.log(persons);

for(let i = 0; i < persons.length; i++) {
    
    console.log(i)
    console.log(persons[i])
    console.log(persons[i].firstName)

}

for (let person of persons) {
    console.log('person' + person)
}

persons.forEach(person => {


})

// let nr = 14;
// let text = '14'

// if(value && nr == text) {
//     console.log('value är true & nr har samma värde som text')
    
// }

// value && console.log('hej');


// if(value || nr == text) {
//     console.log('antingen är value = true, eller så är nr och text samma');
// }

// let email = 'mr.kim.olsson@gmail.com'

// if(email.includes('@')) {
//     console.log('mailadressen innehåller ett @');
// }

// if(email.includes('@') && !email.includes(' ')) {
//     console.log('mailadressen innehåller ett @');
// }

// const regEX = /^[\w-\.]+@([\w-]+\.){2,6}$/

// if(regEX.test(email)) {
//     console.log('email är ok!')
// }

// if(!regEX.test(email)) {
//     console.log('email är ok!')
// }

// if(regEX.test(email)&& value !== '') {
//     console.log('allt i "formuläret" ser bra ut')
// }

// if(value !== '' && nr == text || 1 > 4) {

// }

// if(value === 'Kim') {
//     console.log('är du här nu igen' + value)
// }
// else if() {

// }
// else() {

// }

let number = 10;

switch(number) {
    case 1:
        console.log('nummret är 1');
        break;
    
    case 2:
        console.log('nummret är 2');
        break;

    case 3:
    console.log('nummret är 3');
    break;

    case 4:
    console.log('nummret är 4');
    break;

    case 5:
    console.log('nummret är 5');
    break;

    default:
        console.log('jag kan inte räkna ut det där')
}


// hoisting - hissas till toppen

// console.log(myFunction()) // detta fungerar
// console.log(funk2())  // denna typen av funktion (när vi använder const) hoistas inte.

// function myFunction() {
//     let sum = 3 + 5;
//     return sum;
// }

// const funk2 = function() {
//     let sum = 3 + 5;
//     return sum;
// }

// console.log(funk2()); // Här kommer vi åt funktionen.

// const funk3 = () => { let sum = 2 + 5; return sum; }  // fugerar lika bra som funk2

// console.log(sum);


// const fullName = function(firstName, lastName) {
//     if(typeof firstName == 'string' && typeof lastName == 'string' && firstName !== '' && lastName !== '') {

//         return firstName + ' ' + lastName // return kommer avbryta så att else statement inte nås.

//     }
//     return 'Du måste ange ett riktigt namn'; // detta fungerar dock

//     // else {
//     //     return 'Du måste ange ett riktigt namn'; (men inte detta)
//     // }
// }

// console.log(fullName);


// const fullName = (firstName = 'John', lastName = 'Doe') => {
//     return firstName + ' ' + lastName;
// }
// console.log(fullName());
// console.log(fullName('Kim', 'Olsson'));

// const calc = (num1 = 0, num2 = 0) => {
//     return num1 + num2;
// }
// console.log(calc(5));


// // alternativ till Arrow functions

// const funk4 = () => {}
// const funk5 = name => {}
// const funk6 = (firstName, lastName) => {}

// const funk7 = (firstName, lastName) => firstName + ' ' + lastName;

// const funk8 = name => 'hej ' + name;

// // CALLBACK FUNKTIONER

// const names = ['Kim', 'William', 'Tuva'];
 
// // names.forEach(function(name) {
// //     console.log(name);
// // })

// names.forEach(name => {
//     console.log(name);
// })

// const minFunktion = (callback) => {

//     let value = 500 + 35;

//     callback();
// }

// minFunktion((value) => {
//     console.log(value);
// })

// // const newFunction = (value) => { console.log(value)}

// // newFunction(567)

// const calc2 = (num1, num2, num3, cb) => {
//     let sum = +num1 + +num2 + +num3

//     cb(sum)
// }

// const summan = calc2(3, 5, 7);
// console.log(summan);

// calc(4, 7, 19, (sum) => {
//     console.log(sum)
//     counter += sum
// })

// // google callback functions



// // ÖVNINGSUPPGIFT 3

// //skapa en funktion som tar emot ett namn och skriver ut ett namn i consolen.

// const greet = name => {
//     console.log('Hello' + name)
// }
// greet('Kim');


// const returnColor = (number) => {

//     switch(true) {
//         case (number >= 0 && number <=12):
//             return 'white'

//         case (number <= 18):
//               return 'green'
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//         case 9:
//         case 10:
//         case 11:
//         case 12:
//         case 13:
//         case 14:
//         case 15:
//         case 16:
//         case 17:
//         case 18:
//         case 19:
            
//     }



//     const hello = () => {console.log('hello world')}
//     hello();

//     const calc3 = (numberOne, numberTwo) => {console.log(numberOne + numberTwo)}
//     calc3(10, 100);

    const tip = (sum, percent) => {let total = sum + sum * (percent / 100);
        return total;
    }

    console.log(tip(2348, 10))


    // if(number >= 0 && number <= 12){
    //     return 'white';
    // }
    // else if(number <= 18){
    //     return 'green';
    // }
    // else if(number <= 25){
    //     return 'red';
    // }
    // else if(number <= 99){
    //     return 'blue';
    // }
    // else {
    //     return 'black';
    // }

