let todoList = [];
displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateTimeElement = document.querySelector('#todo-date');

  let todoItem = inputElement.value;
  let dateTimeValue = dateTimeElement.value;

  // Split the datetime-local value into date and time
  let [dateValue, timeValue] = dateTimeValue.split('T');
  
  todoList.push({item: todoItem, dueDate: dateValue, dueTime: timeValue}); // Push an object with item, dueDate, and dueTime properties
  inputElement.value = '';
  dateTimeElement.value = '';

  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';
  for(let i = 0; i < todoList.length; i++){
    newHtml += `
      <span>${todoList[i].item}</span>
      <span>${todoList[i].dueDate} ${todoList[i].dueTime}</span>
      <!-- Access item, dueDate, and dueTime properties -->
      <button class="btn-delete" onclick="deleteItem(${i});">Delete</button> <!-- Call deleteItem function with index i -->
    `;
  }
  containerElement.innerHTML = newHtml;
}

function deleteItem(index) {
  todoList.splice(index, 1); // Remove the item at the specified index
  displayItems(); // Update the displayed items
}

