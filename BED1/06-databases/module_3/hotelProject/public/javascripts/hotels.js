async function deleteHotel(id) {
  try {
    const response = await fetch("http://localhost:3000/hotels", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        id: id
      })
    });
    // const data = await response.json();
    // console.log(data);
    location.reload();
  } catch (e) {
    console.log(e);
  }
}

async function addHotel() {
  const name = prompt("What is the name of the hotel?");
  const hotelLocation = prompt("What is the location of the hotel?");
  try {
    const response = await fetch("http://localhost:3000/hotels", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        Name: name,
        Location: hotelLocation
      })
    });
    location.reload();

  }
  catch (e) {
    console.log(e);
  }
}

document.querySelector('#add').addEventListener("click", (e) => {
  console.log("hei");
  addHotel();
})

document.querySelectorAll('.delete').forEach(btn => {
  btn.addEventListener("click", (e) => {
    deleteHotel(btn.dataset.id);
  })
});
