var todos = ['item', 'item1', 'item2']
//This creates a variable that holds a list ([] array)
console.log('my todos are: ', todos);
//this prints in the console the todos
var todo = prompt("Todo: ");
//gets user input for a todo
todos.push(todo);
//pushes(adds) the todo to the array(list)
var changeTodo = prompt('Enter item number to change: ');
//gets number of element in array from user
var el = prompt('Enter new todo: ');
//gets new todo from user
todos[changeTodo] = el;
//changes todo from el variable
console.log(todos);