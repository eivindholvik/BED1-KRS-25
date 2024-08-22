const form = document.querySelector('.form_todo');
const input = document.querySelector('.enter_todo');
const ul = document.querySelector('.todos');

const todos = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  todos.push(input.value);
  input.value = "";
  draw();
});

function draw() {
  ul.innerHTML = "";
  todos.forEach((ele, i) => {
    const li = document.createElement("li");
    li.textContent = ele;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "remove";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => {
      deleteTodo(i);
    });
    li.appendChild(deleteBtn);
    ul.appendChild(li);
  })
}


function deleteTodo(i) {
  todos.splice(i, 1);
  draw();
}



