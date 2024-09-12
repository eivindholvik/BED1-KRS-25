const domDiv = document.getElementsByName("divName");

console.log(domDiv);

// domDiv[0].innerHTML = "noe nytt";

domDiv.forEach((node, i) => {
  node.textContent += ", this is the " + i + " node."
})


for (let i = 0; i < domDiv.length; i++) {
  domDiv[i].style.margin = "3rem";
}

// document.images[0].classList.add("add_by_js")

document.images[0].addEventListener("click", (e) => {
  console.log(e);
  e.target.classList.toggle("add_by_js");

})

const myInterval = setInterval(() => document.getElementsByName("divName")[1].innerHTML = `<p>Date: ${Date()}</p>`, 500)

