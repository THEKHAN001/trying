let age = 25;
const name ="cyril";
console.log(age,name);
age=26;



//datatypes 
let isStudent = true;//boolean
let height = 5.9;//number
let empty = null; //null
let notDefined;//undefined


//complex datatype
let person = {name:"Bob",age:30, mixed:[1,2,"hello"],bool:true};//object
console.log(person.name);
console.log(person.age);
console.log(person.mixed[2]);

let fruits = ["banana","cherry","apple",true,12,{name:"Bob",age:30}]; //array
console.log(fruits[0]);
console.log(fruits[1]);

//operators
//Arithmetic operators

let a = 10,b=5;
console.log(10-5);
console.log(b);
console.log(10*5);
console.log(10/5);
console.log(10%5);
console.log(a);

//Exponential
console.log(10**5);

//comparison operator
console.log(a==b);//equal
console.log(a!=b);//Not equal
console.log(a>b);//Greater than
console.log(a<b);//less than
console.log(a>=b);//Greater or equal to
console.log(a<=b);//less than or equal to
 b="10"
 console.log(a==b);//true(loose equality)
 console.log(a===b);//false(strict equality)
 console.log(a!=b);//false(loose inequality)
 console.log(a!==b);//true(strict inequality)


 //Logical Operators
 //AND
 console.log(true&&false);//AND
 console.log(true&&true);//AND
 console.log(false&&false);//AND
 console.log(false&&true);//AND

 console.log(true || false); //OR
console.log(true || true);  //OR
console.log(false || false);//OR
console.log(false || true); //OR

//NOT
console.log(!true);  //NOT
console.log(!false); //NOT

//Assignment
let= 'a';
a = 5; //Assignment
console.log(a);