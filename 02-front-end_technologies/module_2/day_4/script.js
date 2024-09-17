let usersName = localStorage.getItem("name")

if (!usersName) {
  const newName = prompt("What is your name?");
  localStorage.setItem("name", newName);
  usersName = newName;
}
setDomName();

function setDomName() {
  document.getElementById("users_name").textContent = usersName;
}

console.log(usersName);

const btnRemove = document.getElementById("btn_remove");

btnRemove.addEventListener("click", () => {
  localStorage.removeItem("name");
  usersName = "";
  setDomName();
})
