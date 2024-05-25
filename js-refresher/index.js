import hello from "./assets/scripts/utils.js";  // "hello is just a name I give to the default exported value"
import { byeBye as Bye } from "./assets/scripts/utils.js"; 
import testEquality from './assets/scripts/varPractice.js';
import testFunctions from './assets/scripts/functionsPractice.js';
import { noReturnObjectFunction } from "./assets/scripts/functionsPractice.js";
import testObject from "./assets/scripts/objectsPractice.js";


console.log(testObject.property1); // 1
console.log(testObject.someFunction());//2
console.log(testObject.property1);//2