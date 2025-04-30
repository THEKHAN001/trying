//Function Declaration
function add(){
    let a = 5;
    let b = 10;
    return a +b;

}
console.log(add());

function paramAdd(num1,num2){
    let a=num1;
    let b =num2;
    return a+b;
}
console.log(paramAdd(20,30));

const sub = function(num1,num2){
    let a =num1;
    let b =num2;
    return a-b;
}
console.log(sub(20,30));

function greeting(name){
    console.log(`hello ${name}`);
}
greeting('john');


//Arrow function
const addArrow = (num1,num2)=>{
    let a =num1;
    let b=num2;
    return a+b;
}
console.log(addArrow(20,30));

let myEven =[];

//push
function evenNumbers(limit){
    for(let i=0;i<=limit;i++){
        if(i%2===0){
            myEven.push(i)
        }
    }
    return myEven;
}
console.log(evenNumbers(10));

// let myOdd =[];
// //push
// function OddNumber(limit){
//     for(let )
// }


let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let resultOdd= numbers.filter((num)=>{
      return num% 2!==0;
}
)
console.log(resultOdd)


//closure
function outerFunction(){
    let outerVariable = "I AM OUTSIDE!";

    function innerFunction(){
        console.log(outerVariable)
    }
}


