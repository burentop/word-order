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

var mapToArray = function (map) {
  var items = Object.keys(map).map(function (key) {
    return [key, map[key]];
  });
  items.sort(function (first, second) {
    return second[1] - first[1];
  });
  return items;
}

$(document).ready(function () {
  $(".text-input form").submit(function (event) {
    event.preventDefault();
    var inputText = $("#block").val();
    var ulMap = mapToArray(toMap(toArray(inputText)));
    ulMap.forEach(function(array) {
      $("#list").append("<li>" + array[0] + ": " + array[1] + "</li>");
    })
    $(".output").show();
  });
});