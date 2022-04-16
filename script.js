let section = document.querySelectorAll("section")
let button = document.getElementById("btn");
let container = document.getElementById("container");

console.log(section)

let time = 0;
let correct = 0;
let index = 1;

// Function that iterates over section nodeList and returns the current node the user is on.
function posListener() {
    for (var i = 0; i < section.length; i++) {
        if (section[i].dataset.question.match(index)) {
            return section[i];
        }
    }
};

// Check to see if the returned section node data-question attribute value is the same as index number
// console.log(posListener());

// Event delegation. https://davidwalsh.name/event-delegate
container.addEventListener("click", function(e) {
    if (e.target && e.target.matches("#btn")) {
        index++;
        // Iterating over all section nodes
        // If the node is not current node returned by posListener, set attribute class hidden
        for (var i = 0; i < section.length; i++) {
            if (section[i] !== posListener()) {
                section[i].setAttribute("class", "hidden");
            }
        }

        // Removes class hidden from current element node
        posListener().removeAttribute("class");
    }
});