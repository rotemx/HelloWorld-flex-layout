const arr = [];

// reassignment - not allowed
arr = {} //error !

// mutations (methods and assignments ) - allowed
arr.push(2);
arr.splice('1', 2);
arr[2] = "new value";

const obj = {};

// reassignment - not allowed
obj = {} // error !

// mutations
obj.name = "John"
