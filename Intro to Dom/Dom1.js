// To Affect any in document

var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML="GoodBye";
heading.style.color = "Lime";

// To select anything with querySelector

document.querySelector("input").click();

// Challenge to change the third list item to Anything

var third = document.firstElementChild.lastElementChild.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild;
third.innerHTML = "Animxplay";
third.style.color = "Blue";