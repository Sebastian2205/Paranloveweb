
/*Es wurd eine 1 erwartet, aber das Ergebnis ist:
Error: expect(received).toBe(expected) // Object.is equality
Expected: 1
Received: {}*/

const maxIDs=require('./getMaxID');
test('getMaxID', () => {
expect(maxIDs.maxIDs("chat")).toBe(1);
})

