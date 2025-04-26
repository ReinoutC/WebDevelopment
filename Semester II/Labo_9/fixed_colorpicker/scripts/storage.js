
const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let sliderValues = {
        red: red,
        green: green,
        blue: blue
    };

    localStorage.setItem("sliderValues", JSON.stringify(sliderValues));
};

const restoreSliderValues = () => {
    let sliderValues = localStorage.getItem("sliderValues");
    if (sliderValues) {
        let values = JSON.parse(sliderValues);
        document.getElementById("sldRed").value = values.red;
        document.getElementById("sldGreen").value = values.green;
        document.getElementById("sldBlue").value = values.blue;
    }
};

const storeSwatches = () => {
    let swatchComponents = document.getElementById("swatchComponents").children;
    let swatches = [];

    for (let i = 0; i < swatchComponents.length; i++) {
        let swatch = swatchComponents[i];
        let red = swatch.getAttribute("data-red");
        let green = swatch.getAttribute("data-green");
        let blue = swatch.getAttribute("data-blue");

        swatches.push({ red: red, green: green, blue: blue });
    }

    localStorage.setItem("swatches", JSON.stringify(swatches));
};

const restoreSwatches = () => {
    let swatches = localStorage.getItem("swatches");
    if (swatches) {
        let swatchList = JSON.parse(swatches);
        for (let i = 0; i < swatchList.length; i++) {
            let color = swatchList[i];
            addSwatchComponent(color.red, color.green, color.blue);
        }
    }
};
