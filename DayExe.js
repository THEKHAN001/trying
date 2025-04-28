let price =100;
const taxRate =0.1;
let quantity =3;

console.log(price*quantity*(1+taxRate));

quantity=5;

console.log(price*quantity*(1+taxRate));

let number =95;
console.log(number);
let message="Great job";
console.log(message);
let isPassing="true";
console.log(isPassing)
let Grade=["90","85","88",{name:"Emma",age:20}];
console.log(name,Grade[1]);
let student={name:"Emma",age:20};




let a = 10;
let b = 3;

console.log("a + b:", a + b);       
console.log("a % b:", a % b);       
console.log("a ** 2:", a ** 2);     


console.log("a > b:", a > b); 
console.log("a === b:", a === b);  

console.log("(a > 5) && (b < 5):", (a > 5) && (b < 5));

a += 5;
console.log("Updated a:", a);  

console.log('5 == "5":', 5 == "5"); 
console.log('5 === "5":', 5 === "5");


//CHALLENGING TASKS


const cart = [
    { name: "Shirt", price: 20, quantity: 2 },
    { name: "Book", price: 15, quantity: 3 },
    { name: "Laptop", price: 1000, quantity: 1 },
  ];
  
  
  let subtotal = 0;
  let totalQuantity = 0;
  
  for (const item of cart) {
    subtotal += item.price * item.quantity;
    totalQuantity += item.quantity;
  }
  

  let discountRate = 0;
  if (totalQuantity > 10) {
    discountRate = 0.2;
  } else if (totalQuantity > 5) {
    discountRate = 0.1;
  }
  
  
  const discountAmount = subtotal * discountRate;
  const finalTotal = subtotal - discountAmount;
  
  
  console.log("Subtotal: $" + subtotal.toFixed(2));
  console.log(`Discount (${discountRate * 100}%): $${discountAmount.toFixed(2)}`);
  console.log("Final Total: $" + finalTotal.toFixed(2));



  
const values = [42, "hello", true, null, { name: "Bob" }, [1, 2]];


const typeCounts = {
  number: 0,
  string: 0,
  boolean: 0,
  null: 0,
  object: 0,
  array: 0,
  undefined: 0,
};

// Loop and categorize
for (const value of values) {
  if (value === null) {
    typeCounts.null++;
  } else if (Array.isArray(value)) {
    typeCounts.array++;
  } else {
    const type = typeof value;
    if (type in typeCounts) {
      typeCounts[type]++;
    } else {
      typeCounts.object++; 
    }
  }
}


console.log(typeCounts);




let principal = 1000; 
let rate = 0.05;      
let years = 5; 


if (principal > 0 && rate > 0 && years > 0) {
  
  const finalAmount = principal * Math.pow(1 + rate, years);
  const interestEarned = finalAmount - principal;

  const results = {
    finalAmount: finalAmount.toFixed(2),
    interestEarned: interestEarned.toFixed(2)
  };

  console.log(results);
} else {
  console.log("Please enter positive numbers for principal, rate, and years.");
}

