const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session")
const fs = require("fs");
const DB = require("./db");
const getMaxID = require("./getMaxID");
const userData = require("./UserData");

const app = express();
const port = 3011;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: 's3Cur3',
    name: 'sessionId',
    resave: false,
    saveUninitialized: true
}));

const db = new DB();

//Löschen der Tabellen
//db.cleanup();
db.init()
    .then(() => console.log("DB ready"))
    .catch(err => console.log(err));

fs.readFile("./data.json", "utf-8", (err) => {
    if (err) throw err;
    let entries = [];

    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/../Client/views');

    /**
     * @author Sebastian Eberspach
     * @description Dient zur Authentifizierung eines Users und beginnt eine Session, bei erfolgreichem login
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    const auth = async (req, res, next) => {
        try {

            if (!req.body.username || !req.body.password) {
                throw "Invalid Basic Auth!";
            }
            const auth = await db.get_row(
                "SELECT password FROM users WHERE usernameid = ?", req.body.username
            );
            if (auth.password !== req.body.password) {
                throw "Invalid Password";
            } else {
                req.session.user = req.body.username;
            }

            next();
        } catch (err) {
            console.log(err.toString());
        }
    }

    /**
     * @api {get} /
     * @apiGroup Localhost
     */
    app.get("/", (req, res) => {
        if(req.session.user){
            res.redirect('/profil');
        }else{
            res.sendFile(path.join(__dirname + '/../Client/index.html'));
        }
    })

    /**
     * @api {get} /login
     * @apiGroup Login
     */
    app.get('/login', async (req, res) => {
        if(req.session.user) {
            res.redirect('/profil');
        }else{
            res.sendFile(path.join(__dirname + '/../Client/index.html'));
        }
    });

    /**
     * @api {get} /profil
     * @apiGroup Profil
     */
    app.get("/profil", async (req, res) => {
        if (req.session.user) {
            res.render("home", {
                entries: entries
            });
        } else {
            res.sendFile(path.join(__dirname + '/../Client/index.html'));
        }
    })

    /**
     * @api {get} /registrierung
     * @apiGroup Registrierung
     */
    app.get("/registrierung", (req, res) => {
        if(req.session.user){
            res.redirect('profil');
        }else {
            res.sendFile(path.join(__dirname + '/../Client/registrierung.html'));
        }
    })

    /**
     * @api {get} /logout
     * @apiGroup Logout
     */
    app.get("/logout", async (req, res) => {
        req.session.destroy(function(err){
            if(err){
                console.log(err);
            }
            else
            {
                res.redirect('/');
            }
        });
    });

    /**
     * @api {get} /hilfe
     * @apiGroup Hilfe
     */
    app.get("/hilfe", async (req, res) => {
        res.sendFile(path.join(__dirname + '/../Client/hilfe.html'));
    });

    /**
     * @api {get} /info
     * @apiGroup Information
     */
    app.get("/info", async (req, res) => {
        res.sendFile(path.join(__dirname + '/../Client/info.html'));
    });

    /**
     * @api {post} /login
     * @apiGroup Login
     */
    app.post("/login", auth, async (req, res) => {

        if (req.session.user) {
            let user_object = await db.get_row("SELECT * FROM users WHERE usernameid = ?", req.session.user);
            let gender_object = await db.get_row("SELECT gender FROM genders WHERE id = ?", await userData.getGenderID(req.session.user));
            let haircolor_object = await db.get_row("SELECT color_hair FROM haircolor WHERE id = ?", await userData.getHaircolorID(req.session.user));
            let eyescolor_object = await db.get_row("SELECT color_eyes FROM eyescolor WHERE id = ?", await userData.getEyescolorID(req.session.user));
            let body_object = await db.get_row("SELECT body FROM bodys WHERE id = ?", await userData.getBodyID(req.session.user));

            user_object["gender"] = gender_object.gender;
            user_object["color_hair"] = haircolor_object.color_hair;
            user_object["color_eyes"] = eyescolor_object.color_eyes;
            user_object["body"] = body_object.body;
            entries = [];
            entries.push(user_object);
            res.redirect('/profil');
        }else{
            res.send("nicht eingeloggt")
        }
    });
    /**
     * @api {post} /registrierung
     * @apiGroup Registrierung
     */
    app.post("/registrierung", async (req, res) => {
        const star_west = "Zwilling";
        const star_china = "Huhn";
        const personalitytest = "test2";
        const pernum = 1;
        const soulnum = 1;
        const destinynum = 1;

        if(await userData.getUsername(req.body.nutzername) != null){
            res.send("Username existiert schon");
        }else {
            let gender_id = await getMaxID.maxIDs("genders");
            let haircolor_id = await getMaxID.maxIDs("haircolor");
            let eyescolor_id = await getMaxID.maxIDs("eyescolor");
            let bodys_id = await getMaxID.maxIDs("bodys");

            if(await userData.getGenderValue(req.body.geschlecht) == null){
                let gender_insert = db.cmd("INSERT INTO genders (id, gender) VALUES (?,?)", gender_id, req.body.geschlecht);
            }

            if(await userData.getHaircolorValue(req.body.haarfarbe) == null) {
                let haircolor_insert = db.cmd("INSERT INTO haircolor (id, color_hair) VALUES (?,?)", haircolor_id, req.body.haarfarbe);
            }
            
            if(await userData.getEyescolorValue(req.body.augenfarbe) == null) {
                let eyescolor_insert = db.cmd("INSERT INTO eyescolor (id, color_eyes) VALUES (?,?)", eyescolor_id, req.body.augenfarbe);
            }

            if(await userData.getBodyValue(req.body.figur) == null) {
                let bodys_insert = db.cmd("INSERT INTO bodys (id, body) VALUES (?,?)", bodys_id, req.body.figur);
            }


            let gender = await db.get_row("SELECT id FROM genders WHERE gender = ?", req.body.geschlecht);
            let haircolor = await db.get_row("SELECT id FROM haircolor WHERE color_hair = ?", req.body.haarfarbe);
            let eyescolor = await db.get_row("SELECT id FROM eyescolor WHERE color_eyes = ?", req.body.augenfarbe);
            let bodys = await db.get_row("SELECT id FROM bodys WHERE body = ?", req.body.figur);

            let users_insert = db.cmd("INSERT INTO users (usernameid, password, Email, firstname, familyname, birthday, bodysize, stars_west," +
                "stars_china, stars_aszendent, affection, plz, place, kids_amount, smoker, personalitytest, personalitynumber, soulnumber," +
                "destinynumber, gender_id, haircolor_id, eyescolor_id, body_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                req.body.nutzername, req.body.passwort1, req.body.email, req.body.vorname, req.body.nachname,
                req.body.geburtstag, req.body.koerpergroesse, star_west, star_china, req.body.aszendent,
                req.body.orientierung, req.body.plz, req.body.stadt, req.body.kinder, req.body.raucher, personalitytest,
                pernum, soulnum, destinynum, gender.id, haircolor.id, eyescolor.id, bodys.id);

            res.sendFile(path.join(__dirname + '/../Client/index.html'));
        }
    });

    app.listen(port, () => {
        console.log("Server is listening on port " + port);
    })
});
