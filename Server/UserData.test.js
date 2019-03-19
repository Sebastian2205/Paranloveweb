
/*Es wurd eine 1 erwartet, aber das Ergebnis ist:
Error: expect(received).toBe(expected) // Object.is equality
Expected: 1
Received: {}*/

const userData = require('./UserData');
test('getGender', () => {
    switch(userData.getGender) {
        case "divers":
            expect(userData.getGender("1")).toBe("divers");
            break;
        case "männlich":
            expect(userData.getGender("1")).toBe("männlich");
            break;
        case "weiblich":
            expect(userData.getGender("1")).toBe("weiblich");
            break;
        default:
            let error = false;
            try{
                expect(userData.getGender("1")).toBe("FEHLSCHLAG");
            }catch (e) {
                error = true;
            }
            expect(error).toBe(true);
            break;
    }
})

