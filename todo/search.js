import { todo_arr, enter, wrar } from "./topButtonAdd";
import { bottomButtonSearch, toDoText } from "./in.js";

function search() {
  if (bottomButtonSearch.value) {
    const searchItems = todo_arr.filter(
      (elem) => elem.todos === bottomButtonSearch.value
    );
    wrar.innerHTML = "";
    searchItems.forEach((item) => {
      wrar.append(enter(item));
    });
    toDoText.append(wrar);
    bottomButtonSearch.value = "";
  }
}

export { search, bottomButtonSearch };
