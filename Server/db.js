const sqlite = require("sqlite3").verbose();

/**
 * Datenbankklasse
 */
class DB {

    /**
     * @author Sebastian Eberspach
     * @description Konstruktor hat den Pfad der Sqlite Datei als Parameter und
     *              erstellt eine Instanz und aktiviert die Funktion für Fremdschlüssel
     * @param db_file
     */
    constructor(db_file = "./db.sqlite3"){
        this.db = new sqlite.Database(db_file);
        // Für Fremdschlüssel aktivieren
        this.db.exec("PRAGMA foreign_key = ON");
    }

    /**
     * @author Sebastian Eberspach
     * @description Die Funktion erstellt die Tabellen "users", "genders", "haircolor", "eyescolor", "bodys", "chat",
     *              wenn Sie nicht existieren
     * @returns {Promise<void>}
     */
    async init(){
        await this.cmd("" +
            "CREATE TABLE IF NOT EXISTS users" +
            "(" +
            "usernameid TEXT NOT NULL PRIMARY KEY," +
            "password TEXT NOT NULL," +
            "Email TEXT NOT NULL," +
            "firstname TEXT NOT NULL," +
            "familyname TEXT NOT NULL," +
            "birthday TEXT NOT NULL," +
            "bodysize TEXT NOT NULL," +
            "stars_west TEXT NOT NULL," +
            "stars_china TEXT NOT NULL," +
            "stars_aszendent TEXT NOT NULL," +
            "affection TEXT NOT NULL," +
            "plz TEXT NOT NULL," +
            "place TEXT," +
            "kids_amount INTEGER NOT NULL," +
            "smoker TEXT NOT NULL," +
            "personalitytest TEXT NOT NULL," +
            "personalitynumber INTEGER NOT NULL," +
            "soulnumber INTEGER NOT NULL," +
            "destinynumber INTEGER NOT NULL," +
            "gender_id INTEGER NOT NULL," +
            "haircolor_id INTEGER NOT NULL," +
            "eyescolor_id INTEGER NOT NULL," +
            "body_id INTEGER NOT NULL," +
            "FOREIGN KEY (gender_id) REFERENCES genders(id) ON UPDATE CASCADE ON DELETE CASCADE," +
            "FOREIGN KEY (haircolor_id) REFERENCES haircolor(id) ON UPDATE CASCADE ON DELETE CASCADE," +
            "FOREIGN KEY (eyescolor_id) REFERENCES eyescolor(id) ON UPDATE CASCADE ON DELETE CASCADE," +
            "FOREIGN KEY (body_id) REFERENCES bodys(id) ON UPDATE CASCADE ON DELETE CASCADE" +
            ") WITHOUT ROWID;"
        );

        await this.cmd("" +
            "CREATE TABLE IF NOT EXISTS genders" +
            "(" +
            "id INTEGER NOT NULL PRIMARY KEY," +
            "gender TEXT UNIQUE NOT NULL" +
            ") WITHOUT ROWID;"
        );

        await this.cmd("" +
            "CREATE TABLE IF NOT EXISTS haircolor" +
            "(" +
            "id INTEGER NOT NULL PRIMARY KEY," +
            "color_hair TEXT UNIQUE NOT NULL" +
            ") WITHOUT ROWID;"
        );

        await this.cmd("" +
            "CREATE TABLE IF NOT EXISTS eyescolor" +
            "(" +
            "id INTEGER NOT NULL PRIMARY KEY," +
            "color_eyes TEXT UNIQUE NOT NULL" +
            ") WITHOUT ROWID;"
        );

        await this.cmd("" +
            "CREATE TABLE IF NOT EXISTS bodys" +
            "(" +
            "id INTEGER NOT NULL PRIMARY KEY," +
            "body TEXT UNIQUE NOT NULL" +
            ") WITHOUT ROWID;"
        );

        await this.cmd("" +
            "CREATE TABLE IF NOT EXISTS chat" +
            "(" +
            "id INTEGER NOT NULL PRIMARY KEY," +
            "transmitter TEXT NOT NULL," +
            "receiver TEXT NOT NULL," +
            "message TEXT NOT NULL" +
            ") WITHOUT ROWID;"
        );
    }


    /**
     * @author Sebastian Eberspach
     * @description Funktion mit Sql-Anweisung als Parameter, die zum Erstellen und Bearbeiten von Tabellen genutzt
     *              werden und startet die Datenbank.
     * @param sql
     * @param params
     * @returns {*}
     */
    cmd(sql,...params){
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, function (err)
            {
                if (err !== null){
                    reject(err);
                }
                if (this !== undefined){
                    resolve(this);
                }
                reject('Das sollte nie passieren! FATAL ERROR #5751515517');
            });
        })
    }

    /**
     * @author Sebastian Eberspach
     * @description Funktion mit Sql-Anweisung als Parameter und holt die Daten aus der Datenbank und jeweiligen Tabelle
     * @param sql
     * @param params
     * @returns {Promise<any>}
     */
    get_row(sql,...params){
        return new Promise((resolve, reject) => {
            this.db.get(sql, params,(err,row) =>
            {
                if (err !== null){
                    reject();
                } else {
                    resolve(row);
                }
            });
        })
    }

    /**
     * Funktion dient zum Löschen von Tabellen, wenn Sie existieren
     * @returns {Promise<any>}
     */
    cleanup() {
        return new Promise((resolve, reject) => {
            this.db.serialize(() => {
                this.db.run('DROP TABLE IF EXISTS users');
                this.db.run('DROP TABLE IF EXISTS genders');
                this.db.run('DROP TABLE IF EXISTS haircolor');
                this.db.run('DROP TABLE IF EXISTS eyescolor');
                this.db.run('DROP TABLE IF EXISTS bodys');
                this.db.run('DROP TABLE IF EXISTS chat');
                this.init().then( () => resolve() )
            });
        });
    }

}

module.exports = DB;
