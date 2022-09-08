/* Block Scope */

///function block scope start
function add(a, b){
    const total = a+b;
    ///if block scope start
    if(b>5){
        const sum = 25 + a +b;
    }
    ///if block scope end
    ///else block scope end
    else{
        const sum = 5 + a + b;
        var current = sum;
    }
    ///else block scope end
    console.log(current);
    return total;
}
///function block scope end


// console.log(a,b);
// console.log(total);

add(5, 3);
