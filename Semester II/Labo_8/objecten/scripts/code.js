const setup = () => {
    let student1 = {
        voornaam: "Jan",
        familienaam: "Janssens",
        geboorteDatum: new Date("1993-12-31"),
        adres: {
            straat: "Kerkstraat 13",
            postcode: "8500",
            gemeente: "Kortrijk"
        },
        isIngeschreven: true,
        namenVanExen: ["Sofie", "Berta", "Philip", "Albertoooo"],
        aantalAutos: 2
    }

    let json = JSON.stringify(student1);
    console.log("json = " + json);

    let parse = JSON.parse(json);
    console.log("parsed date back from json = " + new Date(parse.geboorteDatum));
}

// Wait until DOM is loaded
window.addEventListener("load", setup);
