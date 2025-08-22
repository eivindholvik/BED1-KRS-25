$("document").ready(function () {
  $("#content").append('<p id="hw">Hello World!</p>');
  // const paragraph = $("#hw");
  // console.log(paragraph[0]);
  $("#example").css("font-size", "2em");
  $("p").css("color", "red");
  $(".classA").css("border", "4px dotted salmon")
  $("#example").css("background-color", "lightgrey");
  $("p.classB").css("font-size", "1.25rem");
});


// without jQuery

// const selectedItem = document.querySelector('#content');
// selectedItem.style.color = "blue";
