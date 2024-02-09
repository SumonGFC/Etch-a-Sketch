// Get HTML
const sliderInput = document.getElementById("size-select");
const sizeDisplay = document.getElementById("size-output");
const updateSizeBtn = document.getElementById("update-size-btn");
const gridBox = document.getElementById("grid");

// Set Grid Size
sliderInput.addEventListener("input", () => {
    const size = sliderInput.value;
    sizeDisplay.textContent = size + "x" + size;
});

updateSizeBtn.addEventListener("click", () => {
    const gridDim = parseInt(sliderInput.value);
    const squareLength = (100/gridDim).toString() + "%";

    for (let i = 0; i < gridDim; ++i) {
        gridBox.appendChild(createSquare(squareLength));
    };
})

function createSquare(squareLength) {
    const div = document.createElement("div");
    div.setAttribute("style", `border: 1px solid black; width: ${squareLength}; height: ${squareLength};`);
    return div;
}