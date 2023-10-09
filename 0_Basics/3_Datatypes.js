// **************************************************** Datatypes **********************************************************
// Data types are dividied into two official types on the basis of how memory keep them and how we access them
// 1. Primitive 
    //   String , Boolean , Number , null , undefined , symbol ( use to make any value unique ), BigInt
      
 
// 2. Non-Primitive (Reference type)
// Array , Objects , Functions 

// **If you want to master javascript then work on objects and browser methods

// const id = Symbol('123');
// const anotherID = Symbol('123');

// console.log(anotherID===id);
// console.log(typeof(id));

// ******************************************************** Practice ****************************************************************

 // String 
//  const str = 'hello world';
//  console.log(typeof(str)); // string 


//  // Boolean 
//  const OnorOff = true;
//  console.log(typeof(OnorOff)); // boolean


//  // Number
//  const number = 23;
//  console.log(typeof(number)); //number 


//  // null 
//  const ACtemp = null;
//  console.log(typeof(ACtemp)); // object


//  // undefined
//  const userEmail = undefined;
//  console.log(typeof(userEmail)); // undefined


//  // symbol 
//  const userID = Symbol('234');
//  console.log(typeof(userID)); // symbol


//  // BigInt
//  const bigNumber = 223333355556666666677777777777;
//  console.log(typeof(bigNumber)); // number 


//  // Array
//  const arr = ['ronit', 'raj', 'orange', 'apple'];
//  console.log(typeof(arr)); //object


//  // Objects 
//  const superheroes = {
//      name:'iron man',
//      strength:'iron suit'}
//  console.log(typeof(superheroes)); //object
    

//  // Functions 
//  const fun = ()=>{
//      console.log('i am a function');};
//  console.log(typeof(fun)); //function

// *******************************************************************************************************************************
//                                   Stack and Heap
// ********************************************************************** ****************************************************************

//stack = primitive data types = create a copy of varible 
//heaps = Non - primitive types = gives refence of the variable

// Example of Stack memory
// let userName = 'ronit21';
// let copiedUserName = userName;
// console.log(userName);
// console.log(copiedUserName);

// copiedUserName = 'raj31';
// console.log(userName);
// console.log(copiedUserName);


//Example of Heap Memory
let user ={
    name : 'ronit',
    email: 'ronit@google.com'
};
let copiedUser = user;
console.log(user);
console.log(copiedUser);

copiedUser.email = 'raj31@google.com';
console.log(user);
console.log(copiedUser);

//summary : 
// **in stack memory it provides us a copy of that variable and in heap memory it provides a reference of that variable  
// ** thats why when we changed the value of copiedUser in second example it changed the original value as well.

