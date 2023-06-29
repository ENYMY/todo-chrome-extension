const todos = [
  {
    id: Math.random().toString(),
    description: "Example",
  },
];


document.getElementById("task-button").click();


function openTab(event, tabName) {
  var i, tabcontents, tablinks;
  tabcontents = document.getElementsByClassName("tabcontents");
  tablinks = document.getElementsByClassName("tablinks");

  // get all tabcontents and hide them
  for (i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  // remove active in tablinks
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

function generateTodoHTML(todo) {
  return `
      <li>
        <div class="box">
          <div class="displays">
            <div><p class="description">${todo.description}</p></div>
          </div>
          <div class="buttons">
            <button class="edit-button" data-todo-id="${todo.id}">Edit</button>
            <button class="delete-button" data-todo-id="${todo.id}">Delete</button>
          </div>
        </div>
      </li>`;
}
function renderTodoList() {
  var todos_li = document.getElementById("todos");
  todos_li.innerHTML = todos.map(generateTodoHTML).join("");
}

function handleEditButtonClick(event) {
  var todoId = event.target.dataset.todoId;
  var todo = todos.find(function (item) {
    return item.id === todoId;
  });

  var newDescription = prompt("Enter a new description", todo.description);
  if (newDescription !== null) {
    todo.description = newDescription;
    renderTodoList();
  }
}

function handleDeleteButtonClick(event) {
  var todoId = event.target.dataset.todoId;
  var todo = todos.find(function (item) {
    return item.id === todoId;
  });

  var confirmDelete = confirm("Are you sure you want to delete this todo?");
  if (confirmDelete) {
    var index = todos.findIndex(function (item) {
      return item.id === todoId;
    });
    if (index !== -1) {
      todos.splice(index, 1);
      renderTodoList();
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var todoListDiv = document.getElementById("todos");
  todoListDiv.addEventListener("click", function (event) {
    if (event.target.matches(".edit-button")) {
      handleEditButtonClick(event);
    } else if (event.target.matches(".delete-button")) {
      handleDeleteButtonClick(event);
    }
  });

  renderTodoList();
});

function addTodo() {
  var description = document.getElementById("todoDescription").value;
  if (description !== null && description.trim() !== "") {
    var newTodo = {
      id: Math.random().toString(),
      description: description,
    };
    todos.push(newTodo);
    renderTodoList();
    document.getElementById("todoDescription").value = "";
  }
}

var currentDate = new Date();
var dateString = currentDate.toDateString();
document.getElementById("current-date").innerHTML = dateString;
