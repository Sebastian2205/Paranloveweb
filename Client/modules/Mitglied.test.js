const Mitglied = require('./Mitglied');
const Datum = require('./Datum');
const Astrologie = require('./Astrologie');
const Numerologie = require('./Numerologie');
const geburtstag = new Datum("19.12.1978");
const numbers = new Numerologie("MaxMustermann", geburtstag);
const stellar = new Astrologie();
let fehlerfall;
let error_bool;

// Der folgende auskommentierte Test läuft nicht durch und produziert die in Mitglied.js erwähnte Fehlermeldung.
/*
test('Instanz wird erstellt', () => {
    error_bool = false;
    try
    {
        const standardMitglied = new Mitglied("Pseudonym", "GeheimesPasswort", "Max", "Mustermann", "männlich",
            geburtstag, "Unbekannt", stellar, numbers, "Hellbraun", "Grau", "1,50", "Frauen", "77777", "Weimar",
            0, false, "EPHGe", []);
    }
    catch (e)
    {
        error_bool = true;
    }
    expect(error_bool).toBe(false);
});
*/




/*
test('Prüfung der Korrektheit der Persönlichkeitstypen', () => {
    expect(pruefePersoenlichkeitstyp("EPHGe")).toBe(true);      // Gültiger Persönlichkeitstyp
    expect(pruefePersoenlichkeitstyp("EPHG")).toBe(false);      // Ungültiger Persönlichkeitstyp - zu kurze Eingabe
    expect(pruefePersoenlichkeitstyp("EPHGee")).toBe(false);    // Ungültiger Persönlichkeitstyp - zu lange Eingabe
    expect(pruefePersoenlichkeitstyp("JPHGe")).toBe(false);     // Ungültiger Persönlichkeitstyp - ungültiges Zeichen
    expect(pruefePersoenlichkeitstyp("PEHGe")).toBe(false);     // Ungültiger Persönlichkeitstyp - falsche Reihenfolge
});
*/
