import { TableGenerator } from "./TableGenerator";

const expect: Chai.ExpectStatic = require('chai').expect;

describe('Table Generator', () => {
    it('should generate simple addition table', () => {
        const gen = new TableGenerator();
        const t = gen.generate([1, 2, 3, 4, 5], (a, b) => a + b);
        expect(t.rows).to.eql([1,2,3,4,5]);
        expect(t.cols).to.eql([1,2,3,4,5]);
        expect(t.values[0]).to.eql([2,3,4,5,6]);
        expect(t.values[4]).to.eql([6,7,8,9,10]);
    });

    it('should generate substraction table', () => {
        const gen = new TableGenerator();
        const t = gen.generate([50, 20], (a, b) => a - b);
        expect(t.rows).to.eql([50, 20]);
        expect(t.cols).to.eql([50, 20]);
        expect(t.values[0]).to.eql([0, 30]);
        expect(t.values[1]).to.eql([-30, 0]);
    });
});