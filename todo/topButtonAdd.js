import {
  topButtonEnterTodo,
  bottomButtonAll,
  toDoText,
  wrar,
  bottomButtonShowSearch,
  bottomButtonSearch
} from "./in.js";
import { get, localStorage_set } from "./localStorage.js";

// функция создания todo
function enter(test_todo) {
  const wrar_test = document.createElement("div");
  wrar_test.id = test_todo.id;
  test_todo.data = new Date();
  test_todo.todosText = `<div class = 'todoListFirst ' id'${test_todo.id}'>
          <button class = "todoListFirstDone"></button>
          <div class = 'todoListFirstText'>${test_todo.todos}</div>
          <div class = "todoListFirstDate">
          <button class = 'todoListFirstDateExit'>X</button>
          <div class = 'todoListFirstDateD'>${test_todo.data.toLocaleDateString()}</div>
          </div>
          </div>
          `;

  wrar_test.innerHTML = test_todo.todosText;
  if (test_todo.chek === "chek") {
    wrar_test.childNodes[0].classList.add("done1");
  }
  return wrar_test;
}


function test() {
  if (topButtonEnterTodo.value) {
    ++bottomButtonAll.value;
    let test_l = new testTodo(topButtonEnterTodo.value);
    todo_arr.push(test_l);
    wrar.append(enter(test_l));
    toDoText.append(wrar);
    localStorage_set("test", todo_arr);
    topButtonEnterTodo.value = "";
  }
  console.log(bottomButtonSearch.value)
};


// запуск страницы
function start() {
  if (get("test")) {
    todo_arr.push(...get("test"));
    todo_arr.forEach(function (elem) {
      wrar.append(enter(elem));
      toDoText.append(wrar);
    });
  }

}


// массив с информацией
const todo_arr = [];

function testTodo2(value) {
  (this.todos = value),
    (this.data = new Date().toLocaleDateString()),
    (this.id = new Date()),
    (this.chek = "");
}



//запись в массив
function testTodo(value) {
  (this.todos = value),
    (this.data = new Date().toLocaleDateString()),
    (this.id = new Date()),
    (this.chek = "");
}

export { enter, test, start, todo_arr, testTodo, testTodo2, wrar };


// import { todo_arr, enter, wrar } from "./topButtonAdd"
// import {bottomButtonSearch, toDoText} from "./in.js"


function search (){
    if (bottomButtonSearch.value){
const searchItems = todo_arr.filter((elem) => elem.todos === bottomButtonSearch.value)
wrar.innerHTML = "";
searchItems.forEach((item) => {
    wrar.append(enter(item));
  });
  toDoText.append(wrar);
  bottomButtonSearch.value = ""
}
}

export {search}