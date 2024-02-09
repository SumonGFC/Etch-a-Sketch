// Get HTML
const sliderInput = document.getElementById("size-select");
const sizeDisplay = document.getElementById("size-output");
const updateSizeBtn = document.getElementById("update-size-btn");
const gridBox = document.getElementById("grid");

// Update grid size display
sliderInput.addEventListener("input", () => {
    const size = sliderInput.value;
    sizeDisplay.textContent = size + "x" + size;
});

// Create new grid on button click
updateSizeBtn.addEventListener("click", () => {
    const gridDim = parseInt(sliderInput.value);
    const squareLength = (100/gridDim).toString() + "%";
    // Clear previous grid
    gridBox.textContent = "";
    // Make new grid
    for (let i = 0; i < gridDim**2; ++i) {
        gridBox.appendChild(createSquare(squareLength));
    };
})

// Display random colour on hover

// Functions
function createSquare(squareLength) {
    const div = document.createElement("div");
    div.setAttribute("style",
    `border-right: 1px solid black;\
    border-top: 1px solid black;\
    width: ${squareLength}; \
    height: ${squareLength};`);
    div.setAttribute("class", "grid-square");
    return div;
}

function getRandomColor () {
    // make random rgb color
    return;
}