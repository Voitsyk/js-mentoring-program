/** TODO
 * implement factorial algorithm using for, while, do..while operators
 * assign the result to corresponding variable
 * for -> forFactorial
 * while -> whileFactorial
 * do..while -> doFactorial
 */
let forFactorial, whileFactorial, doFactorial;
const n = 10; //10! = 3628800
let i = 0

forFactorial = 1;
for(i = 1; i <= n; i++) {
  forFactorial *= i
};

whileFactorial = 1;
i = 1;
while (i <= n) {
  whileFactorial *= i
  i++
};

doFactorial = 1;
i = 1;
do {
  doFactorial *= i
  i++
} while (i <= n);

/** TODO
 * return the concatenated string from an array of substring
 * assign the result to variable 'str'
 */
let str;
const substr = ["I", " love", " JS"];

// for (let i = 0; i < substr.length; i++) {
//   str = substr.join('')
// }

for (let key in substr) {
  str = substr.join('')
}

/** TODO
 * calculate a total of income of certain person
 * assign the result to the variable 'totalIncome'
 */
let totalIncome;
const personIncomes = {
  salary: 1985,
  rent: -600,
  interestOnDeposit: 250,
  otherExpences: -300
};

totalIncome = 0;

for (let key in personIncomes) {
  totalIncome += personIncomes[key]
}


module.exports = {
  forFactorial,
  whileFactorial,
  doFactorial,
  str,
  totalIncome
};
