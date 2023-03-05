const todoListEl = document.getElementById("todo-list");
const doneListEl = document.getElementById("done-list");
let todoItems = JSON.parse(localStorage.getItem("todoItems")) ?? [];
let doneItems = JSON.parse(localStorage.getItem("doneItems")) ?? [];
const todoAddBtn = document.getElementById("todo-add-btn");

const addTodo = () => {
  todoItems.push({
    id: new Date(),
    content: document.getElementById("todo-input").value,
  });
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
  document.getElementById("todo-input").value = "";
  renderTodoItems();
};

const addCompleteTodo = (id, content) => {
  doneItems.push({
    id,
    content,
  });
  localStorage.setItem("doneItems", JSON.stringify(doneItems));
  renderDoneItems();
};

const deleteTodo = (key) => {
  todoItems = todoItems.filter((item) => item.id !== key);
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
  renderTodoItems();
};

const deleteCompleteTodo = (key) => {
  doneItems = doneItems.filter((item) => item.id !== key);
  localStorage.setItem("doneItems", JSON.stringify(doneItems));
  renderDoneItems();
};

const addDeleteTodoEvent = (el, key) => {
  el.addEventListener("click", () => {
    deleteTodo(key);
  });
};

const addDeleteCompleteTodoEvent = (el, key) => {
  el.addEventListener("click", () => {
    deleteCompleteTodo(key);
  });
};

const addCompleteTodoEvent = (el, todo) => {
  const { id, content } = todo;
  el.addEventListener("click", () => {
    deleteTodo(id);
    addCompleteTodo(id, content);
  });
};

const renderTodoItems = () => {
  todoListEl.innerHTML = null;
  if (todoItems.length === 0) {
    document.getElementById("no-todo").classList.remove("hide");
    return;
  }

  document.getElementById("no-todo").classList.add("hide");
  todoItems.map((todo) => {
    const listEl = document.createElement("li");
    listEl.innerHTML = `<li class="flex-row" key="${todo.id}">
    <div>${todo.content}</div> <i id="complete-todo" class="fas fa-check"></i> </i><i id="delete-todo" class="fas fa-times"></i> </li>`;
    addDeleteTodoEvent(listEl.getElementsByTagName("i")[1], todo.id);
    addCompleteTodoEvent(listEl.getElementsByTagName("i")[0], todo);

    todoListEl.appendChild(listEl);
  });
};

const renderDoneItems = () => {
  doneListEl.innerHTML = null;
  if (doneItems.length === 0) {
    document.getElementById("done-list-container").classList.add("hide");
    return;
  }

  document.getElementById("done-list-container").classList.remove("hide");
  doneItems.map((done) => {
    const listEl = document.createElement("li");
    listEl.innerHTML = `<li class="flex-row" key="${done.id}">
    <div>${done.content}</div> <i id="delete-complete-todo" class="fas fa-times"></i> </li>`;
    addDeleteCompleteTodoEvent(listEl.getElementsByTagName("i")[0], done.id);
    doneListEl.appendChild(listEl);
  });
};

renderTodoItems();
renderDoneItems();

todoAddBtn.addEventListener("click", addTodo);
