$("document").ready(() => {
  $("p:contains('th')").css("font-size", "2rem");
  $("button:parent").css("border", "3px dashed blue")
  $("div:has(p.classA)").css("border", "3px solid red")
  $("div p:first-child").css("color", "blue");
  $("div p:last-of-type").css("color", "red");
  $("div p:nth-child(3)").css("background-color", "yellow");
  $("div p:nth-child(4n)").css("background-color", "grey");

  $("h1").addClass("heading_1")
  $("h1").removeClass("heading_1")
  $("h1").toggleClass("heading_1")
  $("h1").toggleClass("heading_1")

})