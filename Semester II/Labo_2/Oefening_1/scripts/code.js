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


        window.alert("Dit is een mededeling");

        let confirmResult = window.confirm("Weet u het zeker?");
        console.log("Return value van confirm:", confirmResult);

        let promptResult = window.prompt("Wat is uw naam?", "onbekend");
        console.log("Return value van prompt:", promptResult);
    }

    window.addEventListener("load", setup);




