
alert("connected");
var h1 = document.querySelector("h1");
var button = document.getElementById("button");
var trekButton = document.getElementById("trekButton");
var imageSpock=document.querySelector("img");
button.addEventListener("click", function(){
h1.textContent="WOo-hhooooo";
});
trekButton.addEventListener("click", function() {
    alert("i did a ghing");
    imageSpock.style.width=20;
});