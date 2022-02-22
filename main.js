const prompt = require('prompt-sync')({sigint: true});


prompt('Welcome to the To-Do List Manager Application!')
let userInput = Number(prompt('Press 1 to add item to list, 2 to complete'))
let currentToDo = []




// while (condition) {
//     // code block to be executed
//   }
   
//   let i = 0;
   
//   while (i < 5) {        
//     console.log(i);
//     i++;

//     break;
//   }


while (toDoList !==0) { 
    console.log('Current list' + currentToDo)
   
  if (addItem === 1) {
    console.log("add item");
    console.log(currentToDo);
  }

  else if (userInput === 2) {
    console.log('Complete item' );
  } else {
    console.log('Erroe' );}
}