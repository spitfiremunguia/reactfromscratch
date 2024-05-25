//lol
export default ()=>()=>console.log("this functions is inside of another function that returned this function.");
export let noReturnObjectFunction =()=>({property:'10'}); // if I'm returning an object, I should use the () to wrap statement if I use the no return syntax.
