const crossbows = [
    {
        Img: "https://ravincrossbows.com/media/catalog/product/r/2/r26x_1.png",
        Name: "Ravin R26",
        Spezifikationen: {
            Hersteller: "Ravin",
            Gewicht: "2.95 kg",
            Länge: "66 cm",
            "Breite gespannt": "14.6 cm",
            "Breite ungespannt": "23.5 cm",
            Zuggewicht: "340 lbs",
            Schussgeschwindigkeit: "439 km/h",
            "Kraftaufwand beim Ziehn": "12 lbs",
            Leerschusssicherung: "ja"
        }
    },
    {
        Img: "https://www.bogensportwelt.ch/media/image/product/347240/lg/excalibur-assassin-extreme-400-fps-realtree-excape-overwatch-package-recurvearmbrust.jpg",
        Name: "EXCALIBUR Assassin Extreme",
        Spezifikationen: {
            Hersteller: "Excalibur",
            Gewicht: "3.36 kg",
            Länge: "81 cm",
            Zuggewicht: "mehr als 175 lbs",
            Schussgeschwindigkeit: "439 km/h",
            "Kraftaufwand beim Ziehn": "19 lbs",
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
            "Kraftaufwand beim Ziehn": "12 lbs",
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
            Schussgeschwindigkeit: "123.44 km/h km/h"
        }
    },
];

let tabelle = document.getElementById("table");

for (let i = 0; i < crossbows.length; i++) {
    let zeile = tabelle.insertRow(-1);
    let zelle1 = zeile.insertCell(0);
    let zelle2 = zeile.insertCell(1);

    let img = document.createElement('img');
    img.src = crossbows[i].Img;

    zelle1.appendChild(img);
    zelle2.innerHTML = "<h2>" + crossbows[i].Name + "</h2>"

    let ul = document.createElement('ul');

    for (let key in crossbows[i].Spezifikationen) {
        let li = document.createElement('li');
        li.textContent = key + ": " + crossbows[i].Spezifikationen[key];
        ul.appendChild(li);
    }

    zelle2.appendChild(ul)
}
