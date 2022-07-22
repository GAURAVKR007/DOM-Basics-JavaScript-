// Some Advanced topics to DOM 

document.getElementsByTagName("li");
document.getElementsByTagName("li")[1].style.color = "purple";

var len = document.getElementsByTagName("li").length;

// Change the button 

document.getElementsByClassName("btn")[0].style.color = "red";

// change the title

document.getElementById("title").innerHTML = "Good Bye";

// How to select anything from querySelector

// document.querySelector("h1");
// document.querySelector("#title");
// document.querySelector(".btn");
// document.querySelector("li a");


// document.querySelector("#list a");
// document.querySelector("#list .item");     // It select the first 
// document.querySelectorAll("#list .item");
document.querySelectorAll("#list .item")[2].style.color = "blue";

// document.querySelector("li a");
// document.querySelector("a");
// document.querySelector("li.item");   // Give the first item in li with class "item"
// document.querySelector(".item");    // Give the first item with class "item"


// Challenge to make anchor tag inside list to change the color blue 

document.querySelector("li a").style.color = "Lime";

// To change the visibility of button in html using css

// document.querySelector("button").classList;      // Give all the class attached with all the buttons 
 
   document.querySelector("button").classList.add("invisible"); 
   document.querySelector("button").classList.remove("invisible");
   document.querySelector("button").classList.toggle("invisible");
   document.querySelector("button").classList.toggle("invisible");

   // to make the title font size huge 

   document.querySelector("#title").classList.add("size");

   // innerHTML vs textContent 

      document.querySelector("h1").innerHTML = "Hello";              // Change everything inside h1 tag
      document.querySelector("h1").textContent = "Good Bye";         // Change only the Text
      document.querySelector("h1").innerHTML = "<em>Good Bye</em>";  // Change everything inside h1 tag





