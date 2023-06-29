const todos = [
  {
    isStared: false,
    isDone: false,
    description: "Meeting 1",
  },
  {
    isStared: false,
    isDone: false,
    description: "Meeting 2",
  },
  {
    isStared: false,
    isDone: false,
    description: "Meeting 3",
  },
];

const todos_li = document.getElementById("todos");

todos_li.innerHTML = todos
  .map(
    (todo) => `
    <li>
      <div class="box">
        <div class="displays">
        <div><input type="checkbox" class="checkbox"></div>
        <div>  <p class="description">${todo.description}</p></div>
        </div>
        <div class="buttons">
          <button>Edit</button>
          <button>Done</button>
        </div>
      </div>
    </li>`
  )
  .join("");

var currentDate = new Date();
var dateString = currentDate.toDateString();
document.getElementById("current-date").innerHTML = dateString;