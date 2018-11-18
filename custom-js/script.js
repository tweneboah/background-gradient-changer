
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
var body = document.getElementById("body");

/*
// Step 1:
color1.addEventListener("input", function(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", "
    + color2.value
    + ")";
})

color2.addEventListener("input", function () {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";
});



//Refractoring 1
//-----------------

 function changeBackground(){
  body.style.background =
      "linear-gradient(to right, " +
      color1.value +
      ", " +
      color2.value +
      ")";
}

color1.addEventListener("input", function(){
    changeBackground()
});

color2.addEventListener("input",function(){
    changeBackground();
});
*/

//Refractoring 2
//Just pass the function changeBackground into the addEvenLister callback function
//-----------------

 function changeBackground() {
     body.style.background =
         "linear-gradient(to right, " +
         color1.value +
         ", " +
         color2.value +
         ")";
        css.textContent = body.style.background + ",";
 }

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
