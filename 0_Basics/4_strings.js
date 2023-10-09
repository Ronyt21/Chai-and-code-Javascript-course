let name = new String('ronit');
let copy_name = name;
copy_name = 'raj';
console.log(name);
console.log(copy_name); 
const repoCount = 3;

// console.log(name + repoCount ); // Outdated Method - quite a naive to use this
// console.log(`My name is ${name} and my repo count is ${repoCount}`);
// method to prnt strings with backticks are more readable and efficient

//******************************************************************************************************************************
//                                                     String Methods
//******************************************************************************************************************************


//1. anchor: function anchor()
//console.log(name.anchor()); //<a name="undefined">ronit</a>
// Note : this method is no longer compatible with most of the browser and developers use DOM Api's method like createELement 
// instead of this anchor function.

//2. at: function at()
// console.log(`The character at index : ${repoCount} in string ${name} is = ${name[3]}`);
// at() function is equivalent to [] bracket notation. it seems it is outdated / useless function

//3. big: function big()
//console.log(name.big()); //<big>ronit</big>

//4.blink: function blink()
// console.log(name.blink());//<blink>ronit</blink>
// console.log(name);//<blink>ronit</blink>