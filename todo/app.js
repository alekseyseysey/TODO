// классы 
import { topButtonAdd, topButtonDeleteAll, topButtonDeleteLast, toDoText, bottomButtonShowCompleted, bottomButtonShowAll, bottomButtonSearch, bottomButtonShowSearch } from "./in.js"; 

//добавление карточки
import { test, start, search } from "./topButtonAdd.js";

// удаление всего //удаление последнего
import { DeleteAll, DeleteLast } from "./topButtonDelete.js";

// удаление todo , чек todo
import { deleteTodo, done } from "./toDoText.js";

// show completed, show all
import {  showCompleted, showAll } from "./show.js";

// search
// import { search } from "./search.js";






// добавление
topButtonAdd.addEventListener("click", test);

// удаление всего
topButtonDeleteAll.addEventListener("click", DeleteAll);

//удаление последнего
topButtonDeleteLast.addEventListener("click", DeleteLast);

// удаление todo
toDoText.addEventListener("click", deleteTodo);

// чек todo
toDoText.addEventListener("click", done );

//загрузка страницы 
document.addEventListener("DOMContentLoaded", start);

// показывает готовые 
bottomButtonShowCompleted.addEventListener("click", showCompleted);

//показывает все
bottomButtonShowAll.addEventListener("click", showAll);

// search
bottomButtonShowSearch.addEventListener('click', search)