const setup = () => {

    let tekst = 'Gisteren zat de jongen op de stoep en at de helft van de appel'

    function vervangDeMetHet(sentence) {
        let woorden = sentence.split(" ");

        for (let i = 0; i < woorden.length; i++) {
            if (woorden[i].toLowerCase() === "de") {
                woorden[i] = "het";
            }
            console.log(woorden.slice(0, i + 1).join(" "));
        }

        return woorden.join(" ");
    }

    let nieuweTekst = vervangDeMetHet(tekst);
    console.log(nieuweTekst);



}
// Wait until DOM is loaded
window.addEventListener("load", setup);
