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

document.getElementById("myday-button").click();
function openTab(event,tabName) {
    var i, tabcontents, tablinks;
    tabcontents = document.getElementsByClassName("tabcontents");
    tablinks = document.getElementsByClassName("tablinks")

    // get all tabcontents and hide them
    for(i=0; i< tabcontents.length;i++) {
        tabcontents[i].style.display="none";
    }

    // remove active in tablinks
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

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

