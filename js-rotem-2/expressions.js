//expression - has a value

// EVERY value in JS has a DATA TYPE

// DATA TYPES CAN BE EITHER:
// 1. Primitive
// 2. Object (or something that inherits from Object, like array, function, date, RegExp, etc...)

// primitive data type expression example

// Number expressions
8
17 + 1
101
.5
-789
NaN
0
Infinity
-Infinity

100 * 3
200 / 4
2**8
10 - 9
Math.sqrt(2,8)


// String
"Hello" //double-quote
"Rotem"
""
"7"
"9" + "orange"
'strawberry' //single-quote
`Hello` //back-tick = Template strings
let greeting = "Hello"  // this is a statement
`${greeting} World`     //"greeting" is an expression of the String datatype (primitive)
(typeof 5) // 'number' = string expression

// Boolean
true
false;
(x == 1)
(y >= 8)

// EVERY expression (value) in JS has a truthy/falsy value
Boolean(7) // true
if (7) {}  // Boolean(7) => !!7

// EVERY JS expression is true, except for:
// falsy values:
false
0
null;
undefined
NaN
''


