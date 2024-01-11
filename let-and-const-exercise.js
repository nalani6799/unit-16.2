// Es5 global constants
// var PI = 3.14 ;
// PI = 42; 

// ES2015 Global Constants
const PI = 3.14;
PI = 42; // Uncaught TypeError: Assignment to const variable.

// Quiz :
// 1. What is the difference between var and let? The let keyword would only allow you to reassign the variable but not redeclare the variable. The Var keyword would allow you to do both. Var is function scoped and let is Block-scoped.

//2. what is the difference between var and const? the Var keyword would allow you to both reassign and redeclare the variable whereas const does not allow either. The Var keyword is function scoped and the const keyword is block-scoped.

//3. what is the difference between let and const? the Let keyword allows you the reassign the variable but you can not redeclare the variable, const does not allow either. 

//4. what is hoisting? hoisting is when you still have access to a variable that has not yet been defined, almost as though it were hoisted to the top of the page.