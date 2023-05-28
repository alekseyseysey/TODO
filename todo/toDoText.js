import { bottomButtonAll, bottomButtonCompleted} from "./in.js"
import { todo_arr} from "./topButtonAdd.js"
import { localStorage_set} from "./localStorage.js";


// удаление todo 
function deleteTodo({ target }) {
  if (target.classList.contains("todoListFirstDateExit")) {
     target.parentElement.parentElement.parentElement.remove();
  }
  todo_arr.forEach(function (el, index){
    if(String(el.id) === String(target.parentElement.parentElement.parentElement.id)){
      todo_arr.splice(index, 5);
    }
  })
  localStorage_set("test", todo_arr)
}

// чек todo
function done({ target }) {
  if (
    target.classList.contains("todoListFirstDone") &&
    !target.parentElement.classList.contains("done1")
  ) {
    target.parentElement.classList.add("done1");
    todo_arr.forEach(function (elem){
      if(String(elem.id) === String(target.parentElement.parentElement.id)){
         elem.chek = "chek"
        localStorage_set("test", todo_arr)
      }
    })
  } 
  else if(target.classList.contains("todoListFirstDone")) {
    target.parentElement.classList.remove("done1");
    todo_arr.forEach(function (elem){
      if(String(elem.id) === String(target.parentElement.parentElement.id)){
         elem.chek = "unchek"
         localStorage_set("test", todo_arr)
      }
    })
  
  } 
}

export { deleteTodo, done };

