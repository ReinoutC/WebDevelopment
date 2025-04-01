// code.js
let personen = [
    {
        voornaam: 'Jan',
        familienaam: 'Janssens',
        geboorteDatum: '2010-10-10',
        email: 'jan@example.com',
        aantalKinderen: 0
    },
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: '1980-01-01',
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: '1970-12-31',
        email: 'piet@example.com',
        aantalKinderen: 2
    }
];

let geselecteerdePersoonIndex = -1;

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    valideer();

    let fouten = document.querySelectorAll(".invalid");
    if (fouten.length > 0) return;

    let persoon = {
        voornaam: document.getElementById("txtVoornaam").value.trim(),
        familienaam: document.getElementById("txtFamilienaam").value.trim(),
        geboorteDatum: document.getElementById("txtGeboorteDatum").value.trim(),
        email: document.getElementById("txtEmail").value.trim(),
        aantalKinderen: document.getElementById("txtAantalKinderen").value.trim()
    };

    if (geselecteerdePersoonIndex === -1) {
        // Nieuw persoon
        personen.push(persoon);
        voegPersoonToeAanLijst(persoon, personen.length - 1);
        document.getElementById("lstPersonen").value = personen.length - 1;
    } else {
        // Bestaande persoon aanpassen
        personen[geselecteerdePersoonIndex] = persoon;
        updatePersoonInLijst(persoon, geselecteerdePersoonIndex);
    }
};

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    geselecteerdePersoonIndex = -1;
    clearAllErrors();
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    document.getElementById("lstPersonen").value = null;
};

const toonPersoon = (index) => {
    let persoon = personen[index];
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
    geselecteerdePersoonIndex = index;
};

const voegPersoonToeAanLijst = (persoon, index) => {
    let option = document.createElement("option");
    option.text = `${persoon.familienaam}, ${persoon.voornaam}`;
    option.value = index;
    document.getElementById("lstPersonen").appendChild(option);
};

const updatePersoonInLijst = (persoon, index) => {
    let lst = document.getElementById("lstPersonen");
    let option = lst.options[index];
    option.text = `${persoon.familienaam}, ${persoon.voornaam}`;
};

const setup = () => {
    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", function () {
        let index = parseInt(lstPersonen.value);
        if (!isNaN(index)) {
            toonPersoon(index);
        }
    });

    // Vooraf ingevulde personen toevoegen aan de lijst
    personen.forEach((persoon, index) => {
        voegPersoonToeAanLijst(persoon, index);
    });
};

window.addEventListener("load", setup);