let section = document.querySelectorAll("section");
let button = document.querySelectorAll("button");

let time = 0;
let correct = 0;
let index= 1;

button.addEventListener("click", function() {
    index++;
    // If the variable index is equal to the section attribute index remove class hidden 
    if (index == section.dataset.index) {
        section.removeAttribute("Hidden")
    }
    // If the variable index is not equal to section attribute index add class hidden
    if (index !== section.dataset.index) {
        section.setAttribute("class", "hidden");
    }
});

