const Astrologie = require('./Astrologie');
const Datum = require('./Datum');
let geburtstag;
let sternzeichen;

describe('Prüfung der korrekten Zuordnung der Sternzeichen(Westen), nach Zahlen', () => {
    test('Prüfe auf Steinbock - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameWest(1)).toBe("Steinbock");
    });

    test('Prüfe auf Wassermann - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameWest(2)).toBe("Wassermann");
    });

    test('Prüfe auf Fische - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameWest(3)).toBe("Fische");
    });

    test('Prüfe auf Widder - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameWest(4)).toBe("Widder");
    });

    test('Prüfe auf Stier - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameWest(5)).toBe("Stier");
    });

    test('Prüfe auf Zwillinge - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameWest(6)).toBe("Zwillinge");
    });

    test('Prüfe auf Krebs - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameWest(7)).toBe("Krebs");
    });

    test('Prüfe auf Löwe - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameWest(8)).toBe("Löwe");
    });

    test('Prüfe auf Jungfrau - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameWest(9)).toBe("Jungfrau");
    });

    test('Prüfe auf Waage - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameWest(10)).toBe("Waage");
    });

    test('Prüfe auf Skorpion - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameWest(11)).toBe("Skorpion");
    });

    test('Prüfe auf Schütze - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameWest(12)).toBe("Schütze");
    });
});

describe('Prüfung der korrekten Zuordnung der Sternzeichen(Westen), nach Datum', () => {
    test('Prüfe auf Steinbock - Datum', () => {
        geburtstag = new Datum("1.1.1990");
        expect(Astrologie.prototype.getSternzeichenNameWest_Datum(geburtstag)).toBe("Steinbock");
    });

    test('Prüfe auf Wassermann - Datum', () => {
        geburtstag = new Datum("31.1.1990");
        expect(Astrologie.prototype.getSternzeichenNameWest_Datum(geburtstag)).toBe("Wassermann");
    });

    test('Prüfe auf Fische - Datum', () => {
        geburtstag = new Datum("25.2.1990");
        expect(Astrologie.prototype.getSternzeichenNameWest_Datum(geburtstag)).toBe("Fische");
    });

    test('Prüfe auf Widder - Datum', () => {
        geburtstag = new Datum("30.03.1990");
        expect(Astrologie.prototype.getSternzeichenNameWest_Datum(geburtstag)).toBe("Widder");
    });

    test('Prüfe auf Stier - Datum', () => {
        geburtstag = new Datum("25.4.1990");
        expect(Astrologie.prototype.getSternzeichenNameWest_Datum(geburtstag)).toBe("Stier");
    });

    test('Prüfe auf Zwillinge - Datum', () => {
        geburtstag = new Datum("1.06.1990");
        expect(Astrologie.prototype.getSternzeichenNameWest_Datum(geburtstag)).toBe("Zwillinge");
    });

    test('Prüfe auf Krebs - Datum', () => {
        geburtstag = new Datum("27.6.1990");
        expect(Astrologie.prototype.getSternzeichenNameWest_Datum(geburtstag)).toBe("Krebs");
    });

    test('Prüfe auf Löwe - Datum', () => {
        geburtstag = new Datum("31.7.1990");
        expect(Astrologie.prototype.getSternzeichenNameWest_Datum(geburtstag)).toBe("Löwe");
    });

    test('Prüfe auf Jungfrau - Datum', () => {
        geburtstag = new Datum("29.08.1990");
        expect(Astrologie.prototype.getSternzeichenNameWest_Datum(geburtstag)).toBe("Jungfrau");
    });

    test('Prüfe auf Waage - Datum', () => {
        geburtstag = new Datum("30.9.1990");
        expect(Astrologie.prototype.getSternzeichenNameWest_Datum(geburtstag)).toBe("Waage");
    });

    test('Prüfe auf Skorpion - Datum', () => {
        geburtstag = new Datum("31.10.1990");
        expect(Astrologie.prototype.getSternzeichenNameWest_Datum(geburtstag)).toBe("Skorpion");
    });

    test('Prüfe auf Schütze - Datum', () => {
        geburtstag = new Datum("6.12.1990");
        expect(Astrologie.prototype.getSternzeichenNameWest_Datum(geburtstag)).toBe("Schütze");
    });
});

describe('Prüfung der korrekten Zuordnung der Sternzeichen(Osten), nach Zahlen', () => {
    test('Prüfe auf Ratte - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameOst(1)).toBe("Ratte/Maus");
    });

    test('Prüfe auf Büffel - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameOst(2)).toBe("Büffel/Ochse/Rind");
    });

    test('Prüfe auf Tiger - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameOst(3)).toBe("Tiger");
    });

    test('Prüfe auf Hase - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameOst(4)).toBe("Hase");
    });

    test('Prüfe auf Drache - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameOst(5)).toBe("Drache");
    });

    test('Prüfe auf Schlange - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameOst(6)).toBe("Schlange");
    });

    test('Prüfe auf Pferd - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameOst(7)).toBe("Pferd");
    });

    test('Prüfe auf Schaf - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameOst(8)).toBe("Schaf/Ziege");
    });

    test('Prüfe auf Affe - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameOst(9)).toBe("Affe");
    });

    test('Prüfe auf Hahn - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameOst(10)).toBe("Hahn/Huhn");
    });

    test('Prüfe auf Hund - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameOst(11)).toBe("Hund");
    });

    test('Prüfe auf Schwein - Zahl', () => {
        expect(Astrologie.prototype.getSternzeichenNameOst(12)).toBe("Schwein");
    });
});

describe('Prüfung der korrekten Zuordnung der Sternzeichen(Osten), nach Datum', () => {
    test('Prüfe auf Ratte - Datum', () => {
        geburtstag = new Datum("6.6.1960");
        expect(Astrologie.prototype.getSternzeichenNameOst_Datum(geburtstag)).toBe("Ratte/Maus");
    });

    test('Prüfe auf Büffel - Datum', () => {
        geburtstag = new Datum("6.6.1961");
        expect(Astrologie.prototype.getSternzeichenNameOst_Datum(geburtstag)).toBe("Büffel/Ochse/Rind");
    });

    test('Prüfe auf Tiger - Datum', () => {
        geburtstag = new Datum("6.6.1962");
        expect(Astrologie.prototype.getSternzeichenNameOst_Datum(geburtstag)).toBe("Tiger");
    });

    test('Prüfe auf Hase - Datum', () => {
        geburtstag = new Datum("6.6.1963");
        expect(Astrologie.prototype.getSternzeichenNameOst_Datum(geburtstag)).toBe("Hase");
    });

    test('Prüfe auf Drache - Datum', () => {
        geburtstag = new Datum("6.6.1964");
        expect(Astrologie.prototype.getSternzeichenNameOst_Datum(geburtstag)).toBe("Drache");
    });

    test('Prüfe auf Schlange - Datum', () => {
        geburtstag = new Datum("6.6.1965");
        expect(Astrologie.prototype.getSternzeichenNameOst_Datum(geburtstag)).toBe("Schlange");
    });

    test('Prüfe auf Pferd - Datum', () => {
        geburtstag = new Datum("6.6.1966");
        expect(Astrologie.prototype.getSternzeichenNameOst_Datum(geburtstag)).toBe("Pferd");
    });

    test('Prüfe auf Schaf - Datum', () => {
        geburtstag = new Datum("6.6.1967");
        expect(Astrologie.prototype.getSternzeichenNameOst_Datum(geburtstag)).toBe("Schaf/Ziege");
    });

    test('Prüfe auf Affe - Datum', () => {
        geburtstag = new Datum("6.6.1968");
        expect(Astrologie.prototype.getSternzeichenNameOst_Datum(geburtstag)).toBe("Affe");
    });

    test('Prüfe auf Hahn - Datum', () => {
        geburtstag = new Datum("6.6.1969");
        expect(Astrologie.prototype.getSternzeichenNameOst_Datum(geburtstag)).toBe("Hahn/Huhn");
    });

    test('Prüfe auf Hund - Datum', () => {
        geburtstag = new Datum("6.6.1970");
        expect(Astrologie.prototype.getSternzeichenNameOst_Datum(geburtstag)).toBe("Hund");
    });

    test('Prüfe auf Schwein - Datum', () => {
        geburtstag = new Datum("6.6.1971");
        expect(Astrologie.prototype.getSternzeichenNameOst_Datum(geburtstag)).toBe("Schwein");
    });
});
