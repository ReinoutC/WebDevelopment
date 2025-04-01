const setup = () => {

    function vraagGemeenten() {
        let gemeenten = [];
        let invoer;

        while (true) {
            invoer = prompt("Voer een gemeente in (typ 'stop' om te beëindigen):");
            if (invoer === null || invoer.toLowerCase() === "stop") break;
            if (invoer.trim() !== "") gemeenten.push(invoer.trim());
        }

        gemeenten.sort(); // Sorteer alfabetisch
        vulSelectBox(gemeenten);
    }

    function vulSelectBox(gemeenten) {
        let select = document.getElementById("gemeenteSelect");
        select.innerHTML = '<option value="">-- Kies een gemeente --</option>'; // Reset de select box

        gemeenten.forEach(gemeente => {
            let optie = document.createElement("option");
            optie.value = gemeente;
            optie.textContent = gemeente;
            select.appendChild(optie);
        });
    }
}
// Wait until DOM is loaded
window.addEventListener("load", setup);
