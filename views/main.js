(function() {
  var main, parse;

  main = function() {
    var result, source;
    source = original.value;
    try {
      result = JSON.stringify(parse(source), null, 2);
    } catch (_error) {
      result = _error;
      result = "<div class=\"error\">" + result + "</div>";
    }
    return OUTPUT.innerHTML = result;
  };

  window.onload = function() {
    return PARSE.onclick = main;
  };
