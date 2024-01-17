const crossbows = [
    {
        Name: "Ravin R26", Spezifikation: ""
    },
    {
        Name: "TenPoint Nitro 505", Spezifikation: ""
    },
    {
        Name: "Mission SUB-1 XR", Spezifikation: ""
    },
    {
        Name: "Scorpyd Deathstalker 420", Spezifikation: ""
    },
    {
        Name: "Barnett HyperGhost 425", Spezifikation: ""
    },
    {
        Name: "CenterPoint Amped 415", Spezifikation: ""
    },
    {
        Name: "Wicked Ridge RDX 400", Spezifikation: ""
    },
    {
        Name: "PSE Thrive 400", Spezifikation: ""
    },
    {
        Name: "Excalibur Assassin 420 TD", Spezifikation: ""
    },
    {
        Name: "BearX Saga 405", Spezifikation: ""
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
