// Array of tasks
const tasks = [
    { name: "Study", priority: 3 },
    { name: "Shop", priority: 1 },
    { name: "Call", priority: 2 },
  ];
  
  // Closure to track prioritizeTasks calls
  const taskCounter = (() => {
    let count = 0;
    return () => {
      count++;
      return count;
    };
  })();
  
  // Arrow function to prioritize tasks
  const prioritizeTasks = (taskList, minPriority = 1) => {
    // Filter tasks based on minimum priority
    const filteredTasks = taskList.filter((task) => task.priority >= minPriority);
  
    // Sort tasks by priority (highest first)
    const sortedTasks = filteredTasks.sort((a, b) => b.priority - a.priority);
  
    return sortedTasks;
  };
  
  // Test with different minimum priorities
  let callCount = taskCounter();
  const prioritizedTasks1 = prioritizeTasks(tasks, 2);
  console.log(`Call ${callCount}:`);
  console.log(prioritizedTasks1);
  
  callCount = taskCounter();
  const prioritizedTasks2 = prioritizeTasks(tasks); // Using default minimum priority
  console.log(`\nCall ${callCount}:`);
  console.log(prioritizedTasks2);
  
  callCount = taskCounter();
  const prioritizedTasks3 = prioritizeTasks(tasks, 4);
  console.log(`\nCall ${callCount}:`);
  console.log(prioritizedTasks3);