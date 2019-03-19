const DB = require("./db");

/**
 * @author Sebastian Eberspach
 * @description Diese Funktion berechnet die höchste ID, der jeweiligen Tabelle und inkrementiert den Wert
 * @param tablename
 * @returns {Promise<number>}
 */
async function maxIDs (tablename) {
    const db = new DB();
    let maxID = await db.get_row("SELECT max(id) + 1 AS next_id FROM " + tablename);
    if (!maxID.next_id) {
        maxID.next_id = 1;
    }

    return maxID.next_id;

}


module.exports.maxIDs = maxIDs;
