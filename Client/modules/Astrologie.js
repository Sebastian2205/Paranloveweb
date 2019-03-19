/**
 * @author Jean-Philippe Laventure
 * @description Klasse zur Verarbeitung des Bereichs Astrologie bei ParanLove.
 */
class Astrologie
{
    /**
     * @author Jean-Philippe Laventure
     * @description Bestimmt das chinesische Sternzeichen einer Person basierend auf ihrem Geburtstag.
     * @param {number} tag
     * @param {number} monat
     * @param {number} jahr
     * @returns {number} Gibt das bestimmte Sternzeichen als Zahlenwert (1-12) wieder.
     * @see Für die Zuordnung der Zahlen zu den Sternzeichen siehe {@link getSternzeichenNameOst}.
     */
    getSternzeichenOsten(tag, monat, jahr) {
        let ergebnis = 2008 - jahr;  // das Jahr 2008 wurde willkürlich ausgewählt, weil dem Autor das Sternzeichen bekannt war.

        for (let i = 1; i < 13; i++) {
            if (ergebnis % 12 === 0) {
                if ((monat === 1) || ((monat === 2) && (tag <= 21)))  // diese Anweisung ist eine der Wurzeln der Ungenauigkeiten des Programms.
                {   // diese Anweisung ist aufgrund des Unterschieds zwischen Solarkalendern und Lunisolarkalendern notwendig.
                    if (i === 1)    // Sonderfall der sich aus dem gewählten Jahr (2008) ergibt.
                    {
                        ergebnis = 12;  // Schwein
                        break;
                    }
                    else {
                        ergebnis = i - 1;
                        break;
                    }
                }
                else {
                    ergebnis = i;
                    break;
                }
            }
            ergebnis++;
        }

        return ergebnis;
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Bestimmt das Sternzeichen (aus den Tierkreiszeichen des Zodiaks) einer Person basierend auf ihrem Geburtstag.
     * @param {number} tag
     * @param {number} monat
     * @returns {number} Gibt das bestimmte Sternzeichen als Zahlenwert (1-12) wieder.
     * @see Für die Zuordnung der Zahlen zu den Sternzeichen siehe {@link getSternzeichenNameWest}.
     */
    getSternzeichenWesten(tag, monat) {
        let sternzeichen = 0;

        if (((monat === 3) && (tag >= 21)) ||
            ((monat === 4) && (tag <= 20))) {
            sternzeichen = 4;   // Widder
        }
        if (((monat === 4) && (tag >= 21)) ||
            ((monat === 5) && (tag <= 21))) {
            sternzeichen = 5;   // Stier
        }
        if (((monat === 5) && (tag >= 22)) ||
            ((monat === 6) && (tag <= 21))) {
            sternzeichen = 6;   // Zwillinge
        }
        if (((monat === 6) && (tag >= 22)) ||
            ((monat === 7) && (tag <= 22))) {
            sternzeichen = 7;   // Krebs
        }
        if (((monat === 7) && (tag >= 23)) ||
            ((monat === 8) && (tag <= 23))) {
            sternzeichen = 8;   // Löwe
        }
        if (((monat === 8) && (tag >= 24)) ||
            ((monat === 9) && (tag <= 23))) {
            sternzeichen = 9;   // Jungfrau
        }
        if (((monat === 9) && (tag >= 24)) ||
            ((monat === 10) && (tag <= 23))) {
            sternzeichen = 10;   // Waage
        }
        if (((monat === 10) && (tag >= 24)) ||
            ((monat === 11) && (tag <= 22))) {
            sternzeichen = 11;   // Skorpion
        }
        if (((monat === 11) && (tag >= 23)) ||
            ((monat === 12) && (tag <= 21))) {
            sternzeichen = 12;   // Schütze
        }
        if (((monat === 12) && (tag >= 22)) ||
            ((monat === 1) && (tag <= 20))) {
            sternzeichen = 1;   // Steinbock
        }
        if (((monat === 1) && (tag >= 21)) ||
            ((monat === 2) && (tag <= 19))) {
            sternzeichen = 2;   // Wassermann
        }

        if (((monat === 2) && (tag >= 20)) ||
            ((monat === 3) && (tag <= 20))) {
            sternzeichen = 3;   // Fische
        }

        return sternzeichen;
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Gibt das Sternzeichen (aus den Tierkreiszeichen des Zodiaks) wieder, das dem Eingabewert zugeordnet wird.
     * @param {number} sternzeichenNummer - Nummer, die als Repräsentant für ein Sternzeichen (aus den Tierkreiszeichen des Zodiaks) fungiert.
     * @returns {string} Sternzeichen (aus den Tierkreiszeichen des Zodiaks) als lesbarer String.
     */
    getSternzeichenNameWest(sternzeichenNummer) {
        let name = "Sternzeichen";
        const error_invalidNumber = new Error("Der übergebene Wert liegt außerhalb des gültigen Bereichs.");

        if ((sternzeichenNummer < 1) || (sternzeichenNummer > 12)) {
            throw error_invalidNumber;
        }
        switch (sternzeichenNummer) {
            case 1:
                name = "Steinbock";
                break;
            case 2:
                name = "Wassermann";
                break;
            case 3:
                name = "Fische";
                break;
            case 4:
                name = "Widder";
                break;
            case 5:
                name = "Stier";
                break;
            case 6:
                name = "Zwillinge";
                break;
            case 7:
                name = "Krebs";
                break;
            case 8:
                name = "Löwe";
                break;
            case 9:
                name = "Jungfrau";
                break;
            case 10:
                name = "Waage";
                break;
            case 11:
                name = "Skorpion";
                break;
            case 12:
                name = "Schütze";
                break;
        }

        return name;
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Alternative Funktion zu "getSternzeichenNameWest", die ein Datum (siehe
     * Modul "Datum" für Details) verwendet.
     * @param geburtstag
     * @returns {string}
     * @see Für weitere Informationen siehe: {@link getSternzeichenNameWest}
     */
    getSternzeichenNameWest_Datum(geburtstag) {
        return this.getSternzeichenNameWest(this.getSternzeichenWesten(geburtstag.getTag(), geburtstag.getMonat()));
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Gibt das Sternzeichen (aus der chinesischen Astrologie) wieder, das dem Eingabewert zugeordnet wird.
     * @param {number} sternzeichenNummer
     * @returns {string} Sternzeichen (aus der chinesischen Astrologie) als lesbarer String.
     */
    getSternzeichenNameOst(sternzeichenNummer) {
        let name = "Sternzeichen";
        const error_invalidNumber = new Error("Der übergebene Wert liegt außerhalb des gültigen Bereichs.");

        if ((sternzeichenNummer < 1) || (sternzeichenNummer > 12)) {
            throw error_invalidNumber;
        }
        switch (sternzeichenNummer) {
            case 1:
                name = "Ratte/Maus";
                break;
            case 2:
                name = "Büffel/Ochse/Rind";
                break;
            case 3:
                name = "Tiger";
                break;
            case 4:
                name = "Hase";
                break;
            case 5:
                name = "Drache";
                break;
            case 6:
                name = "Schlange";
                break;
            case 7:
                name = "Pferd";
                break;
            case 8:
                name = "Schaf/Ziege";
                break;
            case 9:
                name = "Affe";
                break;
            case 10:
                name = "Hahn/Huhn";
                break;
            case 11:
                name = "Hund";
                break;
            case 12:
                name = "Schwein";
                break;
        }

        return name;
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Alternative Funktion zu "getSternzeichenNameOst", die ein Datum (siehe
     * Modul "Datum" für Details) verwendet.
     * @param geburtstag
     * @returns {string}
     * @see Für weitere Informationen siehe: {@link getSternzeichenNameOst}
     */
    getSternzeichenNameOst_Datum(geburtstag) {
        console.log(this.getSternzeichenOsten(geburtstag.getTag(), geburtstag.getMonat()));
        return this.getSternzeichenNameOst(this.getSternzeichenOsten(geburtstag.getTag(), geburtstag.getMonat(),
            geburtstag.getJahr()));
    }

}


//Export
module.exports = Astrologie;
