import{get} from "./localStorage.js"
import{todo_arr, wrar, enter, testTodo2} from "./topButtonAdd.js"
import {toDoText} from "./in.js"




function showCompleted() {
  const completedItems = todo_arr.filter((item) => item.chek === "chek");
  wrar.innerHTML = "";
  completedItems.forEach((item) => {
    wrar.append(enter(item));
  });
  toDoText.append(wrar);
}


function showAll(){
  wrar.innerHTML = "";
    if (get("test")) {
        todo_arr.forEach(function (elem) {
          wrar.append(enter(elem));
          toDoText.append(wrar);
        });
      }
}

export {showCompleted, showAll}