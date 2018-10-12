import { WebPrimeGenerator } from './WebPrimeGenerator';
const expect: Chai.ExpectStatic = require('chai').expect;

describe('Prime Generator: Web solution', () => {
    it('should generate first prime number', async () => {
        const gen = new WebPrimeGenerator();
        expect(await gen.getFirstN(1)).to.eql([2]);
    }).timeout(20000);

    it('should throw error when n>10000', (done) => {
        const gen = new WebPrimeGenerator();
        gen.getFirstN(10001)
            .then(() => done('Should not happen'))
            .catch(() => done());
    })
});