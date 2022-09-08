/* arguments = function all parameters value */

////arguments are array like object
function sum(a, b, c){

    //// show function all parameters value = arguments
    console.log(arguments);
    //// arguments to args array convert
    const args = [...arguments];
    console.log(args);
    
    const result = a + b + c;
    return result;
}
//// arguments not work out of fuction
console.log(arguments);

const total = sum(45, 89, 12, 45, 98, 56);
console.log(total);

//// show the function arguments length
console.log(sum.length);
