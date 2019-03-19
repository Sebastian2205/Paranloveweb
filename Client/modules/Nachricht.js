// Angefangene, jedoch nicht fertiggestellte Klasse zur Realisierung des Nachrichtenaustauschs von ParanLove.
class Nachricht
{
    constructor(sender, empfaenger)
    {
        this._anfrageProfilText = " würde gern Ihr Profil betrachten.";
        this._antwortProfilText1 = " hat ihr Profil für Sie freigegeben.";
        this._antwortProfilText2 = " hat es leider abgelehnt Ihnen ihr Profil zu zeigen.";
        this._anfrageMailText = " gefällt Ihr Profil und würde Sie gerne näher kennenlernen. Wollen Sie Ihre Mail-" +
            "Adresse austauschen?";
        this._antwortMailText1 = "\'s Email-Adresse: ";
        this._antwortMailText2 = " möchte im Moment leider keine Mails austauschen.";
        this._empfaenger = empfaenger;
        this._sender = sender;
        this._inhalt = "";
    }

    anfrageProfil()
    {

    }
}