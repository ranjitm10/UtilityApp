function encodeUrl(){
const input = readLineSync.question('Enter Url\n');
console.log(`You have selected: ${input}`);
console.log(encodeURIComponent(input));
  }

function decodeUrl(){
const input = readLineSync.question('Enter Url\n');
console.log(`You have selected: ${input}`);
console.log(decodeURIComponent(input));
  }

function decodeUrl(){
const input = readLineSync.question('Enter Url\n');
console.log(`You have selected: ${input}`);
console.log((input));
  }


function binaryToDecimal(){
const input = readLineSync.question('Enter your number for converstion: ');
console.log(`Converted: ${parseInt(input, 2)}`);
  }
function binaryToHex(){
const input = readLineSync.question('Enter your number for converstion: ');
const decimal = parseInt(input, 2);
console.log(`Converted: ${decimal.toString(16)}`);
  }
function binaryToOctal(){
const input = readLineSync.question('Enter your number for converstion: ');
const decimal = parseInt(input, 2);
console.log(`Converted: ${decimal.toString(8)}`);
  }
function decimalToBinary(){
const input = parseInt(readLineSync.question('Enter your number for converstion: '));
console.log(`Converted: ${input.toString(2)}`);
  }
function decimalToHex(){
const input = parseInt(readLineSync.question('Enter your number for converstion: '));
console.log(`Converted: ${input.toString(16)}`);
  }
function decimalToOctal(){
const input = parseInt(readLineSync.question('Enter your number for converstion: '));
console.log(`Converted: ${input.toString(8)}`);
  }
function hexToBinary(){
const input = readLineSync.question('Enter your number for converstion: ');
const hex = parseInt(input, 16);
console.log(`${hex.toString(2)}`);
  }
function hexToDecimal(){
const input = readLineSync.question('Enter your number for converstion: ');
const hex = parseInt(input, 16);
console.log(`${hex.toString(10)}`);
  }
function hexToOctal(){
const input = readLineSync.question('Enter your number for converstion: ');
const hex = parseInt(input, 16);
console.log(`${hex.toString(8)}`);
  }
function octaltoBinary(){
const input = readLineSync.question('Enter your number for converstion: ');
const octal = parseInt(input, 8);
console.log(`${octal.toString(2)}`);
  }
function octaltoDecimal(){
const input = readLineSync.question('Enter your number for converstion: ');
const octal = parseInt(input, 8);
console.log(`${octal.toString(10)}`);
  }



function octaltoHex(){
const input = readLineSync.question('Enter your number for converstion: ');
const octal = parseInt(input, 8);
console.log(`${octal.toString(16)}`);
  }

function md5(){
const input = readLineSync.question('Enter your string: ');
const algo = 'md5';
console.log(`md5Hash("${input}")-->`,crypto.createHash(algo).update(input).digest('hex'));
  }
function sha1(){
const input = readLineSync.question('Enter your string: ');
const algo = 'sha1';
console.log(`sha1("${input}")-->`,crypto.createHash(algo).update(input).digest('hex'));
  }
function sha256(){
const input = readLineSync.question('Enter your string: ');
const algo = 'sha256';
console.log(`sha256("${input}")-->`,crypto.createHash(algo).update(input).digest('hex'));
  }
function sha512(){
const input = readLineSync.question('Enter your string: ');
const algo = 'sha512';
console.log(`sha512("${input}")-->`,crypto.createHash(algo).update(input).digest('hex'));
  }



function toHumanDate(){
const input = readLineSync.question('Enter your Epoch: ');
let myDate = new Date(input * 1000);
console.log(`toHumanDate(${input})--> {year: ${myDate.getFullYear()}, month: ${myDate.getMonth()}, date: ${myDate.getDate()}, hours: ${myDate.getHours()}, minutes: ${myDate.getMinutes()}, seconds: ${myDate.getSeconds()}}`);
  }

function toEpoch(){
const year = readLineSync.question('Enter year: ');
const month = readLineSync.question('Enter month: ');
const date = readLineSync.question('Enter date: ');
const hours = readLineSync.question('Enter hours: ');
const minutes = readLineSync.question('Enter minutes: ');
const seconds = readLineSync.question('Enter seconds: ');
let myDate = new Date(year, month, date, hours, minutes, seconds);
console.log(`toEpoch(${year}, ${month}, ${date}, ${hours}, ${minutes}, ${seconds},)--> ${myDate.getTime()/1000}`);
  }

function rgbToHex() {
const redValue = parseInt(readLineSync.question('Enter Red value: '));
const greenValue = parseInt(readLineSync.question('Enter Green value: '));
const blueValue = parseInt(readLineSync.question('Enter Blue value: '));
console.log(`RGB to Hex --> #${redValue.toString(16)}${greenValue.toString(16)}${blueValue.toString(16)}`);
  }

function hexToRgb() {
const input = readLineSync.question('Enter 6-Digit alpha numeric Hex Value(excluding "#"): ');
if (input.lenght != 6) {
  console.log("Invalid Value try again")
  }
else {
const redValue = `${input[0]}${input[1]}`;
const redHex = parseInt(redValue,16);
const blueValue = `${input[2]}${input[4]}`;
const blueHex = parseInt(blueValue,16);
const greenValue = `${input[5]}${input[6]}`;
const greenHex = parseInt(greenValue,16);
console.log(`Red: ${redHex.toString(10)}, Blue: ${blueHex.toString(10)}, Green: ${greenHex.toString(10)}`);
}
  }
function celsiusToKelvin(){
const input = parseInt(readLineSync.question('Enter Value: '));
console.log(`${input} Celsius = ${input + 273.15} Kelvin`);
  }

function celsiusToFahrenheit(){
const input = parseInt(readLineSync.question('Enter Value: '));
console.log(`${input} Celsius = ${(input * 1.8) + 32} Fahrenheit`);
  }
function kelvinToCelsius(){
const input = parseInt(readLineSync.question('Enter Value: '));
const kelvinValue = input - 273.15;
console.log(`${input} Kelvin = ${kelvinValue.toFixed(2)} Celsius`);
  }
function kelvinToFahrenheit(){
const input = parseInt(readLineSync.question('Enter Value: '));
console.log(`${input} Kelvin = ${((input*1.8)-459.67).toFixed(2)} Fahrenheit`);
  }
function fahrenheitToCelsius(){
const input = parseInt(readLineSync.question('Enter Value: '));
console.log(`${input} Fahrenheit = ${((input - 32)*5/9).toFixed(2)} Celsius`);
  }
function fahrenheitToKelvin(){
const input = parseInt(readLineSync.question('Enter Value: '));
console.log(`${input} Fahrenheit = ${(((input - 32)*5/9)+273.15).toFixed(2)} Kelvin`);
  }

const crypto = require('crypto');
const readLineSync = require('readline-sync');
const selectedUtility = parseInt(readLineSync.question('Welcome to URL Encoder/Decoder.\n1. urlEncode\n2. urlDecode\n3. Binary to Decimal\n4. Binary to Hex\n5. Binary to Octal\n6. Decimal to Binary\n7. Decimal to Hex\n8. Decimal to Octal \n9. Hex to Binary\n10. Hex to Decimal\n11. Hex to Octal\n12. Octal to Binary\n13. Octal to Decimal\n14. Octal to Hex\n15. md5\n16. sha-1\n17. sha-256\n18. sha-512\n19. Convert to HumanDate\n20. Convert to Epoch\n21. RGB to Hex\n22. Hex to RGB\n23. Celsius -> Kelvin\n24. Celsius -> Fahrenheit\n25. Kelvin -> Celsius\n26. Kelvin -> Fahrenheit\n27. Fahrenheit -> Celsius\n28. Fahrenheit -> Kelvin\n0. Exit\nSelect your utility to use: '));

function main(selectedUtility){
switch (selectedUtility){
  case 1: encodeUrl();
  break;
  case 2: decodeUrl();
  break;
  case 3: binaryToDecimal();
  break;
  case 4: binaryToHex();
  break;
  case 5: binaryToOctal();
  break;
  case 6: decimalToBinary();
  break;
  case 7: decimalToHex();
  break;
  case 8: decimalToOctal();
  break;
  case 9: hexToBinary();
  break;
  case 10: hexToDecimal();
  break;
  case 11: hexToOctal();
  break;
  case 12: octaltoBinary();
  break;
  case 13: octaltoDecimal();
  break;
  case 14: octaltoHex();
  break;
  case 15: md5();
  break;
  case 16: sha1();
  break;
  case 17: sha256();
  break;
  case 18: sha512();
  break;
  case 19: toHumanDate();
  break;
  case 20: toEpoch();
  break;
  case 21: rgbToHex();
  break;
  case 22: hexToRgb();
  break;
  case 23: celsiusToKelvin();
  break;
  case 24: celsiusToFahrenheit();
  break;
  case 25: kelvinToCelsius();
  break;
  case 26: kelvinToFahrenheit();
  break;
  case 27: fahrenheitToCelsius();
  break;
  case 28: fahrenheitToKelvin();
  break;
  case 0: break;
  default: const selectedUtility = parseInt(readLineSync.question("Invalid option try again: "));
  main(selectedUtility);
  break;
  }
}
main(selectedUtility);
