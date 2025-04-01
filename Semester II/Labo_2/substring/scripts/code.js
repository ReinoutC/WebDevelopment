const setup = () => {
    const button = document.getElementById("substringButton");

    button.addEventListener("click", () => {
        let inputString = document.getElementById("inputString").value;
        let startIndex = parseInt(document.getElementById("startIndex").value);
        let endIndex = parseInt(document.getElementById("endIndex").value);

        // Controleer of indices geldig zijn
        if (isNaN(startIndex) || isNaN(endIndex) || startIndex < 0 || endIndex > inputString.length || startIndex >= endIndex) {
            document.getElementById("output").innerText = "(geen output)";
        } else {
            let result = inputString.substring(startIndex, endIndex);
            document.getElementById("output").innerText = result;
        }
    });
};

window.addEventListener("load", setup);
