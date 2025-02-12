
const TODOS_KEY = "todos";
let todo_list = [];
const todoForm = document.querySelector('.todo_list');
const inputTodo = document.querySelector('.todo_list > input');
const ulTodo = document.querySelector('.todo_list > ul'); 
const storageSave = () => {
  const strObj = JSON.stringify(todo_list);
  localStorage.setItem(TODOS_KEY, strObj);
};
const storageLoad = () => {
  return localStorage.getItem(TODOS_KEY);
};
const saveTodoList = (num, txt) => {
  const obj = { id: num, value: txt };
  todo_list.push(obj);
  storageSave();
};
const handlerDelBtn = (id) => {
  todo_list = todo_list.filter((item) => item.id !== id);
  storageSave();
};
const addTodoList = (id, value) => {
  const checkBox = document.createElement("input");
  checkBox.setAttribute('type', 'checkbox');
  const li = document.createElement("li");
  li.id = id;
  const span = document.createElement("span");
  span.textContent = value;
  checkBox.addEventListener("change", (event) => {
    if (checkBox.checked) {
      span.style.textDecoration = "line-through";
      setTimeout(() => {
        handlerDelBtn(id); 
        li.remove(); 
      }, 1000); 
    } else {
      span.style.textDecoration = "none";
    }
  });
  li.appendChild(checkBox);
  li.appendChild(span);
  ulTodo.appendChild(li);
  saveTodoList(id, value);
};
const handlerTodoSubmit = (event) => {
  event.preventDefault();
  const value = inputTodo.value.trim();
  if (value) {
    inputTodo.value = null;
    addTodoList(Date.now(), value);
  }
};
const todo_init = () => {
  const loadTodos = storageLoad();
  if (loadTodos) {
    const obj = JSON.parse(loadTodos); 
    obj.forEach((item) => {
      addTodoList(item.id, item.value);
    });
  }
  todoForm.addEventListener("submit", handlerTodoSubmit);
};

todo_init();
