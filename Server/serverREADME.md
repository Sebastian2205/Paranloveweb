# Dokumentation Partnerbörse

**Hochschule Worms CSA 151 WS 2018/19**

Sebastian Eberspach  
inf2423@hs-worms.de   
Matrikelnummer: 670537

## Requirements
    "body-parser": "^1.18.3",
    "ejs": "^2.6.1"
    "express": "^4.16.3",
    "express-session": "^1.15.6",
    "fs": "^0.0.1-security",
    "opener": "^1.5.0",
    "path": "^0.12.7",
    "sqlite3": "^4.0.2"

## Run
    $ npm install
    $ npm start

Nach dem Start muss die Seite neu geladen werden.

## Dokumentation

### Generierung und Start

Um die Dokumentation zu generieren und zu öffnen ist der folgende Befehl notwendig.

    $ npm run doc_server

Wurde die Dokumentation bereits generiert, kann sie mit dem folgenden Befehl geöffnet werden.

    $ npm run openServerDoc

Um sowohl die bereits generierten Dokumentationen von Client und Server zu öffnen, kann der folgende Befehl genutzt werden.

    $ npm run opendoc



### Projektidee

Die Projektidee war die Erstellung einer esoterischen Partnerbörse, mit dem Namen **ParanLove**. Zur Berechnung der Kompatibilität zweier Personen sollten die Astrologie, die Numerologie und ein Persönlichkeitstest basierend auf Carl Gustav Jung zu rate gezogen werden.

Insgesamt sollte der Funktionsumfang relativ klein sein (z.B. Registrierung, Login und Nachrichtenaustausch).

Eine detailiertere Beschreibung folgt und entstammt dem eingereichten Projektvorschlag.

Auf der Suche nach einem Partner für's Leben gibt es viele Ansätze. *ParanLove* verfolgt den Ansatz, dass die Liebe mehr ist als Biologie und Psychologie. Bei *ParanLove* verwenden wir deshalb einen Persönlichkeitstest nach C. G. Jung, in Kombination mit Astrologie und Numerologie (Gewichtung: 60% Persönlichkeit, 30% Astrologie und 10% Numerologie). Wenn sie nach der großen Liebe mit dem magischen Funken suchen, dann probieren Sie *ParanLove*.
Bei der Registrierung nehmen wir ihre Daten auf und zeigen Ihnen anschließend nur andere Mitglieder an, die ihren Suchkriterien entsprechen und für die wir einen Kompatibilitätswert von über 60% berechnet haben. Ihre Daten werden bei uns sicher verwahrt und können nur von unseren Mitarbeitern und potenziellen Interessenten eingesehen werden. Auf Ihren Wunsch hin können Sie sogar einstellen, dass ihre Daten auch nur den Mitgliedern angezeigt werden, die Ihren eigenen Suchkriterien entsprechen. Andere Mitglieder können Ihnen dann nur eine Anfrage für ihr Profil schicken, indem sie ihnen ihre eigenen Daten zuschicken und Ihnen die endgültige Entscheidung überlassen. Interessiert sich ein Mitglied für ein anderes können Sie unser Nachrichtensystem zur Kommunikation nutzen, sodass sie nicht gezwungen sind sensiblen Daten, wie ihre Telefonnummer oder Email-Adresse einem anderen Mitglied zu übermitteln.


### Entwicklung

Es wurde eine Sqlite Datenbank genutzt, mit den Grundfunktionen "POST" und "GET". Für die Kommunikation zwischen Client und Server wird ein "BodyParser" verwendet, um die Daten von der HTML an den Server zu senden. Desweiteren wurde "ejs" genutzt, um Daten vom Server zum Client zu senden. Die Session von "express" wurde verwendet, um die Daten einer Anmeldung zu sichern.
Die Daten zur Übertragung vom Server zum Client, werden in eine JSON gespeichert und abgerufen.
Mittels express wird der Server gehostet und ist erreichbar unter "/localhost:3011".

### Probleme
Während der Entwicklung sind einige unerwartete Fehler aufgetreten, die den Erfolg und die Funktionen eingeschränkt haben. Die Zeit war sehr begrenzt und Lösungen für einige Probleme konnten nicht gelöst werden, da einige Module nicht verwendet werden durften (z.B. socket.io).
Es gab Probleme beim Ausführen von ApiDoc und bei den Tests. Eigene Tests sind durch Probleme mit dem Gerät verloren gegangen und durch die begrenzte Zeit am Ende nicht mehr vollständig gelöst worden. **ApiDoc** wurde herausgenommen, weil es zu Problemen bei der Ausführung kam.

### Anleitung

Um den Server (und damit **ParanLove**) zu verwenden, muss dieser natürlich zunächst, wie oben beschrieben gestartet werden.
Nach der Registrierung werden die Daten in die Datenbank gespeichert und der Nutzer kann sich anmelden. Beim Anmelden werden die Daten in eine Session gespeichert und der Nutzer wird auf seine Profilseite weitergeleitet. Bei falschen Login-Daten wird ein Fehler erzeugt und es entsteht keine Weiterleitung auf die Profilseite. Nach dem Abmelden werden Sie auf die Anmeldeseite weitergeleitet.

### Ausblick & nicht umgesetzte Funktionen
    * Nachrichtensystem
    * Ausführen von weiteren Tests
    * Speicherung von Profilbildern
    * Filter-Funktionen
    * Sortierfunktionen
    * Fehlerbehandlung (und daraus folgende leichtere und angenehmere Benutzbarkeit)
    * Bearbeiten von Profilen
    * Auswahl von gezeigten Profilen mit matches
    * Nutzergesteuerte Profilfreigaben

#### Projektvorbereitung

| Aufgabe                                  | Zeit in Std | IST Zeit in Std |
|------------------------------------------|------------:| ---------------:|
| Recherche zu nutzbaren Modulen           |  3          |  3              |
| Lizenzrecherchen                         |  4          |  4              |
| Klassendiagramm                          |  1          |  1              |
| Planung Datenbank                        |  5          |  5              |
| Recherche alternativer Realisierungen    |  7          |  7              |
| Verfassen des Projektvorschlags          |  9          |  9              |
| Markdown                                 |  2          |  2              |
|                                          |             |                 |
| **Summe**                                |  **31**     | **31**          |

#### Implementierung und Validierung

| Aufgabe                                     | Zeit in Std | IST Zeit in Std |
|---------------------------------------------|------------:|----------------:|
| Einbinden der ausgewählten Module           |  1          |  2              |
| Konfiguration der eingebundenen Module      |  1          |  2              |
| Aufsetzen der Datenbank                     |  3          |  12             |
| Implementierung der API                     |  7          |  11             |
| Implementierung Login Server(/Optimierung)  |  3          |  10             |
| Implementierung Nachrichtensystem (Server)  |  3          |  1              |
| Implementierung Sortierfunktionen           |  3          |  2              |
| Implementierung Filterfunktionen            |  7          |  3              |
|                                             |             |                 |
| **Summe**                                   |  **27**     |  **43**         |                 

#### Dokumentation / Tests

| Aufgabe                                        | Zeit in Std |  IST Zeit in Std |
|------------------------------------------------|------------:| ----------------:|
| Testen der Datenbank                           |  2          |  2               |
| Testen Login (Server)                          |  1          |  1               |
| Testen der Optimierungen                       |  2          |  2               |
| Testen der Sortierfunktionen                   |  2          |  2               |
| Testen der API                                 |  4          |  4               |
| Testen der Filterfunktionen                    |  3          |  1               |
| Testen des Nachrichtensystems (Server)         |  3          |  1               |
| Dokumentation der Datenbank                    |  2          |  2               |
| Dokumentation der API                          |  5          |  5               |
| Dokumenmtation Login (Server)                  |  1          |  1               |
| Dokumentation Optimierungen                    |  2          |  2               |
| Dokumenmtation der Sortierfunktionen           |  2          |  2               |
| Dokumentation der Filterfunktionen             |  2          |  2               |
| Dokumentation des Nachrichtensystems (Server)  |  2          |  2               |
| Dokumentation Tests                            |  4          |  4               |
| Finalisierung der Dokumentation                |  2          |  2               |
| Vergleich SOLL / IST Stunden                   |  1          |  1               |
| Finalisierung der Abgabe                       |  2          |  2               |
|                                                |             |                  |
| **Summe**                                      |  **42**     |  **38**          |


#### Zusammenfassung
| Teil                                     | Zeit in Std | IST Zeit in Std |
|------------------------------------------|------------:| ---------------:|
| Projektvorbereitung                      |  31         |  31             |
| Implementierung                          |  27         |  43             |
| Dokumentation / Tests                    |  42         |  38             |
| **Summe**                                |  **100**    |  **112**        |
