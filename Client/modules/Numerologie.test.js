const Numerologie = require('./Numerologie');
const Datum = require('./Datum');
const geburtstagTimTester = new Datum("01.01.1990");

const konstant = new Numerologie("TimTester", geburtstagTimTester);

test('Prüfe Berechnung der Seelenzahl - korrekt', () => {
    expect(konstant.seelenzahl("MaxMustermann")).toBe(1);
});

test('Prüfe Berechnung der Seelenzahl - korrekt - intern', () => {
    const max = new Numerologie("MaxMustermann", geburtstagTimTester);
    expect(konstant.seelenzahl_intern()).toBe(1);
});

describe('Prüfe Berechnung der Quersumme für die Persönlichkeitszahl', () => {
    test('Prüfe Berechnung der Quersumme für die Persönlichkeitszahl - korrekt - kleiner 10', () => {
        expect(konstant.quersummePersoenlichkeitszahl(1)).toBe(1);
    });

    test('Prüfe Berechnung der Quersumme für die Persönlichkeitszahl - korrekt - gleich 10', () => {
        expect(konstant.quersummePersoenlichkeitszahl(10)).toBe(1);
    });

    test('Prüfe Berechnung der Quersumme für die Persönlichkeitszahl - korrekt - gleich 11', () => {
        expect(konstant.quersummePersoenlichkeitszahl(11)).toBe(11);
    });

    test('Prüfe Berechnung der Quersumme für die Persönlichkeitszahl - korrekt - gleich 22', () => {
        expect(konstant.quersummePersoenlichkeitszahl(22)).toBe(22);
    });

    test('Prüfe Berechnung der Quersumme für die Persönlichkeitszahl - korrekt - größer 10 und ungleich 11 und 22', () => {
        expect(konstant.quersummePersoenlichkeitszahl(12)).toBe(3);
    });

    test('Prüfe Berechnung der Quersumme für die Persönlichkeitszahl - korrekt - größer 22', () => {
        expect(konstant.quersummePersoenlichkeitszahl(25)).toBe(7);
    });
});

describe('Prüfe Getter', () => {
    test('Prüfe Getter - Name', () => {
        expect(konstant.getName()).toBe("TimTester");
    });

    test('Prüfe Getter - Geburtstag', () => {
        const geburtstagsKopie = new Datum("01.01.1990");
        expect(konstant.getGeburtstag().getDatumString()).toBe(geburtstagsKopie.getDatumString());
    });
});

describe('Prüfe auf Vokal', () => {
    test('Prüfe auf Vokal - ist Vokal - A', () => {
        expect(konstant.pruefeAufVokal("A")).toBe(true);
    });

    test('Prüfe auf Vokal - ist Vokal - a', () => {
        expect(konstant.pruefeAufVokal("a")).toBe(true);
    });

    test('Prüfe auf Vokal - ist Vokal - E', () => {
        expect(konstant.pruefeAufVokal("E")).toBe(true);
    });

    test('Prüfe auf Vokal - ist Vokal - e', () => {
        expect(konstant.pruefeAufVokal("e")).toBe(true);
    });

    test('Prüfe auf Vokal - ist Vokal - I', () => {
        expect(konstant.pruefeAufVokal("I")).toBe(true);
    });

    test('Prüfe auf Vokal - ist Vokal - i', () => {
        expect(konstant.pruefeAufVokal("i")).toBe(true);
    });

    test('Prüfe auf Vokal - ist Vokal - O', () => {
        expect(konstant.pruefeAufVokal("O")).toBe(true);
    });

    test('Prüfe auf Vokal - ist Vokal - o', () => {
        expect(konstant.pruefeAufVokal("o")).toBe(true);
    });

    test('Prüfe auf Vokal - ist Vokal - U', () => {
        expect(konstant.pruefeAufVokal("U")).toBe(true);
    });

    test('Prüfe auf Vokal - ist Vokal - u', () => {
        expect(konstant.pruefeAufVokal("u")).toBe(true);
    });

    test('Prüfe auf Vokal - ist Vokal - Y', () => {
        expect(konstant.pruefeAufVokal("Y")).toBe(true);
    });

    test('Prüfe auf Vokal - ist Vokal - y', () => {
        expect(konstant.pruefeAufVokal("y")).toBe(true);
    });

    test('Prüfe auf Vokal - ist Konsonant - B', () => {
        expect(konstant.pruefeAufVokal("B")).toBe(false);
    });

    test('Prüfe auf Vokal - ist Konsonant - z', () => {
        expect(konstant.pruefeAufVokal("z")).toBe(false);
    });
});

describe('Anpassung der definierten Zeichen', () => {
    test('Anpassung der definierten Zeichen - Erfolg - Ä - groß', () => {
        expect(konstant.standardisiereName("Äther")).toBe("Aether");
    });

    test('Anpassung der definierten Zeichen - Erfolg - ä - klein', () => {
        expect(konstant.standardisiereName("äther")).toBe("aether");
    });

    test('Anpassung der definierten Zeichen - Erfolg - Ö - groß', () => {
        expect(konstant.standardisiereName("Öffi")).toBe("Oeffi");
    });

    test('Anpassung der definierten Zeichen - Erfolg - ö - klein', () => {
        expect(konstant.standardisiereName("ölig")).toBe("oelig");
    });

    test('Anpassung der definierten Zeichen - Erfolg - Ü - groß', () => {
        expect(konstant.standardisiereName("Überflieger")).toBe("Ueberflieger");
    });

    test('Anpassung der definierten Zeichen - Erfolg - ü - klein', () => {
        expect(konstant.standardisiereName("übersteuern")).toBe("uebersteuern");
    });

    test('Anpassung der definierten Zeichen - Erfolg - ß', () => {
        expect(konstant.standardisiereName("Straße")).toBe("Strasse");
    });
});

describe('Prüfung des berechneten Zahlenwertes', () => {
    test('Prüfung des berechneten Zahlenwertes - A - groß', () => {
        expect(konstant.zeichenwert("A")).toBe(1);
    });

    test('Prüfung des berechneten Zahlenwertes - a - klein', () => {
        expect(konstant.zeichenwert("a")).toBe(1);
    });

    test('Prüfung des berechneten Zahlenwertes - B - groß', () => {
        expect(konstant.zeichenwert("B")).toBe(2);
    });

    test('Prüfung des berechneten Zahlenwertes - b - klein', () => {
        expect(konstant.zeichenwert("b")).toBe(2);
    });

    test('Prüfung des berechneten Zahlenwertes - C - groß', () => {
        expect(konstant.zeichenwert("C")).toBe(3);
    });

    test('Prüfung des berechneten Zahlenwertes - c - klein', () => {
        expect(konstant.zeichenwert("c")).toBe(3);
    });

    test('Prüfung des berechneten Zahlenwertes - D - groß', () => {
        expect(konstant.zeichenwert("D")).toBe(4);
    });

    test('Prüfung des berechneten Zahlenwertes - d - klein', () => {
        expect(konstant.zeichenwert("d")).toBe(4);
    });

    test('Prüfung des berechneten Zahlenwertes - E - groß', () => {
        expect(konstant.zeichenwert("E")).toBe(5);
    });

    test('Prüfung des berechneten Zahlenwertes - e - klein', () => {
        expect(konstant.zeichenwert("e")).toBe(5);
    });

    test('Prüfung des berechneten Zahlenwertes - F - groß', () => {
        expect(konstant.zeichenwert("F")).toBe(6);
    });

    test('Prüfung des berechneten Zahlenwertes - f - klein', () => {
        expect(konstant.zeichenwert("f")).toBe(6);
    });

    test('Prüfung des berechneten Zahlenwertes - G - groß', () => {
        expect(konstant.zeichenwert("G")).toBe(7);
    });

    test('Prüfung des berechneten Zahlenwertes - g - klein', () => {
        expect(konstant.zeichenwert("g")).toBe(7);
    });

    test('Prüfung des berechneten Zahlenwertes - H - groß', () => {
        expect(konstant.zeichenwert("H")).toBe(8);
    });

    test('Prüfung des berechneten Zahlenwertes - h - klein', () => {
        expect(konstant.zeichenwert("h")).toBe(8);
    });

    test('Prüfung des berechneten Zahlenwertes - I - groß', () => {
        expect(konstant.zeichenwert("I")).toBe(9);
    });

    test('Prüfung des berechneten Zahlenwertes - i - klein', () => {
        expect(konstant.zeichenwert("i")).toBe(9);
    });

    test('Prüfung des berechneten Zahlenwertes - J - groß', () => {
        expect(konstant.zeichenwert("J")).toBe(1);
    });

    test('Prüfung des berechneten Zahlenwertes - j - klein', () => {
        expect(konstant.zeichenwert("j")).toBe(1);
    });

    test('Prüfung des berechneten Zahlenwertes - K - groß', () => {
        expect(konstant.zeichenwert("K")).toBe(2);
    });

    test('Prüfung des berechneten Zahlenwertes - k - klein', () => {
        expect(konstant.zeichenwert("k")).toBe(2);
    });

    test('Prüfung des berechneten Zahlenwertes - L - groß', () => {
        expect(konstant.zeichenwert("L")).toBe(3);
    });

    test('Prüfung des berechneten Zahlenwertes -l - klein', () => {
        expect(konstant.zeichenwert("l")).toBe(3);
    });

    test('Prüfung des berechneten Zahlenwertes - M - groß', () => {
        expect(konstant.zeichenwert("M")).toBe(4);
    });

    test('Prüfung des berechneten Zahlenwertes - m - klein', () => {
        expect(konstant.zeichenwert("m")).toBe(4);
    });

    test('Prüfung des berechneten Zahlenwertes - N - groß', () => {
        expect(konstant.zeichenwert("N")).toBe(5);
    });

    test('Prüfung des berechneten Zahlenwertes - n - klein', () => {
        expect(konstant.zeichenwert("n")).toBe(5);
    });

    test('Prüfung des berechneten Zahlenwertes - O - groß', () => {
        expect(konstant.zeichenwert("O")).toBe(6);
    });

    test('Prüfung des berechneten Zahlenwertes - o - klein', () => {
        expect(konstant.zeichenwert("o")).toBe(6);
    });

    test('Prüfung des berechneten Zahlenwertes - P - groß', () => {
        expect(konstant.zeichenwert("P")).toBe(7);
    });

    test('Prüfung des berechneten Zahlenwertes - p - klein', () => {
        expect(konstant.zeichenwert("p")).toBe(7);
    });

    test('Prüfung des berechneten Zahlenwertes - Q - groß', () => {
        expect(konstant.zeichenwert("Q")).toBe(8);
    });

    test('Prüfung des berechneten Zahlenwertes - q - klein', () => {
        expect(konstant.zeichenwert("q")).toBe(8);
    });

    test('Prüfung des berechneten Zahlenwertes - R - groß', () => {
        expect(konstant.zeichenwert("R")).toBe(9);
    });

    test('Prüfung des berechneten Zahlenwertes - r - klein', () => {
        expect(konstant.zeichenwert("r")).toBe(9);
    });

    test('Prüfung des berechneten Zahlenwertes - S - groß', () => {
        expect(konstant.zeichenwert("S")).toBe(1);
    });

    test('Prüfung des berechneten Zahlenwertes - s - klein', () => {
        expect(konstant.zeichenwert("s")).toBe(1);
    });

    test('Prüfung des berechneten Zahlenwertes - T - groß', () => {
        expect(konstant.zeichenwert("T")).toBe(2);
    });

    test('Prüfung des berechneten Zahlenwertes - t - klein', () => {
        expect(konstant.zeichenwert("t")).toBe(2);
    });

    test('Prüfung des berechneten Zahlenwertes - U - groß', () => {
        expect(konstant.zeichenwert("U")).toBe(3);
    });

    test('Prüfung des berechneten Zahlenwertes - u - klein', () => {
        expect(konstant.zeichenwert("u")).toBe(3);
    });

    test('Prüfung des berechneten Zahlenwertes - V - groß', () => {
        expect(konstant.zeichenwert("V")).toBe(4);
    });

    test('Prüfung des berechneten Zahlenwertes - v - klein', () => {
        expect(konstant.zeichenwert("v")).toBe(4);
    });

    test('Prüfung des berechneten Zahlenwertes - W - groß', () => {
        expect(konstant.zeichenwert("W")).toBe(5);
    });

    test('Prüfung des berechneten Zahlenwertes - w - klein', () => {
        expect(konstant.zeichenwert("w")).toBe(5);
    });

    test('Prüfung des berechneten Zahlenwertes - X - groß', () => {
        expect(konstant.zeichenwert("X")).toBe(6);
    });

    test('Prüfung des berechneten Zahlenwertes - x - klein', () => {
        expect(konstant.zeichenwert("x")).toBe(6);
    });

    test('Prüfung des berechneten Zahlenwertes - Y - groß', () => {
        expect(konstant.zeichenwert("Y")).toBe(7);
    });

    test('Prüfung des berechneten Zahlenwertes - y - klein', () => {
        expect(konstant.zeichenwert("y")).toBe(7);
    });

    test('Prüfung des berechneten Zahlenwertes - Z - groß', () => {
        expect(konstant.zeichenwert("Z")).toBe(8);
    });

    test('Prüfung des berechneten Zahlenwertes - z - klein', () => {
        expect(konstant.zeichenwert("z")).toBe(8);
    });
});
