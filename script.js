var url = "localhost:8000/something?name=ABC"
var name = url.substring(url.indexOf("=") + 1);  

var parent = document.getElementById("myDiv");
var input = document.createElement("input");
input.value = name;
parent.appendChild(input);
