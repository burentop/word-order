var toArray = function (text) {
  return text.split(/[\s,.!?]+/);
}

var toMap = function (array) {
  var map = {};
  array.forEach(function (item) {
    if (!map[item]) {
      map[item] = 1;
    } else {
      map[item] += 1;
    }
  });
  return map;
}

$(document).ready(function () {
  $(".text-input form").submit(function (event) {
    event.preventDefault();
    var inputText = $("#block").val();
    var ulMap = toMap(toArray(inputText));
    Object.keys(ulMap).forEach(function (key) {
      $("#list").append("<li>" + key + ": " + ulMap[key] + "</li>");
    });
    $(".output").show();
  })
})