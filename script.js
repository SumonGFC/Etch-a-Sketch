function createGrid(size=16) {
    /* Create a square size x size grid 
    - declare variable to store a div
    - for i = 0,...,size:
        create a div element (i.e. on of the grid squares)
        append the div to the container in the html
      
    */
    return;
}

// Get HTML
const sliderInput = document.getElementById("size-select");
const sizeDisplay = document.getElementById("size-output");
const updateSizeBtn = document.getElementById("update-size-btn");

// Initialize Grid Size
let gridSize = parseInt(sizeDisplay.value);

// Set Grid Size
sliderInput.addEventListener("input", () => {
    const size = sliderInput.value;
    sizeDisplay.textContent = size + "x" + size;
});


