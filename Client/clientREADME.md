# ParanLove - Eine esoterische Partnerbörse
# Client
**Hochschule Worms CSA 151 WS 2018/19**

Jean - Philippe Laventure
inf2456@hs-worms.de
Matrikelnummer: 670867

## Requirements
    "body-parser": "^1.18.3",
    "ejs": "^2.6.1"

## Run
    $ npm install
    $ npm start

Nach dem Start muss die Seite neu geladen werden.

## Dokumentation

### Generierung und Start

Um die Dokumentation zu generieren und zu öffnen ist der folgende Befehl notwendig.

    $ npm run doc_client

Wurde die Dokumentation bereits generiert, kann sie mit dem folgenden Befehl geöffnet werden.

    $ npm run openClientDoc

Um sowohl die bereits generierten Dokumentationen von Client und Server zu öffnen, kann der folgende Befehl genutzt werden.

    $ npm run opendoc

### Projektidee

Die Projektidee war die Erstellung einer esoterischen Partnerbörse, mit dem Namen **ParanLove**. Zur Berechnung der Kompatibilität zweier Personen sollten die Astrologie, die Numerologie und ein Persönlichkeitstest basierend auf Carl Gustav Jung zu rate gezogen werden.

Insgesamt sollte der Funktionsumfang relativ klein sein (z.B. Registrierung, Login und Nachrichtenaustausch).

Eine detailiertere Beschreibung folgt und entstammt dem eingereichten Projektvorschlag.

    Auf der Suche nach einem Partner für's Leben gibt es viele Ansätze. *ParanLove* verfolgt den Ansatz, dass die Liebe mehr ist als Biologie und Psychologie. Bei *ParanLove* verwenden wir deshalb einen Persönlichkeitstest nach C. G. Jung, in Kombination mit Astrologie und Numerologie (Gewichtung: 60% Persönlichkeit, 30% Astrologie und 10% Numerologie). Wenn sie nach der großen Liebe mit dem magischen Funken suchen, dann probieren Sie *ParanLove*.
    Bei der Registrierung nehmen wir ihre Daten auf und zeigen Ihnen anschließend nur andere Mitglieder an, die ihren Suchkriterien entsprechen und für die wir einen Kompatibilitätswert von über 60% berechnet haben. Ihre Daten werden bei uns sicher verwahrt und können nur von unseren Mitarbeitern und potenziellen Interessenten eingesehen werden. Auf Ihren Wunsch hin können Sie sogar einstellen, dass ihre Daten auch nur den Mitgliedern angezeigt werden, die Ihren eigenen Suchkriterien entsprechen. Andere Mitglieder können Ihnen dann nur eine Anfrage für ihr Profil schicken, indem sie ihnen ihre eigenen Daten zuschicken und Ihnen die endgültige Entscheidung überlassen. Interessiert sich ein Mitglied für ein anderes können Sie unser Nachrichtensystem zur Kommunikation nutzen, sodass sie nicht gezwungen sind sensiblen Daten, wie ihre Telefonnummer oder Email-Adresse einem anderen Mitglied zu übermitteln.

### Entwicklung

Entgegen der ursprünglichen Planung mussten aufgrund falscher Annahmen, unerwarteten Problemen mit TypeScript und daraus resultierenden Zeitproblemen mehrere Abstriche und Veränderungen vorgenommen werden.

Die ursprüngliche Planung war es gewesen die berechnete Kompatibilität zwischen dem Nutzer und den potenziellen Partnern in Prozent anzugeben. Hierzu sollten ausgewählte Webseiten als Quellen verwendet werden, doch erst zu Beginn der Programmierung wurden die Seiten tatsächlich aufgerufen. Dabei zeigte sich, dass sämtliche der dem Entwickler des Clients (Jean - Philippe Laventure) bekannten Seiten über Astrologie (darunter die Website **Luckysouls** (einer Webseite über westliche, indianische, keltische und chinesische Sternzeichen, Numerologie und anderen esoterischen Themen in dieser Richtung)) von hoher Qualität oder mit Prozentangaben der Kompatibilität zwischen den Sternzeichen entweder nicht mehr existieren. Stattdessen wurden andere Webseiten gesucht, wobei der Qualitätsanspruch nicht länger gewahrt wurde. Um jedoch kein rein zufälliges Ergebnis zu haben, wurden (in Bezug auf die Astrologie) nicht nur eine Seite, sondern dreiinsgesamt drei konsultiert.

Zur Bestimmung der Kompatibilität zwischen den Sternzeichen wurden die folgenden Webseiten konsultiert:

 * https://de.wikipedia.org/wiki/Chinesische_Astrologie (zuletzt aufgerufen am 31.01.2019)
 * https://de.wikipedia.org/wiki/Tierkreiszeichen (zuletzt aufgerufen am 22.01.2019)
 * https://wissen.naanoo.de/esoterik/sternzeichen (zuletzt aufgerufen am 22.01.2019)
 * https://www.brigitte.de/horoskop/sternzeichen/ (zuletzt aufgerufen am 22.01.2019)
 * https://www.schicksal.com/horoskop/Chinesisches-Sternzeichen (zuletzt aufgerufen am 31.01.2019)

Die Inhalte der Seiten wurden gegeneinander abgewogen und gegebenenfalls vom verantwortlichen Entwickler (Jean - Philippe Laventure) interpretiert. Da diese Software als Teil eines Hochschulprojekts erstellt wurde, wurde die Verwendung von Tools und Modulen von Dritten auf ein Minimum beschränkt und deshalb auch auf die Nutzung solcher Programme (zur Bestimmung der Sternzeichen und des Aszendenten einer Person) verzichtet. Eine Recherche (wurde nach knapp 2 Stunden abgebrochen) ergab, dass der notwendige Aufwand (zur Berechnung der betrachteten Eigenschaften) die zeitlichen Vorgaben des Projekts überstiegen hätte (z.B. die Bestimmung der GPS-Koordinaten bei der Geburt einer Person oder die Diskrepanzen, die sich aus dem Unterschied zwischen Mond- und Sonnenkalendern ergeben), weshalb Verallgemeinerungen vorgenommen wurden. Ein Beispiel hierfür (und dafür, dass diese Software dennoch genauer ist, als so manche Webseite) ist der Beginn des chinesischen neuen Jahres. Das chinesische Jahr (bezogen auf die Astrologie) wird mit einem Lunisolarkalender gemessen, wonach das neue Jahr immer auf den 2. Neumond nach der Wintersonnenwende fällt. Trotzdem finden sich zahlreiche Webseiten laut denen der Wechsel des Sternzeichens mit der weltweiten Silvesternacht zusammenfällt. Des Weiteren wurden auch nur die Sternzeichen (sowie der Aszenden (Falls bekannt)) bei der Berechnung der Kompatibilität von zwei Personen berücksichtigt und nicht etwa noch die Vier- oder Fünf- Elementelehre.

Auch im Bereich der Numerologie wurden Abstriche gemacht und nicht alle existierenden Zahlen berechnet, sowie teilweise vereinfacht. Sämtliche Berechnungen basieren auf dem Buch **Geheime Künste - Numerologie (von Dawne Kovan (ISBN 3-8228-3324-X))**. Es ist außerdem festzuhalten, dass der Buchstabe "Y" bei der Berechnung der Persönlichkeitszahl je nachdem, ob er als Konsonant der Vokal gelesen wird anders verarbeitet wird. Leider konnte die Umsetzung hiervon nicht fristgerecht umgesetzt werden, weshalb Fragmente noch zu Dokumentationszwecken im Projekt enthalten sind, ohne einen tatsächlichen Nutzen zu erzielen.

Neben den Gebieten Astrologie und Numerologie kann die Kompatibilitätsberechnung auch die Persönlichkeitstypen von der Seite **TypenTest (http://www.typentest.de/)** verarbeiten. Der dortige Persönlichkeitstest basiert auf Carl Gustav Jung und zur Auswertung für dieses Projekt wurden die beiden Sprichwörter "Gleich und gleich gesellt sich gern." und "Gegensätze ziehen sich an." benutzt. Ein positiver Match der Persönlichkeitstypen kann nur dann zustande kommen, wenn mindestens 2 Persönlichkeits-Eigenschaften identisch und wenigstens 1 Persönlichkeits-Eigenschaft unterschiedlich ist.

Trotz der Schwierigkeiten des Client-Entwicklers (Jean-Philippe Laventure) mit Javascript (speziell mit der fehlenden Typen-Bindung) entwickelte sich das Projekt zunächst in durchschnittlichem Tempo, durch den Einsatz von TypeScript. Die Probleme damit entstanden nachdem die ersten Module bereits fertig waren und diese getestet und ausführlicher dokumentiert werden sollten. Trotz Stunden der Recherche gelang es dem Client-Entwickler nicht TypeScript in Kombination mit **Jest** und **JSDoc** zu verweden. Mit zunehmendem Näherrücken des Abgabetermins wurde die Entscheidung getroffen auf reines Javascript zu wechsen und nach ca. 1,5 Tagen war der frühere TypeScript-Code auch in Javascript ausführbar. Leider hielten die Probleme mit **Jest** an. Während die Tests sich mit TypeScript erst gar nicht ausführen ließen, gab es Informationen auf der Konsole(/in Webstorm), die drei unabhängige Personen nicht nachvollziehen konnten. Der folgende Code wurde (auf der Fehlersuche zu Testzwecken) tatsächlich in einer .js-Datei untergebracht und anschließend mit **Jest** getestet.

    function count_up(zahl)
    {
        return zahl + 1;
    }

Diese Funktion wurde in folgendem Test verwendet.

    test('Zähle um 1 hoch', () => {
        expect(count_up(1)).toBe(2);
    });

Nicht nachvollziehbarer Weise lief der Test schief und gab zurück, dass der Wert 2 erwartet worden war, jedoch der Wert 1 entgegengenommen wurde.

Die Liste solcher nicht nachvollziehbaren fehlgeschlagener Test wurde nicht komplett festgehalten, doch hier einige der besonders herausragenden Fälle.
 * Eine Funktion wurde in 3 unterschiedlichen Projekten ausgeführt und getestet und führte (trotz Copy-Paste) zu 3 unterschiedlichen Fehlermeldungen.
 * Eine Funktion, die lediglich zwei Zahlen entgegennahm und 1 zurückliefern sollte, wenn die erste Zahl größer als die Zweite war, 2 wenn sie kleiner und 3 wenn beide gleich groß waren. Bei dem Test mit zwei Zahlen (in allen Tests im Intervall 1 bis 20) kam in Webstorm (mit **Jest**) die Anzeige, dass der Test den Wert "EPHGe" übergeben bekommen hat.
 * Tests die an einem Tag durchliefen (inklusive grünem Harken beim Öffnen des Projektes am Folgetag) schlugen am nächtsten Tag fehl, obwohl der einzige veränderte Code in keinem Zusammenhang zu der getesteten Funktion stand.
 * Mehrere Tests schlugen plötzlich fehl und liefen (unverändert) wieder erfolgreich durch, nachdem der Code (ACHTUNG: Der Code, nicht die Dateien, sonst blieb das Problem bestehen) in ein neues Projekt kopiert worden war.

Aufgrund des beachtlichen Zeitverlustes den dies zur Folge hatte kam es zu weiteren Abstrichen im Projekt.

#### Weitere Probleme

Während der Großteil der nicht umgesetzten, jedoch im Projektvorschlag aufgeführten, Funktionalitäten und Darstellungsformen den oben beschriebenen Schwierigkeiten geschuldet sind, gilt dies jedoch nicht für alle. Im Verlauf des Projektes hatte das Entwicklerteam den Dozenten und Betreuer des Hochschulprojektes kontaktiert um abzuklären, ob sie das Modul **js-sha3** (https://github.com/emn178/js-sha3) verwenden dürften (um die Passwörter der Nutzer der Partnerbörse zu hashen) und erhielten eine Bestätigung. Als das Modul dann jedoch zum Einsatz kommen sollte, ergaben sich Probleme beim Einbinden in eine HTML-Datei und schließlich wurde aus Zeitdruck das gesamte Hashing gestrichen.

Nach zahlreichen Problemen bei der Generierung von DOM-Elementen (in Javascript-Dateien) und deren Einfügung in HTML-Dateien, wurde entschieden, dass wesentlich mehr Code direkt in die HTML-Dateien geschrieben werden sollte. Dennoch wollte man sich durdh den Einsatz dynamische Techniken Zeit und Arbeit ersparen (z.B. Durchlaufen und Speichern der Nutzereingaben bei der Registrierung, mit Hilfe einer Schleife, der "getElementById()"-Funktion und einem Array mit den ID's aller Eingabefelder), doch auch dies scheiterte (unter Fehlermeldungen, dass die auf diese Weise aufgerufenen Werte undefiniert seien (Hinweis: Eine kurze Probe hatte gezeigt, dass das Auslesen zu keinem Fehler führte, wenn die Element-Id direkt im Code angegeben und nicht innerhalb der Schleife eingefügt wurde)) und führte zu dem stark statischen Code der finalen Version.

Die Fehlerbehandlung war bis kurz vor den Abgabetermin nur angefangen, aber von einer sinnvollen Nutzung noch weit entfernt. Von der Definition mehrerer Fehlermeldungen selbst fehlt sie bedauerlicherweise völlig.

### Verwendung/Anleitung

Um den Client (und damit **ParanLove**) zu verwenden, muss dieser natürlich zunächst, wie oben beschrieben gestartet werden.

Existiert bereits ein Nutzer-Account, kann man sich direkt einloggen oder die Weiterleitung nutzen, um zur Registrierung zu gelangen. An dieser Stelle sei darauf hingewiesen, dass die Links zur Hilfeseite, sowie dem Impressum und dem Datenschutz so angelegt wurden, dass man nur durch die Browserfunktion, die zuletzt besuchte Seite aufzurufen, wieder zum Rest des Clients gelangen kann.

Im Home-Bereich sollte der Nutzer zunächst die Kurzinformation (Nutzername, Geschlecht, Geburtstag und Postleitzahl) seiner potenziellen Partner angezeigt bekommen. Leider konnte dies nicht rechtzeitig umgesetzt werden. Stattdessen bekommt nun der Nutzer seine eigenen Profildaten im Home-Bereich angezeigt. Ausloggen kann sich der Benutzer über einen Schalter unter den Profildaten.

Weitere Funktionen wurden leider nicht rechtzeitig fertiggestellt.

### Ausblick & nicht umgesetzte Funktionen
    * Nachrichtensystem
    * Korrekte Behandlung des Buchstaben "Y"
    * Profilbilder
    * Filter-Funktionen
    * Sortierfunktionen
    * Fehlerbehandlung (und daraus folgende leichtere und angenehmere Benutzbarkeit)
    * Berechnung des Aszendenten
    * Berechnungen weiterer Zahlen aus der Numerologie und Entfernung der Vereinfachungen aus diesem Bereich
    * Nutzergesteuerte Profilfreigaben


### Aufwand

| Aufgabe                                           | Schätzung(Soll) - Zeit in Std. | Realzeit(Ist) - Zeit in Std. |
|---------------------------------------------------|--------------------------------|-----------------------------:|
| Wireframe Mobil                                   |  3                             |  3                           |
| Wireframe Desktop                                 |  3                             |  3                           |
| Wireframe Matching-Profil                         |  1.5                           |  1.5                         |
| Recherchen Astrologie                             |  4.5                           |  4.5                         |
|     - Westliche Sternzeichen                      |  (2)                           |  (2)                         |
|     - Chinesische Sternzeichen                    |  (1.5)                         |  (1.5)                       |
|     - Aszendenten                                 |  (1)                           |  (1)                         |
| Recherchen Numerologie                            |  3                             |  3                           |
|     - Allgemeine Recherchen                       |  (1)                           |  (1)                         |
|     - Selektion der verwendeten Zahlen            |  (0.5)                         |  (0.5)                       |
|     - Genauere Recherchen zu den gewählten Zahlen |  (1)                           |  (1)                         |
|     - Bestimmung der Gewichtung                   |  (0.5)                         |  (0.5)                       |
| Recherchen Persönlichkeitstest (C. G. Jung)       |  2                             |  2                           |
| Klassendiagramm                                   |  1.5                           |  1.5                         |
| Aufbau API                                        |  1                             |  1                           |
| Verfassen des Projektvorschlags                   |  9                             |  9                           |
| Markdown                                          |  3                             |  3                           |
|                                                   |                                |                              |
| **Summe**                                         |  **31.5**                      |  **31.5**                    |


### Implementierung

| Aufgabe                                           | Schätzung(Soll) - Zeit in Std. | Realzeit(Ist) - Zeit in Std. | Hinweis                          |
|---------------------------------------------------|--------------------------------|------------------------------|---------------------------------;|
| HTML-Grundgerüst Hauptscreen/Home                 |  2                             |  4                           |                                  |
|     - Desktop (Home)                              |  (1)                           |  (2)                         |                                  |
|     - Mobil (Hauptscreen)                         |  (0.5)                         |  (1.5)                       |                                  |
|     - Login                                       |  (0.5)                         |  (0.5)                       |                                  |
| HTML-Grundgerüst Hilfe-Funktion                   |  1                             |  1                           |                                  |
| HTML-Grundgerüst Datenschutz & Impressum          |  1                             |  2                           |                                  |
| HTML-Grundgerüst Nutzerprofil                     |  1.5                           |  2.5                         |                                  |
| HTML-Grundgerüst Nachrichtensystem                |  1.5                           |  1                           |                                  |
| SCSS-Styling                                      |  3                             |  3                           | wurde zu CSS                     |
|     - Basis                                       |  (1)                           |  (0.5)                       |                                  |
|     - Ausarbeitung                                |  (2)                           |  (2.5)                       |                                  |
| Ausarbeitung HTML                                 |  9                             |  11                          |                                  |
|     - Ausarbeitung Home                           |  (3)                           |  (5)                         |                                  |
|     - Ausarbeitung Hauptscreen                    |  (1)                           |  (2)                         |                                  |
|     - Ausarbeitung Login                          |  (1)                           |  (1)                         |                                  |
|     - Ausarbeitung Hilfe-Funktion                 |  (0.5)                         |  (0.5)                       |                                  |
|     - Ausarbeitung Datenschutz & Impressum        |  (1)                           |  (0.5)                       |                                  |
|     - Ausarbeitung Nutzerprofil                   |  (1)                           |  (1)                         |                                  |
|     - Ausarbeitung Nachrichtensystem              |  (1.5)                         |  (1)                         |                                  |
| Implementierung Numerologie - Funktionen          |  2                             |  4                           |                                  |
|     - Seelenzahl                                  |  (0.5)                         |  (1)                         |                                  |
|     - Persönlichkeitszahl                         |  (0.5)                         |  (1.5)                       |                                  |
|     - Schicksalszahl                              |  (0.5)                         |  (1)                         |                                  |
|     - Hilfsfunktionen                             |  (0.5)                         |  (0.5)                       |                                  |
| Implementierung Login (Client)                    |  1                             |  1                           |                                  |
| Implementierung Hilfe-Funktion                    |  1                             |  1                           | wurde schließlich gestrichen     |
| Implementierung Nachrichtensystem (Client)        |  3                             |  2                           |                                  |
|     - Nachrichten empfangen                       |  (0.5)                         |  (0.5)                       |                                  |
|     - Nachrichten anzeigen/lesen                  |  (1)                           |  (0.5)                       |                                  |
|     - Nachrichten schreiben                       |  (1)                           |  (1)                         |                                  |
|     - Nachrichten löschen                         |  (0.5)                         |  0                           | wurde gestrichen                 |
| Implementierung Sternzeichen - Funktionen         |  5                             |  6                           |                                  |
|     - Sternzeichen bestimmen                      |  (2)                           |  (2)                         |                                  |
|     - Aszendent bestimmen                         |  (1.5)                         |  (2)                         |                                  |
|     - Chinesisches Sternzeichen bestimmen         |  (1.5)                         |  (2)                         |                                  |
| Implementierung Persönlichkeitstest               |  2                             |  4                           | wurde fast vollständig gelöscht  |
| Implementierung Registrierung                     |  2                             |  4                           |                                  |
|     - Registrierung allgemein                     |  (1)                           |  (1)                         |                                  |
|     - Auswertung der Nutzereingaben               |  (1)                           |  (3)                         |                                  |
| Implementierung Bearbeitung des Nutzerprofils     |  2                             |  3                           |                                  |
|                                                   |                                |                              |                                  |
| **Summe**                                         |  **37**                        |  **49.5**                    |                                  |

#### Dokumentation / Tests

| Aufgabe                                           | Schätzung(Soll) - Zeit in Std. | Realzeit(Ist) - Zeit in Std. |
|---------------------------------------------------|--------------------------------|-----------------------------:|
| Dokumentation Projektidee                         |  1                             |  0.5                         |
| Validierung HTML                                  |  1.5                           |  0                           |
| Testen der Benutzeroberfläche                     |  2.5                           |  1                           |
| Testen der Benutzereingaben                       |  2.5                           |  0.5                         |
| Testen Numerlologie - Funktionen                  |  2                             |  1.5                         |
| Testen Login(Client)                              |  1                             |  0.5                         |
| Testen Hilfe-Funktion                             |  1                             |  0.25                        |
| Testen Nachrichtensystem (Client)                 |  1                             |  0                           |
| Testen Sternzeichen - Funktionen                  |  1                             |  3                           |
| Testen Persönlichkeitstest                        |  1                             |  1.5                         |
| Testen Registrierung                              |  1                             |  1                           |
| Dokumentation HTML                                |  1.5                           |  0.5                         |
| Dokumentation SCSS-Styling                        |  1                             |  1                           |
| Dokumentation Numerlologie - Funktionen           |  1                             |  1                           |
| Dokumentation Login(Client) & Hilfe-Funktion      |  1                             |  0.5                         |
| Dokumentation Nachrichtensystem (Client)          |  0.5                           |  0.5                         |
| Dokumentation Sternzeichen - Funktionen           |  1                             |  1                           |
| Dokumentation Persönlichkeitstest                 |  1.5                           |  1                           |
| Dokumentation Registrierung                       |  1                             |  0.5                         |
| Dokumentation Bearbeitung des Nutzerprofils       |  0.5                           |  0.5                         |
| Dokumentation Tests                               |  4                             |  0.25                        |
| Finalisierung der Dokumentation                   |  2                             |  3.5                         |
| Vergleich SOLL / IST Stunden                      |  1                             |  1                           |
| Finalisierung der Abgabe                          |  2                             |  0.5                         |
|                                                   |                                |                              |
| **Summe**                                         |  **33.5**                      |  **21.5**                            |

#### Zusammenfassung
| Teil                                     | Schätzung - Zeit in Std. | Realzeit - Zeit in Std. |
|------------------------------------------|--------------------------|------------------------:|
| Projektvorbereitung                      |   31.5                   |  31.5                   |
| Implementierung                          |   37                     |  49.5                   |
| Dokumentation / Tests                    |   33.5                   |  21.5                   |
|                                          |                          |                         |
| **Summe**                                |   **102**                |  **102.5**              |
