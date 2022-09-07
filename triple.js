/* Double equal and Triple equal */

/// Double equal (==) check: only value
//// use type coerction: Type coercion is the automatic or implicit conversion of values from one data type to another
// For same type: check value
// For different type:  type casting + type conversion + check value
const first1 = 2;
const second1 = "2";
if(first1 == second1){
    console.log('values are equal')
}
else{
    console.log('values are not equal');
}

/// Triple equal (===) check: value + type
const first2 = 2;
const second2 = 2;
if(first2 == second2){
    console.log('values are equal')
}
else{
    console.log('values are not equal');
}

/// equal comparison doesnt work for non-primitive
const first3 = [45, 54, 98];
const second3 = [45, 54, 98];
if(first3 === second3){
    console.log('values are equal')
}
else{
    console.log('values are not equal');
}

