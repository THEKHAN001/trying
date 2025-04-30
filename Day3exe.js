
function calculateAreaDeclaration(width, height = 1) {
    return width * height;
  }
  
  
  const calculateAreaArrow = (width, height = 1) => width * height;
  
  
  console.log(`Area (5, 3): ${calculateAreaDeclaration(5, 3)}`);   
  console.log(`Area (5): ${calculateAreaDeclaration(5)}`);         
  console.log(`Area (5, 3): ${calculateAreaArrow(5, 3)}`);         
  console.log(`Area (5): ${calculateAreaArrow(5)}`);  
  
  
  let message = "Global greeting";

const sayHello = (name = "User") => {
  let message = "Hello from function";
  return `${message}, ${name}!`;
};

console.log(message); 
console.log(sayHello("Alice"));
console.log(sayHello());
