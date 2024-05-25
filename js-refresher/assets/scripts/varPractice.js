export default ()=>{
    let a = 10;
    let b = '10';
    let c = '1'
    let d = true;
    let booleanA = true;
    let booleanB = 'true';
    let booleanC = 1;
    let booleanD = false;
    let booleanE = 0;
    let nullValue = null;
    let undeFinedValue;
    let objectA = {
        someProperty:'10'
    }
    let objectB = {
        someProperty:'10'
    }
    let objectC = objectA;

    //abstract equality operator ==
    /*
        it tries to match the values and convert either of the compared them to the other data type.
        so i.e it compares the value and the data type but it tries to convert it first
    */
    console.log(a==b); //true
    console.log(c==d); //true
    console.log(booleanA == booleanB); //false
    console.log(booleanA == booleanC); //true
    console.log(booleanD == booleanE); //true
    console.log(nullValue ==  undeFinedValue); // true
    console.log(nullValue == undefined); // true
    //objects are compared by using it's reference, not its value
    console.log(objectA == objectB); //false
    console.log(objectA == objectA); //true
    console.log(objectC===objectA) // true;


    //strict equality operator ===
    /* 
        it doesn't tries to convert data types before the value comparison. So in order for the comparison be true, it needs to match the value and the data type.
    */

    console.log(objectA===objectA) // true;
    console.log(objectA===objectB) // false;
    console.log(objectC===objectA) // true;
    console.log(a===b); //false
    console.log(c===d); //false
    console.log(booleanA === booleanB); //false
    console.log(booleanA === booleanC); //false
    console.log(booleanD === booleanE); //false
    console.log(nullValue ===  undeFinedValue); // false
    console.log(nullValue === undefined); // false


    
    
}