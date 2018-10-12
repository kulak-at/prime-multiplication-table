import { BruteForcePrimeGenerator } from './BruteForcePrimeGenerator';
const expect: Chai.ExpectStatic = require('chai').expect;

function generateTime(t: number[]) {
    return t[0] + t[1] / 1000000000;
}

describe('Prime Generator: Brute Force solution', () => {
    it('should generate first prime number', async () => {
        const gen = new BruteForcePrimeGenerator();
        expect(await gen.getFirstN(1)).to.eql([2]);
    });

    it('should generate first 10 primes', async () => {
        const gen = new BruteForcePrimeGenerator();
        expect(await gen.getFirstN(10)).to.eql([2, 3, 5 ,7, 11, 13, 17, 19, 23, 29]);
    });

    it('should compute complexity', async () => {
        const gen = new BruteForcePrimeGenerator();

        const t = process.hrtime();
        await gen.getFirstN(1000);
        const d1 = process.hrtime(t);

        const j = process.hrtime();
        await gen.getFirstN(2000);
        const d2 = process.hrtime(j);

        const r = generateTime(d2) / generateTime(d1);
        expect(r).to.be.above(3); // aproximation of n^2 is ~4 but with one test we should lower the bound
    });
});