const crossbows = [
    {
        Name: "Ravin R26", Spezifikation: "test"
    },
    {
        Name: "TenPoint Nitro 505", Spezifikation: "test"
    },
    {
        Name: "Mission SUB-1 XR", Spezifikation: "test"
    },
    {
        Name: "Scorpyd Deathstalker 420", Spezifikation: "test"
    },
    {
        Name: "Barnett HyperGhost 425", Spezifikation: "test"
    },
    {
        Name: "CenterPoint Amped 415", Spezifikation: "test"
    },
    {
        Name: "Wicked Ridge RDX 400", Spezifikation: "test"
    },
    {
        Name: "PSE Thrive 400", Spezifikation: "test"
    },
    {
        Name: "Excalibur Assassin 420 TD", Spezifikation: "test"
    },
    {
        Name: "BearX Saga 405", Spezifikation: "test"
    }
];

// Zugriff auf die Tabelle
let tabelle = document.getElementById("table");

// Loop durch jedes Objekt im Array
for (let i = 0; i < crossbows.length; i++) {
    // Erstellen Sie eine neue Zeile
    let zeile = tabelle.insertRow(-1);

    // Fügen Sie Zellen zur Zeile hinzu
    let zelle1 = zeile.insertCell(0);
    let zelle2 = zeile.insertCell(1);

    // Füllen Sie die Zellen mit Daten aus dem Objekt
    zelle1.innerHTML = crossbows[i].Name;
    zelle2.innerHTML = crossbows[i].Spezifikation;
}
