const setup = () => {
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

    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);

    const kopieer = () => {
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;
        console.log(tekst);
    }
}
window.addEventListener("load", setup);