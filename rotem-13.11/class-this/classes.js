// 1. Primitive
const primitives = [Boolean, String, Number, undefined, null, Symbol, BigInt];


// 2. Object

// literal object

const literalObject = {name : "Rotem"}

// other objects

const myObj = new Object(null);

// Built-in Classes (Class = Type)

const builtInClasses = [Array, Function, Date, HTMLElement, Promise, Proxy, RegExp];

// prototype methods

// instance:

let array = new Array(5);

// "array" is an INSTANCE of Array class;

// an INSTANCE INHERITS the prototype from the class.
// all properties and methods are inherited from the class prototype to the instance;

// example: Array class prototype methods (instance method)
[].filter;
[].map;
[].split;
[].push;
[].pop;
[].forEach;
// example: Array class prototype properties (instance method)
[].length

// example: Array class STATIC methods

Array.isArray()




