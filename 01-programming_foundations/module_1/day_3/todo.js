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
  todos.forEach((ele) => {
    ul.innerHTML += `<li>${ele}</li>`;
  })
}




