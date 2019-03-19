/**
 * @author Jean-Philippe Laventure
 * @description Klasse die zur Verwaltung der Nutzer und zur Berechnung mehrerer Werte gedacht war. War, dar die
 * Klasse trotz ihrer zentralen Bedeutung für das Projekt eine (für die Entwickler) nicht nachvollziehbare
 * Fehlermeldung im Konstruktor produziert und somit vorerst nicht verwendet werden kann.
 *
 * Meldung: TypeError: astrologie.getSternzeichenNameWest_Datum is not a function
 */
class Mitglied
{
    constructor(nutzername, passwort, email, vorname, nachname, geschlecht, geburtstag, aszendent, astrologie,
                numerologie, haarfarbe, augenfarbe, koerpergroesse, figur, orientierung, plz, wohnort, kinder, raucher,
                persoenlichkeitstyp, nachrichten)
    {
        this._nutzername = nutzername;
        this._passwort = passwort;
        this._eMailAdresse = email;
        this._vorname = vorname;
        this._nachname = nachname;
        switch (geschlecht)
        {
            case 0:
                this._geschlecht = "divers";
                break;
            case 1:
                this._geschlecht = "männlich";
                break;
            case 2:
                this._geschlecht = "weiblich";
                break;
        }
        this._geburtstag = geburtstag;
        this._haarfarbe = haarfarbe;
        this._augenfarbe = augenfarbe;
        this._koerpergroesse = koerpergroesse;
        this._figur = figur;
        this._sternzeichenWest =  astrologie.getSternzeichenNameWest_Datum(geburtstag);
        this._sternzeichenOst = astrologie.getSternzeichenNameOst_Datum(geburtstag);
        this._aszendent = aszendent;
        this._orientiertung = orientierung; // Auf der Suche nach Männern/Frauen/beiden Geschlechern
        this._plz = plz;    // string um führende Nullen zu berücksichtigen
        this._wohnort = wohnort;
        this._kinder = kinder;
        this._raucher = raucher;    // True = Raucher
        this._persoenlichkeitstyp = persoenlichkeitstyp;
        this._persoenlichkeitszahl = numerologie.persoenlichkeitszahl_intern();
        this._seelenzahl = numerologie.seelenzahl_intern();
        this._schicksalszahl = numerologie.schicksalszahl_intern();
        this._nachrichten = nachrichten;
    }

//---Getter---Start-----
    getNutzername()
    {
        return this._nutzername;
    }

    getEMailAdresse()
    {
        return this._eMailAdresse;
    }

    getVorname()
    {
        return this._vorname;
    }

    getNachname()
    {
        return this._nachname;
    }

    getGeburtstag()
    {
        return this._geburtstag.getTag().toString() + "." + this._geburtstag.getMonat().toString() + "." +
            this._geburtstag.getJahr().toString();
    }

    getGeschlecht()
    {
        return this._geschlecht;
    }

    getSternzeichenWest()
    {
        return this._sternzeichenWest;
    }

    getSternzeichenOst()
    {
        return this._sternzeichenOst;
    }

    getAszendent()
    {
        return this._aszendent;
    }

    getOrientiertung()
    {
        return this._orientiertung;
    }

    getAugenfarbe()
    {
        return this._augenfarbe;
    }

    getFigur()
    {
        return this._figur;
    }

    getHaarfarbe()
    {
        return this._haarfarbe;
    }

    getKoerpergroesse()
    {
        return this._koerpergroesse;
    }

    getOrientiertungText()
    {
        let orientierung = "Unbekannt";

        switch (this._orientiertung)
        {
            case 0:
                orientierung = "Auf der Suche nach Männern und Frauen.";
                break;
            case 1:
                orientierung = "Auf der Suche nach Frauen.";
                break;
            case 2:
                orientierung = "Auf der Suche nach Männern.";
                break;
        }

        return orientierung;
    }

    getWohnort()
    {
        return this._wohnort;
    }

    getPLZ()
    {
        return this._plz;
    }

    getKinder()
    {
        return this._kinder;
    }

    getRaucher()
    {
        return this._raucher;
    }

    getRaucherText()
    {
        if ( this._raucher )
        {
            return "Raucher";
        }
        else
        {
            return "Nichtraucher";
        }
    }

    getPersoenlichkeitstyp()
    {
        return this._persoenlichkeitstyp;
    }

    getPersoenlichkeitszahl()
    {
        return this._persoenlichkeitszahl;
    }

    getSeelenzahl()
    {
        return this._seelenzahl;
    }

    getSchicksalszahl()
    {
        return this._schicksalszahl;
    }

    getNachrichten()
    {
        return this._nachrichten;
    }

    // ToDo: Auswertung schreiben
    getAuswertung(potenziellerpartner)
    {
        // FixMe: erstellen
    }
//---Getter---Ende-----

    /*
     *TODO: Setter prüfen (Vollständigkeit und Sicherheit(werden mit den Settern wirklich korrekte Werte geschrieben
     *      oder stellen sie ein Sicherheitsproblem dar)/Korrektheit) und ergänzen
     */

//---Setter---Start-----
    setEMailAdresse(eingabe)
    {
        this._eMailAdresse = eingabe;
    }

    setGeschlecht(eingabe)
    {
        this._geschlecht = eingabe;
    }

    setWohnort(eingabe)
    {
        this._wohnort = eingabe;
    }

    setPersoenlichkeitstyp(eingabe)
    {
        this._persoenlichkeitstyp = eingabe;
    }

    setKinder(eingabe)
    {
        this._kinder = eingabe;
    }

    setPasswort(eingabe)
    {
        this._passwort = eingabe;
    }

    setOrientiertung(eingabe)
    {
        this._orientiertung = eingabe;
    }

    setRaucher(eingabe)
    {
        this._raucher = eingabe;
    }

    setNachname(eingabe)
    {
        this._nachname = eingabe;
    }

    setAszendent(eingabe)
    {
        this._aszendent = eingabe;
    }

    setHaarfarbe(eingabe)
    {
        this._haarfarbe = eingabe;
    }

    setFigur(eingabe)
    {
        this._figur = eingabe;
    }
//---Setter---Ende-----

    addNachricht()
    {

    }

    // TODO: In Dokumentation erklären, warum der letzte Wert (Emotionen) nicht berücksichtigt wird und nach welcher Überlegung die Auswertung erfolgt.
    /**
     * @author Jean-Philippe Laventure
     * @description Bestimmt die Kompatibilität der Persönlichkeitstypen von zwei Personen.
     * @param {string} personA - Persönlichkeitstyp von Person A(/1).
     * @param {string} personB - Persönlichkeitstyp von Person B(/2).
     * @returns {boolean} True bedeutet, dass beide Personen kompatibel sind und False, dass sie es nicht sind.
     */
    pruefeMatch_Persoenlichkeit(personA, personB)
    {
        let result = 0;

        for (let i = 0; i < 4; i++)
        {
            if (personA[i] === personB[i])
            {
                result++;
            }
        }
        if ( (result > 1) && (result < 4) )
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Berechnet die Kompatibilität zweier Personen basierend auf ihren Seelen-, Schicksals- und Persönlichkeitszahlen.
     * @param {number} persoenlichkeitA - Persönlichkeitszahl von Person A(/1).
     * @param {number} seeleA - Seelenzahl von Person A(/1).
     * @param {number} schicksalA - Schicksalszahl von Person A(/1).
     * @param {number} persoenlichkeitB - Persönlichkeitszahl von Person B(/2).
     * @param {number} seeleB - Seelenzahl von Person B(/2).
     * @param {number} schicksalB - Schicksalszahl von Person B(/2).
     * @returns {boolean} True wird zurückgegeben, wenn beide Personen kompatibel sind und False, wenn nicht.
     */
    werteNumerologieAus(persoenlichkeitA, seeleA, schicksalA,
                        persoenlichkeitB, seeleB, schicksalB)
    {
        let pruefsumme = 0;

        switch (persoenlichkeitA)
        {
            case 1:
                switch (persoenlichkeitB)
                {
                    case 3:
                        pruefsumme++;
                        break;
                    case 4:
                        pruefsumme++;
                        break;
                    case 6:
                        pruefsumme++;
                        break;
                    case 9:
                        pruefsumme++;
                        break;
                }
                break;
            case 2:
                switch (persoenlichkeitB)
                {
                    case 3:
                        pruefsumme++;
                        break;
                    case 4:
                        pruefsumme++;
                        break;
                    case 6:
                        pruefsumme++;
                        break;
                    case 9:
                        pruefsumme++;
                        break;
                }
                break;
            case 3:
                switch (persoenlichkeitB)
                {
                    case 2:
                        pruefsumme++;
                        break;
                    case 3:
                        pruefsumme++;
                        break;
                    case 5:
                        pruefsumme++;
                        break;
                    case 6:
                        pruefsumme++;
                        break;
                    case 8:
                        pruefsumme++;
                        break;
                    case 9:
                        pruefsumme++;
                        break;
                }
                break;
            case 4:
                switch (persoenlichkeitB)
                {
                    case 4:
                        pruefsumme++;
                        break;
                    case 6:
                        pruefsumme++;
                        break;
                }
                break;
            case 5:
                switch (persoenlichkeitB)
                {
                    case 1:
                        pruefsumme++;
                        break;
                    case 4:
                        pruefsumme++;
                        break;
                    case 6:
                        pruefsumme++;
                        break;
                    case 8:
                        pruefsumme++;
                        break;
                    case 9:
                        pruefsumme++;
                        break;
                }
                break;
            case 6:
                switch (persoenlichkeitB)
                {
                    case 2:
                        pruefsumme++;
                        break;
                    case 7:
                        pruefsumme++;
                        break;
                    case 9:
                        pruefsumme++;
                        break;
                }
                break;
            case 7:
                pruefsumme++;
                break;
            case 8:
                switch (persoenlichkeitB)
                {
                    case 2:
                        pruefsumme++;
                        break;
                    case 4:
                        pruefsumme++;
                        break;
                    case 6:
                        pruefsumme++;
                        break;
                }
                break;
            case 9:
                if (persoenlichkeitB === 9)
                {
                    pruefsumme++;
                }
                break;
            case 11:
                if (persoenlichkeitB === 11)
                {
                    pruefsumme++;
                }
                break;
            case 22:
                if (persoenlichkeitB === 22)
                {
                    pruefsumme++;
                }
                break;
        }
        switch (seeleA)
        {
            case 1:
                switch (seeleB)
                {
                    case 2:
                        pruefsumme++;
                        break;
                    case 4:
                        pruefsumme++;
                        break;
                    case 5:
                        pruefsumme++;
                        break;
                    case 7:
                        pruefsumme++;
                        break;
                }
                break;
            case 2:
                switch (seeleB)
                {
                    case 1:
                        pruefsumme++;
                        break;
                    case 2:
                        pruefsumme++;
                        break;
                    case 3:
                        pruefsumme++;
                        break;
                    case 8:
                        pruefsumme++;
                        break;
                    case 9:
                        pruefsumme++;
                        break;
                }
                break;
            case 3:
                switch (seeleB)
                {
                    case 2:
                        pruefsumme++;
                        break;
                    case 3:
                        pruefsumme++;
                        break;
                    case 8:
                        pruefsumme++;
                        break;
                    case 9:
                        pruefsumme++;
                        break;
                    case 11:
                        pruefsumme++;
                        break;
                    case 22:
                        pruefsumme++;
                        break;
                }
                break;
            case 4:
                switch (seeleB)
                {
                    case 1:
                        pruefsumme++;
                        break;
                    case 4:
                        pruefsumme++;
                        break;
                    case 5:
                        pruefsumme++;
                        break;
                    case 6:
                        pruefsumme++;
                        break;
                    case 7:
                        pruefsumme++;
                        break;
                    case 9:
                        pruefsumme++;
                        break;
                    case 22:
                        pruefsumme++;
                        break;
                }
                break;
            case 5:
                switch (seeleB)
                {
                    case 1:
                        pruefsumme++;
                        break;
                    case 4:
                        pruefsumme++;
                        break;
                    case 5:
                        pruefsumme++;
                        break;
                    case 7:
                        pruefsumme++;
                        break;
                    case 8:
                        pruefsumme++;
                        break;
                    case 22:
                        pruefsumme++;
                        break;
                }
                break;
            case 6:
                switch (seeleB)
                {
                    case 4:
                        pruefsumme++;
                        break;
                    case 6:
                        pruefsumme++;
                        break;
                    case 7:
                        pruefsumme++;
                        break;
                    case 9:
                        pruefsumme++;
                        break;
                }
                break;
            case 7:
                switch (seeleB)
                {
                    case 1:
                        pruefsumme++;
                        break;
                    case 4:
                        pruefsumme++;
                        break;
                    case 6:
                        pruefsumme++;
                        break;
                    case 7:
                        pruefsumme++;
                        break;
                    case 8:
                        pruefsumme++;
                        break;
                    case 22:
                        pruefsumme++;
                        break;
                }
                break;
            case 8:
                switch (seeleB)
                {
                    case 2:
                        pruefsumme++;
                        break;
                    case 3:
                        pruefsumme++;
                        break;
                    case 5:
                        pruefsumme++;
                        break;
                    case 7:
                        pruefsumme++;
                        break;
                }
                break;
            case 9:
                switch (seeleB)
                {
                    case 2:
                        pruefsumme++;
                        break;
                    case 3:
                        pruefsumme++;
                        break;
                    case 4:
                        pruefsumme++;
                        break;
                    case 6:
                        pruefsumme++;
                        break;
                    case 9:
                        pruefsumme++;
                        break;
                }
                break;
            case 11:
                switch (seeleB)
                {
                    case 3:
                        pruefsumme++;
                        break;
                    case 11:
                        pruefsumme++;
                        break;
                    case 22:
                        pruefsumme++;
                        break;
                }
                break;
            case 22:
                switch (seeleB)
                {
                    case 3:
                        pruefsumme++;
                        break;
                    case 4:
                        pruefsumme++;
                        break;
                    case 5:
                        pruefsumme++;
                        break;
                    case 7:
                        pruefsumme++;
                        break;
                    case 11:
                        pruefsumme++;
                        break;
                    case 22:
                        pruefsumme++;
                        break;
                }
                break;
        }
        if (schicksalA === schicksalB)
        {
            pruefsumme++;
        }
        if (pruefsumme > 1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    // 19.01.2019
// http://astroschmid.ch/acacpartner/ac_partner-link.php
    /**
     * @author Jean-Philippe Laventure
     * @description Bestimmt die Kompatibilität zweier Personen basierend auf ihren Aszendenten.
     * @param {string} potenziellerPartner - Aszendent vom potenziellen Partner.
     * @returns {Boolean} True wird zurückgegeben, wenn die Aszendenten kompatibel sind und False, wenn nicht.
     */
    getMatchAszendent(potenziellerPartner)
    {
        let kompatibilitaet = false;

        switch (this._aszendent)
        {
            case "Steinbock":
                switch (potenziellerPartner)
                {
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Skorpion":
                        kompatibilitaet = true;
                        break;
                    case "Steinbock":
                        kompatibilitaet = true;
                        break;
                    case "Fische":
                        kompatibilitaet = true;
                        break;
                    case "Jungfrau":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Wassermann":
                switch (potenziellerPartner)
                {
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Zwillinge":
                        kompatibilitaet = true;
                        break;
                    case "Schütze":
                        kompatibilitaet = true;
                        break;
                    case "Wassermann":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Fische":
                switch (potenziellerPartner)
                {
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Steinbock":
                        kompatibilitaet = true;
                        break;
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Schütze":
                        kompatibilitaet = true;
                        break;
                    case "Krebs":
                        kompatibilitaet = true;
                        break;
                    case "Fische":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Widder":
                switch (potenziellerPartner)
                {
                    case "Zwillinge":
                        kompatibilitaet = true;
                        break;
                    case "Schütze":
                        kompatibilitaet = true;
                        break;
                    case "Löwe":
                        kompatibilitaet = true;
                        break;
                    case "Krebs":
                        kompatibilitaet = true;
                        break;
                    case "Skorpion":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Stier":
                switch (potenziellerPartner)
                {
                    case "Wassermann":
                        kompatibilitaet = true;
                        break;
                    case "Steinbock":
                        kompatibilitaet = true;
                        break;
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Skorpion":
                        kompatibilitaet = true;
                        break;
                    case "Krebs":
                        kompatibilitaet = true;
                        break;
                    case "Jungfrau":
                        kompatibilitaet = true;
                        break;
                    case "Fische":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Zwillinge":
                switch (potenziellerPartner)
                {
                    case "Wassermann":
                        kompatibilitaet = true;
                        break;
                    case "Widder":
                        kompatibilitaet = true;
                        break;
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Zwillinge":
                        kompatibilitaet = true;
                        break;
                    case "Schütze":
                        kompatibilitaet = true;
                        break;
                    case "Krebs":
                        kompatibilitaet = true;
                        break;
                    case "Löwe":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Krebs":
                switch (potenziellerPartner)
                {
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Zwillinge":
                        kompatibilitaet = true;
                        break;
                    case "Krebs":
                        kompatibilitaet = true;
                        break;
                    case "Fische":
                        kompatibilitaet = true;
                        break;
                    case "Jungfrau":
                        kompatibilitaet = true;
                        break;
                    case "Skorpion":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Löwe":
                switch (potenziellerPartner)
                {
                    case "Widder":
                        kompatibilitaet = true;
                        break;
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Zwillinge":
                        kompatibilitaet = true;
                        break;
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Schütze":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Jungfrau":
                switch (potenziellerPartner)
                {
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Krebs":
                        kompatibilitaet = true;
                        break;
                    case "Skorpion":
                        kompatibilitaet = true;
                        break;
                    case "Steinbock":
                        kompatibilitaet = true;
                        break;
                    case "Jungfrau":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Waage":
                switch (potenziellerPartner)
                {
                    case "Löwe":
                        kompatibilitaet = true;
                        break;
                    case "Fische":
                        kompatibilitaet = true;
                        break;
                    case "Wassermann":
                        kompatibilitaet = true;
                        break;
                    case "Steinbock":
                        kompatibilitaet = true;
                        break;
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Zwillinge":
                        kompatibilitaet = true;
                        break;
                    case "Schütze":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Skorpion":
                switch (potenziellerPartner)
                {
                    case "Krebs":
                        kompatibilitaet = true;
                        break;
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Jungfrau":
                        kompatibilitaet = true;
                        break;
                    case "Skorpion":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Schütze":
                switch (potenziellerPartner)
                {
                    case "Löwe":
                        kompatibilitaet = true;
                        break;
                    case "Wassermann":
                        kompatibilitaet = true;
                        break;
                    case "Fische":
                        kompatibilitaet = true;
                        break;
                    case "Zwillinge":
                        kompatibilitaet = true;
                        break;
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Widder":
                        kompatibilitaet = true;
                        break;
                    case "Schütze":
                        kompatibilitaet = true;
                        break;
                }
                break;
        }

        return kompatibilitaet;
    }

// 22.01.2019
// http://de.astrologyk.com/horoskop/partner
// https://www.chinesisches-partnerhoroskop.com/
// https://www.schicksal.com/horoskop/Chinesisches-Sternzeichen
//      gleiches Vorgehen, wie bei getSternzeichenWesten
    /**
     * @author Jean-Philippe Laventure
     * @description Bestimmt die Kompatibilität zweier Personen basierend auf ihren chinesischen Sternzeichen.
     * @param {string} potenziellerPartner - Sternzeichen (aus der chinesischen Astrologie) vom potenziellen Partner.
     * @returns {Boolean} True wird zurückgegeben, wenn die Sternzeichen kompatibel sind und False, wenn nicht.
     */
    getMatchSternzeichenOsten(potenziellerPartner)
    {
        //https://www.w3schools.com/html/html_tables.asp
        //https://www.w3schools.com/tags/ref_eventattributes.asp
        //https://www.w3schools.com/css/css_float.asp
        //https://www.w3schools.com/css/css3_flexbox.asp
        //https://www.w3schools.com/css/css_rwd_grid.asp
        //https://www.w3schools.com/html/html_iframe.asp


        let kompatibilitaet = false;

        switch (this._sternzeichenOst)
        {
            case "Ratte/Maus":
                switch (potenziellerPartner)
                {
                    case "Ratte/Maus":
                        kompatibilitaet = true;
                        break;
                    case "Büffel/Ochse/Rind":
                        kompatibilitaet = true;
                        break;
                    case "Drache":
                        kompatibilitaet = true;
                        break;
                    case "Hund":
                        kompatibilitaet = true;
                        break;
                    case "schwein":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Büffel/Ochse/Rind":
                switch (potenziellerPartner)
                {
                    case "Ratte/Maus":
                        kompatibilitaet = true;
                        break;
                    case "Hase":
                        kompatibilitaet = true;
                        break;
                    case "Schlange":
                        kompatibilitaet = true;
                        break;
                    case "Hahn/Huhn":
                        kompatibilitaet = true;
                        break;
                    case "Hund":
                        kompatibilitaet = true;
                        break;
                    case "Schwein":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Tiger":
                switch (potenziellerPartner)
                {
                    case "Pferd":
                        kompatibilitaet = true;
                        break;
                    case "Hund":
                        kompatibilitaet = true;
                        break;
                    case "Schwein":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Hase":
                switch (potenziellerPartner)
                {
                    case "Büffel/Ochse/Rind":
                        kompatibilitaet = true;
                        break;
                    case "Hase":
                        kompatibilitaet = true;
                        break;
                    case "Drache":
                        kompatibilitaet = true;
                        break;
                    case "Schlange":
                        kompatibilitaet = true;
                        break;
                    case "Pferd":
                        kompatibilitaet = true;
                        break;
                    case "Schaf/Ziege":
                        kompatibilitaet = true;
                        break;
                    case "Affe":
                        kompatibilitaet = true;
                        break;
                    case "Hund":
                        kompatibilitaet = true;
                        break;
                    case "Schwein":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Drache":
                switch (potenziellerPartner)
                {
                    case "Ratte/Maus":
                        kompatibilitaet = true;
                        break;
                    case "Büffel/Ochse/Rind":
                        kompatibilitaet = true;
                        break;
                    case "Hase":
                        kompatibilitaet = true;
                        break;
                    case "Schlange":
                        kompatibilitaet = true;
                        break;
                    case "Schaf/Ziege":
                        kompatibilitaet = true;
                        break;
                    case "Affe":
                        kompatibilitaet = true;
                        break;
                    case "Hahn/Huhn":
                        kompatibilitaet = true;
                        break;
                    case "Schwein":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Schlange":
                switch (potenziellerPartner)
                {
                    case "Büffel/Ochse/Rind":
                        kompatibilitaet = true;
                        break;
                    case "Hase":
                        kompatibilitaet = true;
                        break;
                    case "Drache":
                        kompatibilitaet = true;
                        break;
                    case "Schlange":
                        kompatibilitaet = true;
                        break;
                    case "Pferd":
                        kompatibilitaet = true;
                        break;
                    case "Schaf/Ziege":
                        kompatibilitaet = true;
                        break;
                    case "Affe":
                        kompatibilitaet = true;
                        break;
                    case "Hahn/Huhn":
                        kompatibilitaet = true;
                        break;
                    case "Schwein":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Pferd":
                switch (potenziellerPartner)
                {
                    case "Tiger":
                        kompatibilitaet = true;
                        break;
                    case "Hase":
                        kompatibilitaet = true;
                        break;
                    case "Schlange":
                        kompatibilitaet = true;
                        break;
                    case "Pferd":
                        kompatibilitaet = true;
                        break;
                    case "Schaf/Ziege":
                        kompatibilitaet = true;
                        break;
                    case "Hahn/Huhn":
                        kompatibilitaet = true;
                        break;
                    case "Hund":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Schaf/Ziege":
                switch (potenziellerPartner)
                {
                    case "Hase":
                        kompatibilitaet = true;
                        break;
                    case "Drache":
                        kompatibilitaet = true;
                        break;
                    case "Schlange":
                        kompatibilitaet = true;
                        break;
                    case "Pferd":
                        kompatibilitaet = true;
                        break;
                    case "Schaf/Ziege":
                        kompatibilitaet = true;
                        break;
                    case "Affe":
                        kompatibilitaet = true;
                        break;
                    case "Schwein":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Affe":
                switch (potenziellerPartner)
                {
                    case "Hase":
                        kompatibilitaet = true;
                        break;
                    case "Drache":
                        kompatibilitaet = true;
                        break;
                    case "Schlange":
                        kompatibilitaet = true;
                        break;
                    case "Schaf/Ziege":
                        kompatibilitaet = true;
                        break;
                    case "Affe":
                        kompatibilitaet = true;
                        break;
                    case "Hund":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Hahn/Huhn":
                switch (potenziellerPartner)
                {
                    case "Büffel/Ochse/Rind":
                        kompatibilitaet = true;
                        break;
                    case "Drache":
                        kompatibilitaet = true;
                        break;
                    case "Schlange":
                        kompatibilitaet = true;
                        break;
                    case "Pferd":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Hund":
                switch (potenziellerPartner)
                {
                    case "Ratte/Maus":
                        kompatibilitaet = true;
                        break;
                    case "Büffel/Ochse/Rind":
                        kompatibilitaet = true;
                        break;
                    case "Tiger":
                        kompatibilitaet = true;
                        break;
                    case "Hase":
                        kompatibilitaet = true;
                        break;
                    case "Pferd":
                        kompatibilitaet = true;
                        break;
                    case "Affe":
                        kompatibilitaet = true;
                        break;
                    case "Hund":
                        kompatibilitaet = true;
                        break;
                    case "Schwein":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Schwein":
                switch (potenziellerPartner)
                {
                    case "Ratte/Maus":
                        kompatibilitaet = true;
                        break;
                    case "Büffel/Ochse/Rind":
                        kompatibilitaet = true;
                        break;
                    case "Tiger":
                        kompatibilitaet = true;
                        break;
                    case "Hase":
                        kompatibilitaet = true;
                        break;
                    case "Schaf/Ziege":
                        kompatibilitaet = true;
                        break;
                    case "Hahn/Huhn":
                        kompatibilitaet = true;
                        break;
                    case "Hund":
                        kompatibilitaet = true;
                        break;
                    case "Schwein":
                        kompatibilitaet = true;
                        break;
                }
                break;
        }

        return kompatibilitaet;
    }

// 22.01.2019
// https://www.brigitte.de/horoskop/sternzeichen/
// http://www.astroschmid.ch/so-so-partner/so_so_partner-link.php
// http://www.liebesastrologie.com/partnerschaftshoroskop.html
//      gleiches Vorgehen, wie bei getSternzeichenWesten
    /**
     * @author Jean-Philippe Laventure
     * @description Bestimmt die Kompatibilität zweier Personen basierend auf ihren Sternzeichen (aus den
     * Tierkreiszeichen des Zodiaks).
     * @param {string} potenziellerPartner - Sternzeichen (aus den Tierkreiszeichen des Zodiaks) vom potenziellen Partner.
     * @returns {Boolean} True wird zurückgegeben, wenn die Sternzeichen kompatibel sind und False, wenn nicht.
     */
    getMatchSternzeichenWesten(potenziellerPartner)
    {
        let kompatibilitaet = false;

        switch (this._sternzeichenWest)
        {
            case "Steinbock":
                switch (potenziellerPartner)
                {
                    case "Steinbock":
                        kompatibilitaet = true;
                        break;
                    case "Fische":
                        kompatibilitaet = true;
                        break;
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Krebs":
                        kompatibilitaet = true;
                        break;
                    case "Jungfrau":
                        kompatibilitaet = true;
                        break;
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Skorpion":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Wassermann":
                switch (potenziellerPartner)
                {
                    case "Widder":
                        kompatibilitaet = true;
                        break;
                    case "Zwillinge":
                        kompatibilitaet = true;
                        break;
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Schütze":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Fische":
                switch (potenziellerPartner)
                {
                    case "Steinbock":
                        kompatibilitaet = true;
                        break;
                    case "Fische":
                        kompatibilitaet = true;
                        break;
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Krebs":
                        kompatibilitaet = true;
                        break;
                    case "Löwe":
                        kompatibilitaet = true;
                        break;
                    case "Jungfrau":
                        kompatibilitaet = true;
                        break;
                    case "Skorpion":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Widder":
                switch (potenziellerPartner)
                {
                    case "Wassermann":
                        kompatibilitaet = true;
                        break;
                    case "Widder":
                        kompatibilitaet = true;
                        break;
                    case "Zwillinge":
                        kompatibilitaet = true;
                        break;
                    case "Krebs":
                        kompatibilitaet = true;
                        break;
                    case "Löwe":
                        kompatibilitaet = true;
                        break;
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Skorpion":
                        kompatibilitaet = true;
                        break;
                    case "Schütze":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Stier":
                switch (potenziellerPartner)
                {
                    case "Steinbock":
                        kompatibilitaet = true;
                        break;
                    case "Wassermann":
                        kompatibilitaet = true;
                        break;
                    case "Fische":
                        kompatibilitaet = true;
                        break;
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Krebs":
                        kompatibilitaet = true;
                        break;
                    case "Löwe":
                        kompatibilitaet = true;
                        break;
                    case "Jungfrau":
                        kompatibilitaet = true;
                        break;
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Skorpion":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Zwillinge":
                switch (potenziellerPartner)
                {
                    case "Wassermann":
                        kompatibilitaet = true;
                        break;
                    case "Widder":
                        kompatibilitaet = true;
                        break;
                    case "Löwe":
                        kompatibilitaet = true;
                        break;
                    case "Jungfrau":
                        kompatibilitaet = true;
                        break;
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Schütze":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Krebs":
                switch (potenziellerPartner)
                {
                    case "Steinbock":
                        kompatibilitaet = true;
                        break;
                    case "Fische":
                        kompatibilitaet = true;
                        break;
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Krebs":
                        kompatibilitaet = true;
                        break;
                    case "Jungfrau":
                        kompatibilitaet = true;
                        break;
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Skorpion":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Löwe":
                switch (potenziellerPartner)
                {
                    case "Widder":
                        kompatibilitaet = true;
                        break;
                    case "Zwillinge":
                        kompatibilitaet = true;
                        break;
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Schütze":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Jungfrau":
                switch (potenziellerPartner)
                {
                    case "Steinbock":
                        kompatibilitaet = true;
                        break;
                    case "Fische":
                        kompatibilitaet = true;
                        break;
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Zwillinge":
                        kompatibilitaet = true;
                        break;
                    case "Krebs":
                        kompatibilitaet = true;
                        break;
                    case "Skorpion":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Waage":
                switch (potenziellerPartner)
                {
                    case "Steinbock":
                        kompatibilitaet = true;
                        break;
                    case "Wassermann":
                        kompatibilitaet = true;
                        break;
                    case "Widder":
                        kompatibilitaet = true;
                        break;
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Zwillinge":
                        kompatibilitaet = true;
                        break;
                    case "Löwe":
                        kompatibilitaet = true;
                        break;
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Schütze":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Skorpion":
                switch (potenziellerPartner)
                {
                    case "Steinbock":
                        kompatibilitaet = true;
                        break;
                    case "Fische":
                        kompatibilitaet = true;
                        break;
                    case "Widder":
                        kompatibilitaet = true;
                        break;
                    case "Stier":
                        kompatibilitaet = true;
                        break;
                    case "Krebs":
                        kompatibilitaet = true;
                        break;
                    case "Jungfrau":
                        kompatibilitaet = true;
                        break;
                    case "Skorpion":
                        kompatibilitaet = true;
                        break;
                }
                break;
            case "Schütze":
                switch (potenziellerPartner)
                {
                    case "Wassermann":
                        kompatibilitaet = true;
                        break;
                    case "Widder":
                        kompatibilitaet = true;
                        break;
                    case "Zwillinge":
                        kompatibilitaet = true;
                        break;
                    case "Löwe":
                        kompatibilitaet = true;
                        break;
                    case "Waage":
                        kompatibilitaet = true;
                        break;
                    case "Schütze":
                        kompatibilitaet = true;
                        break;
                }
                break;
        }

        return kompatibilitaet;
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Bestimmt die Kompatibilität von zwei Personen basierend auf der Astrologie.
     * @param {Mitglied} potenziellerPartner Objekt der Klasse Mitglied mit den Daten des möglichen Partners.
     * @returns {number} Gibt eine ganzzahlige Bewertung der Kompatibilität (je höher, desto besser) zurück.
     */
    werteAstrologieAus(potenziellerPartner)
    {
        let ergebnis = 0;
        if ( (this._aszendent !== "Unbekannt") && (potenziellerPartner.getAszendent() !== "Unbekannt") )
        {
            if ( this.getMatchAszendent(this._aszendent, potenziellerPartner.getAszendent()) )
            {
                ergebnis++;
            }
        }
        if ( this.getMatchSternzeichenOsten(this._sternzeichenOst, potenziellerPartner.getSternzeichenOst()) )
        {
            ergebnis++;
        }
        if ( (ergebnis === 2) &&
            (!this.getMatchSternzeichenWesten(this._sternzeichenWest, potenziellerPartner.getSternzeichenWest())) )
        {
            return ergebnis;
        }
        else
        {
            return ergebnis + 2;
        }
    }

    aktualisiereProfil(nachname, aszendent, geschlecht, figur, kinder, persoenlichkeit, passwort1, passwort2)
    {
        let temp;

        if ( (nachname.length > 0) && (this._nachname !== nachname) )
        {
            this._nachname = nachname;
        }

        if ( (aszendent !== "Unbekannt") && (this._aszendent !== aszendent) )
        {
            this._aszendent = aszendent;
        }

        switch (geschlecht)
        {
            case 0:
                temp = "divers";
                break;
            case 1:
                temp = "männlich";
                break;
            case 2:
                temp = "weiblich";
                break;
        }
        if ( this._geschlecht !== temp )
        {
            this._geschlecht = temp;
        }

        if ( this._figur !== figur )
        {
            this._figur = figur;
        }

        if ( this._kinder !== kinder )
        {
            this._kinder = kinder;
        }

        if ( this._persoenlichkeitstyp !== persoenlichkeit )
        {
            this._persoenlichkeitstyp = persoenlichkeit;
        }

        if ( passwort1 === passwort2 )
        {
            this._passwort = passwort1;
        }
    }

    pruefeMatch_Mitglied(potenziellerPartner)
    {
        let ergebnis = [false, false, 0];
        let bool_counter = 0;

        ergebnis[0] = this.pruefeMatch_Persoenlichkeit(this._persoenlichkeitstyp,
            potenziellerPartner.getPersoenlichkeitstyp());
        ergebnis[1] = this.werteNumerologieAus(this._persoenlichkeitszahl,this._seelenzahl, this._schicksalszahl,
            potenziellerPartner.getPersoenlichkeitszahl(), potenziellerPartner.getSeelenzahl(),
            potenziellerPartner.getSchicksalszahl());
        ergebnis[2] = this.werteAstrologieAus(potenziellerPartner);

        if ( ergebnis[0] === true )
        {
            bool_counter++;
        }

        if ( ergebnis[1] === true )
        {
            bool_counter++;
        }

        if ( (bool_counter + ergebnis[2]) <= 1 )
        {
            return "rot";   // inkompatibel
        }

        if ( ((bool_counter + ergebnis[2]) > 1) &&
                ((bool_counter + ergebnis[2]) < 5) )
        {
            return "gelb";   // mittlere Kompatibilität
        }

        if ( (bool_counter + ergebnis[2]) >= 5 )
        {
            return "grün";   // sehr gute Kompatibelität
        }
    }
}

//Export
module.exports = Mitglied;