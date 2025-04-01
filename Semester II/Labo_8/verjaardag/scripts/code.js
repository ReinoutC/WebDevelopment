const setup = () => {
    let geboorteDag = new Date(1998, 3, 14);
    let vandaag = new Date();

    let verschilInMs = vandaag - geboorteDag;

    let verschilInDagen = Math.floor(verschilInMs / (1000 * 60 * 60 * 24));

    console.log(`Aantal dagen sinds je geboorte: ${verschilInDagen}`);
}




// Wait until DOM is loaded
window.addEventListener("load", setup);



