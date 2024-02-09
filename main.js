const standart_crossbows = [
    {
        Img: "https://huegisport.ch/wp-content/uploads/2022/06/Huegi-Sport-AG_Bogensport_Pfeilbogen_Armbrust_RAVIN-COMPOUND-CROSSBOW-SET-R29X-SNIPER-PACK.webp",
        Name: "Ravin R26",
        Spezifikationen: {
            Hersteller: "Ravin",
            Gewicht: "2.95 kg",
            Länge: "66 cm",
            "Breite gespannt": "14.6 cm",
            "Breite ungespannt": "23.5 cm",
            Zuggewicht: "340 lbs",
            Schussgeschwindigkeit: "439 km/h",
            "Kraftaufwand beim Ziehen": "12 lbs",
            Leerschusssicherung: "ja"
        }
    },
    {
        Img: "https://www.bogensportwelt.ch/media/image/product/300821/lg/ravin-crossbows-r18-compoundarmbrust.jpg",
        Name: "Ravin R18",
        Spezifikationen: {
            Hersteller: "Ravin",
            Gewicht: "2.7 kg",
            Länge: "46 cm",
            "Läge mit Schaft": "64cm",
            "Breite gespannt": "12 cm",
            Zuggewicht: "250 lbs",
            Schussgeschwindigkeit: "363 km/h",
            "Kraftaufwand beim Ziehen": "12 lbs",
            Leerschusssicherung: "ja"
        }
    },
    {
        Img: "https://excaliburcrossbow.com/wp-content/uploads/2021/03/pdp-AssassinExtreme-RightDown-1800x1800-2-1800x1800.jpg",
        Name: "Excalibur Assassin Extreme",
        Spezifikationen: {
            Hersteller: "Excalibur",
            Gewicht: "3.9 kg",
            Länge: "81.3 cm",
            Zuggewicht: "290 lbs",
            Schussgeschwindigkeit: "440 km/h",
            Leerschusssicherung: "ja"
        }
    },
    {
        Img: "https://www.afg-defense.eu/sub/afg.sk/shop/product/kusa-pistolova-kladkova-x-bow-fma-supersonic-xl-ar-15-pazba-120-7001.jpg",
        Name: "Xbow FMA Supersonix XL",
        Spezifikationen: {
            Hersteller: "X-Bow",
            Gewicht: "1.43 kg",
            Länge: "67 cm",
            "Breite gespannt": "12.7 cm",
            "Breite ungespannt": "20 cm",
            Zuggewicht: "120 lbs",
            Schussgeschwindigkeit: "330 km/h"
        }
    },
    {
        Img: "https://www.archerybusiness.com/uploads/images/TenPoint-Nitro-505-lead-pic_f4159788da6a13a05c7755e7e3b29890.jpg",
        Name: "TenPoint Nitro 505",
        Spezifikationen: {
            Hersteller: "TenPoint",
            Gewicht: "3.58 kg",
            Länge: "77.5 cm",
            "Breite gespannt": "16.5 cm",
            "Breite ungespannt": "30.5 cm",
            Zuggewicht: "300 lbs",
            Schussgeschwindigkeit: "554 km/h"
        }
    },
    {
        Img: "https://huegisport.ch/wp-content/uploads/2022/12/Huegi-Sport-AG_Bogensport_Pfeilbogen_Armbrust_KILLER-INSTINCT-SWAT-X1-405FPS-ELI-2-650x650.png",
        Name: "Killer Instinct SWAT X1",
        Spezifikationen: {
            Hersteller: "KIller Instinct",
            Gewicht: "3.27 kg",
            Länge: "62.87 cm",
            "Breite gespannt": "15.88 cm",
            "Breite ungespannt": "24.77 cm",
            Zuggewicht: "195 lbs",
            Schussgeschwindigkeit: "123.44 km/h"
        }
    },
];

if (!localStorage.getItem('crossbows')) {
    // Daten des Objekts crossbows im Local Storage speichern
    localStorage.setItem('crossbows', JSON.stringify(standart_crossbows));
}

let default_crossbows = JSON.parse(localStorage.getItem('crossbows'));
let updated_crossbows

if (localStorage.getItem('crossbows')) {
    updated_crossbows = localStorage.getItem('crossbows')
}

let crossbows = default_crossbows

if (updated_crossbows) {
    crossbows = JSON.parse(updated_crossbows)
}

// Function to render hole Webside
function render_website() {
    let table = document.getElementById("table");
    // clear Table
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
    // fill table with new data
    for (let i = 0; i < crossbows.length; i++) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        let img = document.createElement('img');
        img.src = crossbows[i].Img;
        img.alt = "Image not found";

        cell1.appendChild(img);
        cell2.innerHTML = "<h2>" + crossbows[i].Name + "</h2>";

        let ul = document.createElement('ul');
        ul.id = crossbows[i].Name; // set ID to name of Crossbow

        let storedData = localStorage.getItem(crossbows[i].Name);

        if (storedData) {
            let storedValues = JSON.parse(storedData);
            for (let n = 0; n < storedValues.length; n++) {
                let li = document.createElement('li');
                li.appendChild(document.createTextNode(storedValues[n]));
                ul.appendChild(li);
            }
        } else {
            for (let key in crossbows[i].Spezifikationen) {
                let li = document.createElement('li');
                li.textContent = key + ": " + crossbows[i].Spezifikationen[key];
                ul.appendChild(li);
            }

            cell2.appendChild(ul);
        }

        cell2.appendChild(ul);

        let edit = document.createElement('button');
        edit.textContent = '✏️ edit';
        edit.onclick = function () {
            let list = document.getElementById(crossbows[i].Name);
            list.contentEditable = true;
        };

        cell3.appendChild(edit);

        let br = document.createElement('br');
        cell3.appendChild(br);

        let br1 = document.createElement('br');
        cell3.appendChild(br1);

        let save = document.createElement('button');
        save.textContent = '✔️ save';
        save.onclick = function () {
            // give the name of the crossbow to the update function
            update(crossbows[i].Name);
        };

        function update(name) {
            let list = document.getElementById(name);
            list.contentEditable = false;
        
            // Finden des entsprechenden Crossbow-Objekts im Array
            let crossbowToUpdate = crossbows.find(crossbow => crossbow.Name === name);
            if (!crossbowToUpdate) return; // Beenden, falls das Crossbow-Objekt nicht gefunden wurde
        
            // Erstellen eines neuen Spezifikationen-Objekts aus der bearbeiteten Liste
            let updatedSpecs = {};
            Array.from(list.querySelectorAll('li')).forEach(li => {
                let [key, value] = li.textContent.split(":").map(s => s.trim());
                updatedSpecs[key] = value;
            });
        
            // Ersetzen der alten Spezifikationen durch die aktualisierten
            crossbowToUpdate.Spezifikationen = updatedSpecs;
        
            // Speichern des aktualisierten crossbows Arrays im LocalStorage
            localStorage.setItem('crossbows', JSON.stringify(crossbows));
        }
        
        cell3.appendChild(save);
    }
}

render_website();

function sort_a() {
    crossbows.sort(function (a, b) {
        return a.Name.localeCompare(b.Name);
    });

    render_website();
}

function sort_d() {
    crossbows.sort(function (a, b) {
        return b.Name.localeCompare(a.Name);
    });

    render_website();
}

function sort_zuggewicht_a() {
    crossbows.sort(function (a, b) {
        return a.Spezifikationen.Zuggewicht.localeCompare(b.Spezifikationen.Zuggewicht);
    });

    render_website();
}

function sort_zuggewicht_d() {
    crossbows.sort(function (a, b) {
        return b.Spezifikationen.Zuggewicht.localeCompare(a.Spezifikationen.Zuggewicht);
    });

    render_website();
}

function add_new_crossbow() {
    document.getElementById('crossbowForm').style.display = 'block';
}

function save_form() {
    let imglink
    let name
    let specificationsObject

    imglink = document.getElementById(1).value;
    name = document.getElementById(2).value;

    let specifications = document.getElementById(3).value.split('\n');

    // Prüft, ob ein Name eingegeben wurde
    if (!name) {
        window.alert('Name undefined --> Enter a Name to Continue')
        return 0;
    }

    // Prüft, ob ein Doppelpunkt genau einmal im ersten String des Arrays vorkommt
    if (!(specifications[0].indexOf(':') === specifications[0].lastIndexOf(':') && specifications[0].indexOf(':') !== -1)) {
        window.alert('No Specification defined, or false definition of Specification');
        return 0;
    }

    specificationsObject = {};
    specifications.forEach(spec => {
        let [key, value] = spec.split(':').map(s => s.trim());
        if (key === "Zuggewicht" && !value) {
            value = "1 lbs"; // Standardwert, wenn kein Zuggewicht angegeben
        }
        specificationsObject[key] = value;
    });

    // Überprüfen, ob Zuggewicht im Objekt fehlt und wenn ja Standardwert (1 lbs) setzen
    if (!specificationsObject.Zuggewicht) {
        specificationsObject.Zuggewicht = "1 lbs"; // Standardwert für Zuggewicht
    }

    document.getElementById('crossbowForm').style.display = 'none';

    let new_object = {
        Img: imglink,
        Name: name,
        Spezifikationen: specificationsObject
    };

    crossbows.push(new_object);

    localStorage.setItem('crossbows', JSON.stringify(crossbows));

    document.getElementById('1').value = '';
    document.getElementById('2').value = '';
    document.getElementById('3').value = '';

    render_website()
}
