const setup = () => {
    // Function to override console.log and display logs on the page
    (function () {
        const oldLog = console.log;
        const consoleOutput = document.getElementById("consoleOutput");

        console.log = function (...messages) {
            oldLog.apply(console, messages); // Keep logging to browser console
            const message = messages.map(msg => typeof msg === "object" ? JSON.stringify(msg) : msg).join(" ");
            consoleOutput.innerHTML += message + "<br>"; // Display in page console
            consoleOutput.scrollTop = consoleOutput.scrollHeight; // Auto-scroll down
        };
    })();

    let familieleden = ["barry","jos","pol","rita","jef"]
    console.log(familieleden.length);
    console.log(familieleden[0]);
    console.log(familieleden[2]);
    console.log(familieleden[4]);

    function voegNaamtoe(){
        familieleden.push(prompt("Famillienaam Toevoegen?"))
    }

    voegNaamtoe();

    console.log(familieleden.join(" "));

}
window.addEventListener("load", setup);