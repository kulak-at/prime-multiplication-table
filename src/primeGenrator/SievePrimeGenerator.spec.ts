import { SievePrimeGenerator } from './SievePrimeGenerator';
const expect: Chai.ExpectStatic = require('chai').expect;

function generateTime(t: number[]) {
    return t[0] + t[1] / 1000000000;
}

describe('Prime Generator: Sieve solution', () => {
    it('should generate first prime number', async () => {
        const gen = new SievePrimeGenerator();
        expect(await gen.getFirstN(1)).to.eql([2]);
    });

    it('should generate first 10 primes', async () => {
        const gen = new SievePrimeGenerator();
        expect(await gen.getFirstN(10)).to.eql([2, 3, 5 ,7, 11, 13, 17, 19, 23, 29]);
    });

    it('should compute complexity', async () => {
        const gen = new SievePrimeGenerator();

        const t = process.hrtime();
        await gen.getFirstN(1000);
        const d1 = process.hrtime(t);

        const j = process.hrtime();
        await gen.getFirstN(2000);
        const d2 = process.hrtime(j);

        const r = generateTime(d2) / generateTime(d1);
        expect(r).to.be.below(3); // should have much better performance than brute approach
    });

    it('should generate 20k primes in realistic time', async () => {
        const gen = new SievePrimeGenerator();
        const t = process.hrtime();
        const p = await gen.getFirstN(20000);
        const d = process.hrtime(t);
        expect(p).to.have.length(20000);
        expect(generateTime(d)).to.be.below(10); // should finish in sub 10s - in reality it is much faster (800ms on my machine)
    })
});