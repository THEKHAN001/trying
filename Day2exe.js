let score = 88;
if(score>=90){
    console.log("Grade:A");
}
else if (score>=80){
   console.log("Score:${score} earns Grade: B");
}
else if(score>=70){
    console.log("Grade:C");
}
else{
    console.log("Grade:F");
}


let num =[10,15,20,25,30];
  for (i=0;i<number.length;i++){
    if(numbers[i]%5===0) {
        console.log(number[i]);
    }
  }

 num=[10,15,20,25,30];
 for(let num of numbers){
    if(num%5===0){
        console.log(num);
    }
 }

 let numbers = [10, 15, 20, 25, 30];

numbers.forEach(function(num) {
  if (num % 5 === 0) {
    console.log(num);
  }
});



for (let i =10; i >=1; i-- ) {

    console.log(i);
    
    }


    let count = 10;

    
    while (count > 0) {
      console.log(count);
      
      if (count === 5) {
        console.log("Stopped early!");
        break;
      }
      
      count--;
    }


    
for (let i = 10; i > 0; i--) {
    console.log(i);
    
    if (i === 5) {
      console.log("Stopped early!");
      break;
    }
  }