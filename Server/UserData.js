const DB = require("./db");

/**
 * @author Sebastian Eberspach
 * @description Die Funktion zeigt das Geschlecht mit der gesuchten ID
 * @param gender_id
 * @returns {Promise<void>}
 */
async function getGender (gender_id) {
    const db = new DB();
    let gender = await db.get_row("SELECT gender FROM genders WHERE id = ?", gender_id);
    return gender;

}

/**
 * @author Sebastian Eberspach
 * @description Die Funktion gibt die Haarfarbe zurück mit der gesuchten ID
 * @param haircolor_id
 * @returns {Promise<void>}
 */
async function getHaircolor (haircolor_id) {
    const db = new DB();
    let color_hair = await db.get_row("SELECT color_hair FROM haircolor WHERE id = ?", haircolor_id);
    return color_hair;

}

/**
 * @author Sebastian Eberspach
 * @description Funktion zeigt für die angegebene ID die passende Augenfarbe
 * @param eyescolor_id
 * @returns {Promise<*>}
 */
async function getEyescolor (eyescolor_id) {
    const db = new DB();
    let color_eyes = await db.get_row("SELECT color_eyes FROM eyescolor WHERE id = ?", eyescolor_id);
    return color_eyes;

}

/**
 * @author Sebastian Eberspach
 * @description Die Funktion hat eine ID von der Tabelle "users" als Parameter und gibt body zurück
 * @param body_id
 * @returns {Promise<void>}
 */
async function getBody (body_id) {
    const db = new DB();
    let body = await db.get_row("SELECT body FROM bodys WHERE id = ?", body_id);
    return body;

}

/**
 * @author Sebastian Eberspach
 * @description Die Funktion schaut, ob der Username in der Datenbank existiert
 * @param username
 * @returns {Promise<*>}
 */
async function getUsername(username) {
    const db = new DB();

    try {
        let username_id = await db.get_row("select usernameid FROM users WHERE usernameid = ?", username);
        return username_id.usernameid;
    }catch (err) {
        return null;
    }
}

/**
 * @author Sebastian Eberspach
 * @description Die Funktion hat den Parameter Nutzername und gibt die ID des Geschlechts aus der Tabelle "users" zurück
 * @param username
 * @returns {Promise<*>}
 */
async function getGenderID (username) {
    const db = new DB();
    let gender_id = await db.get_row("SELECT gender_id FROM users WHERE usernameid = ?", username);
    return gender_id.gender_id;

}

/**
 * @author Sebastian Eberspach
 * @description Die Funktion hat den Parameter Nutzername und gibt die ID der Haarfarbe aus der Tabelle "users" zurück
 * @param username
 * @returns {Promise<*>}
 */
async function getHaircolorID (username) {
    const db = new DB();
    let haircolor_id = await db.get_row("SELECT haircolor_id FROM users WHERE usernameid = ?", username);
    return haircolor_id.haircolor_id;

}

/**
 * @author Sebastian Eberspach
 * @description Die Funktion hat den Parametet Nutzername und gibt die ID der Augenfarbe aus der Tabelle "users" zurück
 * @param username
 * @returns {Promise<*>}
 */
async function getEyescolorID (username) {
    const db = new DB();
    let eyescolor_id = await db.get_row("SELECT eyescolor_id FROM users WHERE usernameid = ?", username);
    return eyescolor_id.eyescolor_id;

}

/**
 * @author Sebastian Eberspach
 * @description Die Funktion hat den Parameter "Nutzername" und gibt die ID der Figur aus der Tabelle "users" zurück
 * @param username
 * @returns {Promise<*>}
 */
async function getBodyID (username) {
    const db = new DB();
    let body_id = await db.get_row("SELECT body_id FROM users WHERE usernameid = ?", username);
    return body_id.body_id;

}

/**
 * @author Sebastian Eberspach
 * @description Funktion gibt die id zurück, wenn das Geschlecht existiert und null, falls nicht
 * @param genderName
 * @returns {Promise<*>}
 */
async function getGenderValue (genderName) {
    const db = new DB();
    try {
        let id = await db.get_row("SELECT id FROM genders WHERE gender = ?", genderName);
        return id.id;
    }catch (e) {
        return null;
    }
}

/**
 * @author Sebastian Eberspach
 * @description Funktion gibt die id zurück, wenn die Haarfarbe existiert und null, falls nicht
 * @param haircolorName
 * @returns {Promise<*>}
 */
async function getHaircolorValue (haircolorName) {
    const db = new DB();
    try {
        let id = await db.get_row("SELECT id FROM haircolor WHERE color_hair = ?", haircolorName);
        return id.id;
    }catch (e) {
        return null;
    }
}

/**
 * @author Sebastian Eberspach
 * @description Funktion gibt die id zurück, wenn die Augenfarbe existiert und null, falls nicht
 * @param eyescolorName
 * @returns {Promise<*>}
 */
async function getEyescolorValue (eyescolorName) {
    const db = new DB();
    try {
        let id = await db.get_row("SELECT id FROM eyescolor WHERE color_eyes = ?", eyescolorName);
        return id.id;
    }catch (e) {
        return null;
    }
}

/**
 * @author Sebastian Eberspach
 * @description Funktion gibt die id zurück, wenn die Figur existiert und null, falls nicht
 * @param bodyName
 * @returns {Promise<*>}
 */
async function getBodyValue (bodyName) {
    const db = new DB();
    try {
        let id = await db.get_row("SELECT id FROM bodys WHERE body = ?", bodyName);
        return id.id;
    }catch (e) {
        return null;
    }
}

module.exports.getGenderID = getGenderID;
module.exports.getHaircolorID = getHaircolorID;
module.exports.getEyescolorID = getEyescolorID;
module.exports.getBodyID = getBodyID;
module.exports.getGender = getGender;
module.exports.getHaircolor = getHaircolor;
module.exports.getEyescolor = getEyescolor;
module.exports.getBody = getBody;
module.exports.getUsername = getUsername;
module.exports.getGenderValue = getGenderValue;
module.exports.getHaircolorValue = getHaircolorValue;
module.exports.getEyescolorValue = getEyescolorValue;
module.exports.getBodyValue = getBodyValue;
