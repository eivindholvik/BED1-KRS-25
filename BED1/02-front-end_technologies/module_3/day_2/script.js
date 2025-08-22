$(function () {
  $("#onButton").click(function (event) {
    updateEventDetails(event);
    $("#para1").hover(highlight, highlight)
  });
  $("#offButton").click(function (event) {
    updateEventDetails(event);
    $("#para1").off("mouseenter mouseleave", highlight)
  });

});
function highlight(event) {
  updateEventDetails(event);
  $(this).toggleClass("highlighted");
}

function updateEventDetails(evt) {
  $("li span[id]").text("");
  $("#evtType").text(evt.type);
  $("#evtWhich").text(evt.which);
  $("#evtTarget").text(evt.target.id);
  if (evt.relatedTarget) {
    $("#evtRelated").text(evt.relatedTarget.tagName + "#" + evt.relatedTarget.id);
  }
  $("#evtPageX").text(evt.pageX);
  $("#evtPageY").text(evt.pageY);
  $("#evtClientX").text(evt.clientX);
  $("#evtClientY").text(evt.clientY);
  $("#evtMetaKey").text(evt.metaKey);
  if (evt.data) {
    $("#evtData").text(evt.data.name);
  }
}
