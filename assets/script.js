// Select the <input> and <p> elements by their IDs
var input = document.getElementById("searchInput");
var paragraph = document.getElementById("testDisplay");

// Add an input event listener to the <input> element
input.addEventListener("input", function() {
    // Update the content of the <p> tag with the input value
    paragraph.textContent = input.value;
});