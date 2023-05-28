import { bottomButtonCompleted ,bottomButtonAll, toDoText, wrar} from "./in.js"
import { localStorage_set } from "./localStorage.js";
import { todo_arr } from "./topButtonAdd.js";

// удаление всего
function DeleteAll() {
  bottomButtonAll.value = 0;
  bottomButtonCompleted.value = 0;
  toDoText.innerHTML = "";
  todo_arr.forEach(function (elem) {
    if(!toDoText.classList.contains("wrarr")){
      todo_arr.splice(0, todo_arr.length)
      localStorage_set("test", todo_arr)
      location.reload();
    }
    })

}


// удаление последнего
function DeleteLast() {
   wrar.lastChild.remove()
   todo_arr.forEach(function (elem) {
    if(String(elem.id) === String(wrar.lastChild.id)){
      todo_arr.pop();
    }
    
     })
     
     localStorage_set("test", todo_arr)
     
}

export { DeleteAll, DeleteLast };
