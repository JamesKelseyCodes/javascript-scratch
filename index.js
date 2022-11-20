//this capitalizes a word that the user inputs

let a = prompt("enter a word");

let first = a.charAt(0);

let remain = a.slice(1);

let multiplyFunction = (a) => first.toUpperCase() + remain.toLowerCase()

alert(multiplyFunction(a));