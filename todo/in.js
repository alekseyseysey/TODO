const mainDiv = document.createElement("div");
mainDiv.classList.add("wrapper");

const body = document.body;

body.appendChild(mainDiv);

const topButton = document.createElement("div");
const bottomButton = document.createElement("div");
const toDoText = document.createElement("div");
mainDiv.appendChild(topButton);
mainDiv.appendChild(bottomButton);
mainDiv.appendChild(toDoText);

topButton.classList.add("topButton");
bottomButton.classList.add("bottomButton");
toDoText.classList.add("toDoText");

const topButtonDeleteAll = document.createElement("button");
const topButtonDeleteLast = document.createElement("button");
const topButtonEnterTodo = document.createElement("input");
const topButtonAdd = document.createElement("button");

topButtonDeleteAll.classList.add("topButtonDeleteAll");
topButtonDeleteLast.classList.add("topButtonDeleteLast");
topButtonEnterTodo.classList.add("topButtonEnterTodo");
topButtonAdd.classList.add("topButtonAdd");

topButtonEnterTodo.placeholder = "Enter todo...";

topButton.appendChild(topButtonDeleteAll);
topButton.appendChild(topButtonDeleteLast);
topButton.appendChild(topButtonEnterTodo);
topButton.appendChild(topButtonAdd);

topButtonDeleteAll.textContent = `Delete All`;
topButtonDeleteLast.textContent = `Delete Last`;
topButtonEnterTodo.textContent = `Enter todo`;
topButtonAdd.textContent = `Add`;

const bottomButtonAll = document.createElement("input");
const bottomButtonCompleted = document.createElement("input");
const bottomButtonShowAll = document.createElement("button");
const bottomButtonShowCompleted = document.createElement("button");
const bottomButtonSearch = document.createElement("input");
const bottomButtonShowSearch = document.createElement("button");

bottomButtonAll.classList.add("bottomButtonAll");
bottomButtonCompleted.classList.add("bottomButtonCompleted");
bottomButtonShowAll.classList.add("bottomButtonShowAll");
bottomButtonShowCompleted.classList.add("bottomButtonShowCompleted");
bottomButtonSearch.classList.add("bottomButtonSearch");
bottomButtonShowSearch.classList.add("bottomButtonShowSearch");

bottomButton.appendChild(bottomButtonAll);
bottomButton.appendChild(bottomButtonCompleted);
bottomButton.appendChild(bottomButtonShowAll);
bottomButton.appendChild(bottomButtonShowCompleted);
bottomButton.appendChild(bottomButtonSearch);
bottomButton.appendChild(bottomButtonShowSearch);

bottomButtonAll.placeholder = "All: ";
bottomButtonCompleted.placeholder = "Completed: ";
bottomButtonShowAll.textContent = "Show All";
bottomButtonShowCompleted.textContent = "Show Completed";
bottomButtonSearch.placeholder = "Search...";
bottomButtonShowSearch.textContent = "Search";

const todoListFirst = document.createElement("div");
const todoListSecond = document.createElement("div");

todoListFirst.classList.add("todoListFirst");
todoListSecond.classList.add("todoListSecond");

//toDoText.appendChild(todoListFirst);
// toDoText.appendChild(todoListSecond);

const todoListFirstDone = document.createElement("button");
const todoListFirstText = document.createElement("div");
const todoListFirstDate = document.createElement("div");

todoListFirstDone.classList.add("todoListFirstDone");
todoListFirstText.classList.add("todoListFirstText");
todoListFirstDate.classList.add("todoListFirstDate");

const todoListFirstDateExit = document.createElement("button");
const todoListFirstDateD = document.createElement("div");

todoListFirstDateExit.classList.add("todoListFirstDateExit");
todoListFirstDateD.classList.add("todoListFirstDateD");

todoListFirstDone.textContent = "V";
todoListFirstText.placeholder = "Todo text";
todoListFirstDateD.placeholder = "Date";
todoListFirstDateExit.textContent = "X";


const wrar = document.createElement("div");
wrar.classList.add("wrarr");

export { topButtonAdd, topButtonDeleteAll, topButtonDeleteLast,
toDoText, topButtonEnterTodo, bottomButtonAll,bottomButtonCompleted, wrar, todoListFirst, todoListFirstDone, bottomButtonShowCompleted, bottomButtonShowAll, bottomButtonSearch, bottomButtonShowSearch  };
