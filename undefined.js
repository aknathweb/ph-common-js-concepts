/* 8 ways to get Undefine */
// 1. variable that is not initialized will give undefined
// 2. function with no return 
// 3. parameter that is not passed will be undefined
// 4. if return has nothing on the right side will return undefined
// 5. property that doesn't exists on an object will give you undefined
// 6. accessing array elements outside of the index range 
// 7. deleting an element inside an array
// 8. set a value directly to undefined

/// 1. variable that is not initialized will give undefined
let first ;

function second(a, b){
    const total = a + b;
}
/// 2.function with no return 
const result = second();

function third(a, b, c, d){
    const total = a+b+c+d;
    console.log(a, b, c, d);
}
///3.parameter that is not passed will be undefined
third(2, 5);


function noNegative(a, b){
    if(a < 0 || b< 0){
        return
    }
    return a + b;
}
///4.if return has nothing on the right side will return undefined
const total = noNegative(2,-5);
// console.log(total);

const fifth = {id: 2, name: 'ponchom', age: 40}
///5.property that doesn't exists on an object will give you undefined
console.log(fifth.age, fifth.salary);

const sixth = [4, 89, 87, 56, 54];
///6.accessing array elements outside of the index range 
console.log(sixth[1], sixth[5], sixth[200]);

////Denger: you should not do it, Solve: Instead use splice
delete sixth[1];
///7.deleting an element inside an array
console.log(sixth[1], sixth[5], sixth[200]);
//console.log(sixth);

///8.set a value directly to undefined
const eighth = undefined;

/// we can set null instead of undefined
const ninth = null;

const data = {results: [], updated: null}

console.log(typeof undefined);////give output undifined
console.log(typeof null);////But give output object
