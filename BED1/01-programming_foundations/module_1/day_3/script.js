const btn_rnd = document.querySelector('.btn_random');

// showRandom();
console.log(btn_rnd);

// btn_rnd.addEventListener("click", function (e) {
//   showRandom();
//   console.log("Eivind");
// })

// btn_rnd.onclick = () => {
//   console.log("truls");
//   showRandom()
// };

const userAccepted = confirm("Vil du interaktere med siden min?");

btn_rnd.onclick = () => showRandom();

function showRandom() {
  let random;

  userAccepted ? random = prompt("Tall mellom 0 og 1", "0.5") : random = Math.random();
  // console.log(random);

  if (random < 0.5) {
    // alert(random);
    document.querySelector('.p_err').textContent = random;

  } else {
    // console.log("Tallet var større enn .5");
    if (confirm("tallet ditt er større enn .5. Vil du videre?")) {
      document.querySelector('.btn_random').textContent = "Supert!";
    } else {
      document.querySelector('.p_err').textContent = "Du ville ikke videre?";
    }
  }
}