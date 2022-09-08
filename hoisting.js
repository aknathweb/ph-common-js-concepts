/* About Hoisting */

/// Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution
/// Hoisting work: function declaration and var variable
/// Hoisting not work: function expression


print5();
console.log(print10);
print10();
for(var i = 0; i< 5; i++){
    console.log(i);
}
console.log('outside', i);

////function declaration
function print5(){
    console.log('inside print5', 5);
}

////function expression
var print10 = function(){
    console.log('inside print10', 10);
}
