$("document").ready(function () {
  $("div > p").css("color", "blue");
  $("div p.classA").css("border", "3px solid red");
  $("p + div").css("background", "yellow");
  $("#para3 ~ p").css("font-size", "2rem");
  $("p + div > p:not(.classB)").css("color", "red");

  $('[rel*="foe"]').css("background", "black")


});

document.querySelector("[harald='ja']").addEventListener("click", (e) => {
  console.log(e);
})
