/* strongly typed Language  Such as: C,C++,java */
  // int a = 5;
  // string b = 'alim halim khalim';
  // bool c = True;
  // object student = { name: 'noya dhman', id: 55}
  // int[] numbers = [12, 45, 78]
  // string[] friends = ['abul', 'babul'];

/* JavaScript is a dynamic typed Language */
  // primitive type: 'string', 'number','boolean', 'undefined', 'null', 'bigint',  'symbol'
    /// string	      | Used for denoting strings
    /// number	      | Used for denoting integers or floating-point
    /// bigint	      | Used for denoting whole numbers larger than 253 - 1
    /// boolean	      | Used for denoting true or false
    /// undefined     | Used for denoting an unassigned value
    /// symbol	      | Used for denoting unique identifiers
    /// null	        | Used for denoting an intentional absence of a value
const a = 5;
const b = 'Samsu kopai na ekhon ar';
const d = true;


  // non-primitive type: object, array
    /// object    | Used for denoting complex data structure with a collection of properties and methods
    /// array     | storing more than one element under a single name
const ages = [45, 65, 48];
const student = {id: 23, class: 7};

// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

/* reassing value */
  /// primitive value refer the different memory location
  /// non-primitive value refer the same memory location
let x = 5;
let y = x; //// different memory location
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'}
let q = p; //// same memory location
q.job = 'front end developer';
console.log(p, q);
