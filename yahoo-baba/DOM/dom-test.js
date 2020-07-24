var element;

document.getElementById("header").innerHTML = "<h1>hello</h1>"

// document.getElementById("header").setAttribute("style", "border: 10px dotted yellow");

element = document.getElementById("header").removeAttribute("style");

console.log(element)