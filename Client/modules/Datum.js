/**
 * @author Jean-Philippe Laventure
 * @classdesc Klasse zur Sicherung der Verwendung von einem validen Datum.
 */
class Datum
{
    /**
     * @author Jean-Philippe Laventure
     * @description Konstruktor, der ein Datum als String einliest, validiert und Tag, Monat und Jahr speichert.
     * @param {string} nutzereingabe
     */
    constructor(nutzereingabe)
    {
        const datum = /[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}/;
        let t, m, j;
        let schalter = 0;
        let temp = "";

        //---Start---Fehler-Definition-----
        const error_eingabeDatum = new Error("Die Eingabe entspricht keinem gültigen Datum. " +
            "Bitte schreiben Sie das Datum in folgender Form: TT.MM.JJJJ");
        const error_ungueltigeZahl = new Error("Das eingegebene Jahr, der Monat oder der Tag ist ungültig/" +
            "wird nicht unterstützt.");
        const error_februar = new Error("Der eingegebene Tag existiert nicht in diesem Februar.");
        const error_tag = new Error("Der eingegebene Tag existiert in diesem Monat nicht.");
        //---Ende---Fehler-Definition-----

        if ( nutzereingabe.match(datum) === null )
        {
            throw error_eingabeDatum;
        }
        else
        {
            for (let i = 0; i < nutzereingabe.length; i++)
            {
                if (schalter === 0 )
                {
                    if (nutzereingabe[i] !== ".")
                    {
                        temp = temp + nutzereingabe[i];
                    }
                    else
                    {
                        t = parseInt(temp);
                        schalter++;
                        temp = "";
                    }
                }
                else
                {
                    if (schalter === 1 )
                    {
                        if (nutzereingabe[i] !== ".")
                        {
                            temp = temp + nutzereingabe[i];
                        }
                        else
                        {
                            m = parseInt(temp);
                            schalter++;
                            temp = "";
                        }
                    }
                    else
                    {
                        temp = temp + nutzereingabe[i];
                    }
                }
            }
            j = parseInt(temp);

            // In der Zukunft sollte das Limit für ein valides Jahr dynamisch umgesetzt werden.
            if ( (j < 1800) || (t > 31)  || (t === 0) || (m === 0) || (m > 12) || (j > 2018) )
            {
                throw error_ungueltigeZahl;
            }
            switch (m)
            {
                case 1:
                    if (t <= 31)
                    {
                        this.tag = t;
                        this.monat = m;
                        this.jahr = j;
                    }
                    else
                    {
                        throw error_tag;
                    }
                    break;
                case 2:
                    if ( j % 4 === 0 )
                    {
                        if ( t <= 29 )
                        {
                            this.tag = t;
                            this.monat = m;
                            this.jahr = j;
                        }
                        else
                        {
                            throw error_februar;
                        }
                    }
                    else
                    {
                        if ( t <= 28 )
                        {
                            this.tag = t;
                            this.monat = m;
                            this.jahr = j;
                        }
                        else
                        {
                            throw error_februar;
                        }
                    }
                    break;
                case 3:
                    if ( t <= 31 )
                    {
                        this.tag = t;
                        this.monat = m;
                        this.jahr = j;
                    }
                    else
                    {
                        throw error_tag;
                    }
                    break;
                case 4:
                    if ( t <= 30 )
                    {
                        this.tag = t;
                        this.monat = m;
                        this.jahr = j;
                    }
                    else
                    {
                        throw error_tag;
                    }
                    break;
                case 5:
                    if ( t <= 31 )
                    {
                        this.tag = t;
                        this.monat = m;
                        this.jahr = j;
                    }
                    else
                    {
                        throw error_tag;
                    }
                    break;
                case 6:
                    if ( t <= 30 )
                    {
                        this.tag = t;
                        this.monat = m;
                        this.jahr = j;
                    }
                    else
                    {
                        throw error_tag;
                    }
                    break;
                case 7:
                    if ( t <= 31 )
                    {
                        this.tag = t;
                        this.monat = m;
                        this.jahr = j;
                    }
                    else
                    {
                        throw error_tag;
                    }
                    break;
                case 8:
                    if ( t <= 31 )
                    {
                        this.tag = t;
                        this.monat = m;
                        this.jahr = j;
                    }
                    else
                    {
                        throw error_tag;
                    }
                    break;
                case 9:
                    if ( t <= 30 )
                    {
                        this.tag = t;
                        this.monat = m;
                        this.jahr = j;
                    }
                    else
                    {
                        throw error_tag;
                    }
                    break;
                case 10:
                    if ( t <= 31 )
                    {
                        this.tag = t;
                        this.monat = m;
                        this.jahr = j;
                    }
                    else
                    {
                        throw error_tag;
                    }
                    break;
                case 11:
                    if ( t <= 30 )
                    {
                        this.tag = t;
                        this.monat = m;
                        this.jahr = j;
                    }
                    else
                    {
                        throw error_tag;
                    }
                    break;
                case 12:
                    if ( t <= 31 )
                    {
                        this.tag = t;
                        this.monat = m;
                        this.jahr = j;
                    }
                    else
                    {
                        throw error_tag;
                    }
                    break;
            }
        }
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Gibt den Tag des gespeicherten Datums als Zahl zurück.
     * @returns {number}
     */
    getTag()
    {
        return this.tag;
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Gibt den Monat des gespeicherten Datums als Zahl zurück.
     * @returns {number}
     */
    getMonat()
    {
        return this.monat;
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Gibt das Jahr des gespeicherten Datums als Zahl zurück.
     * @returns {number}
     */
    getJahr()
    {
        return this.jahr;
    }

    /**
     * @author Jean-Philippe Laventure
     * @description Gibt das Datum als String zurück.
     * @returns {string}
     */
    getDatumString()
    {
        return this.tag.toString() + "." + this.monat.toString() + "." +this.jahr.toString();
    }
}

//Export
module.exports = Datum;