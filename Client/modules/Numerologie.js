/**
 * @author Jean-Philippe Laventure
 * @description Klasse zur Verarbeitung des Bereichs Numerologie von ParanLove.
 */
class Numerologie
{
    constructor(name, geburtstag)
    {
        this._name = name;  // String, der den Vor- und Nachnamen einer Person enthält
        this._geburtstag = geburtstag;
        // "geburtstag" muss ein Objekt der Klasse Datum sein (für weitere Informationen siehe Modul "Datum.js")
    }

    //---Start---Getter-----
    getName()
    {
        return this._name;
    }

    getGeburtstag()
    {
        return this._geburtstag;
    }
    //---Ende---Getter-----

    /**
     * @author Jean-Philippe Laventure
     * @description Überprüft, ob ein einzelnes Zeichen ein Vokal ist.
     * @param {string} zeichen - Einzelner Buchstabe, der daraufhin überprüft werden soll, ob er ein Vokal ist.
     * @returns {boolean} True gibt an, dass das eingelesene Zeichen ein Vokal ist und False, dass es ein Konsonant ist.
     */
    pruefeAufVokal(zeichen)
    {
        const vokale = /[AaEeIiOoUuYy]/;

        if (zeichen.length !== 1)
        {   // FixMe: Test fails
            const error_ueberlaenge = new Error("Unzulässige Eingabe. Zu viele Zeichen.");
            throw error_ueberlaenge;
        }
        if (zeichen.match(vokale) === null)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

// TODO: Fehlerbehandlung
    /**
     * @author Jean-Philippe Laventure
     * @description Prüft Nutzereingabe auf Kompatibilität mit der Verarbeitung für die Numerologie und passt sie an oder gibt eine Fehlermeldung aus.
     * @param {string} name - Vor- und Nachname einer Person als einzelner String.
     * @returns {string} Der zurückgegebene String entspricht der überprüften und gegebenenfalls angepassten Nutzereingabe.
     */
    standardisiereName(name)
    {
        let ergebnis = "";
        const regulaererAusdruck = /[A-Za-z]+/;
        const error_ungueltigesZeichen = new Error("In der Eingabe wurde ein unzulässiges Zeichen gefunden.");

        for (let i = 0; i < name.length; i++)
        {
            switch (name[i])
            {
                case 'Ä':
                    ergebnis += 'Ae';
                    break;
                case 'ä':
                    ergebnis += 'ae';
                    break;
                case 'Ü':
                    ergebnis += 'Ue';
                    break;
                case 'ü':
                    ergebnis += 'ue';
                    break;
                case 'Ö':
                    ergebnis += 'Oe';
                    break;
                case 'ö':
                    ergebnis += 'oe';
                    break;
                case 'ß':
                    ergebnis += 'ss';
                    break;
                case ' ':
                    break;
                default:
                    ergebnis += name[i];
            }
        }
        if ( ergebnis === ergebnis.match(regulaererAusdruck).toString() )
        {
            return ergebnis;
        }
        else
        {
            throw error_ungueltigesZeichen;
        }
    }

// TODO: Fehlerbehandlung
// Wertet ein Zeichen gemäß einer Tabelle für ParanLove aus
    /**
     * @author Jean-Philippe Laventure
     * @description Bestimmt den Wert eines einzelnen Buchstabens, gemäß der Tabelle zur Berechnung der Persönlichkeitszahl.
     * @param {string} zeichen - Einzelner Buchstabe.
     * @returns {number} Der Rückgabewert entspricht dem Wert der Zahlenwerttabelle zur Berechnung der Persönlichkeitszahl.
     */
    zeichenwert(zeichen)
    {
        const wertetabelle = [/[AaJjSs]/, /[BbKkTt]/, /[CcLlUu]/, /[DdMmVv]/, /[EeNnWw]/,
            /[FfOoXx]/, /[GgPpYy]/, /[HhQqZz]/, /[IiRr]/];
        let ergebnis = 0;

        if ( (zeichen.length !== 1) || (zeichen.match(/[A-Za-z]/)) === null )
        {
            const error_ungueltigesInput = new Error("Unzulässige Eingabe.");
            throw error_ungueltigesInput;
        }
        for(let i = 0; i < 9; i++)
        {
            if ( zeichen.match(wertetabelle[i]) !== null)
            {
                ergebnis = i+1;
                break;
            }
        }
        return ergebnis;
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Diese Hilfsfunktion sollte ursprünglich dabei helfen, dass der Buchstabe "Y" korrekt verarbeitet
     * wird. Da aber eine korrekte Verarbeitung nicht fristgerecht umgesetzt wwerden konnte dient sie nun nur noch
     * Dokumentationszwecken. Hier die ursprüngliche Funktionbeschreibung:
     * Hilfsfunktion zur Behandlung des Buchstaben Y, durch die Optimierung der Nutzereingabe.
     * @param {string} eingabe - Nutzereingabe über die Aussprache(n) des Buchstaben "Y" in seinem Namen, in vorgegebenem Format.
     * @param {number} anzahlY - Anzahl des Buchstaben "Y" im Namen einer Person.
     * @returns {string} Optimierter Eingabestring zur späteren Verarbeitung des Buchstaben "Y".
     */
    optimiereEingabeY(eingabe, anzahlY)
    {
        let ergebnis = eingabe;
        const error_ungueltigerInput = new Error("Unzulässige Eingabe.");

        for(let i = 0; i < anzahlY; i++)
        {
            ergebnis = ergebnis.replace("v", "V");
            ergebnis = ergebnis.replace("k", "K");
            ergebnis = ergebnis.replace("-", "");
        }
        if (ergebnis.length !== anzahlY)
        {
            //TODO: Fehlermeldung mit Aufruf zur Benutzereingabe
            throw error_ungueltigerInput;
        }
        for (let i = 0; i < ergebnis.length; i++)
        {
            if ( (ergebnis[i] !== "V") && (ergebnis[i] !== "K") )
            {
                //TODO: Fehlermeldung mit Aufruf zur Benutzereingabe
                throw error_ungueltigerInput;
                break;
            }
        }

        return ergebnis;
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Diese Funktion sollte ursprünglich für die Korrekte Verarbeitung des Buchstaben "Y" sorgen.
     * Da sie jedoch nicht fristgerecht fertiggestellt wurde liegt sie nur noch zu Dokumentationszwecken vor.
     * Hier die ursprüngliche Beschreibung:
     * Ändert die Eingabe so ab, dass "Y" bei der Berechnung der Persönlichkeitszahl korrekt ausgewertet wird.
     * @param {string} name - Vor- und Nachname einer Person als einzelner String.
     * @returns {string} Zur Berechnung der Persönlichkeitszahl verwendbarer String.
     */
    verarbeiteY(name)
    {
        let zaehler = 0;
        let eingabe = "";
        let ergebnis = name;

        for (let i = 0; i < name.length; i++)
        {
            if ( (name[i] === "Y") || (name[i] === "y") )
            {
                zaehler++;
            }
        }
        if (zaehler > 0)
        {
            // Geplante Stelle zur korrekten Verarbeitung des Buchstaben Y
        }

        return ergebnis;
    }

// TODO: Erklärung in der Dokumentation von "Seelenzahl" - Tipp: Hierzu @see ansehen und im Vorfeld etwas experimentieren
    /**
     * @author Jean-Philippe Laventure
     * @description Berechnet die Seelenzahl einer Person basierend auf ihrem Namen (statt auf der gesamten Namenstabelle).
     * @param {string} name - Vor- und Nachname einer Person als einzelner String.
     * @returns {number} Der zurückgegebene Zahlenwert ist die berechnete Seelenzahl.
     */
    seelenzahl(name)
    {
        let ergebnis = 0;
        let temp = this.verarbeiteY(name);

        for(let i = 0; i < temp.length; i++)
        {
            switch (temp[i])
            {
                case 'A':
                    ergebnis += 1;
                    break;
                case 'a':
                    ergebnis += 1;
                    break;
                case 'E':
                    ergebnis += 5;
                    break;
                case 'e':
                    ergebnis += 5;
                    break;
                case 'I':
                    ergebnis += 9;
                    break;
                case 'i':
                    ergebnis += 9;
                    break;
                case 'O':
                    ergebnis += 6;
                    break;
                case 'o':
                    ergebnis += 6;
                    break;
                case 'U':
                    ergebnis += 3;
                    break;
                case 'u':
                    ergebnis += 3;
                    break;
                case 'Y':
                    ergebnis += 7;
                    break;
                case 'y':
                    ergebnis += 7;
                    break;
            }
        }
        while(true)
        {
            if ( (ergebnis > 9) && (ergebnis != 11) && (ergebnis != 22) )
            {
                let quersumme = ergebnis.toString();
                let zwischensumme = 0;

                for(let i = 0; i < quersumme.length; i++)
                {
                    zwischensumme += +quersumme[i];
                }
                ergebnis = zwischensumme;
            }
            else
            {
                break;
            }
        }

        return ergebnis;
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Alternative Funktion zu "seelenzahl". Im Gegensatz zu "seelenzahl" berechnet
     * diese Funktion nur die Seelenzahl für die aktuelle Instanz der Klasse.
     * @returns {number}
     * @see Für weitere Informationen siehe: {@link seelenzahl}
     */
    seelenzahl_intern()
    {
        return this.seelenzahl(this._name);
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Berechnet die Quersumme einer Zahl gemäß der Bestimmung der Persönlichkeitszahl.
     * @param {number} eingabe
     * @returns {number}
     */
    quersummePersoenlichkeitszahl(eingabe)
    {
        let temp = "";

        if (eingabe > 9)
        {
            switch (eingabe)
            {
                case 10:
                    return 1;
                case 11:
                    return 11;
                case 22:
                    return 22;
                default:
                    temp = eingabe.toString();
                    return (+temp[0]) + (+temp[1]);
            }
        }
        else
        {
            return eingabe;
        }
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Berechnet die Persönlichkeitszahl einer Person basierend auf ihrem Namen.
     * @param {string} name - Vor- und Nachname einer Person als einzelner String.
     * @returns {number} Der zurückgegebene Zahlenwert ist die berechnete Persönlichkeitszahl.
     */
    persoenlichkeitszahl(name)
    {
        let wertVokale = 0;
        let wertKonsonanten = 0;
        let ergebnis = 0;
        let temp = "";

        name = this.verarbeiteY(this.standardisiereName(name));
        for(let i = 0; i < name.length; i++)
        {
            if (this.pruefeAufVokal(name[i]))
            {
                wertVokale += this.zeichenwert(name[i]);
                wertVokale = this.quersummePersoenlichkeitszahl(wertVokale);
            }
            else
            {
                wertKonsonanten += this.zeichenwert(name[i]);
                wertKonsonanten = this.quersummePersoenlichkeitszahl(wertVokale);
            }
        }
        ergebnis = wertVokale + wertKonsonanten;
        ergebnis = this.quersummePersoenlichkeitszahl(ergebnis);

        return ergebnis;
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Alternative Funktion zu "persoenlichkeitszahl". Im Gegensatz zu "persoenlichkeitszahl" berechnet
     * diese Funktion nur die Persönlichkeitszahl für die aktuelle Instanz der Klasse.
     * @returns {number}
     * @see Für weitere Informationen siehe: {@link persoenlichkeitszahl}
     */
    persoenlichkeitszahl_intern()
    {
        return this.persoenlichkeitszahl(this._name);
    }
    /**
     * @author Jean-Philippe Laventure
     * @description Berechnet die Schicksalszahl einer Person basierend auf ihrem Geburtstag.
     * @param {number} tag
     * @param {number} monat
     * @param {number} jahr
     * @returns {number} Der zurückgegebene Zahlenwert ist die berechnete Persönlichkeitszahl.
     */
    schicksalszahl(tag, monat, jahr)
    {
        let parameter = [monat, tag, jahr];
        let temp = "";
        let result = 0;

        if (parameter[0] === 10)
        {
            parameter[0] = 1;
        }
        if (parameter[0] === 12)
        {
            parameter[0] = 3;
        }
        for (let i = 1; i < 3; i++)
        {
            temp = Number(parameter[i]).toString();

            parameter[i] = 0;
            for (let j=0; j < temp.length; j++)
            {
                parameter[i] += (+temp[j]);
            }
            if (parameter[i] > 9)
            {
                i--;
            }
        }
        result = parameter[0] + parameter[1] + parameter[2];

        return this.quersummePersoenlichkeitszahl(result);
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Alternative Funktion zu "schicksalszahl". Im Gegensatz zu "schicksalszahl" berechnet diese Funktion
     * nur die Schicksalszahl für die aktuelle Instanz der Klasse, durch die Verwendung des Attributes "_geburtstag".
     * @returns {number}
     * @see Für weitere Informationen siehe: {@link schicksalszahl}
     */
    schicksalszahl_intern()
    {
        return this.schicksalszahl(this._geburtstag.getTag(), this._geburtstag.getMonat(), this._geburtstag.getJahr());
    }

}

//Export
module.exports = Numerologie;
