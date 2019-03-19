const Datum = require('./Datum');
let fehlerfall;
let error_bool;
const pruefling_korrekt1 = new Datum("12.12.1945");
const pruefling_korrekt2 = new Datum("15.12.1945");
const pruefling_korrekt3 = new Datum("05.01.1945");

test('Prüfe Monat - korrekt', () => {
    expect(pruefling_korrekt1.getMonat()).toBe(12);
});

test('Prüfe Monat - führende Null - korrekt', () => {
    expect(pruefling_korrekt3.getMonat()).toBe(1);
});

test('Prüfe Tag - korrekt', () => {
    expect(pruefling_korrekt2.getTag()).toBe(15);
});

test('Prüfe Tag - führende Null - korrekt', () => {
    expect(pruefling_korrekt3.getTag()).toBe(5);
});

test('Prüfe Jahr - korrekt', () => {
    expect(pruefling_korrekt1.getJahr()).toBe(1945);
});

test('Prüfe Ausgabe-String - korrekt', () => {
    expect(pruefling_korrekt1.getDatumString()).toBe("12.12.1945");
});

test('Prüfe Eingabe-String - kein Datum', () => {
    try
    {
        fehlerfall = new Datum("Erster Erster Neunzehnhundertachtungachtzig");
    }
    catch (e)
    {
        if ( e.message === "Die Eingabe entspricht keinem gültigen Datum. " +
            "Bitte schreiben Sie das Datum in folgender Form: TT.MM.JJJJ" )
        {
            error_bool = true;
        }
        else
        {
            error_bool = false;
        }
    }
    expect(error_bool).toBe(true);
});

test('Prüfe Eingabe-String - ungültiger Zahlenwert - Jahr - alt', () => {
    try
    {
        fehlerfall = new Datum("10.10.1744");
    }
    catch (e)
    {
        if ( e.message === "Das eingegebene Jahr, der Monat oder der Tag ist ungültig/" +
            "wird nicht unterstützt." )
        {
            error_bool = true;
        }
        else
        {
            error_bool = false;
        }
    }
    expect(error_bool).toBe(true);
});

test('Prüfe Eingabe-String - ungültiger Zahlenwert - Jahr - neu', () => {
    try
    {
        fehlerfall = new Datum("10.10.2019");
    }
    catch (e)
    {
        if ( e.message === "Das eingegebene Jahr, der Monat oder der Tag ist ungültig/" +
            "wird nicht unterstützt." )
        {
            error_bool = true;
        }
        else
        {
            error_bool = false;
        }
    }
    expect(error_bool).toBe(true);
});

test('Prüfe Eingabe-String - ungültiger Zahlenwert - Monat - Null', () => {
    try
    {
        fehlerfall = new Datum("10.0.1998");
    }
    catch (e)
    {
        if ( e.message === "Das eingegebene Jahr, der Monat oder der Tag ist ungültig/" +
            "wird nicht unterstützt." )
        {
            error_bool = true;
        }
        else
        {
            error_bool = false;
        }
    }
    expect(error_bool).toBe(true);
});

test('Prüfe Eingabe-String - ungültiger Zahlenwert - Tag - Null', () => {
    try
    {
        fehlerfall = new Datum("0.01.1998");
    }
    catch (e)
    {
        if ( e.message === "Das eingegebene Jahr, der Monat oder der Tag ist ungültig/" +
            "wird nicht unterstützt." )
        {
            error_bool = true;
        }
        else
        {
            error_bool = false;
        }
    }
    expect(error_bool).toBe(true);
});

test('Prüfe Eingabe-String - ungültiger Zahlenwert - Tag - übergroß', () => {
    try
    {
        fehlerfall = new Datum("32.01.1998");
    }
    catch (e)
    {
        if ( e.message === "Das eingegebene Jahr, der Monat oder der Tag ist ungültig/" +
            "wird nicht unterstützt." )
        {
            error_bool = true;
        }
        else
        {
            error_bool = false;
        }
    }
    expect(error_bool).toBe(true);
});

test('Prüfe Eingabe-String - ungültiger Tag - Februar - Schaltjahr', () => {
    try
    {
        fehlerfall = new Datum("30.02.2000");
    }
    catch (e)
    {
        if ( e.message === "Der eingegebene Tag existiert nicht in diesem Februar." )
        {
            error_bool = true;
        }
        else
        {
            error_bool = false;
        }
    }
    expect(error_bool).toBe(true);
});

test('Prüfe Eingabe-String - ungültiger Tag - Februar - kein Schaltjahr', () => {
    try
    {
        fehlerfall = new Datum("29.02.2001");
    }
    catch (e)
    {
        if ( e.message === "Der eingegebene Tag existiert nicht in diesem Februar." )
        {
            error_bool = true;
        }
        else
        {
            error_bool = false;
        }
    }
    expect(error_bool).toBe(true);
});

test('Prüfe Eingabe-String - ungültiger Tag - Monat mit 30 Tagen', () => {
    try
    {
        fehlerfall = new Datum("31.06.2001");
    }
    catch (e)
    {
        if ( e.message === "Der eingegebene Tag existiert in diesem Monat nicht." )
        {
            error_bool = true;
        }
        else
        {
            error_bool = false;
        }
    }
    expect(error_bool).toBe(true);
});