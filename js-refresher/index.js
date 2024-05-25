import hello from "./assets/scripts/utils.js";  // "hello is just a name I give to the default exported value"
import { byeBye as Bye } from "./assets/scripts/utils.js"; 
import testEquality from './assets/scripts/varPractice.js';
import testFunctions from './assets/scripts/functionsPractice.js';
import { noReturnObjectFunction } from "./assets/scripts/functionsPractice.js";


var testFunction = testFunctions();

testFunction();
testFunctions()(); // lol
console.log(noReturnObjectFunction());